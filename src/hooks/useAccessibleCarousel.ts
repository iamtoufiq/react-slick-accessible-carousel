import { useCallback, useRef, useState, useEffect } from 'react';
import type Slider from 'react-slick';
import type {  UseAccessibleCarouselProps, UseAccessibleCarouselReturn } from '../types/carousel.types';

export const useAccessibleCarousel = ({
  items,
  carouselId = 'accessible-carousel',
  autoplay = false,
  autoplaySpeed = 3000,
}: UseAccessibleCarouselProps): UseAccessibleCarouselReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const sliderRef = useRef<Slider>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  // Generate unique IDs for ARIA relationships
  const carouselRegionId = `${carouselId}-region`;
  const carouselControlsId = `${carouselId}-controls`;
  const carouselLiveId = `${carouselId}-live`;

  // Announce slide changes to screen readers
  const announceSlideChange = useCallback((slideIndex: number) => {
    const item = items[slideIndex];
    if (item) {
      setAnnouncement(
        `Slide ${slideIndex + 1} of ${items.length}: ${item.title}. ${item.description}`
      );
    }
  }, [items]);

  // Handle slide change
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    announceSlideChange(index);
  }, [announceSlideChange]);

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  }, []);

  const goToPrevious = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, []);

  const goToNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'Home':
        event.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        goToSlide(items.length - 1);
        break;
      case 'PageUp':
        event.preventDefault();
        goToPrevious();
        break;
      case 'PageDown':
        event.preventDefault();
        goToNext();
        break;
      default:
        break;
    }
  }, [goToPrevious, goToNext, goToSlide, items.length]);

  // Focus management: Keep focus within carousel on keyboard navigation
  useEffect(() => {
    const handleFocusOut = (e: FocusEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(e.relatedTarget as Node) &&
        document.activeElement &&
        !carouselRef.current.contains(document.activeElement)
      ) {
        // Return focus to carousel container if focus leaves
        const firstFocusable = carouselRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('focusout', handleFocusOut);
      return () => {
        carousel.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, []);

  // Slick carousel settings with accessibility and performance optimizations
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    accessibility: true,
    adaptiveHeight: false,
    variableWidth: false,
    arrows: false, // We'll use custom accessible buttons
    fade: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    lazyLoad: 'ondemand' as const, // Optimize image loading
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth transitions
    beforeChange: (_current: number, next: number) => {
      handleSlideChange(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return {
    currentSlide,
    announcement,
    sliderRef,
    carouselRef,
    prevButtonRef,
    nextButtonRef,
    handleSlideChange,
    goToSlide,
    goToPrevious,
    goToNext,
    handleKeyDown,
    sliderSettings,
    carouselRegionId,
    carouselControlsId,
    carouselLiveId,
  };
};

