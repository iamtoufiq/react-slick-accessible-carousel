import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AccessibleCarousel.css";
import { CarouselButton } from "./CarouselButton";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselAnnouncement } from "./CarouselAnnouncement";
import { useAccessibleCarousel } from "../hooks/useAccessibleCarousel";
import type { AccessibleCarouselProps } from "../types/carousel.types";

const AccessibleCarousel = memo<AccessibleCarouselProps>(
  ({
    items,
    carouselId = "accessible-carousel",
    ariaLabel = "Image carousel",
    autoplay = false,
    autoplaySpeed = 3000,
  }) => {
    const {
      currentSlide,
      announcement,
      sliderRef,
      carouselRef,
      prevButtonRef,
      nextButtonRef,
      goToSlide,
      goToPrevious,
      goToNext,
      handleKeyDown,
      sliderSettings,
      carouselRegionId,
      carouselControlsId,
      carouselLiveId,
    } = useAccessibleCarousel({ items, carouselId, autoplay, autoplaySpeed });
    return (
      <div
        ref={carouselRef}
        className="relative w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-0 py-8"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        id={carouselRegionId}
        onKeyDown={handleKeyDown}
      >
        {/* Screen reader announcements */}
        <CarouselAnnouncement
          announcement={announcement}
          carouselLiveId={carouselLiveId}
        />

        {/* Main carousel */}
        <div className="relative w-full mb-6">
          <Slider ref={sliderRef} {...sliderSettings} className="w-full">
            {items.map((item, index) => (
              <div key={item.id} className="outline-none">
                <CarouselSlide
                  item={item}
                  index={index}
                  totalSlides={items.length}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Accessible control buttons */}
        <div
          className="flex justify-center items-center gap-3 sm:gap-4 mb-4 flex-wrap"
          id={carouselControlsId}
          role="toolbar"
          aria-label="Carousel controls"
        >
          <CarouselButton
            ref={prevButtonRef}
            direction="prev"
            onClick={goToPrevious}
            disabled={items.length <= 1}
            ariaLabel="Previous slide"
          />

          <CarouselButton
            ref={nextButtonRef}
            direction="next"
            onClick={goToNext}
            disabled={items.length <= 1}
            ariaLabel="Next slide"
          />
        </div>

        {/* Slide indicators (accessible dots) */}
        <CarouselIndicators
          totalSlides={items.length}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
        />
      </div>
    );
  }
);

AccessibleCarousel.displayName = "AccessibleCarousel";

export { AccessibleCarousel };
