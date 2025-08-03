import { HiArrowRight } from 'react-icons/hi';

export default function CaseStudy() {
  const metrics = [
    { value: '15,000+', label: 'Service Calls Handled' },
    { value: '$3.5M+', label: 'Revenue Generated' },
    { value: '35K+', label: 'Customer Interactions' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">AllSeason Home Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how AllSeason increased their service capacity by 40% without adding staff
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/case-study/allseason-home-services"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-medium"
            >
              Read the case study <HiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}