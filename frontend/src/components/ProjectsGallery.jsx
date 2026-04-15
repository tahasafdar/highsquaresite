import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Expand } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1655019545925-ddad6147d575?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHQlMjBkYXJrJTIwbHV4dXJ5fGVufDB8fHx8MTc3NjIzMzU0Mnww&ixlib=rb-4.1.0&q=85",
    title: "Luxe Residences",
    category: "Residential",
    height: "h-80",
  },
  {
    image: "https://images.unsplash.com/photo-1644489263595-6f5730ce3144?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    title: "Skyline Tower",
    category: "Commercial",
    height: "h-96",
  },
  {
    image: "https://images.unsplash.com/photo-1621176302222-01cb014875c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    title: "Vista Apartments",
    category: "Residential",
    height: "h-72",
  },
  {
    image: "https://images.unsplash.com/photo-1743051883652-7390ec9337f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85",
    title: "The Grand Suite",
    category: "Luxury",
    height: "h-96",
  },
  {
    image: "https://images.unsplash.com/photo-1689540872073-56f6ebe202cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHQlMjBkYXJrJTIwbHV4dXJ5fGVufDB8fHx8MTc3NjIzMzU0Mnww&ixlib=rb-4.1.0&q=85",
    title: "Apex Corporate",
    category: "Commercial",
    height: "h-80",
  },
  {
    image: "https://images.pexels.com/photos/9538574/pexels-photo-9538574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Urban Living",
    category: "Residential",
    height: "h-72",
  },
];

function ProjectCard({ project, i, inView, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`project-card-${i}`}
      className={`relative overflow-hidden group cursor-pointer border border-white/5 ${project.height}`}
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay that slides up */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gold border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-[#D4AF37]/50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Expand icon */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-[#D4AF37] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Expand size={14} className="text-[#0A0A0A]" />
      </motion.div>

      {/* Content that slides up from bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: "100%" }}
        animate={{ y: hovered ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-6 h-px bg-[#D4AF37] mb-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
          {project.category}
        </p>
        <h3 className="text-lg font-semibold font-['Oswald'] uppercase text-white mt-1">
          {project.title}
        </h3>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="projects"
      ref={ref}
      data-testid="projects-section"
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
                Portfolio
              </p>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white"
              >
                Featured Projects
              </motion.h2>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.05 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block text-8xl font-black font-['Oswald'] uppercase text-white"
          >
            {String(projects.length).padStart(2, "0")}
          </motion.span>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} onClick={setLightbox} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          data-testid="project-lightbox"
        >
          <motion.button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            data-testid="lightbox-close-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                {lightbox.category}
              </p>
              <h3 className="text-2xl font-bold font-['Oswald'] uppercase text-white mt-1">
                {lightbox.title}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
