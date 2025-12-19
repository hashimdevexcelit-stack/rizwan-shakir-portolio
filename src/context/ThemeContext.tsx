import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event: React.MouseEvent) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = useCallback((event: React.MouseEvent) => {
    if (isTransitioning) return;

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      setIsTransitioning(true);
      
      const transition = document.startViewTransition(() => {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      });
      
      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        
        document.documentElement.animate(
          { clipPath: theme === 'dark' ? clipPath : clipPath.reverse() },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
      
      transition.finished.then(() => {
        setIsTransitioning(false);
      });
    } else {
      // Fallback for browsers without View Transitions API
      setIsTransitioning(true);
      
      // Create overlay for animation
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        pointer-events: none;
        background: ${newTheme === 'dark' ? 'hsl(250, 20%, 4%)' : 'hsl(0, 0%, 98%)'};
        clip-path: circle(0px at ${x}px ${y}px);
        transition: clip-path 500ms ease-in-out;
      `;
      document.body.appendChild(overlay);
      overlayRef.current = overlay;

      requestAnimationFrame(() => {
        overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
      });

      setTimeout(() => {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.remove();
            overlayRef.current = null;
          }
          setIsTransitioning(false);
        }, 100);
      }, 400);
    }
  }, [theme, isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
