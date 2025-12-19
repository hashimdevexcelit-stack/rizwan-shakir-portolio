import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: 'Rizwan transformed our entire digital infrastructure. His expertise and leadership are unmatched.', rating: 5 },
  { name: 'Michael Chen', role: 'CTO, InnovateCorp', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', text: 'Working with DevExcel was a game-changer. The solutions delivered exceeded all expectations.', rating: 5 },
  { name: 'Emily Davis', role: 'Founder, GrowthLabs', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', text: 'Exceptional technical skills combined with great communication. Highly recommend!', rating: 5 },
  { name: 'David Kim', role: 'VP Engineering, ScaleUp', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'The team delivered a complex project on time and within budget. True professionals.', rating: 5 },
  { name: 'Lisa Wang', role: 'Director, FutureTech', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', text: 'Incredible attention to detail and innovative solutions. A pleasure to work with.', rating: 5 },
];

export const TestimonialsSection = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">// Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">What Clients <span className="gradient-text">Say</span></h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div className="flex gap-6 group" animate={{ x: [0, -50 * testimonials.length * 6] }} transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }} whileHover={{ animationPlayState: 'paused' }}>
          {duplicated.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] p-6 rounded-xl bg-card border border-border">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-serif italic text-lg mb-6">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (<Star key={j} className="w-4 h-4 fill-primary text-primary" />))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
