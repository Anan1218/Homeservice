import { useState } from 'react';
import { HiPhone, HiCalendarDays, HiDocumentText, HiBell, HiArrowPath, HiPuzzlePiece } from 'react-icons/hi2';
import Button from '../common/Button';

export default function UseCasesIntro() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    { 
      icon: <HiPhone className="w-4 h-4" />, 
      label: 'Receptionist',
      title: 'Receptionist',
      heading: 'Never Miss a Call',
      description: 'Your AI receptionist answers every call, qualifies leads, schedules appointments, and handles customer inquiries 24/7 with natural conversation skills.',
      colors: {
        active: 'bg-teal-50 border-teal-300 text-teal-700',
        hover: 'hover:bg-teal-25 hover:border-teal-200'
      }
    },
    { 
      icon: <HiBell className="w-4 h-4" />, 
      label: 'Reminders',
      title: 'Reminders',
      heading: 'Reduce No-Shows',
      description: 'Send automated reminders for service appointments or maintenance visits to boost show rates and maximize revenue from scheduled services.',
      colors: {
        active: 'bg-blue-50 border-blue-300 text-blue-700',
        hover: 'hover:bg-blue-25 hover:border-blue-200'
      }
    },
    { 
      icon: <HiCalendarDays className="w-4 h-4" />, 
      label: 'Service Appointments',
      title: 'Service Appointments',
      heading: 'Schedule Appointments 24/7',
      description: 'Book new service appointments and help customers reschedule or confirm existing ones—without human intervention.',
      colors: {
        active: 'bg-orange-50 border-orange-300 text-orange-700',
        hover: 'hover:bg-orange-25 hover:border-orange-200'
      }
    },
    { 
      icon: <HiPuzzlePiece className="w-4 h-4" />, 
      label: 'Custom Workflows',
      title: 'Custom Workflows',
      heading: 'Build Your Own',
      description: 'Create custom automation workflows tailored to your specific home service business needs, from lead qualification to warranty follow-ups.',
      colors: {
        active: 'bg-purple-50 border-purple-300 text-purple-700',
        hover: 'hover:bg-purple-25 hover:border-purple-200'
      }
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Use Cases</p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">Automation That Drives Revenue</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Make AI work for you by automating repetitive tasks that your home service business encounters every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/contact" variant="primary" className="text-lg">
              Talk to Fieldwork
            </Button>
            <Button href="/contact" variant="secondary" className="text-lg">
              Get Started →
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveUseCase(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeUseCase === index
                  ? useCase.colors.active
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-200'
              }`}
            >
              <span className={activeUseCase === index ? '' : 'text-gray-500'}>
                {useCase.icon}
              </span>
              <span className="text-sm font-medium">{useCase.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Display Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Mockup placeholder */}
          <div className="bg-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <div
                      key={day}
                      className={`flex-1 p-2 text-center rounded text-sm ${
                        i === 1 ? 'bg-black text-white' : 'bg-gray-100'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {useCases[activeUseCase].title}
            </p>
            <h3 className="text-3xl lg:text-4xl font-serif mb-4">
              {useCases[activeUseCase].heading}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {useCases[activeUseCase].description}
            </p>
            <Button href="/contact" variant="primary">
              Book Demo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}