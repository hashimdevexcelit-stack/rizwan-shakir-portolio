import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Code, Smartphone, Globe, Database, Palette, ShoppingCart, Cloud, Shield, BarChart3, Gamepad2, Truck, Gem, Users, Play, Activity, Megaphone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['All', 'UI/UX Design', 'Web App', 'Mobile App', 'Dashboard', 'E-Commerce'];

const services = [
  {
    id: 1,
    title: 'Funnel Project Dashboard',
    description: 'Subscription management dashboard with analytics, license tracking, and conversion funnel visualization.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d24dd230315489.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Dashboard', 'Analytics', 'SaaS'],
    price: '$3,500',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/230315489/AdTech-Dashboard-UIUX-Case-Study-Design',
  },
  {
    id: 2,
    title: 'HerTracker - Mobile App',
    description: 'Health and wellness mobile app UI/UX design for tracking fitness goals and personal health metrics.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47b86f229083221.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Mobile App', 'Health', 'UI/UX'],
    price: '$4,000',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/229083221/Health-and-Fitness-Mobile-APP-UIUX-Design',
  },
  {
    id: 3,
    title: 'ORIGINO - Olive Oil Web App',
    description: 'Premium olive oil brand web application with elegant UI showcasing products and company story.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbf0228930783.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Web App', 'E-Commerce', 'Branding'],
    price: '$2,800',
    category: 'Web App',
    icon: Globe,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
  },
  {
    id: 4,
    title: 'Police & Security Services',
    description: 'Comprehensive UI/UX design for law enforcement officer solutions and security management platform.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c818d228598743.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['UI/UX', 'Government', 'Security'],
    price: '$5,000',
    category: 'UI/UX Design',
    icon: Shield,
    behanceUrl: 'https://www.behance.net/gallery/228598743/Police-Security-Services-UIUX-Design',
  },
  {
    id: 5,
    title: 'Mobile Game Booking',
    description: 'Gaming venue booking and management dashboard with real-time availability and booking tracking.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0553c0228587891.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Dashboard', 'Gaming', 'Booking'],
    price: '$3,200',
    category: 'Dashboard',
    icon: Gamepad2,
    behanceUrl: 'https://www.behance.net/gallery/228587891/Mobile-Game-Booking-Management-UIUX-Design',
  },
  {
    id: 6,
    title: 'Trade & Supply Chain',
    description: 'Enterprise dashboard for trade and supply chain management with real-time logistics tracking.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b1d41228519253.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['Dashboard', 'Logistics', 'Enterprise'],
    price: '$4,500',
    category: 'Dashboard',
    icon: Truck,
    behanceUrl: 'https://www.behance.net/gallery/228519253/Trade-Supply-Chain-Dashboard-UIUX-Design',
  },
  {
    id: 7,
    title: 'E-Commerce Jewellery',
    description: 'Luxury jewellery e-commerce platform with elegant product showcase and admin dashboard.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/528357228314207.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['E-Commerce', 'Luxury', 'Dashboard'],
    price: '$3,800',
    category: 'E-Commerce',
    icon: Gem,
    behanceUrl: 'https://www.behance.net/gallery/228314207/E-Commerce-Jewellery-Website-Dashboard-UIUX',
  },
  {
    id: 8,
    title: 'Be You Social App',
    description: 'Social media mobile application UI/UX design with community features and content sharing.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1fa735227993011.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['Mobile App', 'Social', 'Community'],
    price: '$4,200',
    category: 'Mobile App',
    icon: Users,
    behanceUrl: 'https://www.behance.net/gallery/227993011/Social-Media-App-UI-UX-Design',
  },
  {
    id: 9,
    title: 'Entertainment Management',
    description: 'Comprehensive entertainment management system for events, bookings, and venue management.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a014be227584757.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Web App', 'Entertainment', 'Management'],
    price: '$3,000',
    category: 'Web App',
    icon: Play,
    behanceUrl: 'https://www.behance.net/gallery/227584757/Entertainment-Management-System-UIUX-Design',
  },
  {
    id: 10,
    title: 'SaaS AdTech Platform',
    description: 'Advertising technology SaaS platform with campaign management and performance analytics.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80869e228070589.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['SaaS', 'AdTech', 'Analytics'],
    price: '$5,500',
    category: 'Dashboard',
    icon: Megaphone,
    behanceUrl: 'https://www.behance.net/gallery/228070589/SaaS-AdTech-UIUX-Case-Study-Design',
  },
  {
    id: 11,
    title: 'Mommy Tummy App',
    description: 'Pregnancy and maternity care mobile app with health tracking and milestone monitoring.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d1b05227537255.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Mobile App', 'Health', 'Wellness'],
    price: '$3,500',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/227537255/Health-and-Fitness-App-UIUX-Case-Study-Design',
  },
  {
    id: 12,
    title: 'E-Commerce Management',
    description: 'Complete e-commerce management application with inventory, orders, and analytics dashboards.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b28f7227602953.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['E-Commerce', 'Dashboard', 'Management'],
    price: '$4,000',
    category: 'E-Commerce',
    icon: ShoppingCart,
    behanceUrl: 'https://www.behance.net/gallery/227602953/E-Commerce-Management-App-UIUX-Design',
  },
];

const Services = () => {
  const navigate = useNavigate();
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
              // My Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my latest UI/UX designs and digital solutions crafted with passion and precision
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
                placeholder="Search projects..."
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
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(service.behanceUrl, '_blank')}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
