import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Users, Star, ExternalLink, Smartphone, Globe, BarChart3, Activity, Truck, Leaf, Film, ShoppingCart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

const services = [
  {
    id: 1,
    title: 'Her Tracker',
    description: 'AI-powered menstrual cycle tracking mobile app with intuitive UI/UX design for women\'s health management.',
    fullDescription: 'Her Tracker is a comprehensive women\'s health mobile application designed to help users track their menstrual cycles, fertility windows, and overall wellness. The app features an elegant and intuitive interface with a calming color palette that makes daily health tracking effortless and empowering.',
    image: herTrackerImg,
    tags: ['Mobile App', 'Health', 'UI/UX'],
    price: '$4,000',
    duration: '4 weeks',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/229083221/Health-and-Fitness-Mobile-APP-UIUX-Design',
    features: ['Cycle prediction algorithm', 'Symptom tracking', 'Calendar integration', 'Health insights dashboard', 'Reminder notifications', 'Privacy focused'],
    process: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'User Testing', 'Final Delivery'],
  },
  {
    id: 2,
    title: 'Mummy Tummy Fix',
    description: 'Fitness mobile app and admin dashboard designed for postpartum mothers with workout tracking and progress monitoring.',
    fullDescription: 'Mummy Tummy Fix is a specialized fitness application designed for new mothers looking to regain their core strength postpartum. The app includes personalized workout plans, progress tracking, and a comprehensive admin dashboard for fitness coaches to monitor client progress.',
    image: mummyTummyImg,
    tags: ['Mobile App', 'Fitness', 'Dashboard'],
    price: '$3,800',
    duration: '5 weeks',
    category: 'Mobile App',
    icon: Activity,
    behanceUrl: 'https://www.behance.net/gallery/227537255/Health-and-Fitness-App-UIUX-Case-Study-Design',
    features: ['Personalized workout plans', 'Progress tracking', 'Daily checklist', 'Video tutorials', 'Admin dashboard', 'Community support'],
    process: ['Research & Discovery', 'Wireframing', 'Visual Design', 'Prototyping', 'User Testing', 'Final Delivery'],
  },
  {
    id: 3,
    title: 'Capture AI',
    description: 'Conversational AI management dashboard with chat performance analytics, user engagement metrics, and conversion tracking.',
    fullDescription: 'Capture AI is a powerful conversational AI management platform that helps businesses track and optimize their chatbot performance. The dashboard provides comprehensive analytics including chats started, users served, click-to-calls, and conversion rates with beautiful data visualizations.',
    image: captureAiImg,
    tags: ['Dashboard', 'AI', 'Analytics'],
    price: '$5,500',
    duration: '6 weeks',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/230315489/AdTech-Dashboard-UIUX-Case-Study-Design',
    features: ['Real-time analytics', 'Chat performance metrics', 'User engagement tracking', 'Conversion funnel', 'Custom reporting', 'Widget settings'],
    process: ['Business Analysis', 'System Architecture', 'Dashboard Design', 'Data Integration', 'Testing', 'Deployment'],
  },
  {
    id: 4,
    title: 'Noduk',
    description: 'Insurance deductible management platform with customer and admin dashboards for claims, coverages, and payment tracking.',
    fullDescription: 'Noduk is an innovative insurance deductible management platform that simplifies the insurance experience for both customers and administrators. The platform includes comprehensive dashboards for tracking coverages, managing claims, and processing payments across multiple insurance types.',
    image: nodukImg,
    tags: ['Dashboard', 'Insurance', 'SaaS'],
    price: '$5,000',
    duration: '8 weeks',
    category: 'Dashboard',
    icon: BarChart3,
    behanceUrl: 'https://www.behance.net/gallery/228598743/Police-Security-Services-UIUX-Design',
    features: ['Multi-coverage management', 'Claims processing', 'Payment tracking', 'Customer dashboard', 'Admin analytics', 'Mobile app'],
    process: ['Stakeholder Interviews', 'Requirements Analysis', 'System Design', 'UI/UX Design', 'Prototype Testing', 'Documentation'],
  },
  {
    id: 5,
    title: 'Recordo',
    description: 'AI document automation platform that turns voice into documents. Mobile app and admin dashboard with speech-to-text features.',
    fullDescription: 'Recordo revolutionizes document creation by transforming voice recordings into professionally formatted documents. The platform includes a mobile app for recording and a web dashboard for document management, making it perfect for professionals who need to quickly capture and organize their thoughts.',
    image: recordoImg,
    tags: ['Mobile App', 'AI', 'SaaS'],
    price: '$4,500',
    duration: '6 weeks',
    category: 'Mobile App',
    icon: Globe,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
    features: ['Voice-to-document conversion', 'AI transcription', 'Document templates', 'Cloud storage', 'Multi-platform sync', 'Export options'],
    process: ['Market Research', 'Feature Planning', 'UI/UX Design', 'Prototype', 'User Testing', 'Launch'],
  },
  {
    id: 6,
    title: 'Auto Azure',
    description: 'E-commerce management SaaS platform with order tracking, payment analytics, and automated business insights dashboard.',
    fullDescription: 'Auto Azure is a comprehensive e-commerce management solution designed to help online sellers track orders, analyze payments, and gain valuable business insights. The platform supports both light and dark modes and provides detailed analytics for visits, orders, shipments, and revenue.',
    image: autoAzureImg,
    tags: ['SaaS', 'E-Commerce', 'Dashboard'],
    price: '$4,200',
    duration: '5 weeks',
    category: 'E-Commerce',
    icon: ShoppingCart,
    behanceUrl: 'https://www.behance.net/gallery/227602953/E-Commerce-Management-App-UIUX-Design',
    features: ['Order management', 'Payment analytics', 'Shipment tracking', 'Revenue reports', 'Dark/Light modes', 'Real-time data'],
    process: ['Business Analysis', 'Feature Planning', 'UI/UX Design', 'Development', 'Integration', 'Training'],
  },
  {
    id: 7,
    title: 'Be You Social',
    description: 'Social media mobile application with video sharing, community features, and modern UI/UX design for content creators.',
    fullDescription: 'Be You Social is a next-generation social media platform that empowers users to express themselves authentically. With features like video sharing, community feeds, and engagement tracking, the app provides content creators with all the tools they need to build their audience.',
    image: beYouSocialImg,
    tags: ['Mobile App', 'Social', 'Community'],
    price: '$4,800',
    duration: '7 weeks',
    category: 'Mobile App',
    icon: Smartphone,
    behanceUrl: 'https://www.behance.net/gallery/227993011/Social-Media-App-UI-UX-Design',
    features: ['Video sharing', 'Social feed', 'User profiles', 'Engagement analytics', 'Content discovery', 'Direct messaging'],
    process: ['User Research', 'Competitive Analysis', 'Wireframes', 'UI Design', 'Prototyping', 'Usability Testing'],
  },
  {
    id: 8,
    title: 'Trade Harmonizer',
    description: 'Trade and supply chain management dashboard with shipment tracking, duty mitigation analytics, and HS code challenges.',
    fullDescription: 'Trade Harmonizer is an enterprise-grade supply chain management platform designed for international trade operations. The dashboard provides comprehensive visibility into shipments, duty savings, and HS code compliance, helping businesses optimize their global trade operations.',
    image: tradeHarmonizerImg,
    tags: ['Dashboard', 'Logistics', 'Enterprise'],
    price: '$5,500',
    duration: '8 weeks',
    category: 'Dashboard',
    icon: Truck,
    behanceUrl: 'https://www.behance.net/gallery/228519253/Trade-Supply-Chain-Dashboard-UIUX-Design',
    features: ['Shipment tracking', 'Duty mitigation', 'HS code management', 'Analytics dashboard', 'Compliance reporting', 'Cost savings'],
    process: ['Business Analysis', 'System Architecture', 'Dashboard Design', 'Data Integration', 'Testing', 'Training'],
  },
  {
    id: 9,
    title: 'Origino',
    description: 'Premium olive oil brand web application with elegant e-commerce UI, product tracking, and brand storytelling experience.',
    fullDescription: 'Origino is a premium olive oil brand from Turkey that needed an elegant e-commerce presence. The web application showcases their high-quality, traceable extra-virgin olive oil with beautiful product pages, origin tracking, and a seamless shopping experience.',
    image: originoImg,
    tags: ['Web App', 'E-Commerce', 'Branding'],
    price: '$3,500',
    duration: '4 weeks',
    category: 'Web App',
    icon: Leaf,
    behanceUrl: 'https://www.behance.net/gallery/228930783/Food-Beverages-Web-App-UIUX-Design',
    features: ['Product showcase', 'Origin tracking', 'E-commerce checkout', 'Brand storytelling', 'Mobile responsive', 'Quality certifications'],
    process: ['Brand Analysis', 'Content Strategy', 'Visual Design', 'Development', 'Testing', 'Launch'],
  },
  {
    id: 10,
    title: 'Sergio',
    description: 'AI-powered performance training app for actors with script management, file organization, and creative workflow tools.',
    fullDescription: 'Sergio is the ultimate mobile app for actors and performers, providing AI-powered tools for script management, performance tracking, and creative workflow optimization. The app helps actors organize their projects, manage scripts, and track their career progress.',
    image: sergioImg,
    tags: ['Mobile App', 'AI', 'Entertainment'],
    price: '$4,000',
    duration: '5 weeks',
    category: 'Mobile App',
    icon: Film,
    behanceUrl: 'https://www.behance.net/gallery/227584757/Entertainment-Management-System-UIUX-Design',
    features: ['Script management', 'File organization', 'Performance tracking', 'Project folders', 'AI assistance', 'Cloud backup'],
    process: ['User Research', 'Feature Planning', 'UI/UX Design', 'Prototype', 'User Testing', 'Launch'],
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
          <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
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
              onClick={() => navigate('/portfolio')}
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
              <div className="relative rounded-3xl overflow-hidden mb-8 bg-card border border-border">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
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
                  <span className="text-muted-foreground">Starting from</span>
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => navigate('/contact')}
                  >
                    Get This Design
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2" 
                    size="lg"
                    onClick={() => window.open(service.behanceUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Behance
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
