import { ChevronLeft, ChevronRight } from "lucide-react";
import { DIRECTION, type CarouselButtonProps } from "../types/carousel.types";
const CarouselButton = ({
  direction,
  onClick,
  disabled = false,
  ariaLabel,
  ref,
}: CarouselButtonProps) => {
  const Icon = direction === DIRECTION.PREV ? ChevronLeft : ChevronRight;
  return (
    <button
      ref={ref}
      type="button"
      className="flex cursor-pointer items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-white disabled:hover:text-gray-400 transition-all duration-200 active:scale-95 focus-visible:outline-3 focus-visible:outline-blue-600 focus-visible:outline-offset-2 focus-visible:bg-blue-50 shadow-md hover:shadow-lg"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon
        aria-hidden="true"
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
      />
      <span className="sr-only">
        {direction === DIRECTION.PREV ? "Previous" : "Next"}
      </span>
    </button>
  );
};

export { CarouselButton };
