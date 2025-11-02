import { Suspense, memo, useEffect, useState } from "react";
import { AccessibleCarousel } from "./AccessibleCarousel";
import { CarouselSkeleton } from "./CarouselSkeleton";
import type { AccessibleCarouselProps } from "../types/carousel.types";

const CarouselWrapper = memo<AccessibleCarouselProps>((props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (props.items.length > 0 && props.items[0].image) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = props.items[0].image!;
      setTimeout(() => setIsLoaded(true), 2000);
    } else {
      setIsLoaded(true);
    }
  }, [props.items]);

  if (!isLoaded) {
    return <CarouselSkeleton />;
  }

  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <AccessibleCarousel {...props} />
    </Suspense>
  );
});

CarouselWrapper.displayName = "CarouselWrapper";

export { CarouselWrapper };
