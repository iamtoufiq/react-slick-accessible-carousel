import type { CarouselIndicatorsProps } from "../types/carousel.types";

const CarouselIndicators = ({
  totalSlides,
  currentSlide,
  onSlideChange,
}: CarouselIndicatorsProps) => {
  return (
    <div
      className="carousel-indicators-container"
      role="group"
      aria-label="Slide indicators"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={`indicator-${index}`}
          type="button"
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 transition-all duration-200 hover:scale-125 focus-visible:outline-3 focus-visible:outline-offset-2 ${
            index === currentSlide
              ? "border-blue-600 bg-blue-600 w-4 h-4 sm:w-5 sm:h-5 shadow-md focus-visible:outline-blue-600 hover:bg-blue-700"
              : "border-blue-600 bg-transparent hover:bg-blue-100 focus-visible:outline-blue-600"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSlideChange(index)}
          aria-current={index === currentSlide ? "true" : undefined}
        >
          <span className="sr-only">Slide {index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export { CarouselIndicators };
