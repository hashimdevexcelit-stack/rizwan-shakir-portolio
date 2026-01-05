import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Users, Star, MessageCircle, ExternalLink, BarChart3, Activity, Globe, Shield, Gamepad2, Truck, Gem, Play, Megaphone, ShoppingCart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 1,
    title: 'Funnel Project Dashboard',
    description: 'Subscription management dashboard with analytics, license tracking, and conversion funnel visualization.',
    fullDescription: 'A comprehensive AdTech dashboard solution featuring subscription management, real-time analytics, license expiration tracking, and conversion funnel visualization. Built with modern UI/UX principles to provide actionable insights for marketing teams and business owners.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d24dd230315489.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Dashboard', 'Analytics', 'SaaS'],
    price: '$3,500',
    duration: '2-3 weeks',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/230315489/AdTech-Dashboard-UIUX-Case-Study-Design',
    features: ['Real-time Analytics', 'Subscription Tracking', 'Funnel Visualization', 'License Management', 'Performance Metrics', 'Custom Reports'],
    process: ['Research & Discovery', 'Wireframing', 'Visual Design', 'Prototyping', 'User Testing', 'Final Delivery'],
  },
  {
    id: 2,
    title: 'HerTracker - Mobile App',
    description: 'Health and wellness mobile app UI/UX design for tracking fitness goals and personal health metrics.',
    fullDescription: 'A beautifully designed health and fitness mobile application that empowers users to track their wellness journey. Features include goal setting, progress tracking, personalized recommendations, and community engagement tools.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47b86f229083221.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Mobile App', 'Health', 'UI/UX'],
    price: '$4,000',
    duration: '3-4 weeks',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/229083221/Health-and-Fitness-Mobile-APP-UIUX-Design',
    features: ['Health Tracking', 'Goal Setting', 'Progress Analytics', 'Workout Plans', 'Nutrition Logging', 'Community Features'],
    process: ['User Research', 'Competitive Analysis', 'Wireframes', 'UI Design', 'Prototyping', 'Usability Testing'],
  },
  {
    id: 3,
    title: 'ORIGINO - Olive Oil Web App',
    description: 'Premium olive oil brand web application with elegant UI showcasing products and company story.',
    fullDescription: 'An elegant web application designed for a premium olive oil brand. The design focuses on storytelling, product showcase, and brand heritage while providing a seamless e-commerce experience for customers seeking quality products.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbf0228930783.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Web App', 'E-Commerce', 'Branding'],
    price: '$2,800',
    duration: '2-3 weeks',
    category: 'Web App',
    icon: Globe,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
    features: ['Product Showcase', 'Brand Storytelling', 'E-Commerce Integration', 'Responsive Design', 'Quality Certifications', 'Customer Reviews'],
    process: ['Brand Analysis', 'Content Strategy', 'Visual Design', 'Development', 'Testing', 'Launch'],
  },
  {
    id: 4,
    title: 'Police & Security Services',
    description: 'Comprehensive UI/UX design for law enforcement officer solutions and security management platform.',
    fullDescription: 'A comprehensive security management platform designed for law enforcement agencies. Features include officer management, incident reporting, duty scheduling, and real-time communication tools to enhance operational efficiency.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c818d228598743.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['UI/UX', 'Government', 'Security'],
    price: '$5,000',
    duration: '4-6 weeks',
    category: 'UI/UX Design',
    icon: Shield,
    behanceUrl: 'https://www.behance.net/gallery/228598743/Police-Security-Services-UIUX-Design',
    features: ['Officer Management', 'Incident Reporting', 'Duty Scheduling', 'Real-time Communication', 'Resource Allocation', 'Analytics Dashboard'],
    process: ['Stakeholder Interviews', 'Requirements Analysis', 'System Design', 'UI/UX Design', 'Prototype Testing', 'Documentation'],
  },
  {
    id: 5,
    title: 'Mobile Game Booking',
    description: 'Gaming venue booking and management dashboard with real-time availability and booking tracking.',
    fullDescription: 'A dynamic booking management system for gaming venues. The platform enables customers to book gaming stations, view real-time availability, and manage their gaming sessions while providing venue owners with comprehensive management tools.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0553c0228587891.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Dashboard', 'Gaming', 'Booking'],
    price: '$3,200',
    duration: '2-3 weeks',
    category: 'Dashboard',
    icon: Gamepad2,
    behanceUrl: 'https://www.behance.net/gallery/228587891/Mobile-Game-Booking-Management-UIUX-Design',
    features: ['Real-time Availability', 'Online Booking', 'Session Management', 'Payment Integration', 'Customer Profiles', 'Revenue Analytics'],
    process: ['Market Research', 'User Flow Design', 'Interface Design', 'Booking System', 'Testing', 'Deployment'],
  },
  {
    id: 6,
    title: 'Trade & Supply Chain',
    description: 'Enterprise dashboard for trade and supply chain management with real-time logistics tracking.',
    fullDescription: 'An enterprise-grade supply chain management dashboard providing real-time visibility into logistics operations. Features include shipment tracking, inventory management, vendor coordination, and predictive analytics.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b1d41228519253.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['Dashboard', 'Logistics', 'Enterprise'],
    price: '$4,500',
    duration: '4-5 weeks',
    category: 'Dashboard',
    icon: Truck,
    behanceUrl: 'https://www.behance.net/gallery/228519253/Trade-Supply-Chain-Dashboard-UIUX-Design',
    features: ['Shipment Tracking', 'Inventory Management', 'Vendor Portal', 'Predictive Analytics', 'Document Management', 'Compliance Tracking'],
    process: ['Business Analysis', 'System Architecture', 'Dashboard Design', 'Data Integration', 'Testing', 'Training'],
  },
  {
    id: 7,
    title: 'E-Commerce Jewellery',
    description: 'Luxury jewellery e-commerce platform with elegant product showcase and admin dashboard.',
    fullDescription: 'A sophisticated e-commerce platform for luxury jewellery featuring elegant product presentations, detailed product views, and a comprehensive admin dashboard for inventory and order management.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/528357228314207.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['E-Commerce', 'Luxury', 'Dashboard'],
    price: '$3,800',
    duration: '3-4 weeks',
    category: 'E-Commerce',
    icon: Gem,
    behanceUrl: 'https://www.behance.net/gallery/228314207/E-Commerce-Jewellery-Website-Dashboard-UIUX',
    features: ['Product Gallery', 'Zoom Views', 'Wishlist', 'Admin Dashboard', 'Order Management', 'Customer Analytics'],
    process: ['Brand Research', 'Product Photography Guide', 'UI Design', 'E-Commerce Setup', 'Payment Integration', 'Launch'],
  },
  {
    id: 8,
    title: 'Be You Social App',
    description: 'Social media mobile application UI/UX design with community features and content sharing.',
    fullDescription: 'A vibrant social media application designed to foster genuine connections. Features include content sharing, community building, direct messaging, and personalized feeds that prioritize meaningful interactions.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1fa735227993011.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['Mobile App', 'Social', 'Community'],
    price: '$4,200',
    duration: '4-5 weeks',
    category: 'Mobile App',
    icon: Users,
    behanceUrl: 'https://www.behance.net/gallery/227993011/Social-Media-App-UI-UX-Design',
    features: ['Content Sharing', 'Direct Messaging', 'Community Groups', 'Personalized Feed', 'Story Features', 'Profile Customization'],
    process: ['User Research', 'Feature Planning', 'UI/UX Design', 'Prototype', 'User Testing', 'Iteration'],
  },
  {
    id: 9,
    title: 'Entertainment Management',
    description: 'Comprehensive entertainment management system for events, bookings, and venue management.',
    fullDescription: 'A complete entertainment management solution for event organizers and venue managers. The platform streamlines event planning, ticket sales, artist bookings, and venue scheduling in one unified interface.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a014be227584757.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Web App', 'Entertainment', 'Management'],
    price: '$3,000',
    duration: '3-4 weeks',
    category: 'Web App',
    icon: Play,
    behanceUrl: 'https://www.behance.net/gallery/227584757/Entertainment-Management-System-UIUX-Design',
    features: ['Event Planning', 'Ticket Sales', 'Artist Management', 'Venue Scheduling', 'Revenue Tracking', 'Marketing Tools'],
    process: ['Requirements Gathering', 'System Design', 'UI Design', 'Feature Development', 'Integration', 'Launch'],
  },
  {
    id: 10,
    title: 'SaaS AdTech Platform',
    description: 'Advertising technology SaaS platform with campaign management and performance analytics.',
    fullDescription: 'A powerful advertising technology platform for digital marketers. Features comprehensive campaign management, real-time performance analytics, audience targeting, and ROI optimization tools.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/80869e228070589.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['SaaS', 'AdTech', 'Analytics'],
    price: '$5,500',
    duration: '5-6 weeks',
    category: 'Dashboard',
    icon: Megaphone,
    behanceUrl: 'https://www.behance.net/gallery/228070589/SaaS-AdTech-UIUX-Case-Study-Design',
    features: ['Campaign Management', 'Real-time Analytics', 'Audience Targeting', 'A/B Testing', 'Budget Optimization', 'Custom Reports'],
    process: ['Market Analysis', 'Feature Specification', 'UX Design', 'Dashboard Development', 'Analytics Integration', 'Beta Testing'],
  },
  {
    id: 11,
    title: 'Mommy Tummy App',
    description: 'Pregnancy and maternity care mobile app with health tracking and milestone monitoring.',
    fullDescription: 'A caring companion app for expectant mothers, featuring pregnancy milestone tracking, health monitoring, appointment reminders, and a supportive community. Designed with warmth and accessibility in mind.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d1b05227537255.Y3JvcCwxNjE2LDEyNjQsMCww.png',
    tags: ['Mobile App', 'Health', 'Wellness'],
    price: '$3,500',
    duration: '3-4 weeks',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/227537255/Health-and-Fitness-App-UIUX-Case-Study-Design',
    features: ['Milestone Tracking', 'Health Monitoring', 'Appointment Reminders', 'Community Support', 'Educational Content', 'Photo Journal'],
    process: ['User Research', 'Content Planning', 'UI Design', 'Prototype', 'Medical Review', 'Launch'],
  },
  {
    id: 12,
    title: 'E-Commerce Management',
    description: 'Complete e-commerce management application with inventory, orders, and analytics dashboards.',
    fullDescription: 'A comprehensive e-commerce management solution providing store owners with powerful tools for inventory management, order processing, customer relationship management, and business analytics.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b28f7227602953.Y3JvcCwyMTI4LDE2NjQsMCww.png',
    tags: ['E-Commerce', 'Dashboard', 'Management'],
    price: '$4,000',
    duration: '3-4 weeks',
    category: 'E-Commerce',
    icon: ShoppingCart,
    behanceUrl: 'https://www.behance.net/gallery/227602953/E-Commerce-Management-App-UIUX-Design',
    features: ['Inventory Management', 'Order Processing', 'Customer CRM', 'Sales Analytics', 'Multi-channel Sync', 'Reporting Tools'],
    process: ['Business Analysis', 'Feature Planning', 'UI/UX Design', 'Development', 'Integration', 'Training'],
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
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate('/services')}>Back to Projects</Button>
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
              Back to Projects
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
                <h3 className="font-serif text-xl font-semibold mb-4">Design Process</h3>
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
                <h3 className="font-serif text-xl font-semibold mb-4">Key Features</h3>
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
                <div className="flex gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full gap-2" size="lg">
                      <MessageCircle className="w-5 h-5" />
                      Get Started
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(service.behanceUrl, '_blank')}
                    className="gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Behance
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Have questions? <Link to="/contact" className="text-primary hover:underline">Contact me</Link> for a free consultation.
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
