import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import rizwanImage from '@/assets/rizwan-shakir.jfif';

const navLinks = [
  { label: 'About', href: '#about', type: 'scroll' },
  { label: 'Services', href: '/services', type: 'route' },
  { label: 'Portfolio', href: '/portfolio', type: 'route' },
  { label: 'Blog', href: '/blog', type: 'route' },
  { label: 'FAQ', href: '#faq', type: 'scroll' },
  { label: 'Links', href: '/links', type: 'route' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-3 glass-strong shadow-lg'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative w-10 h-10 rounded-[50%] bg-primary flex items-center justify-center overflow-hidden">
            <img
              src={rizwanImage}
              alt="Rizwan Shakir"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-purple-glow/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="font-serif text-xl font-semibold hidden sm:block">
            Rizwan<span className="text-primary">Shakir</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            disabled={isTransitioning}
            className={cn(
              'relative w-10 h-10 rounded-full flex items-center justify-center',
              'bg-secondary hover:bg-accent transition-colors',
              'border border-border/50'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Schedule a Call CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300"
              size="default"
              onClick={() => navigate('/contact')}
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border/50 mt-3"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <Button className="mt-4 gap-2 w-full" onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}>
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
