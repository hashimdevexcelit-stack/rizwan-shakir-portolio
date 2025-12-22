import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'assistant',
    content: "Hello! I'm the DevExcel AI Assistant. I can help you with questions about our services, discuss your project ideas, or provide guidance on technology solutions. How can I assist you today?",
  },
];

const sampleResponses = [
  "That's a great question! DevExcel specializes in custom web development, mobile apps, cloud solutions, and UI/UX design. Based on your requirements, I'd recommend starting with a consultation to understand your specific needs better.",
  "I'd be happy to help with that! Our team has extensive experience in React, Node.js, and cloud architecture. We can build scalable solutions that grow with your business.",
  "Absolutely! Our typical project timeline ranges from 4-12 weeks depending on complexity. We follow agile methodology with regular updates and demonstrations.",
  "Great point! Security is a top priority for us. We implement industry-standard practices including encryption, secure authentication, and regular security audits.",
  "That sounds like an exciting project! I'd suggest scheduling a call with our team to discuss the specifics. You can use the 'Schedule a Call' button in the navigation.",
  "We offer flexible engagement models - fixed price projects, hourly consulting, or dedicated team arrangements. What works best for you depends on your project scope and timeline.",
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500));

    const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content: randomResponse,
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-8 flex flex-col">
        <div className="container mx-auto px-6 flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Assistant</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Chat with <span className="gradient-text">DevExcel AI</span>
            </h1>
            <p className="text-muted-foreground">
              Get instant answers about our services and solutions
            </p>
          </motion.div>

          {/* Chat Container */}
          <motion.div 
            className="flex-1 bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Messages */}
            <ScrollArea className="flex-1 p-6" ref={scrollRef}>
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'assistant' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary'
                      }`}>
                        {message.role === 'assistant' ? (
                          <Bot className="w-5 h-5" />
                        ) : (
                          <User className="w-5 h-5" />
                        )}
                      </div>
                      <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : ''}`}>
                        <div className={`inline-block p-4 rounded-2xl ${
                          message.role === 'assistant'
                            ? 'bg-secondary text-foreground rounded-tl-none'
                            : 'bg-primary text-primary-foreground rounded-tr-none'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-none p-4">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background/50">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-secondary border-border"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isTyping}
                  className="px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                This is a demo chatbot. For real assistance, please schedule a call.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChat;
