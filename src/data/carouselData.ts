import type { CarouselItem } from '../types/carousel.types';

export const carouselItems: CarouselItem[] = [
  {
    id: 'slide-1',
    title: 'Welcome to Accessible Carousel',
    description:
      'This carousel demonstrates best practices for accessibility, including full keyboard navigation, ARIA attributes, and screen reader support.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain landscape with lake and trees',
  },
  {
    id: 'slide-2',
    title: 'Keyboard Navigation',
    description:
      'Navigate using Arrow keys, Home, End, Page Up, and Page Down. All controls are fully keyboard accessible and include proper focus indicators.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=600&fit=crop',
    alt: 'Beautiful sunset over mountains',
  },
  {
    id: 'slide-3',
    title: 'Screen Reader Support',
    description:
      'Tested with NVDA and other screen readers. Dynamic announcements inform users of slide changes and carousel state.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
    alt: 'Forest path in autumn colors',
  },
  {
    id: 'slide-4',
    title: 'Performance Optimized',
    description:
      'Lazy loading images, memoized components, and efficient rendering ensure smooth performance across all devices.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop',
    alt: 'Ocean waves on a beach',
  },
  {
    id: 'slide-5',
    title: 'WCAG 2.1 AA Compliant',
    description:
      'Follows Web Content Accessibility Guidelines with proper color contrast, focus indicators, and semantic HTML structure.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    alt: 'Serene lake surrounded by mountains',
  },
];

