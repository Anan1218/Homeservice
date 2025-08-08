import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingSlider from '../components/common/PricingSlider';
import Button from '../components/common/Button';
import { calculatePrice, formatPrice, getPricingTier, getTierFeatures } from '../utils/pricingCalculator';

const Pricing = () => {
  const [calls, setCalls] = useState(250);
  const [texts, setTexts] = useState(500);

  const totalPrice = calculatePrice(calls, texts);
  const currentTier = getPricingTier(totalPrice);
  const tierFeatures = getTierFeatures(currentTier);

  const formatCalls = (value) => value.toLocaleString();
  const formatTexts = (value) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pay only for what you use. Adjust the sliders below to see your custom pricing based on your call and text volume.
          </p>
        </div>

        {/* Pricing Calculator */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Calculate Your Monthly Cost
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-6xl font-bold text-accent">
                  {formatPrice(totalPrice)}
                </div>
                <div className="text-left">
                  <div className="text-lg text-gray-600">per month</div>
                  <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                    {currentTier} Plan
                  </div>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <PricingSlider
                  label="Number of Calls"
                  min={50}
                  max={5000}
                  step={25}
                  value={calls}
                  onChange={setCalls}
                  formatValue={formatCalls}
                  unit="calls"
                />
              </div>
              <div className="space-y-6">
                <PricingSlider
                  label="Number of Texts"
                  min={100}
                  max={10000}
                  step={50}
                  value={texts}
                  onChange={setTexts}
                  formatValue={formatTexts}
                  unit="texts"
                />
              </div>
            </div>

            {/* Plan Features */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                What's included in your {currentTier} plan:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tierFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Pricing Breakdown
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-2">$29</div>
              <div className="text-gray-600 mb-4">Base Monthly Fee</div>
              <p className="text-sm text-gray-500">
                Includes platform access, basic features, and up to 50 calls + 100 texts
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">$0.15</div>
              <div className="text-gray-600 mb-4">Per Call</div>
              <p className="text-sm text-gray-500">
                Each additional call beyond your base allowance
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">$0.05</div>
              <div className="text-gray-600 mb-4">Per Text</div>
              <p className="text-sm text-gray-500">
                Each additional text message beyond your base allowance
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll only pay for what you use.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                What happens if I exceed my usage?
              </h3>
              <p className="text-gray-600">
                You'll automatically be charged for additional usage at our standard rates: $0.15 per call and $0.05 per text.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial with 100 calls and 200 texts included. No credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;