// src/components/FadeInOnScroll.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FadeInOnScroll({ 
  children, 
  delay = 0, 
  threshold = 0.2,
  once = true, // Chỉ animate một lần
  direction = 'up' // 'up', 'down', 'left', 'right'
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Lưu reference để cleanup
    
    if (!currentRef) return; // Kiểm tra ref tồn tại
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!once || !hasAnimated) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentRef);

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect(); // Disconnect observer
    };
  }, []); // Dependency array rỗng

  // Tính toán initial position dựa vào direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      default: return { opacity: 0, y: 50 }; // 'up'
    }
  };

  const getVisiblePosition = () => {
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isVisible ? getVisiblePosition() : getInitialPosition()}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay: isVisible ? delay : 0
      }}
    >
      {children}
    </motion.div>
  );
}