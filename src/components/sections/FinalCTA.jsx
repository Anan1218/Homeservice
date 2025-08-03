import Button from '../common/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif mb-6">
          Ready to Automate Your Home Services Business?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of HVAC, plumbing, and roofing companies already using Toma to grow their business.
        </p>
        <Button href="/demo" variant="white" className="text-lg">
          Book a Demo
        </Button>
      </div>
    </section>
  );
}