import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up', // fade-up, fade-left, fade-right, scale, fade
  delay = 0,
  threshold = 0.1,
  as: Component = 'div',
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'scroll-animate';
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      case 'fade':
        return 'scroll-animate';
      default:
        return 'scroll-animate';
    }
  };

  const getDelayClass = () => {
    if (delay <= 0) return '';
    if (delay <= 100) return 'stagger-1';
    if (delay <= 200) return 'stagger-2';
    if (delay <= 300) return 'stagger-3';
    if (delay <= 400) return 'stagger-4';
    if (delay <= 500) return 'stagger-5';
    return 'stagger-6';
  };

  return (
    <Component
      ref={ref}
      className={`${getAnimationClass()} ${getDelayClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={delay > 600 ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

// Animated card with hover effects
export function AnimatedCard({
  children,
  className = '',
  hoverEffect = 'lift', // lift, scale, glow
  delay = 0,
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation();

  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover-lift';
      case 'scale':
        return 'hover-scale';
      case 'glow':
        return 'hover-glow';
      default:
        return 'hover-lift';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-animate-scale ${isVisible ? 'visible' : ''} ${getHoverClass()} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

// Staggered list animation
export function AnimatedList({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'fade-up',
  as: Component = 'div',
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'scroll-animate';
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <Component ref={ref} className={className} {...props}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`${getAnimationClass()} ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </Component>
  );
}
