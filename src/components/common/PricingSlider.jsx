import { useState } from 'react';

const PricingSlider = ({ 
  question,
  label, 
  min, 
  max, 
  step = 1, 
  value, 
  onChange, 
  formatValue = (val) => val.toLocaleString()
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  const getValueDisplay = () => {
    return formatValue(value);
  };

  return (
    <div className="w-full space-y-6 mb-8">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{question}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">{label}</span>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="text-xl font-semibold text-gray-900">
          {getValueDisplay()}
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full h-1 bg-gray-300 rounded-full">
          <div 
            className="h-1 bg-gray-900 rounded-full relative"
            style={{ width: `${percentage}%` }}
          >
            <div 
              className={`absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-900 rounded-full border-2 border-white shadow-sm cursor-pointer transition-transform duration-150 ${
                isDragging ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 w-full h-4 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PricingSlider;