import { HiCheck } from 'react-icons/hi';

export default function Benefits() {
  const benefits = [
    'True end-to-end automation for field services',
    'Natural conversations that understand urgency',
    'Multi-channel support (calls, texts, web)',
    'Instant response for emergencies',
    'Easy setup with existing tools',
    'Built specifically for commercial and home services'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Fieldwork</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <HiCheck className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}