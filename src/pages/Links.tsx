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

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[100px]">
            {socialLinks.map((link, index) => {
              // Define which items should be larger (span 2 cols or 2 rows)
              const isLarge = index === 0 || index === 3 || index === 8;
              const isTall = index === 1 || index === 6;
              const isWide = index === 4 || index === 10;
              
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl border border-border ${link.bgColor} transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between p-4
                    ${isLarge ? 'col-span-2 row-span-2' : ''}
                    ${isTall && !isLarge ? 'row-span-2' : ''}
                    ${isWide && !isLarge ? 'col-span-2' : ''}
                  `}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}>
                    <link.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    {(isLarge || isTall || isWide) && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                        {link.description}
                      </p>
                    )}
                  </div>
                </motion.a>
              );
            })}
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
