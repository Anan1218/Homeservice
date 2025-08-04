import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Grid Background */}
      <div className="retro-grid opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-4 max-w-6xl mx-auto leading-tight">
          Transform Your Home Services Business with AI-Powered Automation
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Fieldwork's AI agents handle customer calls, schedule appointments, and manage service requests for HVAC, plumbing, roofing, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button href="/contact" variant="primary" className="text-base px-6 py-2.5">
            Book a Demo
          </Button>
          <Button href="/contact" variant="secondary" className="text-base px-6 py-2.5">
            See It in Action
          </Button>
        </div>
      </div>
    </section>
  );
}