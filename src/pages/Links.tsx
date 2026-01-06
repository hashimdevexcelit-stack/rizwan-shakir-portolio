import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Twitter, Instagram, Youtube, Globe, Mail, MessageCircle, Briefcase } from 'lucide-react';
import rizwanImage from '@/assets/rizwan-shakir.jfif';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';

const socialLinks = [
  {
    name: 'Fiverr',
    description: 'Hire me for freelance projects',
    url: 'https://fiverr.com',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10 hover:bg-green-500/20',
  },
  {
    name: 'Upwork',
    description: 'View my Upwork profile',
    url: 'https://upwork.com',
    icon: Briefcase,
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-emerald-500/10 hover:bg-emerald-500/20',
  },
  {
    name: 'Behance',
    description: 'Browse my design portfolio',
    url: 'https://behance.net',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally',
    url: 'https://linkedin.com',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-600/10 hover:bg-blue-600/20',
  },
  {
    name: 'GitHub',
    description: 'Check out my code repositories',
    url: 'https://github.com',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-500/10 hover:bg-gray-500/20',
  },
  {
    name: 'Twitter / X',
    description: 'Follow for tech updates',
    url: 'https://twitter.com',
    icon: Twitter,
    color: 'from-sky-400 to-sky-500',
    bgColor: 'bg-sky-500/10 hover:bg-sky-500/20',
  },
  {
    name: 'Instagram',
    description: 'Behind the scenes & updates',
    url: 'https://instagram.com',
    icon: Instagram,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-500/10 hover:bg-pink-500/20',
  },
  {
    name: 'YouTube',
    description: 'Watch tutorials & vlogs',
    url: 'https://youtube.com',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-500/10 hover:bg-red-500/20',
  },
  {
    name: 'Personal Website',
    description: 'Visit my main website',
    url: 'https://devexcel.com',
    icon: Globe,
    color: 'from-primary to-blue-glow',
    bgColor: 'bg-primary/10 hover:bg-primary/20',
  },
  {
    name: 'Email',
    description: 'Get in touch via email',
    url: 'mailto:hello@devexcel.com',
    icon: Mail,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10 hover:bg-orange-500/20',
  },
  {
    name: 'WhatsApp',
    description: 'Quick chat on WhatsApp',
    url: 'https://wa.me/1234567890',
    icon: MessageCircle,
    color: 'from-green-500 to-green-400',
    bgColor: 'bg-green-500/10 hover:bg-green-500/20',
  },
  {
    name: 'Dribbble',
    description: 'View my design shots',
    url: 'https://dribbble.com',
    icon: Briefcase,
    color: 'from-pink-400 to-pink-500',
    bgColor: 'bg-pink-400/10 hover:bg-pink-400/20',
  },
];

const Links = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Profile Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar with glow */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-110" />
              <motion.img
                src={rizwanImage}
                alt="Rizwan Shakir"
                className="relative w-28 h-28 rounded-full object-cover border-4 border-primary/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              />
            </div>

            <motion.h1 
              className="font-serif text-3xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Rizwan Shakir
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              CEO & Full Stack Developer @ DevExcel IT Solutions
            </motion.p>
            <motion.p 
              className="text-sm text-muted-foreground max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building digital products that make a difference. 10+ years of experience in web & mobile development.
            </motion.p>
          </motion.div>

          {/* Cyberpunk Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-black/80 border border-primary/30 dark:border-cyan-500/30 overflow-hidden transition-all duration-300 hover:border-primary dark:hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Scanline effect - dark mode only */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.03)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 dark:opacity-100" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary dark:border-cyan-400" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary dark:border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary dark:border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary dark:border-cyan-400" />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                {/* Icon with neon glow */}
                <div className="relative mb-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} blur-lg opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-80 transition-opacity`} />
                  <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center border border-white/20`}>
                    <link.icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  </div>
                </div>
                
                {/* Text */}
                <h3 className="font-mono font-bold text-sm text-foreground dark:text-cyan-300 group-hover:text-primary dark:group-hover:text-cyan-100 transition-colors text-center tracking-wider uppercase">
                  {link.name}
                </h3>
                
                {/* Animated border beam on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary dark:via-cyan-400 to-transparent animate-[shimmer_2s_infinite]" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-[shimmer_2s_infinite_reverse]" />
                </div>
                
                {/* External link indicator */}
                <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-muted-foreground dark:text-cyan-500/50 group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground">
              © 2024 DevExcel IT Solutions. All rights reserved.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Links;
