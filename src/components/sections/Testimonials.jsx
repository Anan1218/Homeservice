import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Fieldwork handles our after-hours emergencies perfectly. It's like having a dispatcher who never sleeps.",
      author: "Mike Thompson",
      title: "Owner at Thompson's HVAC & Plumbing",
      image: "/images/testimonials/mike-thompson.svg"
    },
    {
      quote: "We've reduced missed calls by 90% and our customers love the instant response.",
      author: "Sarah Chen",
      title: "Operations Manager at Premier Home Services",
      image: "/images/testimonials/sarah-chen.svg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
        
        <div className="relative">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-2xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}