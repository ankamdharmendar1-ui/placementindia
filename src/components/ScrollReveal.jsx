import React, { useState, useEffect, useRef } from 'react';

/**
 * A highly optimized, React-safe ScrollReveal component.
 * Uses an IntersectionObserver to toggle the visibility state.
 * Once visible, it unobserves the element to prevent duplicate triggers.
 */
export default function ScrollReveal({
  children,
  className = '',
  activeClass = 'visible',
  threshold = 0.02,
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the component is in view, we can stop observing to optimize performance
          observer.unobserve(currentRef);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? activeClass : ''}`}
      {...props}
    >
      {children}
    </Component>
  );
}
