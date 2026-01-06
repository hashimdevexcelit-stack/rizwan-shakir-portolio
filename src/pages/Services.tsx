import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { ArrowRight } from 'lucide-react';

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

          {/* Services Grid with Image Banners */}
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.pricing.starting}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => navigate(`/services/${service.id}`)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
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