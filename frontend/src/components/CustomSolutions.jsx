import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Ruler, Paintbrush } from "lucide-react";

const solutions = [
  {
    icon: Ruler,
    title: "Custom Aluminium Profiles",
    desc: "Bespoke aluminium extrusions designed to your exact specifications for unique architectural requirements.",
    num: "01",
  },
  {
    icon: Palette,
    title: "Architectural Solutions",
    desc: "Complete aluminium facade systems, curtain walls, and structural glazing for modern commercial buildings.",
    num: "02",
  },
  {
    icon: Paintbrush,
    title: "Powder Coating",
    desc: "Premium powder-coated finishes in any RAL color \u2014 durable, weather-resistant, and visually stunning.",
    num: "03",
  },
];

function SolutionCard({ sol, i, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`custom-solution-${i}`}
      className="bg-[#121212] border border-[#D4AF37]/10 p-10 text-center group relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered ? "0 30px 80px rgba(212, 175, 55, 0.1)" : "none",
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease",
      }}
    >
      {/* Animated gold border */}
      <motion.div
        className="absolute inset-0 border border-[#D4AF37]/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background number */}
      <span className="absolute top-6 right-6 text-6xl font-black font-['Oswald'] text-white/[0.02] group-hover:text-[#D4AF37]/[0.06] transition-colors duration-700">
        {sol.num}
      </span>

      {/* Gold line that draws on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 mx-auto mb-6 border border-[#D4AF37]/30 rotate-45 flex items-center justify-center"
          animate={hovered ? { rotate: 135, borderColor: "rgba(212,175,55,0.6)", backgroundColor: "rgba(212,175,55,0.1)" } : { rotate: 45, borderColor: "rgba(212,175,55,0.3)", backgroundColor: "transparent" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={hovered ? { rotate: -135 } : { rotate: -45 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <sol.icon className="w-7 h-7 text-[#D4AF37]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <h3 className="text-lg font-semibold font-['Oswald'] uppercase tracking-wider text-white mb-3">
          {sol.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#A3A3A3]">
          {sol.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function CustomSolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-testid="custom-solutions-section"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Animated rings */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.04 } : {}}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#D4AF37]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px bg-[#D4AF37] origin-right"
            />
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              Tailored Excellence
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px bg-[#D4AF37] origin-left"
            />
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white"
            >
              Custom Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-[#A3A3A3] mt-6 max-w-lg mx-auto"
          >
            Beyond standard offerings, we specialize in bespoke aluminium solutions that bring your architectural vision to reality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.title} sol={sol} i={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            data-testid="custom-solutions-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block relative border border-[#D4AF37] text-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Discuss Your Project</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
