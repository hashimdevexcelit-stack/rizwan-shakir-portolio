import { motion } from 'framer-motion';
import { Download, MessageCircle, Award, Briefcase, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rizwanImage from '@/assets/rizwan-shakir.jfif';

const highlights = [
  { icon: Award, label: '10+ Years Experience' },
  { icon: Briefcase, label: 'CEO & Founder' },
  { icon: Code, label: 'Full Stack Expert' },
  { icon: Users, label: 'Team Leader' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-r from-primary/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full scale-75 opacity-60 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500 -z-10" />
              
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 group-hover:scale-105 transition-transform duration-500 ease-out">
                <img
                  src={rizwanImage}
                  alt="Rizwan Shakir"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10 hidden lg:block" />
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/20 blur-xl hidden lg:block"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-purple-glow/20 blur-xl hidden lg:block"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Stats floating card */}
              <motion.div
                className="absolute -right-4 bottom-20 bg-card border border-border rounded-xl p-4 shadow-lg hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold">150+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.span
              className="inline-block font-mono text-sm text-primary uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              // About Me
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Turning Vision Into{' '}
              <span className="gradient-text">Digital Reality</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-4 text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                As the CEO of DevExcel IT Solutions, I've dedicated over a decade to mastering 
                the art of software development and digital transformation. My journey began 
                as a passionate developer, and through years of hands-on experience and 
                continuous learning, I've evolved into a technology leader.
              </p>
              <p>
                I believe in building solutions that not only solve problems but create 
                lasting value. Whether it's architecting scalable systems, leading 
                cross-functional teams, or strategizing digital roadmaps for enterprises, 
                I bring a unique blend of technical expertise and business acumen.
              </p>
              <p>
                My mission is to empower businesses with cutting-edge technology solutions 
                that drive growth, efficiency, and innovation. Let's build the future together.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
                  whileHover={{ scale: 1.02, backgroundColor: 'hsl(var(--accent))' }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
