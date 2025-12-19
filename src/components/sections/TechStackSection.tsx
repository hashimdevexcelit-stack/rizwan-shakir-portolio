import { motion } from 'framer-motion';
import { useState } from 'react';

// Tech stack icons with labels
const techStack = {
  row1: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Docker', icon: '🐳' },
  ],
  row2: [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '📦' },
    { name: 'Kubernetes', icon: '⎈' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Django', icon: '🎸' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'React Native', icon: '📱' },
  ],
  row3: [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Elasticsearch', icon: '🔍' },
    { name: 'RabbitMQ', icon: '🐰' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Firebase', icon: '🔶' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Vercel', icon: '▲' },
    { name: 'GitHub', icon: '🐙' },
  ],
};

interface TechItemProps {
  name: string;
  icon: string;
}

const TechItem = ({ name, icon }: TechItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center w-20 h-20 mx-4 rounded-xl bg-card border border-border cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.15, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-3xl">{icon}</span>
      
      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-lg whitespace-nowrap z-10"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        {name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

interface ScrollingRowProps {
  items: TechItemProps[];
  direction: 'left' | 'right';
  speed?: number;
}

const ScrollingRow = ({ items, direction, speed = 30 }: ScrollingRowProps) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 group">
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? [0, -50 * items.length * 2] : [-50 * items.length * 2, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{ width: 'fit-content' }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {duplicatedItems.map((tech, index) => (
          <TechItem key={`${tech.name}-${index}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

export const TechStackSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block font-mono text-sm text-primary uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            // Tech Stack
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Expertise in Modern{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge tools and frameworks to build scalable, performant, 
            and innovative solutions that drive business success.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Tech Rows */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="space-y-2">
          <ScrollingRow items={techStack.row1} direction="left" speed={40} />
          <ScrollingRow items={techStack.row2} direction="right" speed={35} />
          <ScrollingRow items={techStack.row3} direction="left" speed={45} />
        </div>
      </div>
    </section>
  );
};
