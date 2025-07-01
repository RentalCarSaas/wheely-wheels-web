
# Wheely - Enterprise Fleet Management Platform

A modern, responsive marketing website for Wheely, a comprehensive SaaS platform that streamlines car rentals for enterprises of all sizes.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Modern UI/UX**: Clean, flat aesthetic with vibrant teal (#00BFA6) and orange (#FF6B35) color scheme
- **Interactive Animations**: Smooth scroll animations, hover effects, and animated elements
- **TypeScript**: Fully typed React components with prop validation
- **Component Library**: Reusable UI components (buttons, cards, forms, navigation)
- **Performance Optimized**: Fast loading with optimized assets and animations

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **Lucide React** for icons
- **Custom animations** with CSS and Tailwind

## 📋 Sections

1. **Hero Section**: Full-screen header with animated background and CTAs
2. **Features**: Three-column grid showcasing Fleet Management, Role-Based Access, and Analytics
3. **How It Works**: Step-by-step timeline with animated elements
4. **Pricing**: Interactive pricing cards with flip animations on hover
5. **About Us**: Team information with photo mosaic and company stats
6. **Contact**: Demo request form with live chat widget

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wheely-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design System

### Colors
- **Primary**: #00BFA6 (Teal)
- **Accent**: #FF6B35 (Orange)
- **Text**: #2D3748 (Charcoal)
- **Background**: #FFFFFF (White)

### Typography
- **Headings**: Inter (Semi-bold)
- **Body**: Inter (Regular)

### Components

#### Buttons
```tsx
<Button variant="primary|secondary|accent|outline" size="sm|md|lg">
  Click me
</Button>
```

#### Cards
```tsx
<Card hover flip>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

#### Container
```tsx
<Container size="sm|md|lg|xl">
  Content
</Container>
```

## 🔧 Component Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── pages/               # Page components
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

- Scroll-triggered animations using Intersection Observer
- CSS-based hover effects and transitions
- Custom keyframe animations for the wheel logo
- Smooth scrolling navigation

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the build files to an S3 bucket
- **GitHub Pages**: Use the built-in Pages feature

## 📄 License

This project is proprietary software developed for Wheely. All rights reserved.

## 👥 Team

Built with ❤️ by the Wheely development team.

---

For questions or support, contact us at hello@wheely.com
