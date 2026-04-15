import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1765766601432-edcdc9ae017d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85";

const stats = [
  { number: 25, suffix: "+", label: "Years of Excellence" },
  { number: 1000, suffix: "+", label: "Projects Completed" },
  { number: 2, suffix: "", label: "Locations" },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-3xl lg:text-4xl font-bold font-['Oswald'] gold-text tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="py-24 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with mask reveal */}
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={ABOUT_IMG}
                alt="Modern interior with glass walls"
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ scale: 1.3 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            {/* Animated border accent */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={inView ? { opacity: 1, x: -12, y: 12 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 w-24 h-24 border border-[#D4AF37]/40"
            />
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1, type: "spring" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4AF37] flex items-center justify-center"
            >
              <div className="text-center">
                <span className="text-xs font-bold text-[#0A0A0A] block">EST.</span>
                <span className="text-lg font-black font-['Oswald'] text-[#0A0A0A]">1998</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-[#D4AF37]" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
                Our Story
              </p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white mb-8"
              >
                Redefining
                <br />
                Aluminium Since <span className="gold-text">1998</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base leading-relaxed text-[#A3A3A3] mb-6"
            >
              High Square Aluminium, a venture by Monalisa Aluminium, has been at the forefront of premium aluminium solutions for over two decades. Based in Indore with operations extending to Dewas, we bring architectural visions to life through precision engineering and exceptional craftsmanship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-base leading-relaxed text-[#A3A3A3] mb-12"
            >
              Our commitment to quality materials and innovative design has made us the trusted choice for architects, builders, and homeowners seeking lasting elegance.
            </motion.p>

            {/* Animated stats counters */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.15 }}
                  className="border-t border-[#D4AF37]/30 pt-4"
                >
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
                  <p className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
