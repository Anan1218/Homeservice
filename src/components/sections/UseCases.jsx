import { HiArrowsPointingOut, HiSpeakerWave, HiPlay, HiChatBubbleLeftEllipsis, HiRocketLaunch, HiCog6Tooth } from 'react-icons/hi2';

export default function UseCases() {
  const benefits = [
    {
      icon: <HiArrowsPointingOut className="w-8 h-8 text-blue-600 opacity-70" />,
      title: 'True End-to-End Automation',
      description: 'Automate tasks completely, reducing reliance on frequent human intervention.'
    },
    {
      icon: <HiSpeakerWave className="w-8 h-8 text-orange-500 opacity-70" />,
      title: 'Natural & Fast Conversations',
      description: 'Fine-tuned AI provides more natural interactions and the lowest response latency.'
    },
    {
      icon: <HiPlay className="w-8 h-8 text-yellow-500 opacity-70" />,
      title: 'Omnichannel Communications',
      description: 'Automate voice and SMS interactions, unlike single-channel competitor offerings.'
    },
    {
      icon: <HiChatBubbleLeftEllipsis className="w-8 h-8 text-red-500 opacity-70" />,
      title: '1-Hour Support Included',
      description: 'Rest assured you can roll out new technology with our dedicated support team.'
    },
    {
      icon: <HiRocketLaunch className="w-8 h-8 text-blue-500 opacity-70" />,
      title: 'Onboard With Ease',
      description: 'Deploy quickly with minimal training, without disrupting your commercial and home service business\'s daily operations.'
    },
    {
      icon: <HiCog6Tooth className="w-8 h-8 text-pink-500 opacity-70" />,
      title: 'In-House AI Advantage',
      description: 'Our proprietary AI allows deeper customization compared to other products.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Why Fieldwork?</p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">There's No Competition</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Built for commercial and home service companies that refuse to settle, Fieldwork's AI outperforms the rest—smarter, faster, and more reliable than any alternative.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}