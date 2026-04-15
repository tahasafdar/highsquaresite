import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const marqueeText = "PRECISION \u00B7 DURABILITY \u00B7 DESIGN EXCELLENCE \u00B7 MODERN LIVING \u00B7 PREMIUM ALUMINIUM \u00B7 ";

export default function BrandStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      data-testid="brand-statement-section"
      className="py-32 lg:py-44 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Main headline with parallax */}
      <motion.div style={{ y: textY }} className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] font-['Oswald'] text-white"
          >
            Built with{" "}
            <span className="gold-text">Precision</span>.
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] font-['Oswald'] text-white"
          >
            Designed for{" "}
            <span className="gold-text">Modern Living</span>.
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="gold-line w-40 mx-auto mt-12"
        />
      </motion.div>

      {/* Infinite marquee */}
      <div className="mt-20 overflow-hidden border-t border-b border-white/5 py-5">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-7xl lg:text-8xl font-black font-['Oswald'] uppercase tracking-tight text-white/[0.03] mx-0 flex-shrink-0"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-[#D4AF37]/20" />
        <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-[#D4AF37]/20" />
      </motion.div>
    </section>
  );
}
