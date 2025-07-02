# Wheely - Enterprise Fleet Management Platform

A modern, responsive marketing website for Wheely, a comprehensive SaaS platform that streamlines car rentals for enterprises of all sizes.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Modern UI/UX**: Clean, flat aesthetic with vibrant teal (#00BFA6) and orange (#FF6B35) color scheme
- **Interactive Animations**: Smooth scroll animations, hover effects, and animated elements
- **TypeScript**: Fully typed React components with prop validation
- **Component Library**: Reusable UI components (buttons, cards, forms, navigation)
- **Performance Optimized**: Fast loading with optimized assets and animations
- **Multi-language Support**: English, French, and Arabic with RTL layout support
- **MAD Currency**: All prices displayed in Moroccan Dirhams with proper formatting

## 🌐 Internationalization Features

### Supported Languages
- **English (EN)** - Default language
- **French (FR)** - Complete French translation
- **Arabic (AR)** - Full Arabic translation with RTL layout support

### Currency Display
- All subscription prices are displayed in **Moroccan Dirhams (MAD)**
- Proper currency formatting with space before "MAD"
- Thousands separators based on locale conventions
- Basic: 990 MAD/month
- Professional: 2 990 MAD/month
- Enterprise: Custom pricing

### RTL Support
When Arabic is selected:
- Complete right-to-left layout transformation
- Flipped navigation and content alignment
- Mirrored floating elements and animations
- Proper Arabic text rendering
- RTL-aware spacing and positioning

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling with RTL support
- **Vite** for fast development and building
- **react-i18next** for internationalization
- **Lucide React** for icons
- **Custom animations** with CSS and Tailwind

## 📋 Sections

1. **Hero Section**: Full-screen header with animated background and CTAs
2. **Features**: Three-column grid showcasing Fleet Management, Role-Based Access, and Analytics
3. **How It Works**: Step-by-step timeline with animated elements
4. **Pricing**: Interactive pricing cards with flip animations on hover (MAD currency)
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

## 🌍 Adding New Translations

### Adding a New Language

1. **Create a new locale file**:
   ```bash
   src/locales/[language-code].json
   ```

2. **Follow the existing structure** from `en.json`, `fr.json`, or `ar.json`

3. **Update the language switcher**:
   ```typescript
   // In src/components/ui/LanguageSwitcher.tsx
   const languages: Language[] = [
     // ... existing languages
     { code: 'es', name: 'Español', flag: '🇪🇸' },
   ];
   ```

4. **Add the translation resource**:
   ```typescript
   // In src/lib/i18n.ts
   import esTranslation from '../locales/es.json';
   
   const resources = {
     // ... existing resources
     es: {
       translation: esTranslation,
     },
   };
   ```

### Translation File Structure

```json
{
  "common": {
    "getStarted": "Get Started",
    "currency": "MAD",
    "perMonth": "/month"
  },
  "header": {
    "features": "Features",
    "pricing": "Pricing"
  },
  "pricing": {
    "title": "Simple, Transparent Pricing",
    "plans": {
      "basic": {
        "name": "Basic",
        "price": "990",
        "features": ["Feature 1", "Feature 2"]
      }
    }
  }
}
```

## 💰 Changing Currency Format

### Updating Currency Display

1. **Modify the currency utility** (`src/lib/currency.ts`):
   ```typescript
   export const formatPrice = (price: string, currency: string, locale: string): string => {
     // Add new currency formatting logic
     if (currency === 'EUR') {
       return `${formattedNumber}€`;
     }
     // Default MAD formatting
     return `${formattedNumber} ${currency}`;
   };
   ```

2. **Update locale files**:
   ```json
   {
     "common": {
       "currency": "EUR" // or your preferred currency
     }
   }
   ```

3. **Price values** in locale files should be numeric strings:
   ```json
   {
     "pricing": {
       "plans": {
         "basic": {
           "price": "99" // Will be formatted as "99 EUR" or "99 MAD"
         }
       }
     }
   }
   ```

## 🎨 Design System

### Colors
- **Primary**: #00BFA6 (Teal)
- **Accent**: #FF6B35 (Orange)
- **Text**: #2D3748 (Charcoal)
- **Background**: #FFFFFF (White)

### Typography
- **Headings**: Inter (Semi-bold)
- **Body**: Inter (Regular)
- **RTL**: Proper Arabic font rendering

### RTL Layout Classes
```css
/* Automatic RTL support */
.rtl\:space-x-reverse   /* Reverse spacing in RTL */
.rtl\:text-right        /* Right align in RTL */
.rtl\:mr-0              /* Remove right margin in RTL */
.rtl\:ml-3              /* Add left margin in RTL */
```

## 🔧 Component Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── LanguageSwitcher.tsx  # Language selection dropdown
│   │   └── ...
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page sections
├── locales/             # Translation files
│   ├── en.json         # English translations
│   ├── fr.json         # French translations
│   └── ar.json         # Arabic translations
├── lib/
│   ├── i18n.ts         # i18next configuration
│   └── currency.ts     # Currency formatting utilities
└── pages/               # Page components
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All layouts work seamlessly in both LTR and RTL modes.

## 🎭 Animations

- Scroll-triggered animations using Intersection Observer
- CSS-based hover effects and transitions
- Custom keyframe animations for the wheel logo
- Smooth scrolling navigation
- RTL-aware animation directions

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the build files to an S3 bucket
- **GitHub Pages**: Use the built-in Pages feature

## 🔍 Testing Different Languages

1. **Use the language switcher** in the header to test all three languages
2. **Check RTL layout** by selecting Arabic - the entire layout should flip
3. **Verify currency formatting** - all prices should display in MAD format
4. **Test responsiveness** in each language on different screen sizes

## 📄 License

This project is proprietary software developed for Wheely. All rights reserved.

## 👥 Team

Built with ❤️ by the Wheely development team.

---

For questions or support, contact us at hello@wheely.com
