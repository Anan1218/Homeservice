import { HiChatBubbleLeftRight, HiCalendarDays, HiWrenchScrewdriver } from 'react-icons/hi2';

export default function Features() {
  const features = [
    {
      icon: <HiChatBubbleLeftRight className="w-8 h-8" />,
      title: 'Automated Customer Communications',
      description: 'Handle emergency calls, service requests, and quotes 24/7 with AI that understands home service urgency.'
    },
    {
      icon: <HiCalendarDays className="w-8 h-8" />,
      title: 'Smart Scheduling & Dispatch',
      description: 'Automatically schedule technicians, optimize routes, and manage emergency priorities based on service type.'
    },
    {
      icon: <HiWrenchScrewdriver className="w-8 h-8" />,
      title: 'Field Service Integration',
      description: 'Works with ServiceTitan, Housecall Pro, Jobber, and other major field service management platforms.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}