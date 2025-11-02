import { memo, useState } from "react";
import type { CarouselSlideProps } from "../types/carousel.types";

const CarouselSlide = memo<CarouselSlideProps>(
  ({ item, index, totalSlides }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
      <div
        className="outline-none w-full h-[600px]  md:h-[700px]"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} of ${totalSlides}`}
      >
        <div className="w-full h-full flex flex-col relative overflow-hidden bg-linear-to-br from-blue-50 to-pink-50">
          {item.image && (
            <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] relative overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.alt || item.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)} // Show content even if image fails
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          )}
          <div className="w-full flex-1 px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 text-center flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto line-clamp-3 sm:line-clamp-4">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

CarouselSlide.displayName = "CarouselSlide";

export { CarouselSlide };
