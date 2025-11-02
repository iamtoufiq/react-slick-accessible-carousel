import { memo } from "react";

const CarouselSkeleton = memo(() => {
  return (
    <div className="relative w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="relative w-full mb-6">
        <div className="w-full h-[600px] md:h-[700px] bg-gray-200  animate-pulse overflow-hidden">
          <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] bg-gray-300"></div>
          <div className="w-full flex-1 px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10">
            <div className="h-8 sm:h-10 md:h-12 bg-gray-300 rounded mb-3 sm:mb-4 w-3/4 mx-auto animate-pulse"></div>
            <div className="space-y-2 max-w-3xl mx-auto">
              <div className="h-4 sm:h-5 bg-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-4 sm:h-5 bg-gray-300 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 sm:h-5 bg-gray-300 rounded w-4/6 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 flex-wrap">
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
});

CarouselSkeleton.displayName = "CarouselSkeleton";

export { CarouselSkeleton };
