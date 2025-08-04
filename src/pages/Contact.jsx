import { useState } from 'react';
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Form */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Ready to transform your dealership with AI automation? Let's discuss how Fieldwork can help.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-black focus:border-black transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-black focus:border-black transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@dealership.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                {/* Company field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-black focus:border-black transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ABC Motors"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                  )}
                </div>
                
                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-black focus:border-black transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your dealership's needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-md transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-black hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Success message */}
                {submitSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
            
            {/* Right column - Contact info */}
            <div className="lg:pt-20">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl font-serif font-bold text-black mb-6">
                  Let's Start a Conversation
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <a 
                      href="mailto:partners@fieldwork.com" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      partners@fieldwork.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="YouTube"
                      >
                        <FaYoutube size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-black mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Additional CTA */}
              <div className="mt-8 p-6 bg-black text-white rounded-xl">
                <h3 className="text-xl font-semibold mb-2">
                  Ready to see Fieldwork in action?
                </h3>
                <p className="text-gray-300 mb-4">
                  Schedule a personalized demo to see how our AI can transform your dealership operations.
                </p>
                <a
                  href="/demo"
                  className="inline-block px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Contact;