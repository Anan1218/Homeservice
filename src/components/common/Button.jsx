export default function Button({ href, variant = 'primary', children, className = '' }) {
  const baseStyles = 'inline-block px-8 py-3 rounded-md font-medium transition-colors text-center';
  
  const variants = {
    primary: 'text-white bg-black hover:bg-gray-800',
    secondary: 'text-black bg-white border-2 border-black hover:bg-gray-50',
    white: 'text-black bg-white hover:bg-gray-100'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName}>
      {children}
    </button>
  );
}