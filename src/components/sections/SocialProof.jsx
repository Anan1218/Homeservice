export default function SocialProof() {
  const softwareIntegrations = [
    { name: 'ServiceTitan', logo: '/images/software/servicetitan.png' },
    { name: 'Housecall Pro', logo: '/images/software/housecallpro.png' },
    { name: 'Jobber', logo: '/images/software/jobber.png' },
    { name: 'FieldEdge', logo: '/images/software/fieldedge.png' },
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*         <h2 className="text-center text-2xl font-medium mb-12">
          Integrates with Your Business Software
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          {softwareIntegrations.map((software, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[120px] h-[45px] md:w-[160px] md:h-[60px] opacity-80 hover:opacity-100 transition-all"
            >
              <img 
                src={software.logo} 
                alt={software.name}
                className={`max-h-full max-w-full object-contain ${
                  software.name === 'FieldEdge' ? 'scale-90' : ''
                }`}
              />
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 text-sm">
          Don't see your software? Crewmate Operator navigates any vendor's website like a human.{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            Learn more →
          </a>
        </p> */}
      </div>
    </section>
  );
}