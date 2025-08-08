export const calculatePrice = (calls, texts) => {
  const basePrice = 29;
  const callRate = 0.15; // $0.15 per call
  const textRate = 0.05; // $0.05 per text
  
  const callsCost = calls * callRate;
  const textsCost = texts * textRate;
  
  return Math.max(basePrice, basePrice + callsCost + textsCost);
};

export const formatPrice = (price) => {
  return `$${price.toFixed(0)}`;
};

export const getPricingTier = (totalPrice) => {
  if (totalPrice < 100) return 'Starter';
  if (totalPrice < 300) return 'Professional'; 
  if (totalPrice < 600) return 'Business';
  return 'Enterprise';
};

export const getTierFeatures = (tier) => {
  const features = {
    Starter: [
      'Basic call handling',
      'SMS notifications',
      'Email support',
      'Basic analytics'
    ],
    Professional: [
      'Advanced call routing',
      'SMS automation',
      'Priority support',
      'Advanced analytics',
      'CRM integration'
    ],
    Business: [
      'Everything in Professional',
      'Multi-location support',
      'Custom integrations',
      'Dedicated account manager',
      'Custom reporting'
    ],
    Enterprise: [
      'Everything in Business',
      'White-label solution',
      'API access',
      'Custom development',
      'SLA guarantee'
    ]
  };
  
  return features[tier] || features.Starter;
};

export const getCallsOptions = () => [
  { value: 50, label: '50 calls' },
  { value: 100, label: '100 calls' },
  { value: 250, label: '250 calls' },
  { value: 500, label: '500 calls' },
  { value: 1000, label: '1,000 calls' },
  { value: 2500, label: '2,500 calls' },
  { value: 5000, label: '5,000 calls' },
];

export const getTextsOptions = () => [
  { value: 100, label: '100 texts' },
  { value: 250, label: '250 texts' },
  { value: 500, label: '500 texts' },
  { value: 1000, label: '1,000 texts' },
  { value: 2500, label: '2,500 texts' },
  { value: 5000, label: '5,000 texts' },
  { value: 10000, label: '10,000 texts' },
];