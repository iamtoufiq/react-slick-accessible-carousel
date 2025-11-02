# Accessible Carousel

A fully accessible, performance-optimized carousel component built with React, TypeScript, and react-slick. This implementation follows W3C ARIA Carousel Authoring Practices and WCAG 2.1 AA guidelines.

## Features

### Accessibility (WCAG 2.1 AA Compliant)

- ✅ **Full Keyboard Navigation**: Arrow keys, Home, End, Page Up/Down
- ✅ **Screen Reader Support**: ARIA labels, descriptions, and live regions
- ✅ **Focus Management**: Visible focus indicators with proper contrast
- ✅ **Semantic HTML**: Proper roles and ARIA attributes
- ✅ **Color Contrast**: WCAG AA compliant contrast ratios (minimum 4.5:1)
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion` media query
- ✅ **High Contrast Mode**: Supports high contrast display settings

### Performance Optimizations

- ✅ **Suspense Loading**: Skeleton UI during initial load for better UX
- ✅ **Image Preloading**: First slide image preloads for instant display
- ✅ **Memoization**: React.memo prevents unnecessary re-renders
- ✅ **Lazy Loading**: Images load on-demand with smooth transitions
- ✅ **Efficient Event Handlers**: useCallback hooks for optimized callbacks
- ✅ **Smooth Animations**: CSS cubic-bezier easing for better performance
- ✅ **Optimized Rendering**: Minimal re-renders with proper React patterns

### User Experience

- ✅ **Touch Support**: Swipe gestures on mobile devices
- ✅ **Responsive Design**: Works seamlessly on all screen sizes
- ✅ **Customizable**: Easy to configure and extend
- ✅ **Autoplay**: Configurable autoplay (enabled by default in demo, can be disabled)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

**What you'll see**: The carousel will load with a skeleton placeholder, then display 5 demo slides showcasing accessibility features. The carousel will start autoplaying automatically every 5 seconds, cycling through landscape images with descriptions of accessibility features.

**Important Note**: The demo is configured with autoplay enabled by default. This means slides will change automatically every 5 seconds. You can interact with the carousel at any time using keyboard navigation or mouse clicks, and autoplay will pause when you hover over the carousel or focus on its controls.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing with NVDA Screen Reader

### Installing NVDA

1. Download NVDA from [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/)
2. Install NVDA on your Windows machine
3. Start NVDA (it runs in the background)

### Testing the Carousel

1. **Start the development server** (see Getting Started above)
2. **Enable NVDA** by pressing `Ctrl + Alt + N` (or start it from the Start menu)
3. **Navigate to the carousel** using Tab key
4. **Test keyboard navigation**:
   - `Tab`: Navigate to carousel controls
   - `Arrow Left/Right`: Navigate between slides
   - `Home`: Jump to first slide
   - `End`: Jump to last slide
   - `Page Up/Down`: Navigate slides
   - `Space` or `Enter`: Activate buttons
5. **Listen for announcements**: NVDA should announce:
   - Current slide number and content
   - Button labels when focused
   - State changes (play/pause)
   - Slide changes

### Expected NVDA Behavior

When testing, NVDA should announce:

- Main image carousel, region" when entering the carousel
- Previous slide, button" when focusing previous button
- Next slide, button" when focusing next button
- lide 1 of 5: Welcome to Accessible Carousel. This carousel demonstrates best practices for accessibility, including full keyboard navigation, ARIA attributes, & screen reader support." when the carousel loads
- Automatic slide transitions every 5 seconds with announcements like Slide 2 of 5: Keyboard Navigation. Navigate using Arrow keys, Home, End, Page Up, and Page Down. All controls are fully keyboard accessible and include proper focus indicators."

### Keyboard Navigation Checklist

- [ ] Tab navigation moves focus logically
- [ ] Arrow keys navigate slides correctly
- [ ] Home key jumps to first slide
- [ ] End key jumps to last slide
- [ ] All buttons are keyboard accessible
- [ ] Focus indicators are clearly visible
- [ ] Focus is properly managed when slides change

## Accessibility Testing Tools

### Automated Testing

- **axe DevTools**: Browser extension for accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built into Chrome DevTools (Audit tab)

### Manual Testing

1. **Keyboard-only navigation**: Test without mouse
2. **Screen reader testing**: Use NVDA, JAWS, or VoiceOver
3. **Color contrast**: Verify with WebAIM Contrast Checker
4. **Focus indicators**: Ensure all interactive elements have visible focus

## Project Structure

```
accessible-carousel/
├── src/
│   ├── components/
│   │   ├── AccessibleCarousel.tsx      # Main carousel component
│   │   ├── AccessibleCarousel.css      # Carousel styles
│   │   ├── CarouselAnnouncement.tsx    # Screen reader announcements
│   │   ├── CarouselButton.tsx          # Navigation buttons
│   │   ├── CarouselIndicators.tsx      # Slide indicators
│   │   ├── CarouselSkeleton.tsx        # Loading skeleton component
│   │   ├── CarouselSlide.tsx           # Individual slide component
│   │   └── CarouselWrapper.tsx         # Wrapper with Suspense loading
│   ├── data/
│   │   └── carouselData.ts             # Sample carousel data
│   ├── hooks/
│   │   └── useAccessibleCarousel.ts    # Custom carousel hook
│   ├── types/
│   │   └── carousel.types.ts           # TypeScript type definitions
│   ├── App.tsx                         # Main app component
│   ├── main.tsx                        # Entry point
│   ├── index.css                       # Global styles
│   └── assets/
│       └── react.svg                   # React logo asset
├── public/
│   └── vite.svg                        # Vite logo asset
├── dist/                               # Production build output
├── index.html                          # HTML template
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── vite.config.ts                      # Vite build configuration
├── eslint.config.js                   # ESLint configuration
├── netlify.toml                        # Netlify deployment config
└── README.md                           # This file
```

## Customization

### Adding Your Own Content

Edit `src/data/carouselData.ts` to add your own carousel items:

```typescript
export const carouselItems: CarouselItem[] = [
  {
    id: "slide-1",
    title: "Your Title",
    description: "Your description",
    image: "path/to/image.jpg",
    alt: "Alt text for image",
  },
  // ... more items
];
```

### Customizing Carousel Settings

In `src/App.tsx`, modify the carousel props:

```tsx
<CarouselWrapper
  items={carouselItems}
  carouselId="main-carousel"
  ariaLabel="Your custom label"
  autoplay={false} // Set to false to disable autoplay
  autoplaySpeed={5000} // milliseconds (only applies when autoplay is true)
