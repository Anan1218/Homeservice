import { useState, useEffect } from 'react';

const PricingSlider = ({ 
  label, 
  min, 
  max, 
  step = 1, 
  value, 
  onChange, 
  formatValue = (val) => val.toLocaleString(),
  unit = ""
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-lg font-medium text-gray-900">{label}</label>
        <div className="text-xl font-bold text-accent">
          {formatValue(value)} {unit}
        </div>
      </div>
      
      <div className="relative">
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
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #4d65ff 0%, #4d65ff ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <div 
          className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-accent rounded-full border-2 border-white shadow-lg transition-transform duration-150 ${
            isDragging ? 'scale-110' : 'scale-100'
          }`}
          style={{
            left: `calc(${percentage}% - 12px)`,
          }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <span>{formatValue(min)} {unit}</span>
        <span>{formatValue(max)} {unit}</span>
      </div>
    </div>
  );
};

export default PricingSlider;