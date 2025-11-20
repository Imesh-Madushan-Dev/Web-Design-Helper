<div align="center">

# 🎨 Web Design Helper

### A Comprehensive Toolkit for Web Designers

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**Web Design Helper** is a modern, interactive web application designed to help designers and developers explore typography, color palettes, and design systems. Built with Next.js 16 and React 19, it provides a beautiful, responsive interface with neuomorphic design elements and smooth animations.

## ✨ Features

### 🔤 Typography Explorer
- **30+ Popular Fonts** - Curated collection of trending Google Fonts
- **Live Previews** - See fonts rendered in real-time with actual typefaces
- **Smart Filtering** - Filter by category (Sans Serif, Serif, Display, Monospace)
- **Search Functionality** - Quickly find fonts by name
- **Direct Links** - One-click access to Google Fonts for easy integration

### 🎨 Color Palettes
- **Curated Color Schemes** - Professional color combinations
- **Interactive Previews** - Visual representation of each palette
- **Copy to Clipboard** - Easy color code copying
- **Organized Categories** - Browse by theme and style

### 🎯 Design Systems
- **Modern UI Frameworks** - Explore popular design systems
- **Component Previews** - See design systems in action
- **Best Practices** - Learn from industry-leading patterns
- **Responsive Layouts** - All previews adapt to any screen size

### 📱 Responsive Design
- **Mobile-First** - Optimized for all devices
- **Hamburger Menu** - Smooth mobile navigation
- **Touch-Friendly** - Designed for touch interactions
- **Adaptive Layouts** - Grid systems that respond to screen size

### 💎 Premium UI/UX
- **Neuomorphic Cards** - Soft, elegant 3D effects
- **Smooth Animations** - Polished micro-interactions
- **Hover Effects** - Interactive feedback on all elements
- **Glassmorphism** - Modern frosted glass effects

## 🚀 Demo

Visit the live demo: [Coming Soon]

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0 (App Router)
- **UI Library:** React 19.2
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts API
- **Icons:** SVG Icons
- **Deployment:** Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- pnpm, npm, or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Imesh-Madushan-Dev/Web-Design-Helper.git
   cd Web-Design-Helper
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
```

### Project Structure

```
Web-Design-Helper/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page with navigation cards
│   │   ├── typography/           # Typography explorer
│   │   ├── colors/               # Color palettes
│   │   ├── design-systems/       # Design systems showcase
│   │   └── data/                 # Data files (fonts, colors, etc.)
│   ├── components/
│   │   └── Navigation.tsx        # Responsive navigation component
│   └── styles/
│       └── globals.css           # Global styles
├── public/                       # Static assets
└── README.md
```

## 🎨 Customization

### Adding New Fonts

Edit `src/app/data/fonts.ts`:

```typescript
export const fonts: Font[] = [
  {
    name: 'Your Font Name',
    category: 'Sans Serif',
    fontFamily: '"Your Font", sans-serif',
    googleFont: 'https://fonts.google.com/specimen/Your+Font'
  },
  // ... more fonts
];
```

### Adding New Colors

Edit `src/app/data/colors.ts` to add new color palettes.

### Adding Design Systems

Edit `src/app/data/designSystems.ts` to showcase new design systems.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Imesh-Madushan-Dev/Web-Design-Helper)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify:** Compatible with Next.js
- **Railway:** Supports Next.js deployments
- **AWS Amplify:** Full Next.js support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Imesh Madushan**

- GitHub: [@Imesh-Madushan-Dev](https://github.com/Imesh-Madushan-Dev)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Font library
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**Made with ❤️ by Imesh Madushan**

⭐ Star this repo if you find it helpful!

</div>