/>
```

**Note**: By default, autoplay is enabled in the demo. Set `autoplay={false}` to disable automatic slide transitions.

## Deployment to Netlify

### Quick Deploy

This project includes a `netlify.toml` configuration file for automatic deployment.

**Live URL**: [Add your Netlify URL here after deployment]

### Option 1: Using Netlify CLI

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Build the project:

```bash
npm run build
```

3. Deploy:

```bash
netlify deploy --prod --dir=dist
```

### Option 2: Using GitHub

1. Push your code to a GitHub repository
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Drag and Drop

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site will be live!

## Performance Metrics

The carousel is optimized for:

- Fast initial load time
- Smooth animations (60fps)
- Minimal memory footprint
- Efficient re-renders

## Contributing

When contributing, please ensure:

1. Accessibility standards are maintained
2. Code follows the existing style
3. Documentation is updated

## Resources

- [W3C ARIA Carousel Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [React Slick Documentation](https://react-slick.neostack.com/)

## Support

For issues or questions:

1. Check the documentation above
2. Review the code comments in the components
3. Test with NVDA to verify accessibility
4. Check browser console for errors

---

**Note**: This carousel has been tested with NVDA screen reader and follows W3C ARIA Carousel Authoring Practices. For best results, test with actual screen readers and assistive technologies.
