// Layout components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Section components
import Hero from '../components/sections/Hero';
import SocialProof from '../components/sections/SocialProof';
import UseCasesIntro from '../components/sections/UseCasesIntro';
import UseCases from '../components/sections/UseCases';
import LiveCalls from '../components/sections/LiveCalls';
import MediaMentions from '../components/sections/MediaMentions';
import FinalCTA from '../components/sections/FinalCTA';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <UseCasesIntro />
        <UseCases />
        <LiveCalls />
        <MediaMentions />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;