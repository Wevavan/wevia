// components/ConsultationModal.js
import { useState, useEffect } from 'react';
import {
  XMarkIcon,
  CalendarIcon,
  PhoneIcon,
  VideoCameraIcon,
  MapPinIcon,
  SparklesIcon,
  CheckCircleIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import {
  FiGlobe,
  FiShoppingCart,
  FiCode,
  FiSmartphone,
  FiZap,
  FiTrendingUp,
  FiRefreshCw,
  FiTool,
  FiStar
} from 'react-icons/fi';
import { RiRobot2Fill } from 'react-icons/ri';
import { MdMessage } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

// Configuration des données statiques
const PROJECT_TYPES = [
  { value: 'site-web-vitrine', label: 'Site Web Vitrine', Icon: FiGlobe },
  { value: 'site-web-ecommerce', label: 'Site E-commerce', Icon: FiShoppingCart },
  { value: 'application-web', label: 'Application Web', Icon: FiCode },
  { value: 'application-mobile', label: 'Application Mobile', Icon: FiSmartphone },
  { value: 'integration-ia', label: 'Intégration IA', Icon: RiRobot2Fill },
  { value: 'chatbot-ia', label: 'Chatbot IA', Icon: MdMessage },
  { value: 'automatisation', label: 'Automatisation', Icon: FiZap },
  { value: 'optimisation-seo', label: 'Optimisation SEO', Icon: FiTrendingUp },
  { value: 'refonte-site', label: 'Refonte de Site', Icon: FiRefreshCw },
  { value: 'maintenance', label: 'Maintenance', Icon: FiTool },
  { value: 'autre', label: 'Autre Projet', Icon: FiStar }
];

// Estimations de prix par type de projet
const PROJECT_ESTIMATIONS = {
  'site-web-vitrine': {
    min: 2000,
    max: 8000,
    average: 4500,
    description: 'Site vitrine avec design moderne, responsive et optimisé SEO'
  },
  'site-web-ecommerce': {
    min: 5000,
    max: 25000,
    average: 12000,
    description: 'Boutique en ligne complète avec paiement sécurisé et gestion des stocks'
  },
  'application-web': {
    min: 8000,
    max: 40000,
    average: 18000,
    description: 'Application web sur mesure avec fonctionnalités avancées'
  },
  'integration-ia': {
    min: 3000,
    max: 20000,
    average: 8500,
    description: 'Intégration d\'outils IA (ChatGPT, analyse de données, automatisation)'
  },
  'chatbot-ia': {
    min: 2500,
    max: 12000,
    average: 6000,
    description: 'Chatbot intelligent avec IA conversationnelle personnalisée'
  },
  'automatisation': {
    min: 1500,
    max: 15000,
    average: 5500,
    description: 'Automatisation de processus métier et workflows'
  },
  'optimisation-seo': {
    min: 800,
    max: 5000,
    average: 2200,
    description: 'Audit SEO complet et optimisation technique et contenu'
  },
  'refonte-site': {
    min: 3000,
    max: 18000,
    average: 8000,
    description: 'Refonte complète avec nouveau design et optimisations'
  },
  'maintenance': {
    min: 200,
    max: 2000,
    average: 800,
    description: 'Maintenance mensuelle, mises à jour et support technique'
  },
  'autre': {
    min: 1000,
    max: 50000,
    average: 8000,
    description: 'Projet sur mesure - estimation après analyse des besoins'
  }
};

const TIMELINES = [
  { value: 'urgent-1mois', label: 'Urgent (< 1 mois)' },
  { value: '1-3mois', label: '1 à 3 mois' },
  { value: '3-6mois', label: '3 à 6 mois' },
  { value: '6mois-plus', label: '6 mois et plus' },
  { value: 'pas-de-rush', label: 'Pas de contrainte' }
];

const CONSULTATION_TYPES = [
  {
    value: 'telephone',
    label: 'Appel Téléphonique',
    icon: PhoneIcon,
    description: 'Entretien par téléphone (30-45 min)'
  },
  {
    value: 'visio-zoom',
    label: 'Visioconférence Zoom',
    icon: VideoCameraIcon,
    description: 'Appel vidéo avec partage d\'écran (45-60 min)'
  },
  {
    value: 'whatsapp',
    label: 'Discussion WhatsApp',
    icon: FaWhatsapp,
    description: 'Échange par WhatsApp (30-45 min)'
  },
  {
    value: 'entretien-physique',
    label: 'Rendez-vous Physique',
    icon: MapPinIcon,
    description: 'Rencontre en personne à Paris (60-90 min)'
  }
];

// État initial du formulaire
const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '+33',
  company: '',
  projectType: '',
  projectName: '',
  projectDescription: '',
  budget: '',
  timeline: '',
  consultationDate: '',
  consultationTime: '',
  consultationType: 'telephone',
  source: 'website',
  sourceSection: 'general'
};

