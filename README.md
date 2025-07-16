# KTA Project

A modern Vue.js 3 website built with Vite, featuring a responsive design and interactive contact form.

## Features

- **Responsive Design**: Mobile optimized design with Tailwind CSS
- **Contact Form**: Fully functional contact form with validation
- **Accessibility**: Proper semantic HTML

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Official routing solution
- **Headless UI** - Unstyled, accessible UI components

## Project Structure

````
src
├── App.vue
├── assets
├── logo.svg
│   └── main.css
├── components
│   ├── icons
│   │   ├── computer-icon.svg
│   │   ├── mobile-phone-icon.svg
│   │   ├── rocket-icon.svg
│   │   └── website-icon.svg
│   ├── layouts
│   │   ├── AppFooter.vue
│   │   └── AppHeader.vue
│   ├── sections
│   │   ├── AboutHero.vue
│   │   ├── ContentSection.vue
│   │   ├── HomeHero.vue
│   │   ├── PreFooter.vue
│   │   └── ServiceCards.vue
│   └── ui
│       ├── BaseButton.vue
│       ├── CardItem.vue
│       ├── ContactForm.vue
│       ├── ContactModal.vue
│       └── UnderlineText.vue
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd kta-project
````

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Key Components

### ContactForm

- Form validation with real-time feedback
- Email format validation
- Success/error state management
- Responsive layout with Tailwind CSS

### ContactModal

- Accessible modal dialog using Headless UI
- Focus management and keyboard navigation
- Smooth animations and transitions

## Development Notes

This project demonstrates:

- Vue 3 Options API usage
- Component composition and reusability
- Form handling and validation patterns
- Responsive design implementation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for interview purposes.
