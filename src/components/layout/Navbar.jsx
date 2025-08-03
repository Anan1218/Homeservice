import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/contact', label: 'Contact' },
    { href: '/company', label: 'Company' },
    { href: '/blog', label: 'Blog' },
    { href: '/success-stories', label: 'Success Stories' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Toma" className="h-8" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/demo"
                className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="/login"
                className="px-4 py-2 text-black border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
              >
                Dealer Login
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-3 space-y-2">
              <a
                href="/demo"
                className="block w-full px-4 py-2 text-center text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="/login"
                className="block w-full px-4 py-2 text-center text-black border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
              >
                Dealer Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}