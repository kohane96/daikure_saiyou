import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import DiagnosisSection from './components/DiagnosisSection';
import PrideSection from './components/PrideSection';
import BenefitsSection from './components/BenefitsSection';
import CareerPathSection from './components/CareerPathSection';
import JobListingSection from './components/JobListingSection';
import DailyFlowSection from './components/DailyFlowSection';
import VoicesSection from './components/VoicesSection';
import FAQSection from './components/FAQSection';
import FinalGateSection from './components/FinalGateSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans antialiased">
      <Hero />
      <VideoSection />
      <DiagnosisSection />
      <PrideSection />
      <BenefitsSection />
      <CareerPathSection />
      <JobListingSection />
      <DailyFlowSection />
      <VoicesSection />
      <FAQSection />
      <FinalGateSection />
      <Footer />
    </div>
  );
};

export default App;