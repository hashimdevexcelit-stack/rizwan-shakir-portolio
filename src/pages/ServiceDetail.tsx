import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Users, Star, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Globe, Database, Palette, ShoppingCart, Cloud, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'Full-stack web applications built with modern technologies like React, Node.js, and TypeScript.',
    fullDescription: 'We create powerful, scalable web applications tailored to your specific business needs. Our team uses the latest technologies and best practices to deliver high-performance solutions that drive results. From complex enterprise applications to elegant marketing websites, we handle it all with precision and care.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'TypeScript'],
    price: '$2,500',
    duration: '2-4 weeks',
    category: 'Development',
    icon: Code,
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'API Integration', 'Database Design', 'Security Implementation'],
    process: ['Discovery & Planning', 'Design & Prototyping', 'Development', 'Testing & QA', 'Deployment', 'Maintenance'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native.',
    fullDescription: 'Build powerful mobile experiences that your users will love. We specialize in React Native development, allowing us to create beautiful, performant apps for both iOS and Android from a single codebase. Our mobile solutions are designed for scalability and user engagement.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    tags: ['React Native', 'iOS', 'Android'],
    price: '$4,000',
    duration: '4-8 weeks',
    category: 'Mobile',
    icon: Smartphone,
    features: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'Native Performance', 'App Store Optimization', 'Analytics Integration'],
    process: ['Requirements Analysis', 'UI/UX Design', 'Development', 'Beta Testing', 'Store Submission', 'Post-Launch Support'],
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    fullDescription: 'Launch your online store with confidence. We build comprehensive e-commerce solutions that handle everything from product catalogs to secure payments. Our platforms are optimized for conversions and designed to scale with your business growth.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tags: ['Shopify', 'Stripe', 'WooCommerce'],
    price: '$3,500',
    duration: '3-6 weeks',
    category: 'Development',
    icon: ShoppingCart,
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Portal', 'Analytics Dashboard', 'Multi-Currency Support'],
    process: ['Store Planning', 'Design & Branding', 'Platform Setup', 'Product Import', 'Testing', 'Launch & Training'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with comprehensive UX research and testing.',
    fullDescription: 'Create memorable digital experiences with our expert design team. We combine aesthetics with functionality to deliver interfaces that users love. Our process includes thorough research, prototyping, and user testing to ensure optimal results.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    tags: ['Figma', 'Prototyping', 'User Research'],
    price: '$1,800',
    duration: '1-3 weeks',
    category: 'Design',
    icon: Palette,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design System', 'Handoff Documentation'],
    process: ['Research & Discovery', 'Wireframes', 'Visual Design', 'Prototyping', 'User Testing', 'Final Delivery'],
  },
  {
    id: 5,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure design and implementation on AWS, GCP, or Azure.',
    fullDescription: 'Build a robust, scalable infrastructure that grows with your business. We design and implement cloud solutions that are secure, cost-effective, and highly available. Our expertise spans all major cloud providers.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    tags: ['AWS', 'GCP', 'Docker'],
    price: '$5,000',
    duration: '2-4 weeks',
    category: 'Cloud',
    icon: Cloud,
    features: ['Infrastructure Design', 'Auto-Scaling', 'Load Balancing', 'Security Setup', 'Monitoring', 'Cost Optimization'],
    process: ['Assessment', 'Architecture Design', 'Setup', 'Migration', 'Testing', 'Documentation'],
  },
  {
    id: 6,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with authentication, rate limiting, and documentation.',
    fullDescription: 'Power your applications with robust, well-documented APIs. We build scalable backend services that handle millions of requests while maintaining security and performance. Our APIs are designed for easy integration and long-term maintainability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    tags: ['REST', 'GraphQL', 'OAuth'],
    price: '$2,000',
    duration: '2-3 weeks',
    category: 'Development',
    icon: Database,
    features: ['RESTful Design', 'GraphQL Support', 'Authentication', 'Rate Limiting', 'Documentation', 'Versioning'],
    process: ['API Design', 'Development', 'Testing', 'Documentation', 'Deployment', 'Monitoring'],
  },
  {
    id: 7,
    title: 'Website Redesign',
    description: 'Transform your existing website with modern design principles and improved UX.',
    fullDescription: 'Give your website a fresh, modern look that converts visitors into customers. We analyze your current site, identify improvement opportunities, and deliver a redesign that aligns with your brand and business goals.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    tags: ['Redesign', 'Responsive', 'SEO'],
    price: '$2,200',
    duration: '2-4 weeks',
    category: 'Design',
    icon: Globe,
    features: ['Modern Design', 'Mobile-First', 'SEO Optimization', 'Performance', 'Accessibility', 'Content Migration'],
    process: ['Audit', 'Strategy', 'Design', 'Development', 'Content Migration', 'Launch'],
  },
  {
    id: 8,
    title: 'Security Audit',
    description: 'Comprehensive security assessment and vulnerability testing for your applications.',
    fullDescription: 'Protect your business with thorough security assessments. We identify vulnerabilities before they become problems, providing detailed reports and actionable recommendations to strengthen your security posture.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    tags: ['Penetration Testing', 'OWASP', 'Compliance'],
    price: '$3,000',
    duration: '1-2 weeks',
    category: 'Security',
    icon: Shield,
    features: ['Vulnerability Scan', 'Penetration Testing', 'Code Review', 'Compliance Check', 'Risk Assessment', 'Remediation Plan'],
    process: ['Scope Definition', 'Testing', 'Analysis', 'Reporting', 'Remediation Support', 'Re-Testing'],
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === Number(id));

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/services')}
              className="mb-8 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Image & Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{service.duration}</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Clients</p>
                  <p className="font-semibold">50+</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-4 text-center">
                  <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="font-semibold">4.9/5</p>
                </div>
              </div>

              {/* Process */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Our Process</h3>
                <div className="space-y-3">
                  {service.process.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4">{service.category}</Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              
              <p className="text-muted-foreground text-lg mb-6">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Starting at</span>
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
                <Link to="/contact">
                  <Button className="w-full gap-2" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    Get Started
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Have questions? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a free consultation.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
