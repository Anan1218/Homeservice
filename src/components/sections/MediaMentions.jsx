export default function MediaMentions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">
          As Featured In
        </p>
        
        <div className="flex justify-center items-center">
          <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
            <img 
              src="/images/media/business-insider.png" 
              alt="Business Insider"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}