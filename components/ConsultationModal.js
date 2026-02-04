// components/ConsultationModal.js
import { useState, useEffect } from 'react';
import { FiX, FiUser, FiBriefcase, FiCalendar, FiCheck, FiPhone, FiVideo, FiMapPin, FiClock, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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

// Configuration des données statiques
const PROJECT_TYPES = [
  { value: 'site-web-vitrine', label: 'Site Vitrine', Icon: FiGlobe },
  { value: 'site-web-ecommerce', label: 'E-commerce', Icon: FiShoppingCart },
  { value: 'application-web', label: 'Application Web', Icon: FiCode },
  { value: 'application-mobile', label: 'App Mobile', Icon: FiSmartphone },
  { value: 'integration-ia', label: 'Intégration IA', Icon: RiRobot2Fill },
  { value: 'chatbot-ia', label: 'Chatbot IA', Icon: MdMessage },
  { value: 'automatisation', label: 'Automatisation', Icon: FiZap },
  { value: 'optimisation-seo', label: 'SEO', Icon: FiTrendingUp },
  { value: 'refonte-site', label: 'Refonte', Icon: FiRefreshCw },
  { value: 'maintenance', label: 'Maintenance', Icon: FiTool },
  { value: 'autre', label: 'Autre', Icon: FiStar }
];

const TIMELINES = [
  { value: 'urgent-1mois', label: 'Urgent (< 1 mois)' },
  { value: '1-3mois', label: '1 à 3 mois' },
  { value: '3-6mois', label: '3 à 6 mois' },
  { value: '6mois-plus', label: '6 mois +' },
  { value: 'pas-de-rush', label: 'Flexible' }
];

const CONSULTATION_TYPES = [
  { value: 'telephone', label: 'Téléphone', Icon: FiPhone, desc: '30-45 min' },
  { value: 'visio-zoom', label: 'Visio Zoom', Icon: FiVideo, desc: '45-60 min' },
  { value: 'whatsapp', label: 'WhatsApp', Icon: FaWhatsapp, desc: '30-45 min' },
  { value: 'entretien-physique', label: 'En personne', Icon: FiMapPin, desc: 'Paris' }
];

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
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA, source, sourceSection });
  const [formErrors, setFormErrors] = useState({});
  const [availableDates, setAvailableDates] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

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

  const resetModal = () => {
    setStep(1);
    setIsSuccess(false);
    setFormErrors({});
    setFormData({ ...INITIAL_FORM_DATA, source, sourceSection });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const getAvailableTimesForDate = (dateString) => {
    const dateData = availableDates.find(d => d.date === dateString);
    if (!dateData) return [];
    return [...new Set(dateData.times)];
  };

  const handleInputChange = (field, value) => {
    if (field === 'email') {
      const allowedDomains = ['gmail.com', 'yahoo.fr', 'yahoo.com', 'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr', 'icloud.com', 'orange.fr', 'sfr.fr', 'free.fr', 'laposte.net'];
      const domain = value.split('@')[1];
      if (!domain || !allowedDomains.includes(domain)) {
        setFormErrors(prev => ({ ...prev, email: "Email invalide" }));
      } else {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (field === 'phone') {
      if (!value.startsWith('+33')) value = '+33';
      const cleaned = value.substring(3).replace(/[^\d]/g, '');
      let formatted = '+33';
      if (cleaned.length > 0) formatted += ' ' + cleaned.substring(0, 1);
      if (cleaned.length > 1) formatted += ' ' + cleaned.substring(1, 3);
      if (cleaned.length > 3) formatted += ' ' + cleaned.substring(3, 5);
      if (cleaned.length > 5) formatted += ' ' + cleaned.substring(5, 7);
      if (cleaned.length > 7) formatted += ' ' + cleaned.substring(7, 9);
      value = formatted.trim().slice(0, 17);
    }

    setFormData(prev => ({ ...prev, [field]: value }));
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
        setTimeout(() => {
          onClose();
          resetModal();
        }, 3000);
      } else {
        if (data.code === 'SLOT_NOT_AVAILABLE') {
          alert('Ce créneau n\'est plus disponible. Veuillez en choisir un autre.');
          loadAvailableSlots();
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

  const canProceedToStep2 = () => formData.firstName && formData.lastName && formData.email && !formErrors.email && formData.phone;
  const canProceedToStep3 = () => formData.projectType && formData.timeline;
  const canSubmit = () => formData.consultationDate && formData.consultationTime && formData.consultationType;

  useEffect(() => {
    if (isOpen) {
      resetModal();
      setFormData(prev => ({ ...prev, source, sourceSection }));
      loadAvailableSlots();
    }
  }, [isOpen, source, sourceSection]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="bg-gray-900 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-1 rounded-full transition-all ${
                    s <= step ? 'bg-white' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-white/70 text-sm">Étape {step}/3</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">

          {isSuccess ? (
            <SuccessView formData={formData} formatDate={formatDate} />
          ) : step === 1 ? (
            <Step1
              formData={formData}
              formErrors={formErrors}
              onChange={handleInputChange}
              onNext={() => setStep(2)}
              canProceed={canProceedToStep2()}
            />
          ) : step === 2 ? (
            <Step2
              formData={formData}
              onChange={handleInputChange}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
              canProceed={canProceedToStep3()}
            />
          ) : (
            <Step3
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

function SuccessView({ formData, formatDate }) {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FiCheck className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
      <p className="text-gray-600 mb-6">
        Merci {formData.firstName}, je vous contacterai sous 24h.
      </p>
      <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-xl">
        <FiCalendar className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-900">
          {formatDate(formData.consultationDate)} à {formData.consultationTime}
        </span>
      </div>
    </div>
  );
}

function Step1({ formData, formErrors, onChange, onNext, canProceed }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FiUser className="w-7 h-7 text-gray-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Vos informations</h3>
        <p className="text-gray-500 text-sm mt-1">Pour vous recontacter</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Prénom *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="Jean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={`w-full px-4 py-3 border rounded-xl transition-all ${
            formErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-gray-900'
          } focus:ring-2 focus:border-transparent`}
          placeholder="jean.dupont@email.com"
        />
        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Entreprise <span className="text-gray-400">(optionnel)</span></label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => onChange('company', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
          placeholder="Ma Société"
        />
      </div>

      <div className="pt-4">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <span>Continuer</span>
          <FiArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Step2({ formData, onChange, onBack, onNext, canProceed }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FiBriefcase className="w-7 h-7 text-gray-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Votre projet</h3>
        <p className="text-gray-500 text-sm mt-1">Quel type de projet avez-vous ?</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Type de projet *</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => onChange('projectType', type.value)}
              className={`p-3 border-2 rounded-xl text-center transition-all ${
                formData.projectType === type.value
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <type.Icon className={`w-5 h-5 mx-auto mb-1.5 ${
                formData.projectType === type.value ? 'text-gray-900' : 'text-gray-500'
              }`} />
              <span className={`text-xs font-medium ${
                formData.projectType === type.value ? 'text-gray-900' : 'text-gray-600'
              }`}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Délai souhaité *</label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {TIMELINES.map((timeline) => (
            <button
              key={timeline.value}
              onClick={() => onChange('timeline', timeline.value)}
              className={`p-3 border-2 rounded-xl text-center transition-all ${
                formData.timeline === timeline.value
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <span className={`text-xs font-medium ${
                formData.timeline === timeline.value ? 'text-gray-900' : 'text-gray-600'
              }`}>{timeline.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Description <span className="text-gray-400">(optionnel)</span>
        </label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) => onChange('projectDescription', e.target.value)}
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
          placeholder="Décrivez brièvement votre projet..."
        />
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <span>Continuer</span>
          <FiArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Step3({ formData, onChange, onBack, onSubmit, canSubmit, isSubmitting, availableDates, loadingSlots, formatDate, getAvailableTimesForDate }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FiCalendar className="w-7 h-7 text-gray-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Planifier le RDV</h3>
        <p className="text-gray-500 text-sm mt-1">Choisissez votre créneau</p>
      </div>

      {/* Type de consultation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Mode de contact *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CONSULTATION_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => onChange('consultationType', type.value)}
              className={`p-3 border-2 rounded-xl text-center transition-all ${
                formData.consultationType === type.value
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <type.Icon className={`w-5 h-5 mx-auto mb-1.5 ${
                formData.consultationType === type.value ? 'text-gray-900' : 'text-gray-500'
              }`} />
              <span className={`text-xs font-medium block ${
                formData.consultationType === type.value ? 'text-gray-900' : 'text-gray-600'
              }`}>{type.label}</span>
              <span className="text-[10px] text-gray-400">{type.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Date *</label>
        {loadingSlots ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent"></div>
          </div>
        ) : availableDates.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FiCalendar className="w-10 h-10 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">Aucun créneau disponible</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {availableDates.slice(0, 8).map((dateData) => (
              <button
                key={dateData.date}
                onClick={() => {
                  onChange('consultationDate', dateData.date);
                  if (formData.consultationDate !== dateData.date) {
                    onChange('consultationTime', '');
                  }
                }}
                className={`p-3 border-2 rounded-xl text-center transition-all ${
                  formData.consultationDate === dateData.date
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <span className={`text-xs font-medium block ${
                  formData.consultationDate === dateData.date ? 'text-gray-900' : 'text-gray-600'
                }`}>{formatDate(dateData.date)}</span>
                <span className="text-[10px] text-gray-400">{dateData.times.length} créneaux</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Heure */}
      {formData.consultationDate && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Heure *</label>
          {(() => {
            const times = getAvailableTimesForDate(formData.consultationDate);
            if (times.length === 0) {
              return (
                <div className="text-center py-4 text-gray-500">
                  <FiClock className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">Aucun créneau</p>
                </div>
              );
            }
            return (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => onChange('consultationTime', time)}
                    className={`py-2.5 px-3 border-2 rounded-xl text-center font-medium text-sm transition-all ${
                      formData.consultationTime === time
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
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

      {/* Récap */}
      {formData.consultationDate && formData.consultationTime && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <FiCheck className="w-4 h-4 text-green-600" />
            <span>
              <strong>{CONSULTATION_TYPES.find(t => t.value === formData.consultationType)?.label}</strong>
              {' '} le {formatDate(formData.consultationDate)} à {formData.consultationTime}
            </span>
          </div>
        </div>
      )}

      <div className="flex space-x-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>
        <button
          onClick={onSubmit}
          disabled={!canSubmit || isSubmitting}
          className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Envoi...</span>
            </>
          ) : (
            <>
              <FiCheck className="w-5 h-5" />
              <span>Confirmer</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
