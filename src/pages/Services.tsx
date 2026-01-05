import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Smartphone, Globe, BarChart3, Activity, Users, ShoppingCart, Truck, Leaf, Film } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Import project images
import herTrackerImg from '@/assets/projects/her-tracker.png';
import mummyTummyImg from '@/assets/projects/mummy-tummy-fix.png';
import captureAiImg from '@/assets/projects/capture-ai.png';
import nodukImg from '@/assets/projects/noduk.png';
import recordoImg from '@/assets/projects/recordo.png';
import autoAzureImg from '@/assets/projects/auto-azure.png';
import beYouSocialImg from '@/assets/projects/be-you-social.png';
import tradeHarmonizerImg from '@/assets/projects/trade-harmonizer.png';
import originoImg from '@/assets/projects/origino.png';
import sergioImg from '@/assets/projects/sergio.png';

const categories = ['All', 'UI/UX Design', 'Mobile App', 'Dashboard', 'Web App', 'E-Commerce'];

const services = [
  {
    id: 1,
    title: 'Her Tracker',
    description: 'AI-powered menstrual cycle tracking mobile app with intuitive UI/UX design for women\'s health management.',
    image: herTrackerImg,
    tags: ['Mobile App', 'Health', 'UI/UX'],
    price: '$4,000',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/229083221/Health-and-Fitness-Mobile-APP-UIUX-Design',
  },
  {
    id: 2,
    title: 'Mummy Tummy Fix',
    description: 'Fitness mobile app and admin dashboard designed for postpartum mothers with workout tracking and progress monitoring.',
    image: mummyTummyImg,
    tags: ['Mobile App', 'Fitness', 'Dashboard'],
    price: '$3,800',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/227537255/Health-and-Fitness-App-UIUX-Case-Study-Design',
  },
  {
    id: 3,
    title: 'Capture AI',
    description: 'Conversational AI management dashboard with chat performance analytics, user engagement metrics, and conversion tracking.',
    image: captureAiImg,
    tags: ['Dashboard', 'AI', 'Analytics'],
    price: '$5,500',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/230315489/AdTech-Dashboard-UIUX-Case-Study-Design',
  },
  {
    id: 4,
    title: 'Noduk',
    description: 'Insurance deductible management platform with customer and admin dashboards for claims, coverages, and payment tracking.',
    image: nodukImg,
    tags: ['Dashboard', 'Insurance', 'SaaS'],
    price: '$5,000',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/228598743/Police-Security-Services-UIUX-Design',
  },
  {
    id: 5,
    title: 'Recordo',
    description: 'AI document automation platform that turns voice into documents. Mobile app and admin dashboard with speech-to-text features.',
    image: recordoImg,
    tags: ['Mobile App', 'AI', 'SaaS'],
    price: '$4,500',
    category: 'Mobile App',
    icon: Globe,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
  },
  {
    id: 6,
    title: 'Auto Azure',
    description: 'E-commerce management SaaS platform with order tracking, payment analytics, and automated business insights dashboard.',
    image: autoAzureImg,
    tags: ['SaaS', 'E-Commerce', 'Dashboard'],
    price: '$4,200',
    category: 'E-Commerce',
    icon: ShoppingCart,
    behanceUrl: 'https://www.behance.net/gallery/227602953/E-Commerce-Management-App-UIUX-Design',
  },
  {
    id: 7,
    title: 'Be You Social',
    description: 'Social media mobile application with video sharing, community features, and modern UI/UX design for content creators.',
    image: beYouSocialImg,
    tags: ['Mobile App', 'Social', 'Community'],
    price: '$4,800',
    category: 'Mobile App',
    icon: Users,
    behanceUrl: 'https://www.behance.net/gallery/227993011/Social-Media-App-UI-UX-Design',
  },
  {
    id: 8,
    title: 'Trade Harmonizer',
    description: 'Trade and supply chain management dashboard with shipment tracking, duty mitigation analytics, and HS code challenges.',
    image: tradeHarmonizerImg,
    tags: ['Dashboard', 'Logistics', 'Enterprise'],
    price: '$5,500',
    category: 'Dashboard',
    icon: Truck,
    behanceUrl: 'https://www.behance.net/gallery/228519253/Trade-Supply-Chain-Dashboard-UIUX-Design',
  },
  {
    id: 9,
    title: 'Origino',
    description: 'Premium olive oil brand web application with elegant e-commerce UI, product tracking, and brand storytelling experience.',
    image: originoImg,
    tags: ['Web App', 'E-Commerce', 'Branding'],
    price: '$3,500',
    category: 'Web App',
    icon: Leaf,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
  },
  {
    id: 10,
    title: 'Sergio',
    description: 'AI-powered performance training app for actors with script management, file organization, and creative workflow tools.',
    image: sergioImg,
    tags: ['Mobile App', 'AI', 'Entertainment'],
    price: '$4,000',
    category: 'Mobile App',
    icon: Film,
    behanceUrl: 'https://www.behance.net/gallery/227584757/Entertainment-Management-System-UIUX-Design',
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
                      onClick={() => navigate(`/services/${service.id}`)}
                    >
                      Learn More
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