export default function ConsultationModal({ 
  isOpen, 
  onClose, 
  source = 'website',
  sourceSection = 'general'
}) {
  // États
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
    source,
    sourceSection
  });
  const [formErrors, setFormErrors] = useState({});
  const [availableDates, setAvailableDates] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Fonction pour charger les créneaux disponibles depuis l'API
  const loadAvailableSlots = async () => {
    setLoadingSlots(true);
    try {
      const response = await fetch('/api/available-slots');
      const data = await response.json();
      setAvailableDates(data.availableDates || []);
    } catch (error) {
      console.error('Erreur lors du chargement des créneaux:', error);
      setAvailableDates([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  // Utilitaires
  const resetModal = () => {
    setStep(1);
    setIsSuccess(false);
    setFormErrors({});
    setFormData({
      ...INITIAL_FORM_DATA,
      source,
      sourceSection
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  // Obtenir les heures disponibles pour une date donnée
  const getAvailableTimesForDate = (dateString) => {
    const dateData = availableDates.find(d => d.date === dateString);
    if (!dateData) {
      return [];
    }
    // Use a Set to remove duplicates and then convert it back to an array
    return [...new Set(dateData.times)];
  };

  // Gestionnaires d'événements
  const handleInputChange = (field, value) => {
    if (field === 'email') {
      const allowedDomains = ['gmail.com', 'yahoo.fr', 'yahoo.com', 'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr', 'icloud.com', 'orange.fr', 'sfr.fr', 'free.fr', 'laposte.net'];
      const domain = value.split('@')[1];
      if (!domain || !allowedDomains.includes(domain)) {
        setFormErrors(prev => ({ ...prev, email: "Adresse mail invalide" }));
      } else {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (field === 'phone') {
      // Ne pas permettre la suppression du +33
      if (!value.startsWith('+33')) {
        value = '+33';
      }

      // Supprimer tout ce qui n'est pas un chiffre, sauf le +
      const cleaned = value.substring(3).replace(/[^\d]/g, '');
      
      let formatted = '+33';
      if (cleaned.length > 0) {
        formatted += ' ' + cleaned.substring(0, 1);
      }
      if (cleaned.length > 1) {
        formatted += ' ' + cleaned.substring(1, 3);
      }
      if (cleaned.length > 3) {
        formatted += ' ' + cleaned.substring(3, 5);
      }
      if (cleaned.length > 5) {
        formatted += ' ' + cleaned.substring(5, 7);
      }
      if (cleaned.length > 7) {
        formatted += ' ' + cleaned.substring(7, 9);
      }
      
      // Limiter à la longueur d'un numéro français
      value = formatted.trim().slice(0, 17);
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        
        // Analytics
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            type: 'consultation_request', 
            source,
            sourceSection,
            projectType: formData.projectType,
            budget: formData.budget
          })
        });
        
        // Auto-fermeture après 3 secondes
        setTimeout(() => {
          onClose();
          resetModal();
        }, 3000);
      } else {
        if (data.code === 'SLOT_NOT_AVAILABLE') {
          alert('Ce créneau n\'est plus disponible. Veuillez en choisir un autre.');
          // Recharger les créneaux disponibles
          loadAvailableSlots();
          // Reset date et heure
          setFormData(prev => ({ ...prev, consultationDate: '', consultationTime: '' }));
        } else {
          throw new Error(data.message || 'Erreur lors de l\'envoi');
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validations
  const canProceedToStep2 = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email &&
           !formErrors.email &&
           formData.phone;
  };

  const canProceedToStep3 = () => {
    return formData.projectType &&
           formData.timeline;
  };

  const canSubmit = () => {
    return formData.consultationDate && 
           formData.consultationTime && 
           formData.consultationType;
  };

  // Effets
  useEffect(() => {
    if (isOpen) {
      resetModal();
      setFormData(prev => ({ ...prev, source, sourceSection }));
      loadAvailableSlots();
    }
  }, [isOpen, source, sourceSection]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl">

        {/* Header */}
        <ModalHeader
          step={step}
          onClose={onClose}
        />

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-180px)]">
          
          {isSuccess ? (
            <SuccessStep 
              formData={formData}
              formatDate={formatDate}
            />
          ) : step === 1 ? (
            <PersonalInfoStep 
              formData={formData}
              formErrors={formErrors}
              onChange={handleInputChange}
              onNext={() => setStep(2)}
              canProceed={canProceedToStep2()}
            />
          ) : step === 2 ? (
            <ProjectStep 
              formData={formData}
              onChange={handleInputChange}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
              canProceed={canProceedToStep3()}
            />
          ) : (
            <SchedulingStep 
              formData={formData}
              onChange={handleInputChange}
              onBack={() => setStep(2)}
              onSubmit={handleSubmit}
              canSubmit={canSubmit()}
              isSubmitting={isSubmitting}
              availableDates={availableDates}
              loadingSlots={loadingSlots}
              formatDate={formatDate}
              getAvailableTimesForDate={getAvailableTimesForDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Composants séparés pour chaque étape
function ModalHeader({ step, onClose }) {
  const stepLabels = {
    1: 'Vos informations',
    2: 'Votre projet',
    3: 'Planification'
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-4 sm:px-8 py-4 sm:py-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-cyan-600/90"></div>

      <div className="relative flex items-center justify-between text-white">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
            <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">Consultation Gratuite</h2>
            <p className="text-blue-100 text-xs sm:text-base">
              Étape {step}/3 - {stepLabels[step]}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-xl transition-colors"
        >
          <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative mt-4 sm:mt-6">
        <div className="h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function SuccessStep({ formData, formatDate }) {
  return (
    <div className="text-center py-8 sm:py-12">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <CheckCircleIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Demande Envoyée !</h3>
      <p className="text-gray-600 text-sm sm:text-lg mb-2">
        Merci {formData.firstName} ! Votre demande a été reçue.
      </p>
      <p className="text-gray-500 text-xs sm:text-base">
        Je vous contacterai sous 24h.
      </p>
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-xl sm:rounded-2xl">
        <p className="text-blue-800 font-semibold text-sm sm:text-base">
          📅 {formatDate(formData.consultationDate)} à {formData.consultationTime}
        </p>
      </div>
    </div>
  );
}

function PersonalInfoStep({ formData, formErrors, onChange, onNext, canProceed }) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center mb-4 sm:mb-8">
        <UserIcon className="w-10 h-10 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Vos Informations</h3>
        <p className="text-gray-600 text-sm sm:text-base">Pour vous contacter efficacement</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
        <InputField
          label="Prénom *"
          type="text"
          value={formData.firstName}
          onChange={(value) => onChange('firstName', value)}
          placeholder="Prénom"
          required
        />

        <InputField
          label="Nom *"
          type="text"
          value={formData.lastName}
          onChange={(value) => onChange('lastName', value)}
          placeholder="Nom"
          required
        />

        <div className="col-span-2 sm:col-span-1">
          <InputField
            label="Email *"
            type="email"
            value={formData.email}
            onChange={(value) => onChange('email', value)}
            placeholder="votre@email.com"
            required
            error={formErrors.email}
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <InputField
            label="Téléphone *"
            type="tel"
            value={formData.phone}
            onChange={(value) => onChange('phone', value)}
            placeholder="+33 6 12 34 56 78"
            required
          />
        </div>

        <div className="col-span-2">
          <InputField
            label="Entreprise (optionnel)"
            type="text"
            value={formData.company}
            onChange={(value) => onChange('company', value)}
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 sm:pt-6">
        <Button
          onClick={onNext}
          disabled={!canProceed}
          variant="primary"
        >
          Continuer →
        </Button>
      </div>
    </div>
  );
}

function ProjectStep({ formData, onChange, onBack, onNext, canProceed }) {
  const selectedProject = PROJECT_TYPES.find(p => p.value === formData.projectType);
  const estimation = formData.projectType ? PROJECT_ESTIMATIONS[formData.projectType] : null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getBudgetRecommendation = () => {
    if (!estimation) return null;

    if (estimation.max <= 2000) return '2k-5k';
    if (estimation.max <= 5000) return '2k-5k';
    if (estimation.max <= 10000) return '5k-10k';
    if (estimation.max <= 20000) return '10k-20k';
    if (estimation.max <= 50000) return '20k-50k';
    return 'plus-50k';
  };

  // Auto-sélection du budget recommandé
  useEffect(() => {
    if (formData.projectType && !formData.budget) {
      const recommendedBudget = getBudgetRecommendation();
      if (recommendedBudget) {
        onChange('budget', recommendedBudget);
      }
    }
  }, [formData.projectType]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center mb-4 sm:mb-8">
        <BriefcaseIcon className="w-10 h-10 sm:w-16 sm:h-16 text-purple-600 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Votre Projet</h3>
        <p className="text-gray-600 text-sm sm:text-base">Décrivez votre projet</p>
      </div>

      {/* Type de projet */}
      <SelectionGrid
        label="Type de projet *"
        options={PROJECT_TYPES}
        value={formData.projectType}
        onChange={(value) => onChange('projectType', value)}
        renderOption={(option) => (
          <div className="flex items-center space-x-2 sm:space-x-3">
            <option.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-900 text-xs sm:text-base truncate">{option.label}</span>
          </div>
        )}
        colorScheme="blue"
      />

      {/* Timeline */}
      <SelectionGrid
        label="Délai souhaité *"
        options={TIMELINES}
        value={formData.timeline}
        onChange={(value) => onChange('timeline', value)}
        renderOption={(option) => (
          <span className="font-semibold text-gray-900 text-xs sm:text-base">{option.label}</span>
        )}
        colorScheme="orange"
      />

      {/* Détails du projet - Hidden on mobile for simplicity */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Nom du projet (optionnel)"
          type="text"
          value={formData.projectName}
          onChange={(value) => onChange('projectName', value)}
          placeholder="Ex: Mon site e-commerce"
        />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description (optionnel)
          </label>
          <textarea
            value={formData.projectDescription}
            onChange={(e) => onChange('projectDescription', e.target.value)}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            placeholder="Décrivez brièvement votre projet..."
          />
        </div>
      </div>

      <div className="flex justify-between pt-4 sm:pt-6">
        <Button onClick={onBack} variant="secondary">
          ← Retour
        </Button>
        <Button onClick={onNext} disabled={!canProceed} variant="primary">
          Continuer →
        </Button>
      </div>
    </div>
  );
}

function SchedulingStep({
  formData,
  onChange,
  onBack,
  onSubmit,
  canSubmit,
  isSubmitting,
  availableDates,
  loadingSlots,
  formatDate,
  getAvailableTimesForDate
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center mb-4 sm:mb-8">
        <CalendarIcon className="w-10 h-10 sm:w-16 sm:h-16 text-cyan-600 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Planification</h3>
        <p className="text-gray-600 text-sm sm:text-base">Choisissez votre créneau</p>
      </div>

      {/* Type de consultation - Compact on mobile */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-4">
          Type de consultation *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4">
          {CONSULTATION_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => onChange('consultationType', type.value)}
              className={`p-2.5 sm:p-4 border-2 rounded-xl text-left transition-all hover:border-cyan-300 ${
                formData.consultationType === type.value
                  ? 'border-cyan-500 bg-cyan-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 sm:mb-0">
                  <type.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-base">{type.label}</h4>
                  <p className="text-[10px] sm:text-sm text-gray-600 hidden sm:block">{type.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-4">
          Date souhaitée *
        </label>
        {loadingSlots ? (
          <div className="flex justify-center items-center py-6 sm:py-8">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600 text-sm">Chargement...</span>
          </div>
        ) : availableDates.length === 0 ? (
          <div className="text-center py-6 sm:py-8 text-gray-500">
            <CalendarIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-gray-400" />
            <p className="text-sm">Aucun créneau disponible.</p>
            <p className="text-xs">Contactez-nous directement.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {availableDates.map((dateData) => (
              <button
                key={dateData.date}
                onClick={() => {
                  onChange('consultationDate', dateData.date);
                  if (formData.consultationDate !== dateData.date) {
                    onChange('consultationTime', '');
                  }
                }}
                className={`p-2 sm:p-3 border-2 rounded-xl text-center transition-all hover:border-blue-300 ${
                  formData.consultationDate === dateData.date
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold text-gray-900">
                  {formatDate(dateData.date)}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                  {dateData.times.length} créneaux
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Heure */}
      {formData.consultationDate && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-4">
            Heure préférée *
          </label>
          {(() => {
            const availableTimes = getAvailableTimesForDate(formData.consultationDate);

            if (availableTimes.length === 0) {
              return (
                <div className="text-center py-3 sm:py-4 text-gray-500">
                  <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">Aucun créneau disponible.</p>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => onChange('consultationTime', time)}
                    className={`p-2 sm:p-3 border-2 rounded-lg sm:rounded-xl text-center font-semibold transition-all hover:border-green-300 text-xs sm:text-base ${
                      formData.consultationTime === time
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* Récapitulatif - Compact on mobile */}
      {formData.consultationDate && formData.consultationTime && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl sm:rounded-2xl p-3 sm:p-6">
          <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base flex items-center">
            ✓ Récapitulatif
          </h4>
          <div className="grid grid-cols-2 gap-1 sm:space-y-2 sm:block text-xs sm:text-sm">
            <p><strong>Type:</strong> {CONSULTATION_TYPES.find(t => t.value === formData.consultationType)?.label}</p>
            <p><strong>Date:</strong> {formatDate(formData.consultationDate)}</p>
            <p><strong>Heure:</strong> {formData.consultationTime}</p>
            <p><strong>Projet:</strong> {PROJECT_TYPES.find(p => p.value === formData.projectType)?.label}</p>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4 sm:pt-6">
        <Button onClick={onBack} variant="secondary">
          ← Retour
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!canSubmit || isSubmitting}
          variant="primary"
          isLoading={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm sm:text-base">Envoi...</span>
            </>
          ) : (
            <>
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Confirmer</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

// Composants utilitaires réutilisables
function InputField({ label, type, value, onChange, placeholder, required = false, error = null }) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${error ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'}`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
    </div>
  );
}

function SelectionGrid({ label, options, value, onChange, renderOption, colorScheme = 'blue' }) {
  const getColorClasses = (isSelected) => {
    const colors = {
      blue: isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50 hover:border-blue-300',
      green: isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50 hover:border-green-300',
      orange: isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:bg-gray-50 hover:border-orange-300'
    };
    return colors[colorScheme];
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-4">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`p-2.5 sm:p-4 border-2 rounded-lg sm:rounded-xl text-left transition-all ${
              getColorClasses(value === option.value)
            }`}
          >
            {renderOption(option)}
          </button>
        ))}
      </div>
    </div>
  );
}

function Button({ children, onClick, disabled = false, variant = 'primary', isLoading = false, ...props }) {
  const baseClasses = "font-semibold py-3 px-5 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center space-x-2 text-sm sm:text-base";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}