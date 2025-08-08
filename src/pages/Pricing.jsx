import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingSlider from '../components/common/PricingSlider';
import Button from '../components/common/Button';
import { 
  getBasePlanPrice,
  calculateUsageCharges,
  calculateTotalPrice,
  formatPrice,
  getPayAsYouGoDetails,
  getPayAsYouGoIncluded,
  getEnterpriseFeatures
} from '../utils/pricingCalculator';

const Pricing = () => {
  const [minutes, setMinutes] = useState(1500);
  const [smsCredits, setSmsCredits] = useState(150);

  const basePrice = getBasePlanPrice();
  const usageCharges = calculateUsageCharges(minutes, smsCredits);
  const totalPrice = calculateTotalPrice(minutes, smsCredits);

  const formatNumber = (value) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-normal text-primary mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Pay for what you use
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-16">
          {/* Pay as you go Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="mb-6 h-32">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">Pay as you go</h3>
              <p className="text-gray-600 mb-1">$49 to start.</p>
              <p className="text-gray-600 mb-1">Self-Serve</p>
              <p className="text-gray-600">Start instantly.</p>
            </div>

            <div className="mb-8">
              <Button href="/contact" variant="primary" className="w-full">
                Sign up - for free
              </Button>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">DETAILS</h4>
              <div className="space-y-3">
                {getPayAsYouGoDetails().map((detail, index) => (
                  <div key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {getPayAsYouGoIncluded().map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="mb-6 h-32">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">Enterprise Plan</h3>
              <p className="text-gray-600 mb-1">For companies with large call volumes (over $1k/month)</p>
            </div>

            <div className="mb-8">
              <Button href="/contact" variant="secondary" className="w-full">
                Contact Sales
              </Button>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">DETAILS</h4>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  Includes everything from pay as you go
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex-shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  Discounted pricing based on volumes
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {getEnterpriseFeatures().map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Calculator Section */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Calculate Your Usage Cost</h2>
              <p className="text-gray-600">Adjust the sliders to see how much your usage would cost with our pay-as-you-go pricing</p>
            </div>

            <div className="space-y-8 mb-8">
              <PricingSlider
                question="How many call minutes do you need?"
                label="Call minutes"
                min={50}
                max={10000}
                step={50}
                value={minutes}
                onChange={setMinutes}
                formatValue={formatNumber}
              />
              
              <PricingSlider
                question="How many SMS credits would you like per month?"
                label="SMS/MMS credits"
                min={0}
                max={5000}
                step={25}
                value={smsCredits}
                onChange={setSmsCredits}
                formatValue={formatNumber}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">$49.00</div>
                  <div className="text-sm text-gray-600">Base plan</div>
                  <div className="text-xs text-gray-500">200 min + 500 SMS included</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">${usageCharges.callCharges.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Extra call charges</div>
                  <div className="text-xs text-gray-500">{formatNumber(usageCharges.excessMinutes)} min × $0.10</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">${usageCharges.smsCharges.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Extra SMS charges</div>
                  <div className="text-xs text-gray-500">{formatNumber(usageCharges.excessSMS)} credits × $0.005</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-gray-900">${totalPrice.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Total monthly cost</div>
                  <div className="text-xs text-gray-500">Base + overages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;