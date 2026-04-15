import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandStatement from "../components/BrandStatement";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProductShowcase from "../components/ProductShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectsGallery from "../components/ProjectsGallery";
import CustomSolutions from "../components/CustomSolutions";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 45, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-16 border border-[#D4AF37] mx-auto flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-6 h-6 bg-[#D4AF37]"
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mt-4 font-['Oswald']"
        >
          High Square
        </motion.p>
      </div>
    </motion.div>
  );
}

function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37]/40 rounded-full pointer-events-none z-[99] mix-blend-difference hidden lg:block"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
    />
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]" data-testid="home-page">
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      <CursorFollower />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <BrandStatement />
          <AboutSection />
          <ServicesSection />
          <ProductShowcase />
          <WhyChooseUs />
          <ProjectsGallery />
          <CustomSolutions />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
