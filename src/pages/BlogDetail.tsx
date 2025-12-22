import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogs } from './Blog';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-8 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-serif font-bold text-primary">R</span>
                </div>
                <span className="font-medium">{blog.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden mb-12 aspect-video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-lg text-muted-foreground leading-relaxed mb-8">
              {blog.excerpt}
            </div>
            
            <div className="space-y-6">
              {blog.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-serif text-2xl font-bold mt-12 mb-4 text-foreground">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(Boolean);
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^[\d\-\*]\.\s?|\-\s?/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Share2 className="w-5 h-5" />
                <span>Share this article</span>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-serif text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogs
                .filter(b => b.id !== blog.id && b.tags.some(t => blog.tags.includes(t)))
                .slice(0, 2)
                .map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    className="group bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                  >
                    <div className="flex gap-4">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{relatedBlog.readTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
