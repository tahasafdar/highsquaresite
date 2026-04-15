import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_IMG = "https://images.pexels.com/photos/36760994/pexels-photo-36760994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1920";

const headlineWords = ["Crafting", "Premium", "Aluminium", "Spaces"];

function SplitText({ words, className }) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className={`inline-block ${word === "Aluminium" ? "gold-text" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-testid="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={HERO_IMG}
          alt="Modern architecture"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-28 right-8 lg:right-16 z-10 hidden md:block"
      >
        <div className="w-16 h-16 border border-[#D4AF37]/20" />
        <div className="w-16 h-16 border border-[#D4AF37]/10 -mt-8 ml-8" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Overline with animated line */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-12 h-px bg-[#D4AF37] origin-left"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]"
          >
            High Square Aluminium by Monalisa Aluminium
          </motion.p>
        </div>

        {/* Split text headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white font-['Oswald'] max-w-4xl">
          <SplitText words={headlineWords} />
        </h1>

        {/* Subtext with character reveal */}
        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-[#A3A3A3] mt-8 max-w-md leading-relaxed"
        >
          Precision. Durability. Design Excellence since 1998.
        </motion.p>

        {/* Buttons with stagger + fill animation */}
        <div className="flex flex-wrap gap-4 mt-10">
          <motion.a
            href="#products"
            data-testid="hero-explore-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative border border-[#D4AF37] text-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10">Explore Products</span>
          </motion.a>
          <motion.a
            href="#contact"
            data-testid="hero-quote-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative border border-white/20 text-white hover:text-white transition-colors duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10">Get Quote</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A3A3A3] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
