import { CarouselWrapper } from "./components/CarouselWrapper";
import { carouselItems } from "./data/carouselData";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 via-pink-50 to-blue-50">
      <header
        className="bg-linear-to-r from-blue-600 via-pink-600 to-blue-600 text-white shadow-lg"
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-center drop-shadow-lg">
            Accessible Carousel
          </h1>
        </div>
      </header>

      <main
        className="flex-1 container mx-auto px-4 sm:px-6 lg:px-0  flex items-center justify-center"
        role="main"
      >
        <CarouselWrapper
          items={carouselItems}
          carouselId="main-carousel"
          ariaLabel="Main image carousel"
          autoplay={true}
          autoplaySpeed={5000}
        />
      </main>

      <footer
        className="bg-gray-900 text-white py-6 sm:py-8 shadow-lg"
        role="contentinfo"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base text-center text-gray-300 max-w-4xl mx-auto">
            Built with React, TypeScript, and react-slick. Follows W3C ARIA
            Carousel Authoring Practices and WCAG 2.1 AA guidelines.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
