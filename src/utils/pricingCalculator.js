// Base plan pricing - $49/month includes allowances
export const getBasePlanPrice = () => 49;
export const getIncludedMinutes = () => 200;
export const getIncludedSMS = () => 500;

export const calculateUsageCharges = (minutes, smsCredits) => {
  const callRate = 0.10; // $0.10 per minute over allowance
  const smsRate = 0.005; // $0.005 per SMS credit over allowance
  
  const includedMinutes = getIncludedMinutes();
  const includedSMS = getIncludedSMS();
  
  // Calculate overage charges only
  const excessMinutes = Math.max(0, minutes - includedMinutes);
  const excessSMS = Math.max(0, smsCredits - includedSMS);
  
  const callCharges = excessMinutes * callRate;
  const smsCharges = excessSMS * smsRate;
  
  return {
    callCharges,
    smsCharges,
    totalUsage: callCharges + smsCharges,
    excessMinutes,
    excessSMS,
    includedMinutes,
    includedSMS
  };
};

export const calculateTotalPrice = (minutes, smsCredits) => {
  const basePrice = getBasePlanPrice();
  const usage = calculateUsageCharges(minutes, smsCredits);
  return basePrice + usage.totalUsage;
};

export const formatPrice = (price) => {
  return Math.round(price);
};

export const getFreePlanLimits = () => ({
  minutes: 50,
  smsCredits: 25,
  features: [
    'Basic call handling',
    'Up to 50 minutes per month',
    'Up to 25 SMS credits per month',
    'Email support',
    'Basic reporting'
  ]
});

export const getPayAsYouGoDetails = () => [
  '$0.10/minute for additional AI Voice minutes',
  '$0.005/SMS credit for additional Text Messages',
  'Pre-built Functions',
  'Simulation Testing',
  'Analytics'
];

export const getPayAsYouGoIncluded = () => [
  '200 call minutes included',
  '500 SMS credits included',
  '20 concurrent calls',
  '10 Knowledge Bases'
];

export const getEnterpriseFeatures = () => [
  'Fully managed agent setup',
  'Additional included concurrency',
  'Early access to beta features',
  'Higher limit on Knowledge Bases',
  'Custom concurrent calls based on volumes'
];

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