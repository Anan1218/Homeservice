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
      description: 'Create custom automation workflows tailored to your specific commercial and home service business needs, from lead qualification to warranty follow-ups.',
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
            Make AI work for you by automating repetitive tasks that your commercial and home service business encounters every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Button href="/contact" variant="primary" className="text-base px-6 py-2.5">
              Talk to Crewmate
            </Button>
            <Button href="/contact" variant="secondary" className="text-base px-6 py-2.5">
              Get Started →
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 mb-16 max-w-2xl mx-auto lg:max-w-none lg:justify-center">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveUseCase(index)}
              className={`flex items-center justify-center gap-2 px-6 py-3 lg:px-4 lg:py-2 rounded-full border transition-all w-full lg:w-auto ${
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
        <div key={activeUseCase} className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto animate-fadeIn">
          {/* Left side - Dynamic Mockup */}
          <div className="flex justify-center">
            <div className="bg-gray-900 rounded-2xl w-full max-w-md h-auto min-h-[400px] sm:aspect-square sm:max-w-lg md:max-w-[30rem] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
            {activeUseCase === 0 ? (
              // Receptionist - Phone Call Interface
              <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-100 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-teal-600 text-lg sm:text-xl md:text-2xl">
                    📞
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">Incoming Call</div>
                  <div className="text-xs sm:text-sm text-gray-500">00:23</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">Sarah Martinez</div>
                    <div className="text-xs sm:text-sm text-gray-600">(555) 123-4567</div>
                    <div className="text-xs text-gray-500">AC Repair - Returning Customer</div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-teal-25 border border-teal-100 rounded-lg p-2 sm:p-3">
                      <div className="text-xs sm:text-sm font-medium text-teal-700">AI Response Ready</div>
                      <div className="text-xs text-teal-600">Checking availability...</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeUseCase === 1 ? (
              // Reminders - Reminder Dashboard
              <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-blue-600 text-lg sm:text-xl md:text-2xl">
                    🔔
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">Today's Reminders</div>
                  <div className="text-xs sm:text-sm text-gray-500">Mar 15</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-blue-25 border border-blue-100 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs sm:text-sm font-medium text-blue-700">Mike Chen</div>
                      <div className="text-xs text-blue-600">2:00 PM</div>
                    </div>
                    <div className="text-xs text-blue-600">HVAC Maintenance</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
                      <div className="text-xs text-blue-600">SMS Sent</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-25 border border-blue-100 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs sm:text-sm font-medium text-blue-700">Lisa Park</div>
                      <div className="text-xs text-blue-600">4:30 PM</div>
                    </div>
                    <div className="text-xs text-blue-600">Plumbing Repair</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="text-xs text-blue-600">Calling...</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeUseCase === 2 ? (
              // Service Appointments - Appointment Scheduler
              <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-orange-600 text-lg sm:text-xl md:text-2xl">
                    📅
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">Schedule Appointment</div>
                  <div className="text-xs sm:text-sm text-gray-500">Available Today</div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm">James Wilson</div>
                    <div className="text-xs text-gray-600">"Can I reschedule my appointment?"</div>
                    <div className="text-xs text-gray-500">Water Heater Repair</div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-orange-25 border border-orange-100 rounded-lg p-2 sm:p-3">
                      <div className="text-xs sm:text-sm font-medium text-orange-700">Available Slots</div>
                      <div className="text-xs text-orange-600">Checking calendar...</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                      <button className="bg-orange-200 text-orange-800 text-xs sm:text-sm py-1.5 sm:py-2 rounded-lg font-medium">
                        2:00 PM
                      </button>
                      <button className="bg-gray-200 text-gray-700 text-xs sm:text-sm py-1.5 sm:py-2 rounded-lg font-medium">
                        4:30 PM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeUseCase === 3 ? (
              // Custom Workflows - Workflow Builder Interface
              <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 w-full h-full flex flex-col justify-center">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-100 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-purple-600 text-lg sm:text-xl md:text-2xl">
                    🔧
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">Build Workflow</div>
                  <div className="text-xs sm:text-sm text-gray-500">Parts Request</div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {/* Customer message */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-medium shrink-0">
                      C
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                        <div className="text-xs sm:text-sm text-gray-800">Do you guys have a <span className="font-medium">[Parts Request]</span>?</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line */}
                  <div className="ml-3 sm:ml-3.5 md:ml-4 w-px h-2 sm:h-3 bg-gray-300"></div>
                  
                  {/* Automation action */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs shrink-0">
                      ✉
                    </div>
                    <div className="flex-1">
                      <div className="bg-purple-25 border border-purple-100 rounded-lg p-2 sm:p-3">
                        <div className="text-xs sm:text-sm font-medium text-purple-700">Send Email to</div>
                        <div className="text-xs sm:text-sm text-purple-600">Parts Manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Default mockup for other use cases
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
            )}
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