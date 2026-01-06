import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getServiceById, servicesData } from '@/data/servicesData';
import { ServiceContactForm } from '@/components/ServiceContactForm';

const ServicesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = getServiceById(id || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate('/services')}>Back to Services</Button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  // Get next and previous services for navigation
  const currentIndex = servicesData.findIndex(s => s.id === service.id);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate('/services')}
                className="mb-4 gap-2 text-foreground/80 hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="font-serif text-3xl md:text-5xl font-bold">{service.title}</h1>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-4">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </motion.section>

              {/* Benefits */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Process */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-6">My Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      className="relative flex gap-4 p-5 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {step.step}
                        </h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Technologies */}
              {service.technologies && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="font-serif text-2xl font-bold mb-6">Technologies & Tools</h2>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-32 space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Pricing Card */}
                <div className={`relative overflow-hidden rounded-2xl border border-border bg-card p-6`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                  
                  <h3 className="font-serif text-xl font-bold mb-2">Investment</h3>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {service.pricing.starting}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {service.pricing.note}
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => navigate('/contact')}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={() => navigate('/portfolio')}
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>

                {/* Quick Features */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold">Inquire About This Service</h3>
                      <p className="text-xs text-muted-foreground">Get a personalized quote</p>
                    </div>
                  </div>
                  <ServiceContactForm 
                    serviceName={service.title} 
                    serviceColor={service.color}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation to Other Services */}
          <motion.div
            className="mt-16 pt-12 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-bold mb-6 text-center">Explore Other Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => navigate(`/services/${prevService.id}`)}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-left"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Previous</span>
                  <p className="font-semibold group-hover:text-primary transition-colors">{prevService.title}</p>
                </div>
              </button>
              <button
                onClick={() => navigate(`/services/${nextService.id}`)}
                className="group flex items-center justify-end gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-right"
              >
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Next</span>
                  <p className="font-semibold group-hover:text-primary transition-colors">{nextService.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDetail;