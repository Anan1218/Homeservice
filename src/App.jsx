import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>HomeServices Pro</h2>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Professional Home Services You Can Trust</h1>
          <p>From plumbing and electrical work to cleaning and maintenance, we provide reliable home services with guaranteed satisfaction.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-secondary">Our Services</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: "Plumbing",
      description: "Expert plumbing repairs, installations, and maintenance for your home.",
      icon: "🔧"
    },
    {
      title: "Electrical",
      description: "Licensed electricians for all your electrical needs and safety inspections.",
      icon: "⚡"
    },
    {
      title: "Cleaning",
      description: "Professional deep cleaning and regular maintenance services.",
      icon: "🧽"
    },
    {
      title: "HVAC",
      description: "Heating, ventilation, and air conditioning repair and installation.",
      icon: "🌡️"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get Started Today</h2>
        <p>Ready to improve your home? Contact us for a free consultation and quote.</p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>📞 Call Us:</strong> (555) 123-4567
          </div>
          <div className="contact-item">
            <strong>✉️ Email:</strong> hello@homeservicespro.com
          </div>
          <div className="contact-item">
            <strong>🕒 Hours:</strong> Mon-Fri 8AM-6PM, Sat 9AM-4PM
          </div>
        </div>
        <button className="btn-primary">Schedule Service</button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 HomeServices Pro. All rights reserved.</p>
        <p>Licensed • Insured • Trusted</p>
      </div>
    </footer>
  )
}

export default App
