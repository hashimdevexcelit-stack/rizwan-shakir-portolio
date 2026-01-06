import { Code, Smartphone, Layout, Palette, Globe, Zap, Database, Shield, LucideIcon } from 'lucide-react';

// Import service banner images
import uiUxImage from '@/assets/services/ui-ux-design.png';
import mobileImage from '@/assets/services/mobile-development.png';
import webImage from '@/assets/services/web-development.png';
import brandImage from '@/assets/services/brand-identity.png';
import backendImage from '@/assets/services/backend-development.png';
import ecommerceImage from '@/assets/services/ecommerce.png';
import performanceImage from '@/assets/services/performance.png';
import consultingImage from '@/assets/services/consulting.png';

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  color: string;
  image: string;
  benefits: string[];
  process: { step: string; description: string }[];
  technologies?: string[];
  pricing: {
    starting: string;
    note: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: 'ui-ux-design',
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.',
    fullDescription: 'I create beautiful, intuitive user interfaces that not only look stunning but also provide seamless user experiences. My design process is rooted in user research and data-driven decisions, ensuring every element serves a purpose and contributes to your business goals.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    color: 'from-purple-500 to-pink-500',
    image: uiUxImage,
    benefits: [
      'Increased user engagement and satisfaction',
      'Higher conversion rates through intuitive flows',
      'Consistent brand experience across all touchpoints',
      'Reduced development costs through clear specifications',
      'Accessibility-compliant designs for wider reach',
    ],
    process: [
      { step: 'Discovery', description: 'Understanding your business, users, and goals through research and stakeholder interviews.' },
      { step: 'Wireframing', description: 'Creating low-fidelity layouts to establish information architecture and user flows.' },
      { step: 'Visual Design', description: 'Developing high-fidelity mockups with your brand identity and design system.' },
      { step: 'Prototyping', description: 'Building interactive prototypes for user testing and stakeholder review.' },
      { step: 'Handoff', description: 'Delivering design specifications and assets ready for development.' },
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Framer'],
    pricing: {
      starting: '$2,500',
      note: 'Price varies based on project scope and complexity',
    },
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    fullDescription: 'I build high-performance mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution, I deliver polished, feature-rich applications that work flawlessly across all devices.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    color: 'from-blue-500 to-cyan-500',
    image: mobileImage,
    benefits: [
      'Reach users on their preferred devices',
      'Leverage native device capabilities',
      'Offline functionality for better UX',
      'Push notifications for user engagement',
      'App store presence for discoverability',
    ],
    process: [
      { step: 'Planning', description: 'Defining features, user stories, and technical requirements.' },
      { step: 'Design', description: 'Creating platform-specific UI/UX following iOS and Android guidelines.' },
      { step: 'Development', description: 'Building the app with clean, maintainable code architecture.' },
      { step: 'Testing', description: 'Comprehensive testing across devices and OS versions.' },
      { step: 'Launch', description: 'App store submission and post-launch support.' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricing: {
      starting: '$5,000',
      note: 'Price varies based on features and platforms',
    },
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Developing responsive, high-performance websites and web applications using modern technologies.',
    fullDescription: 'I create modern, fast, and scalable web applications using the latest technologies. From simple landing pages to complex web platforms, I deliver solutions that are optimized for performance, SEO, and user experience.',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'API Integration'],
    color: 'from-green-500 to-emerald-500',
    image: webImage,
    benefits: [
      'Lightning-fast page load times',
      'SEO-optimized for better visibility',
      'Responsive design for all devices',
      'Scalable architecture for growth',
      'Easy content management',
    ],
    process: [
      { step: 'Architecture', description: 'Planning the technical stack and system architecture.' },
      { step: 'Frontend', description: 'Building responsive, interactive user interfaces.' },
      { step: 'Backend', description: 'Developing APIs and server-side logic.' },
      { step: 'Integration', description: 'Connecting third-party services and databases.' },
      { step: 'Deployment', description: 'Setting up hosting, CI/CD, and monitoring.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    pricing: {
      starting: '$3,000',
      note: 'Price varies based on complexity and features',
    },
  },
  {
    id: 'brand-identity',
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting unique brand identities that communicate your values and resonate with your target audience.',
    fullDescription: 'I help businesses establish a strong, memorable brand identity that sets them apart from competitors. From logo design to comprehensive brand guidelines, I create cohesive visual systems that communicate your values effectively.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Assets'],
    color: 'from-orange-500 to-amber-500',
    image: brandImage,
    benefits: [
      'Stand out in a crowded market',
      'Build trust and recognition',
      'Consistent messaging across channels',
      'Professional appearance that attracts clients',
      'Scalable design system for future growth',
    ],
    process: [
      { step: 'Research', description: 'Understanding your market, competitors, and target audience.' },
      { step: 'Concept', description: 'Developing initial brand concepts and directions.' },
      { step: 'Design', description: 'Creating the logo, color palette, and typography.' },
      { step: 'Application', description: 'Applying the brand to various touchpoints.' },
      { step: 'Guidelines', description: 'Documenting brand rules for consistent usage.' },
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects'],
    pricing: {
      starting: '$1,500',
      note: 'Price varies based on deliverables',
    },
  },
  {
    id: 'backend-development',
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust, scalable backend systems and APIs that power your applications reliably.',
    fullDescription: 'I architect and build powerful backend systems that form the foundation of your applications. From RESTful APIs to microservices architecture, I create scalable, secure, and maintainable server-side solutions.',
    features: ['Database Design', 'REST APIs', 'Cloud Services', 'Microservices'],
    color: 'from-indigo-500 to-violet-500',
    image: backendImage,
    benefits: [
      'Scalable architecture for millions of users',
      'Secure data handling and storage',
      'Fast API response times',
      'Easy integration with third-party services',
      'Comprehensive documentation',
    ],
    process: [
      { step: 'Architecture', description: 'Designing the system architecture and data models.' },
      { step: 'Database', description: 'Setting up databases and defining schemas.' },
      { step: 'API Development', description: 'Building RESTful or GraphQL APIs.' },
      { step: 'Security', description: 'Implementing authentication and authorization.' },
      { step: 'Deployment', description: 'Cloud deployment with scaling and monitoring.' },
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    pricing: {
      starting: '$4,000',
      note: 'Price varies based on system complexity',
    },
  },
  {
    id: 'ecommerce',
    icon: Globe,
    title: 'E-Commerce Solutions',
    description: 'Creating powerful online stores with seamless checkout experiences and inventory management.',
    fullDescription: 'I build e-commerce solutions that drive sales and provide exceptional shopping experiences. From custom stores to platform integrations, I deliver solutions that make buying and selling easy.',
    features: ['Shopify', 'WooCommerce', 'Payment Integration', 'Analytics'],
    color: 'from-rose-500 to-red-500',
    image: ecommerceImage,
    benefits: [
      'Increased online sales and conversions',
      'Seamless checkout experience',
      'Inventory and order management',
      'Multiple payment gateway options',
      'Analytics and reporting dashboards',
    ],
    process: [
      { step: 'Planning', description: 'Defining product catalog, categories, and features.' },
      { step: 'Platform Setup', description: 'Configuring the e-commerce platform and theme.' },
      { step: 'Customization', description: 'Custom development for unique requirements.' },
      { step: 'Integration', description: 'Payment, shipping, and inventory integrations.' },
      { step: 'Launch', description: 'Testing, optimization, and go-live.' },
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
    pricing: {
      starting: '$2,500',
      note: 'Price varies based on platform and features',
    },
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing your digital products for speed, SEO, and overall performance to maximize impact.',
    fullDescription: 'I analyze and optimize your digital products for maximum performance. From Core Web Vitals to SEO, I ensure your website or app is fast, accessible, and ranks well in search engines.',
    features: ['Speed Optimization', 'SEO', 'Core Web Vitals', 'Accessibility'],
    color: 'from-yellow-500 to-orange-500',
    image: performanceImage,
    benefits: [
      'Faster page load times',
      'Better search engine rankings',
      'Improved user experience',
      'Higher conversion rates',
      'Reduced bounce rates',
    ],
    process: [
      { step: 'Audit', description: 'Comprehensive performance and SEO analysis.' },
      { step: 'Diagnosis', description: 'Identifying bottlenecks and issues.' },
      { step: 'Optimization', description: 'Implementing performance improvements.' },
      { step: 'SEO', description: 'On-page and technical SEO enhancements.' },
      { step: 'Monitoring', description: 'Setting up tracking and ongoing optimization.' },
    ],
    technologies: ['Lighthouse', 'GTmetrix', 'Google Search Console', 'Webpack', 'CDN'],
    pricing: {
      starting: '$1,000',
      note: 'Price varies based on current state and scope',
    },
  },
  {
    id: 'consulting',
    icon: Shield,
    title: 'Consulting & Strategy',
    description: 'Providing expert guidance on technology decisions, digital transformation, and product strategy.',
    fullDescription: 'I provide strategic technology consulting to help businesses make informed decisions. Whether you need a technology roadmap, architecture review, or digital transformation strategy, I offer expert guidance.',
    features: ['Tech Audit', 'Roadmap Planning', 'Team Training', 'Architecture Review'],
    color: 'from-teal-500 to-cyan-500',
    image: consultingImage,
    benefits: [
      'Clear technology roadmap',
      'Reduced technical debt',
      'Better team productivity',
      'Informed technology decisions',
      'Cost-effective solutions',
    ],
    process: [
      { step: 'Assessment', description: 'Understanding current state and challenges.' },
      { step: 'Analysis', description: 'Identifying opportunities and gaps.' },
      { step: 'Strategy', description: 'Developing actionable recommendations.' },
      { step: 'Roadmap', description: 'Creating a prioritized implementation plan.' },
      { step: 'Support', description: 'Ongoing guidance and review sessions.' },
    ],
    technologies: ['Agile', 'Scrum', 'JIRA', 'Confluence', 'Notion'],
    pricing: {
      starting: '$150/hr',
      note: 'Retainer packages available',
    },
  },
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};