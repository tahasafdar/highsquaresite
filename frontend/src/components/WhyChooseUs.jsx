import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gem, Wrench, Settings, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "We use only the finest aluminium alloys and glass, ensuring longevity and performance.",
    num: "01",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    desc: "Over two decades of hands-on expertise in precision aluminium fabrication.",
    num: "02",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    desc: "Every project is unique \u2014 we engineer bespoke solutions tailored to your vision.",
    num: "03",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Efficient production processes ensure your projects stay on schedule.",
    num: "04",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "From consultation to installation, we prioritize your satisfaction at every step.",
    num: "05",
  },
];

function ReasonCard({ reason, i, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`why-card-${i}`}
      className="text-center p-6 lg:p-8 group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated background fill */}
      <motion.div
        className="absolute inset-0 bg-[#1A1A1A] border border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 border border-[#D4AF37]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      <div className="relative z-10">
        {/* Icon with animated container */}
        <motion.div
          animate={hovered ? { borderColor: "rgba(212,175,55,0.5)", backgroundColor: "rgba(212,175,55,0.1)" } : { borderColor: "rgba(212,175,55,0.3)", backgroundColor: "transparent" }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 mx-auto mb-5 border flex items-center justify-center"
        >
          <motion.div animate={hovered ? { scale: 1.2, rotate: -5 } : { scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }}>
            <reason.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <h3 className="text-sm font-semibold font-['Oswald'] uppercase tracking-wider text-white mb-2">
          {reason.title}
        </h3>
        <p className="text-xs leading-relaxed text-[#A3A3A3]">
          {reason.desc}
        </p>

        {/* Animated gold dot */}
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mx-auto mt-4"
          animate={hovered ? { scale: [1, 1.5, 1] } : {}}
          transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
        />
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-testid="why-choose-section"
      className="py-24 lg:py-32 bg-[#121212] relative"
    >
      {/* Animated gold line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
        style={{ transformOrigin: "center" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              The High Square Difference
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
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white"
            >
              Why Choose Us
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
