import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, href: 'https://twitter.com/crewmate', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/crewmate', label: 'LinkedIn' },
    { icon: <FaFacebook />, href: 'https://facebook.com/crewmate', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-gray-600">
            © 2025 Crewmate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}