import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" ref={ref} className="relative section-spacing overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-silver/3 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 gradient-text">
              Let's Work Together
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something 
              amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-card/50 border border-border/30 rounded-xl text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:bg-card transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-5 py-4 bg-card/50 border border-border/30 rounded-xl text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:bg-card transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-foreground text-background font-heading font-semibold text-sm tracking-wide rounded-xl hover:bg-silver transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 transition-all duration-300">
                    <Mail className="w-5 h-5 text-silver" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground font-body uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href="mailto:hello@henok.dev"
                      className="text-foreground font-body hover:text-silver transition-colors duration-300"
                    >
                      hello@henok.dev
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 transition-all duration-300">
                    <Phone className="w-5 h-5 text-silver" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground font-body uppercase tracking-wider">
                      Phone
                    </span>
                    <a
                      href="tel:+1234567890"
                      className="text-foreground font-body hover:text-silver transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <span className="block text-xs text-muted-foreground font-body uppercase tracking-wider">
                  Follow Me
                </span>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-4 bg-card/30 border border-border/30 rounded-xl hover:border-silver/30 hover:bg-card/50 transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hire Me CTA */}
              <a
                href="mailto:hello@henok.dev?subject=Job Opportunity"
                className="group block w-full px-8 py-4 border border-silver/30 text-foreground font-heading font-semibold text-sm tracking-wide rounded-xl hover:bg-silver/10 transition-all duration-300 text-center"
              >
                Hire Me
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
