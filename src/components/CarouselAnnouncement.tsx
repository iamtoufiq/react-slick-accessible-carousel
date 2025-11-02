import type { CarouselAnnouncementProps } from "../types/carousel.types";
const CarouselAnnouncement = ({
  announcement,
  carouselLiveId,
}: CarouselAnnouncementProps) => {
  return (
    <div
      id={carouselLiveId}
      className="sr-only"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {announcement}
    </div>
  );
};

export { CarouselAnnouncement };
