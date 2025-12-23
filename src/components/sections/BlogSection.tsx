import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: 'The Future of AI in Software Development', excerpt: 'How artificial intelligence is reshaping the way we build and deploy applications.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', category: 'AI & ML', date: 'Dec 15, 2024', readTime: '8 min' },
  { id: 2, title: 'Building Scalable Microservices', excerpt: 'Best practices for designing and implementing microservices architecture.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', category: 'Architecture', date: 'Dec 10, 2024', readTime: '6 min' },
  { id: 3, title: 'Leadership in Tech: Lessons Learned', excerpt: 'Key insights from a decade of leading development teams and companies.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', category: 'Leadership', date: 'Dec 5, 2024', readTime: '5 min' },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div className="flex items-end justify-between mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">// Blog</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Latest <span className="gradient-text">Insights</span></h2>
          </div>
          <Link to="/blog"><Button variant="outline" className="hidden sm:flex gap-2">View All <ArrowRight className="w-4 h-4" /></Button></Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-xl overflow-hidden bg-card border border-border card-hover cursor-pointer">
                <div className="relative overflow-hidden aspect-video">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">{blog.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{blog.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{blog.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground">{blog.excerpt}</p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
