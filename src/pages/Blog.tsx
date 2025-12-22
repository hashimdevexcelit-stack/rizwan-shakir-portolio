import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tags = ['All', 'React', 'TypeScript', 'Node.js', 'Design', 'AI', 'Cloud', 'Mobile'];

export const blogs = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the best practices for creating maintainable and type-safe React applications using TypeScript and modern patterns.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    tags: ['React', 'TypeScript'],
    author: 'Rizwan Shakir',
    content: `TypeScript has become the de facto standard for building large-scale React applications. In this comprehensive guide, we'll explore the best practices and patterns that will help you create maintainable, type-safe applications.

## Why TypeScript?

TypeScript provides static type checking, which catches errors at compile time rather than runtime. This leads to fewer bugs, better documentation, and improved developer experience with enhanced IDE support.

## Setting Up Your Project

Start by creating a new project with Vite and TypeScript support...

## Best Practices

1. **Use Strict Mode** - Enable strict mode in your tsconfig.json
2. **Define Proper Types** - Create interfaces for your data structures
3. **Leverage Generics** - Use generics for reusable components
4. **Avoid Any** - The any type defeats the purpose of TypeScript`,
  },
  {
    id: 2,
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is transforming the way we build and interact with web applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    date: 'Dec 12, 2024',
    readTime: '6 min read',
    tags: ['AI', 'Design'],
    author: 'Rizwan Shakir',
    content: `Artificial Intelligence is revolutionizing web development in ways we never imagined. From code generation to automated testing, AI tools are becoming indispensable for modern developers.

## AI-Powered Development Tools

Tools like GitHub Copilot, ChatGPT, and Claude are changing how developers write code. These AI assistants can generate boilerplate code, suggest improvements, and even help debug issues.

## The Impact on Design

AI is also transforming design with tools that can generate UI components, suggest color schemes, and even create entire layouts based on simple prompts.`,
  },
  {
    id: 3,
    title: 'Mastering Node.js Performance Optimization',
    excerpt: 'Discover techniques to optimize your Node.js applications for better performance and scalability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
    tags: ['Node.js', 'Cloud'],
    author: 'Rizwan Shakir',
    content: `Node.js performance optimization is crucial for building fast, responsive applications. In this guide, we'll explore various techniques to squeeze every bit of performance from your Node.js apps.

## Understanding the Event Loop

The event loop is at the heart of Node.js. Understanding how it works is essential for writing performant code.

## Optimization Techniques

1. **Use Caching** - Implement Redis or in-memory caching
2. **Optimize Database Queries** - Use indexes and query optimization
3. **Implement Load Balancing** - Distribute traffic across multiple instances`,
  },
  {
    id: 4,
    title: 'Modern CSS Techniques for Beautiful UIs',
    excerpt: 'Learn about the latest CSS features and techniques to create stunning user interfaces.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop',
    date: 'Dec 8, 2024',
    readTime: '7 min read',
    tags: ['Design'],
    author: 'Rizwan Shakir',
    content: `CSS has evolved significantly over the years. Modern CSS provides powerful features that make creating beautiful, responsive UIs easier than ever.

## CSS Grid and Flexbox

These layout systems have revolutionized how we build web layouts. Combined, they provide unparalleled flexibility for any design.

## CSS Variables

Custom properties enable dynamic theming and make maintaining large stylesheets much easier.`,
  },
  {
    id: 5,
    title: 'Building Cross-Platform Mobile Apps with React Native',
    excerpt: 'A comprehensive guide to developing mobile applications that work on both iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    date: 'Dec 5, 2024',
    readTime: '9 min read',
    tags: ['React', 'Mobile'],
    author: 'Rizwan Shakir',
    content: `React Native allows developers to build native mobile apps using JavaScript and React. This guide covers everything from setup to deployment.

## Getting Started

Setting up React Native development environment for both iOS and Android development.

## Core Concepts

Understanding components, navigation, state management, and native modules.`,
  },
  {
    id: 6,
    title: 'Serverless Architecture with AWS Lambda',
    excerpt: 'Explore the benefits and implementation strategies for serverless computing on AWS.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    date: 'Dec 3, 2024',
    readTime: '8 min read',
    tags: ['Cloud', 'Node.js'],
    author: 'Rizwan Shakir',
    content: `Serverless computing is changing how we deploy and scale applications. AWS Lambda leads the way with its robust platform for running code without managing servers.

## Benefits of Serverless

- Pay only for what you use
- Automatic scaling
- Reduced operational overhead

## Best Practices

Learn how to structure your Lambda functions for optimal performance and maintainability.`,
  },
  {
    id: 7,
    title: 'GraphQL vs REST: Choosing the Right API',
    excerpt: 'An in-depth comparison of GraphQL and REST APIs to help you make the right choice for your project.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    date: 'Nov 30, 2024',
    readTime: '6 min read',
    tags: ['Node.js', 'TypeScript'],
    author: 'Rizwan Shakir',
    content: `Choosing between GraphQL and REST can be challenging. Both have their strengths and use cases. This article helps you make an informed decision.

## REST APIs

Traditional approach with well-defined endpoints for each resource.

## GraphQL

A query language that allows clients to request exactly the data they need.`,
  },
  {
    id: 8,
    title: 'Design Systems: Building Consistent UIs',
    excerpt: 'Learn how to create and maintain a design system for consistent, scalable user interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    tags: ['Design', 'React'],
    author: 'Rizwan Shakir',
    content: `A design system is a collection of reusable components and guidelines that ensure consistency across your application.

## Components of a Design System

- Color palette
- Typography
- Spacing
- Components
- Patterns

## Building Your System

Start with foundational elements and progressively build more complex components.`,
  },
  {
    id: 9,
    title: 'Introduction to Machine Learning with TensorFlow.js',
    excerpt: 'Get started with machine learning in the browser using TensorFlow.js.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    tags: ['AI', 'TypeScript'],
    author: 'Rizwan Shakir',
    content: `TensorFlow.js brings the power of machine learning to JavaScript developers. Run ML models directly in the browser or Node.js.

## Getting Started

Install TensorFlow.js and run your first model.

## Pre-trained Models

Use pre-trained models for common tasks like image classification and object detection.`,
  },
  {
    id: 10,
    title: 'Microservices Architecture Best Practices',
    excerpt: 'Essential patterns and practices for building robust microservices architectures.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    date: 'Nov 22, 2024',
    readTime: '9 min read',
    tags: ['Node.js', 'Cloud'],
    author: 'Rizwan Shakir',
    content: `Microservices architecture breaks down monolithic applications into smaller, independent services. This guide covers essential patterns for success.

## Key Principles

- Single responsibility
- Decentralized data management
- Independent deployment

## Communication Patterns

Learn about synchronous and asynchronous communication between services.`,
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const navigate = useNavigate();

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === 'All' || blog.tags.includes(activeTag);
    return matchesSearch && matchesTag;
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
              // Our Blog
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Insights & <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on development, design, and technology
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                  className="rounded-full"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="mt-4 group-hover:text-primary">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
