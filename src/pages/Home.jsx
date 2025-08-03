// Layout components
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Section components
import Hero from '../components/sections/Hero';
import SocialProof from '../components/sections/SocialProof';
import Features from '../components/sections/Features';
import UseCases from '../components/sections/UseCases';
import CaseStudy from '../components/sections/CaseStudy';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import MediaMentions from '../components/sections/MediaMentions';
import FinalCTA from '../components/sections/FinalCTA';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <UseCases />
        <CaseStudy />
        <Benefits />
        <Testimonials />
        <MediaMentions />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;