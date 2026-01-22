// pages/api/available-slots.js

// Fonction pour générer des créneaux statiques
function generateStaticSlots() {
  const slots = [];
  const today = new Date();
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  // Générer les créneaux pour les 14 prochains jours ouvrés
  let daysAdded = 0;
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 1); // Commencer à partir de demain

  while (daysAdded < 14) {
    const dayOfWeek = currentDate.getDay();

    // Exclure samedi (6) et dimanche (0)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const dateKey = currentDate.toISOString().split('T')[0];
      slots.push({
        date: dateKey,
        times: [...times]
      });
      daysAdded++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return slots;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Essayer de se connecter à MongoDB et récupérer les créneaux
    try {
      const dbConnect = require('../../lib/mongodb').default;
      const TimeSlot = require('../../models/TimeSlot').default;
      const Consultation = require('../../models/Consultation').default;

      await dbConnect();

      // Calculer la période (20 jours ouvrés à partir de demain)
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const endDate = new Date(today);
      endDate.setDate(today.getDate() + 30);

      // Générer automatiquement les créneaux s'ils n'existent pas
      await TimeSlot.generateSlotsForPeriod(tomorrow, endDate);

      // Récupérer les créneaux disponibles depuis TimeSlot
      const availableSlots = await TimeSlot.getAvailableSlots(tomorrow, endDate);

      // Récupérer les consultations déjà réservées (non annulées)
      const bookedConsultations = await Consultation.find({
        consultationDate: { $gte: tomorrow, $lte: endDate },
        status: { $nin: ['cancelled'] }
      }).select('consultationDate consultationTime');

      // Créer un Set des créneaux déjà réservés pour recherche rapide
      const bookedSet = new Set(
        bookedConsultations.map(c => {
          const dateKey = new Date(c.consultationDate).toISOString().split('T')[0];
          return `${dateKey}_${c.consultationTime}`;
        })
      );

      // Grouper par date en excluant les créneaux déjà réservés
      const slotsByDate = {};
      availableSlots.forEach(slot => {
        const dateKey = slot.date.toISOString().split('T')[0];
        const slotKey = `${dateKey}_${slot.time}`;

        // Exclure si déjà réservé dans Consultation
        if (bookedSet.has(slotKey)) {
          return;
        }

        if (!slotsByDate[dateKey]) {
          slotsByDate[dateKey] = [];
        }
        slotsByDate[dateKey].push(slot.time);
      });

      // Limiter à 10 dates avec des créneaux disponibles
      const availableDates = Object.keys(slotsByDate)
        .filter(dateKey => slotsByDate[dateKey].length > 0)
        .slice(0, 10)
        .map(dateKey => ({
          date: dateKey,
          times: slotsByDate[dateKey].sort()
        }));

      return res.status(200).json({
        availableDates,
        totalSlots: availableDates.reduce((acc, slot) => acc + slot.times.length, 0),
        source: 'database'
      });

    } catch (dbError) {
      // Si MongoDB n'est pas disponible, utiliser les créneaux statiques
      console.log('MongoDB non disponible, utilisation des créneaux statiques');

      const staticSlots = generateStaticSlots();

      return res.status(200).json({
        availableDates: staticSlots,
        totalSlots: staticSlots.reduce((acc, slot) => acc + slot.times.length, 0),
        source: 'static'
      });
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des créneaux:', error);

    // En dernier recours, retourner des créneaux statiques
    const staticSlots = generateStaticSlots();

    return res.status(200).json({
      availableDates: staticSlots,
      totalSlots: staticSlots.reduce((acc, slot) => acc + slot.times.length, 0),
      source: 'static-fallback'
    });
  }
}