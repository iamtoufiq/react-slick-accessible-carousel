import { carouselItems } from "./data/carouselData";
import { lazy, Suspense } from "react";
import { CarouselSkeleton } from "./components/CarouselSkeleton";
const CarouselWrapper = lazy(() => import("./components/CarouselWrapper").then(module => ({ default: module.CarouselWrapper })));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 via-pink-50 to-blue-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Skip to main content
      </a>
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
        id="main-content"
        className="flex-1 container mx-auto px-4 sm:px-6 lg:px-0  flex items-center justify-center"
        role="main"
      >
        <section className="w-full max-w-4xl">
          <h2 className="sr-only">Image Carousel Demo</h2>
          <Suspense fallback={<CarouselSkeleton />}> <CarouselWrapper
            items={carouselItems}
            carouselId="main-carousel"
            ariaLabel="Main image carousel"
            autoplay={true}
            autoplaySpeed={5000}
          /></Suspense>
         
        </section>
      </main>

      <footer
        className="bg-gray-900 text-white py-6 sm:py-8 shadow-lg"
        role="contentinfo"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">About This Project</h2>
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