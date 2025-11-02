import type Slider from "react-slick";
import type { Settings } from "react-slick";

// Base carousel item
export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

// Common carousel configuration
interface BaseCarouselConfig {
  carouselId?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

// Reusable composition interfaces
interface WithItems {
  items: CarouselItem[];
}

interface WithAriaLabel {
  ariaLabel?: string;
}

interface WithSlideInfo {
  index: number;
  totalSlides: number;
}


// Main carousel component props
export interface AccessibleCarouselProps 
  extends BaseCarouselConfig, WithItems, WithAriaLabel {}

// Individual slide props
export interface CarouselSlideProps extends WithSlideInfo {
  item: CarouselItem;
}

// Button props
export type ButtonDirection = 'prev' | 'next';

export interface CarouselButtonProps {
  direction: ButtonDirection;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
  ref?: React.Ref<HTMLButtonElement>;
}

// Indicators props
export interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

// Announcement props
export interface CarouselAnnouncementProps {
  announcement: string;
  carouselLiveId: string;
}

// Hook input props
export interface UseAccessibleCarouselProps 
  extends BaseCarouselConfig, WithItems {}

// State management
interface CarouselState {
  currentSlide: number;
  announcement: string;
}

// All refs in one place
interface CarouselRefs {
  sliderRef: React.RefObject<Slider | null>;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  prevButtonRef: React.RefObject<HTMLButtonElement | null>;
  nextButtonRef: React.RefObject<HTMLButtonElement | null>;
}

// Accessibility IDs
interface CarouselIds {
  carouselRegionId: string;
  carouselControlsId: string;
  carouselLiveId: string;
}

// Navigation and interaction handlers
interface CarouselActions {
  handleSlideChange: (index: number) => void;
  goToSlide: (index: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

interface SliderConfig {
  sliderSettings: Settings; // react-slick settings
}

// Hook return type - combines everything
export interface UseAccessibleCarouselReturn 
  extends CarouselState, 
          CarouselRefs, 
          CarouselIds, 
          CarouselActions, 
          SliderConfig {}

// Extract specific types if needed elsewhere
export type CarouselId = string;
export type SlideIndex = number;
export type AnnouncementText = string;

export enum DIRECTION{
  PREV = "prev",
  NEXT = "next",
}
