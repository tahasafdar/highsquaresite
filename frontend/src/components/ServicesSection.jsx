import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers, DoorOpen, Grid3x3, Fence, PanelTop, Shield, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: PanelTop,
    title: "Sliding Windows",
    desc: "Smooth-glide aluminium sliding windows for effortless ventilation and modern aesthetics.",
    num: "01",
  },
  {
    icon: Grid3x3,
    title: "Casement Windows",
    desc: "Premium hinged windows offering maximum airflow and unobstructed views.",
    num: "02",
  },
  {
    icon: Layers,
    title: "Domal Windows",
    desc: "Curved architectural windows adding distinctive character to any structure.",
    num: "03",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors",
    desc: "Durable, sleek doors engineered for security and refined style.",
    num: "04",
  },
  {
    icon: Fence,
    title: "Glass Partitions",
    desc: "Frameless and framed solutions creating elegant spatial divisions.",
    num: "05",
  },
  {
    icon: Shield,
    title: "Invisible Grills",
    desc: "Safety without compromise \u2014 near-invisible grills for balconies and windows.",
    num: "06",
  },
];

function ServiceCard({ service, i, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`service-card-${i}`}
      className="relative bg-[#1A1A1A] border border-white/5 p-8 lg:p-10 group cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-8px)" : "perspective(1000px) rotateX(0) rotateY(0) translateY(0)",
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease",
        boxShadow: hovered ? "0 20px 60px rgba(212, 175, 55, 0.08)" : "none",
      }}
    >
      {/* Gold border reveal on hover */}
      <motion.div
        className="absolute inset-0 border border-[#D4AF37]/40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background number */}
      <span className="absolute top-4 right-4 text-5xl font-black font-['Oswald'] text-white/[0.03] group-hover:text-[#D4AF37]/[0.08] transition-colors duration-500">
        {service.num}
      </span>

      <div className="relative z-10">
        <motion.div
          animate={hovered ? { rotate: -10, scale: 1.15 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <service.icon
            className="w-8 h-8 text-[#D4AF37] mb-6"
            strokeWidth={1.5}
          />
        </motion.div>

        <h3 className="text-xl font-semibold font-['Oswald'] uppercase tracking-wide text-white mb-3">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#A3A3A3]">
          {service.desc}
        </p>

        {/* Animated bottom line + arrow */}
        <div className="flex items-center gap-2 mt-6">
          <motion.div
            className="h-px bg-[#D4AF37]/40"
            animate={{ width: hovered ? 48 : 32 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={14} className="text-[#D4AF37]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      data-testid="services-section"
      className="py-24 lg:py-32 bg-[#121212] relative noise-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-8 h-px bg-[#D4AF37] origin-left"
              />
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
                What We Do
              </p>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white"
              >
                Our Services
              </motion.h2>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.05 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block text-8xl font-black font-['Oswald'] uppercase text-white"
          >
            06
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
