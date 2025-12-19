import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
