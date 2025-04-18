import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StepsSection from "./components/StepsSection";
import ContactForm from "./components/ContactForm";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-gray-900">
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <ContactForm />
        <Footer />
      </main>
      <WhatsappButton />
    </>
  );
}

export default App;
