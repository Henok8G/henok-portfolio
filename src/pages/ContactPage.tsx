import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { Mail, Phone, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Henok8G", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/henok-getachew-zerihun/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/HakiChang17258", label: "Twitter" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_l8zbev7",
      "template_rb8hdnk",
      {
        email: formData.email,
        message: formData.message,
      },
      "cNpVP0GWrlMAjydi6"
    );

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Something went wrong");
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-background to-background" />
        
        {/* Unique geometric pattern for contact page */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 45%, hsl(0 0% 15% / 0.03) 45%, hsl(0 0% 15% / 0.03) 55%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, hsl(0 0% 15% / 0.03) 45%, hsl(0 0% 15% / 0.03) 55%, transparent 55%)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-64 h-64 border border-silver/5 rounded-full blur-sm" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-silver/5 rotate-12" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-body text-muted-foreground tracking-widest uppercase"
            >
              Let's Connect
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto"
            >
              Have an idea, project, or collaboration in mind? Let's talk.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-silver/3 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground font-body">
                    Feel free to reach out through any of the following channels. I typically respond within 24 hours.
                  </p>
                </div>

                {/* Contact cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 transition-all duration-300">
                        <Mail className="w-5 h-5 text-silver" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground font-body uppercase tracking-wider">
                          Email
                        </span>
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com"
                          className="text-foreground font-body hover:text-silver transition-colors duration-300"
                        >
                          henryman143143@gmial.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
                  >
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
                          +251 924 43 1809
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group p-6 bg-card/30 border border-border/30 rounded-xl hover:border-silver/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary/50 border border-border/30 rounded-xl group-hover:border-silver/20 transition-all duration-300">
                        <MapPin className="w-5 h-5 text-silver" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground font-body uppercase tracking-wider">
                          Location
                        </span>
                        <span className="text-foreground font-body">
                          Addis Ababa, Ethiopia
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Social links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4"
                >
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
                </motion.div>

                {/* Hire Me Button */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  href="mailto:hello@henok.dev?subject=Job Opportunity"
                  className="group block w-full px-8 py-4 border-2 border-silver/30 text-foreground font-heading font-semibold text-sm tracking-wide rounded-xl hover:bg-silver/10 hover:border-silver/50 transition-all duration-300 text-center"
                >
                  Hire Me
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </motion.a>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="p-8 bg-card/30 border border-border/30 rounded-2xl">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-body mb-8">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-5 py-4 bg-background/50 border border-border/30 rounded-xl text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:bg-background transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-background/50 border border-border/30 rounded-xl text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:bg-background transition-all duration-300"
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
                        className="w-full px-5 py-4 bg-background/50 border border-border/30 rounded-xl text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-silver/50 focus:bg-background transition-all duration-300 resize-none"
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
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;