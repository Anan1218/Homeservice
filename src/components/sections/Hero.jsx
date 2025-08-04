import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50/50 via-white to-blue-50/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-purple-100/20" />
      
      {/* Animated Grid Background */}
      <div className="retro-grid opacity-40" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-300/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-teal-300/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-orange-200/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      
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