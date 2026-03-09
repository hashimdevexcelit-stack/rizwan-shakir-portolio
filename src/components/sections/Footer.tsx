import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const links = {
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Links', href: '/links' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/services/1' },
    { label: 'Mobile Apps', href: '/services/2' },
    { label: 'E-Commerce', href: '/services/3' },
    { label: 'UI/UX Design', href: '/services/4' },
    { label: 'Cloud Solutions', href: '/services/5' },
  ],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer id="links" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-foreground">RS</span>
              </div>
              <span className="font-serif text-xl font-semibold">Rizwan<span className="text-primary">Shakir</span></span>
            </div>
            <p className="text-muted-foreground mb-6">Transforming ideas into exceptional digital solutions. Building the future, one project at a time.</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-serif text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Lahore, Pakistan</span></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary flex-shrink-0" /><span>hello@devexcel.io</span></li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary flex-shrink-0" /><span>+92 300 1234567</span></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Rizwan Shakir. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
