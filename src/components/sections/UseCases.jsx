export default function UseCases() {
  const useCases = [
    {
      title: '24/7 Emergency Response',
      description: 'Handle urgent HVAC, plumbing, and electrical calls any time of day or night.'
    },
    {
      title: 'Service Scheduling',
      description: 'Book appointments, manage technician calendars, and optimize daily routes.'
    },
    {
      title: 'Quote Generation',
      description: 'Provide instant estimates for common services based on your pricing.'
    },
    {
      title: 'Follow-up & Maintenance',
      description: 'Automatically schedule seasonal maintenance and follow up on completed jobs.'
    },
    {
      title: 'Customer Updates',
      description: 'Keep customers informed with automated arrival times and service updates.'
    },
    {
      title: 'Lead Qualification',
      description: 'Pre-qualify service requests and prioritize based on urgency and value.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">Use Cases</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}