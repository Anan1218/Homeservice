export default function SocialProof() {
  const companies = [
    { name: "Johnson's HVAC Services", logo: '/images/dealerships/johnsons-hvac.svg' },
    { name: 'ProPlumb Solutions', logo: '/images/dealerships/proplumb-solutions.svg' },
    { name: 'Summit Roofing Co.', logo: '/images/dealerships/summit-roofing.svg' },
    { name: 'AllSeason Home Services', logo: '/images/dealerships/allseason-home.svg' },
  ];

  // For demo purposes, we'll repeat the pattern
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">
          Trusted by Home Service Companies
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {allCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}