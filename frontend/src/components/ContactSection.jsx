import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const serviceOptions = [
  "Sliding Windows",
  "Casement Windows",
  "Domal Windows",
  "Aluminium Doors",
  "Glass Partitions",
  "Invisible Grills",
  "Custom Solution",
];

function AnimatedInput({ label, required, children }) {
  return (
    <div className="group">
      <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block group-focus-within:text-[#D4AF37] transition-colors duration-300">
        {label} {required && <span className="text-[#D4AF37]">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "", location: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full bg-[#1A1A1A] border border-white/10 px-4 py-3.5 text-white text-sm focus:border-[#D4AF37]/60 focus:outline-none transition-all duration-300 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.2)]";

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="py-24 lg:py-32 bg-[#121212] relative"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5 }}
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
              Let's Connect
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
              Get In Touch
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info with staggered animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-['Oswald'] uppercase tracking-wide text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  content: (
                    <>
                      <p className="text-white">+91 731 XXX XXXX</p>
                      <p className="text-white">+91 7272 XXX XXX</p>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  label: "Email",
                  content: <p className="text-white">info@highsquarealuminium.com</p>,
                },
                {
                  icon: MapPin,
                  label: "Head Office \u2014 Indore",
                  isGold: true,
                  content: (
                    <p className="text-[#A3A3A3] text-sm">
                      Monalisa Aluminium, MG Road, Indore, MP 452001
                    </p>
                  ),
                },
                {
                  icon: MapPin,
                  label: "Branch \u2014 Dewas",
                  isGold: true,
                  content: (
                    <p className="text-[#A3A3A3] text-sm">
                      High Square Aluminium, AB Road, Dewas, MP 455001
                    </p>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "rgba(212,175,55,0.6)" }}
                    className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/30 flex items-center justify-center transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <p className={`text-xs tracking-[0.15em] uppercase mb-1 ${item.isGold ? "text-[#D4AF37]" : "text-[#A3A3A3]"}`}>
                      {item.label}
                    </p>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                data-testid="contact-success"
                className="h-full flex flex-col items-center justify-center text-center p-8 border border-[#D4AF37]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-[#D4AF37] mb-6" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-semibold font-['Oswald'] uppercase text-white mb-3"
                >
                  Thank You
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#A3A3A3]"
                >
                  We've received your inquiry and will get back to you shortly.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => setSubmitted(false)}
                  data-testid="contact-send-another"
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:opacity-80 transition-opacity"
                >
                  Send Another Inquiry
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <AnimatedInput label="Full Name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      data-testid="contact-name-input"
                      className={inputCls}
                      placeholder="Your name"
                    />
                  </AnimatedInput>
                  <AnimatedInput label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      data-testid="contact-email-input"
                      className={inputCls}
                      placeholder="Your email"
                    />
                  </AnimatedInput>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <AnimatedInput label="Phone">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="contact-phone-input"
                      className={inputCls}
                      placeholder="Your phone"
                    />
                  </AnimatedInput>
                  <AnimatedInput label="Service">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      data-testid="contact-service-select"
                      className={`${inputCls} appearance-none`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </AnimatedInput>
                </div>

                <AnimatedInput label="Location">
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    data-testid="contact-location-select"
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="">Select location</option>
                    <option value="Indore">Indore (Head Office)</option>
                    <option value="Dewas">Dewas (Branch)</option>
                  </select>
                </AnimatedInput>

                <AnimatedInput label="Message" required>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </AnimatedInput>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    data-testid="contact-error"
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-btn"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative border border-[#D4AF37] text-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden group disabled:opacity-50"
                >
                  <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={14} />
                        Send Inquiry
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
