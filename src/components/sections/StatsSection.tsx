import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Funnel Project Dashboard',
    tag: 'AdTech UI/UX',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d24dd230315489.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    behanceUrl: 'https://www.behance.net/gallery/230315489/AdTech-Dashboard-UIUX-Case-Study-Design',
  },
  {
    id: 2,
    title: 'HerTracker Mobile App',
    tag: 'Health & Fitness',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47b86f229083221.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    behanceUrl: 'https://www.behance.net/gallery/229083221/Health-and-Fitness-Mobile-APP-UIUX-Design',
  },
  {
    id: 3,
    title: 'ORIGINO Web App',
    tag: 'Food & Beverages',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbf0228930783.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
  },
  {
    id: 4,
    title: 'Police & Security Services',
    tag: 'UI/UX Design',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c818d228598743.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    behanceUrl: 'https://www.behance.net/gallery/228598743/Police-Security-Services-UIUX-Design',
  },
  {
    id: 5,
    title: 'E-Commerce Jewellery',
    tag: 'E-Commerce',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/528357228314207.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    behanceUrl: 'https://www.behance.net/gallery/228314207/E-Commerce-Jewellery-Website-Dashboard-UIUX',
  },
];

const stats = [
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* MacBook Mockup */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Screen Frame */}
          <div
            className="relative rounded-t-2xl bg-card border-8 border-b-0 border-foreground/80 shadow-2xl overflow-hidden"
            style={{ aspectRatio: '16/10' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Screen Bezel */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-foreground/80 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground/30" />
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full pt-6 bg-card overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[currentProject].id}
                  className="absolute inset-0 pt-6"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 pt-6 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-primary/20 text-primary rounded-full mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {projects[currentProject].tag}
                    </motion.span>
                    <motion.h3
                      className="text-2xl md:text-3xl font-serif font-bold mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {projects[currentProject].title}
                    </motion.h3>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(projects[currentProject].behanceUrl, '_blank')}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
              >
                <ChevronLeft className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
              >
                <ChevronRight className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? 'w-6 bg-primary'
                        : 'bg-foreground/30 hover:bg-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* MacBook Bottom */}
          <div className="h-4 bg-gradient-to-b from-foreground/60 to-foreground/40 rounded-b-xl" />
          <div className="h-2 mx-auto w-1/4 bg-foreground/30 rounded-b-lg" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-card border border-border overflow-hidden group card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
