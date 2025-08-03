export default function MediaMentions() {
  const mediaOutlets = [
    { name: 'TechCrunch', logo: '/images/media/techcrunch.svg' },
    { name: 'Automotive News', logo: '/images/media/automotive-news.svg' },
    { name: 'Forbes', logo: '/images/media/forbes.svg' },
    { name: 'The Wall Street Journal', logo: '/images/media/wsj.svg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">
          As Featured In
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mediaOutlets.map((outlet, index) => (
            <div
              key={index}
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <img 
                src={outlet.logo} 
                alt={outlet.name}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}