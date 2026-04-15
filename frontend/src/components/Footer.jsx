import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = ["About", "Services", "Products", "Projects", "Contact"];
  const serviceLinks = ["Sliding Windows", "Casement Windows", "Aluminium Doors", "Glass Partitions", "Invisible Grills"];

  return (
    <footer ref={ref} data-testid="footer-section" className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 135, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-[#D4AF37] rotate-0" />
              </motion.div>
              <div className="leading-none">
                <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white font-['Oswald']">
                  High Square
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  Aluminium
                </span>
              </div>
            </div>
            <p className="text-sm text-[#A3A3A3] max-w-sm leading-relaxed">
              Premium aluminium solutions for modern architecture. Crafting spaces with precision and elegance since 1998.
            </p>
            <p className="text-xs text-[#A3A3A3]/50 mt-4">
              A venture by Monalisa Aluminium
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-6 font-['Oswald']">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-[#A3A3A3] hover:text-[#D4AF37] transition-colors duration-300 relative group inline-block"
                  >
                    {link}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-6 font-['Oswald']">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  <span className="text-sm text-[#A3A3A3]">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[#A3A3A3]/50">
            &copy; {new Date().getFullYear()} High Square Aluminium. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            data-testid="scroll-to-top-btn"
            whileHover={{ scale: 1.1, borderColor: "rgba(212,175,55,1)" }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:text-[#D4AF37] transition-colors duration-300 text-[#A3A3A3]"
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowUp size={16} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
