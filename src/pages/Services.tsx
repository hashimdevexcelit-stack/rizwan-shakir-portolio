import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Smartphone, Globe, Database, Palette, ShoppingCart, Cloud, Shield } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Development', 'Design', 'Mobile', 'Cloud', 'Security'];

const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'Full-stack web applications built with modern technologies like React, Node.js, and TypeScript.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ['React', 'Node.js', 'TypeScript'],
    price: '$2,500',
    category: 'Development',
    icon: Code,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    tags: ['React Native', 'iOS', 'Android'],
    price: '$4,000',
    category: 'Mobile',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    tags: ['Shopify', 'Stripe', 'WooCommerce'],
    price: '$3,500',
    category: 'Development',
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with comprehensive UX research and testing.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    tags: ['Figma', 'Prototyping', 'User Research'],
    price: '$1,800',
    category: 'Design',
    icon: Palette,
  },
  {
    id: 5,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure design and implementation on AWS, GCP, or Azure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    tags: ['AWS', 'GCP', 'Docker'],
    price: '$5,000',
    category: 'Cloud',
    icon: Cloud,
  },
  {
    id: 6,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with authentication, rate limiting, and documentation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    tags: ['REST', 'GraphQL', 'OAuth'],
    price: '$2,000',
    category: 'Development',
    icon: Database,
  },
  {
    id: 7,
    title: 'Website Redesign',
    description: 'Transform your existing website with modern design principles and improved UX.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    tags: ['Redesign', 'Responsive', 'SEO'],
    price: '$2,200',
    category: 'Design',
    icon: Globe,
  },
  {
    id: 8,
    title: 'Security Audit',
    description: 'Comprehensive security assessment and vulnerability testing for your applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['Penetration Testing', 'OWASP', 'Compliance'],
    price: '$3,000',
    category: 'Security',
    icon: Shield,
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">
              // Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your business and drive growth
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
