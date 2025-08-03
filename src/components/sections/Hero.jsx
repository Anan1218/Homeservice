import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Grid Background */}
      <div className="retro-grid opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal mb-6 max-w-5xl mx-auto leading-tight">
          Transform Your Home Services Business with AI-Powered Automation
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Fieldwork's AI agents handle customer calls, schedule appointments, and manage service requests for HVAC, plumbing, roofing, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary" className="text-lg">
            Book a Demo
          </Button>
          <Button href="/contact" variant="secondary" className="text-lg">
            See It in Action
          </Button>
        </div>
      </div>
    </section>
  );
}