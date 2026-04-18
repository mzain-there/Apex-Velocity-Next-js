# Apex Velocity - Premium Car Showroom

Apex Velocity is a modern luxury car dealership web application built with [Next.js](https://nextjs.org), showcasing a curated collection of high-end vehicles with detailed specifications and an elegant user interface.

## Project Overview

This is a full-stack Next.js application that demonstrates modern web development practices with server-side rendering, client-side interactivity, and responsive design. The platform allows users to browse, search, and view detailed information about premium vehicles.

## Key Features

- **Hero Carousel**: Captivating hero section with dynamic carousel display
- **Car Gallery with Search**: Browse and filter vehicles by make and model in real-time
- **Detailed Vehicle Pages**: Individual product pages with comprehensive specifications
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Premium design with smooth animations and transitions

## Technology Stack & Concepts

### Core Technologies
- **Next.js 16.2.1**: React framework with App Router, server-side rendering, and API routes
- **React 19.2.4**: UI library with hooks and functional components
- **React DOM 19.2.4**: DOM rendering for React components
- **TypeScript 5**: Static typing for JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework for styling

### Development Tools
- **ESLint 9**: Code quality and linting
- **PostCSS 4**: CSS transformation and optimization
- **Node 20+**: JavaScript runtime

## Concepts & Patterns Used

### Next.js Patterns
1. **App Router**: File-based routing system with `app/` directory
2. **Dynamic Routes**: `[id]` parameter for individual car detail pages
3. **Server & Client Components**: Mix of server components and `"use client"` components
4. **Async Components**: Handling async operations in React Server Components
5. **Link Component**: Next.js optimized navigation without full page reloads

### React Concepts
1. **Functional Components**: All components built as functional components
2. **Hooks**: `useState` for client-side state management (search functionality)
3. **Props**: Component data passing through props (car data to CarCard)
4. **Component Composition**: Nested components (Navbar, Footer, HeroCarousel, CarGallery, CarCard)
5. **Map & Filter**: Array methods for rendering lists and filtering data

### Styling & UI
1. **Tailwind CSS**: Utility classes for responsive design
2. **Responsive Grid**: `md:grid-cols-3` for mobile-first responsive layouts
3. **CSS Transitions**: Smooth hover effects and animations
4. **Gradient & Shadow Effects**: Visual depth and premium styling
5. **Semantic HTML**: Proper HTML structure with semantic elements

### Architecture & Best Practices
1. **Component Organization**: Separated components in `/components` folder
2. **Data Management**: Centralized car data in `/data/cars.js`
3. **Layout System**: Root layout with shared Navbar and Footer
4. **SEO Optimization**: Metadata in layout.js for proper head tags
5. **Error Handling**: Fallback UI for missing car details
6. **Performance**: Image optimization with responsive images

### State Management
- Client-side state with React Hooks (`useState`)
- Search filtering with real-time updates
- Component-level state management

## Project Structure

```
app/
├── layout.js              # Root layout with Navbar and Footer
├── page.js                # Home page with HeroCarousel and Services
├── about/page.js          # About page
└── cars/
    └── [id]/page.js       # Dynamic car details page

components/
├── Navbar.js              # Navigation bar
├── Footer.js              # Footer component
├── HeroCarousel.js        # Hero section with carousel
├── CarGallery.js          # Car listing with search functionality
└── CarCard.js             # Individual car card component

data/
└── cars.js                # Car inventory data

public/                    # Static assets
```

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Environment Variables

Create a `.env.local` file in the root directory for any environment-specific variables:
```
# Example (if needed)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Note**: Environment files are included in `.gitignore` to protect sensitive information.

## Security

The `.gitignore` file is configured to exclude:
- `.env*` files (environment variables and secrets)
- `node_modules/` (dependencies)
- `.next/` (build output)
- `.DS_Store` (macOS files)
- `*.pem` (certificate files)
- Log files
- Build artifacts

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Next.js and configures build settings
4. Deploy with a single click

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is part of the Assignment 3 for Zain(782).
