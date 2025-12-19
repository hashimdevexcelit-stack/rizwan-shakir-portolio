import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What services does DevExcel offer?', a: 'We provide full-stack development, cloud solutions, AI integration, mobile apps, and technical consulting for businesses of all sizes.' },
  { q: 'How do you approach new projects?', a: 'We start with discovery, then move to planning, agile development, testing, and deployment with ongoing support.' },
  { q: 'What is your typical project timeline?', a: 'Timelines vary by scope. Small projects take 2-4 weeks, medium 2-3 months, and enterprise solutions 6+ months.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes, we provide maintenance packages including updates, monitoring, security patches, and feature enhancements.' },
  { q: 'What technologies do you specialize in?', a: 'React, Next.js, Node.js, Python, AWS, and more. We choose the best tech stack for each project.' },
  { q: 'How can I get started?', a: 'Schedule a call through the website, and we\'ll discuss your needs and provide a tailored proposal.' },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">// FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Common <span className="gradient-text">Questions</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <AccordionItem value={`item-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
