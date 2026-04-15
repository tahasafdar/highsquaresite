import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Windows",
    image: "https://images.unsplash.com/photo-1657978837711-7257a8357877?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    desc: "Sliding, casement, and domal windows crafted with precision aluminium profiles for lasting performance.",
  },
  {
    name: "Doors",
    image: "https://images.unsplash.com/photo-1773579089983-50348cc9abd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85",
    desc: "Premium aluminium doors designed for durability, security, and architectural elegance.",
  },
  {
    name: "Partitions",
    image: "https://images.unsplash.com/photo-1770993151375-0dee97eda931?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBnbGFzcyUyMHBhcnRpdGlvbnxlbnwwfHx8fDE3NzYyMzMzMjF8MA&ixlib=rb-4.1.0&q=85",
    desc: "Glass partitions and aluminium frameworks creating sophisticated spatial solutions.",
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir) => {
    setDirection(dir);
    setActive((p) => (p + dir + categories.length) % categories.length);
  };

  const imgVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 100 : -100, scale: 1.1 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -100 : 100, scale: 0.95 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="products"
      ref={ref}
      data-testid="product-showcase-section"
      className="py-24 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                Our Collection
              </p>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white"
              >
                Product Showcase
              </motion.h2>
            </div>
          </div>
          <div className="hidden sm:flex gap-3">
            <motion.button
              onClick={() => navigate(-1)}
              data-testid="product-prev-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 text-white"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={() => navigate(1)}
              data-testid="product-next-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 text-white"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Product display */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image with mask transition */}
          <div className="aspect-[4/3] overflow-hidden relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={active}
                custom={direction}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                src={categories[active].image}
                alt={categories[active].name}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent z-10" />

            {/* Image counter */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
              {categories.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[2px] rounded-full"
                  animate={{
                    width: i === active ? 32 : 12,
                    backgroundColor: i === active ? "#D4AF37" : "rgba(255,255,255,0.3)",
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          {/* Info with animated transitions */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-7xl lg:text-8xl font-black font-['Oswald'] gold-text opacity-30">
                  0{active + 1}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-['Oswald'] uppercase tracking-tight text-white -mt-4">
                  {categories[active].name}
                </h3>
                <p className="text-base leading-relaxed text-[#A3A3A3] mt-6 max-w-md">
                  {categories[active].desc}
                </p>
                <motion.a
                  href="#contact"
                  data-testid="product-inquire-btn"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 mt-8 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase group overflow-hidden relative"
                >
                  <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Inquire Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Category tabs */}
            <div className="flex gap-6 mt-12">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  data-testid={`product-tab-${cat.name.toLowerCase()}`}
                  className="relative text-xs tracking-[0.15em] uppercase pb-2 transition-all duration-300"
                >
                  <span className={i === active ? "text-[#D4AF37]" : "text-[#A3A3A3] hover:text-white"}>
                    {cat.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    initial={false}
                    animate={{ scaleX: i === active ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden gap-3 mt-8 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
