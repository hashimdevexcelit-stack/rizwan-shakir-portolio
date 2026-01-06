import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, Palette, Globe, Zap, Database, Shield } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Developing responsive, high-performance websites and web applications using modern technologies.',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'API Integration'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting unique brand identities that communicate your values and resonate with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Assets'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust, scalable backend systems and APIs that power your applications reliably.',
    features: ['Database Design', 'REST APIs', 'Cloud Services', 'Microservices'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Globe,
    title: 'E-Commerce Solutions',
    description: 'Creating powerful online stores with seamless checkout experiences and inventory management.',
    features: ['Shopify', 'WooCommerce', 'Payment Integration', 'Analytics'],
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing your digital products for speed, SEO, and overall performance to maximize impact.',
    features: ['Speed Optimization', 'SEO', 'Core Web Vitals', 'Accessibility'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Consulting & Strategy',
    description: 'Providing expert guidance on technology decisions, digital transformation, and product strategy.',
    features: ['Tech Audit', 'Roadmap Planning', 'Team Training', 'Architecture Review'],
    color: 'from-teal-500 to-cyan-500',
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">
              // What I Offer
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your ideas into exceptional products
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground mb-6">
              Ready to start your project? Let's discuss how I can help bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;