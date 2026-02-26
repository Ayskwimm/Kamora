# Kamora - Food Promotional Website

A modern, responsive, and interactive food promotional website built with React JS and Vite. Kamora specializes in grilled dishes, desserts, and beverages, offering a delightful culinary experience.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, functional components, and hooks
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Multi-page Navigation**: React Router for seamless page transitions
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Dynamic Menu**: Category-based filtering and search capabilities
- **Interactive Elements**: 
  - Typewriter animation on hero section
  - Countdown timer for promotions
  - Testimonials slider with auto-play
  - Hover effects and smooth transitions
- **Contact Form**: Functional form with validation and success feedback
- **Professional UI**: Modern design with food-inspired color scheme

## 🛠️ Technologies Used

- **React 18** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with custom properties and animations
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
kamora-website/
├── public/
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FoodCard.jsx
│   │   ├── MenuSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── PromoBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── CartModal.jsx
│   ├── contexts/        # React Context for state management
│   │   └── CartContext.jsx
│   ├── data/           # Static data and mock data
│   │   └── foodData.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/         # Global styles and CSS files
│   │   └── Global.css
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd kamora-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Home Page
- Hero section with typewriter animation
- Featured menu items by category
- Promotional banner with countdown timer
- Customer testimonials slider
- Company features and values

### Menu Page
- Full menu display with category filtering
- Dynamic food card rendering
- Add to cart functionality
- Search and filter capabilities

### About Page
- Company story and history
- Mission and values
- Team member profiles
- Achievements and statistics

### Contact Page
- Contact information display
- Functional contact form with validation
- Social media links
- Success message feedback

## 🎨 Design Features

- **Color Scheme**: Warm food-inspired colors (orange, red, cream, brown)
- **Typography**: Clean, modern fonts with excellent readability
- **Animations**: Smooth transitions, hover effects, and micro-interactions
- **Responsive**: Fully responsive design for all screen sizes
- **Accessibility**: Semantic HTML5 and ARIA labels where appropriate

## 🛒 Shopping Cart Features

- Add/remove items from cart
- Update item quantities
- Calculate total price dynamically
- Persistent cart using localStorage
- Cart item count in navigation
- Modal popup for cart view

## 📋 Component Breakdown

### Core Components
- **Navbar**: Responsive navigation with cart integration
- **Hero**: Animated hero section with call-to-action
- **FoodCard**: Reusable card component for menu items
- **MenuSection**: Section wrapper for menu categories
- **Testimonials**: Auto-sliding customer reviews
- **PromoBanner**: Countdown timer for special offers
- **Footer**: Comprehensive footer with links and info

### Utility Components
- **Button**: Reusable button with multiple variants
- **CartModal**: Slide-out cart with full functionality

## 🔧 Customization

### Adding New Menu Items
Edit `src/data/foodData.js` to add new food items:
```javascript
{
  id: uniqueId,
  name: "Item Name",
  category: "grilled|desserts|beverages",
  price: 12.99,
  image: "image-url",
  description: "Item description"
}
```

### Modifying Colors
Update CSS variables in `src/styles/Global.css`:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --accent-color: #c73e1d;
  /* ... other variables */
}
```

## 🌟 Key Features Implemented

✅ **React Router** for multi-page navigation  
✅ **useState & useEffect** hooks for state management  
✅ **Responsive Design** with mobile-first approach  
✅ **Shopping Cart** with localStorage persistence  
✅ **Form Validation** with error handling  
✅ **Animations** and micro-interactions  
✅ **Component Architecture** with reusable components  
✅ **Modern CSS** with custom properties  
✅ **Semantic HTML5** structure  
✅ **Professional UI/UX** design  

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

To deploy this project:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service
   - Netlify, Vercel, GitHub Pages, or any static hosting service

## 🤝 Contributing

This is a demonstration project showcasing modern React development practices.

## 📄 License

This project is for educational and demonstration purposes.

---

**Built with ❤️ using React and Vite**
