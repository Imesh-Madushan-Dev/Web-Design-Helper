export interface DesignSystem {
  name: string;
  description: string;
  characteristics: string[];
  useCase: string;
  gradient: string;
  textColor: string;
  components: {
    colors: string[];
    typography: string;
    spacing: string;
    borderRadius: string;
  };
}

export const designSystems: DesignSystem[] = [
    {
    name: "Soft UI / Neuomorphism",
    description: "Soft shadows and subtle 3D effects creating a tactile, embossed appearance",
    characteristics: [
      "Soft inner/outer shadows",
      "Monochromatic color schemes",
      "Subtle depth perception",
      "Minimal color contrast"
    ],
    useCase: "Premium apps, creative portfolios, and design-focused products",
    gradient: "#e0e5ec",
    textColor: "#1a202c",
    components: {
      colors: ["#e0e5ec", "#bebebe", "#ffffff"],
      typography: "Soft, rounded fonts",
      spacing: "Balanced whitespace",
      borderRadius: "Large (12-16px)"
    }
  },
  {
    name: "Glass UI",
    description: "Frosted glass effects with transparency and backdrop blur for modern aesthetics",
    characteristics: [
      "Transparent backgrounds",
      "Backdrop blur effects",
      "Subtle borders",
      "Layered elements"
    ],
    useCase: "Modern dashboards, creative platforms, and premium interfaces",
    gradient: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
    textColor: "#1a202c",
    components: {
      colors: ["rgba(255,255,255,0.1)", "rgba(0,0,0,0.1)"],
      typography: "Light, airy fonts",
      spacing: "Layered depth",
      borderRadius: "Medium (8-12px)"
    }
  },
  {
    name: "Corporate Gradient",
    description: "Professional gradients and modern corporate aesthetics with smooth color transitions",
    characteristics: [
      "Smooth gradient backgrounds",
      "Professional color schemes",
      "Modern glassmorphism effects",
      "Trust-building visuals"
    ],
    useCase: "Perfect for B2B platforms, corporate websites, and professional services",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "white",
    components: {
      colors: ["#667eea", "#764ba2", "#ffffff"],
      typography: "Sans-serif, Medium weight",
      spacing: "Generous padding",
      borderRadius: "Rounded (8-12px)"
    }
  },
    {
    name: "Neobrutalism",
    description: "Bold colors, thick borders, raw aesthetics, and rebellious design approach",
    characteristics: [
      "High contrast colors",
      "Thick black borders",
      "Harsh shadows",
      "Intentionally 'raw' look"
    ],
    useCase: "Creative agencies, youth brands, and bold digital products",
    gradient: "#ffff00",
    textColor: "#000000",
    components: {
      colors: ["#ffff00", "#ff00ff", "#00ffff", "#000000"],
      typography: "Bold, uppercase fonts",
      spacing: "Asymmetric layouts",
      borderRadius: "None or sharp (0-2px)"
    }
  },
  {
    name: "Flat Design",
    description: "Clean, minimalist design with solid colors and simple shapes",
    characteristics: [
      "Solid color backgrounds",
      "No shadows or gradients",
      "Simple geometric shapes",
      "High contrast elements"
    ],
    useCase: "Ideal for content-focused sites, mobile apps, and modern web applications",
    gradient: "#3498db",
    textColor: "white",
    components: {
      colors: ["#3498db", "#2ecc71", "#e74c3c"],
      typography: "Clean sans-serif",
      spacing: "Consistent grid",
      borderRadius: "Slight (4-6px)"
    }
  },
  {
    name: "Material Design",
    description: "Google's design language with depth, shadows, and responsive animations",
    characteristics: [
      "Layered shadows for depth",
      "Floating action buttons",
      "Card-based layouts",
      "Bold use of color"
    ],
    useCase: "Android apps, Google products, and modern web interfaces",
    gradient: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
    textColor: "white",
    components: {
      colors: ["#4285f4", "#34a853", "#fbbc04", "#ea4335"],
      typography: "Roboto font family",
      spacing: "8px grid system",
      borderRadius: "Small (2-4px)"
    }
  },

  {
    name: "Retro Web / Web 1.0",
    description: "Classic 90s web design with bright colors, basic HTML styling, and nostalgic elements",
    characteristics: [
      "Bright, contrasting colors",
      "Simple layouts",
      "Underlined links",
      "Table-based structures"
    ],
    useCase: "Nostalgic projects, artistic portfolios, and retro-themed brands",
    gradient: "#00ffff",
    textColor: "#000080",
    components: {
      colors: ["#00ffff", "#ffff00", "#ff00ff", "#000080"],
      typography: "Courier, Arial, Times",
      spacing: "Fixed pixel widths",
      borderRadius: "None (0px)"
    }
  },
  {
    name: "Luxury Minimal",
    description: "Apple-like premium minimalist design with emphasis on whitespace and simplicity",
    characteristics: [
      "Abundant whitespace",
      "Monochromatic palette",
      "Premium typography",
      "Subtle interactions"
    ],
    useCase: "Luxury brands, high-end products, and premium services",
    gradient: "#000000",
    textColor: "white",
    components: {
      colors: ["#000000", "#ffffff", "#f5f5f5"],
      typography: "SF Pro, Helvetica Neue",
      spacing: "Maximum breathing room",
      borderRadius: "Large (16-24px)"
    }
  },
  {
    name: "Tech Dashboard",
    description: "Dark mode with neon accents, data visualization, and futuristic aesthetics",
    characteristics: [
      "Dark backgrounds",
      "Neon accent colors",
      "Data-rich layouts",
      "Monospace fonts"
    ],
    useCase: "Analytics platforms, developer tools, and technical dashboards",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    textColor: "#00ff88",
    components: {
      colors: ["#0f172a", "#00ff88", "#3b82f6", "#8b5cf6"],
      typography: "Monospace, technical",
      spacing: "Dense, efficient",
      borderRadius: "Small (4-8px)"
    }
  },
  {
    name: "Magazine Layout",
    description: "Editorial-style typography, grid layouts, and publication-quality design",
    characteristics: [
      "Typography-focused",
      "Multi-column grids",
      "Editorial hierarchy",
      "High contrast text"
    ],
    useCase: "News sites, blogs, publications, and content-heavy platforms",
    gradient: "#ffffff",
    textColor: "#000000",
    components: {
      colors: ["#ffffff", "#000000", "#f8f8f8"],
      typography: "Serif headlines, sans body",
      spacing: "Column-based grids",
      borderRadius: "Minimal (0-4px)"
    }
  },
  {
    name: "Claymorphism",
    description: "Soft, inflated 3D shapes with clay-like textures and playful aesthetics",
    characteristics: [
      "Soft, puffy shapes",
      "Inner shadows for depth",
      "Vibrant, playful colors",
      "Smooth gradients"
    ],
    useCase: "Playful brands, creative apps, and modern e-commerce",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    textColor: "white",
    components: {
      colors: ["#f093fb", "#f5576c", "#4facfe"],
      typography: "Rounded, friendly fonts",
      spacing: "Generous padding",
      borderRadius: "Very large (20-40px)"
    }
  },
  {
    name: "Skeuomorphism",
    description: "Realistic textures and materials mimicking physical objects",
    characteristics: [
      "Realistic textures",
      "Deep shadows",
      "Gradients for depth",
      "Physical metaphors"
    ],
    useCase: "Traditional apps, older audiences, familiar interfaces",
    gradient: "linear-gradient(135deg, #8B7355 0%, #6B5644 100%)",
    textColor: "white",
    components: {
      colors: ["#8B7355", "#6B5644", "#A0826D"],
      typography: "Traditional serif/sans",
      spacing: "Realistic proportions",
      borderRadius: "Subtle curves (4-8px)"
    }
  },
  {
    name: "Bento UI",
    description: "Grid-based layouts inspired by Japanese bento boxes with organized sections",
    characteristics: [
      "Grid-based organization",
      "Clear content separation",
      "Balanced composition",
      "Modular sections"
    ],
    useCase: "Dashboards, portfolios, and content-heavy applications",
    gradient: "#ffffff",
    textColor: "#000000",
    components: {
      colors: ["#ffffff", "#f5f5f5", "#e5e5e5"],
      typography: "Clean sans-serif",
      spacing: "Grid-based system",
      borderRadius: "Medium (8-12px)"
    }
  },
  {
    name: "Y2K Aesthetic",
    description: "Early 2000s internet culture with metallic effects and bold graphics",
    characteristics: [
      "Metallic textures",
      "Chrome effects",
      "Bubble letters",
      "Bright contrasting colors"
    ],
    useCase: "Youth brands, retro projects, and nostalgic designs",
    gradient: "linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 100%)",
    textColor: "#FF00FF",
    components: {
      colors: ["#C9D6FF", "#FF00FF", "#00FFFF", "#E2E2E2"],
      typography: "Bubbly, metallic fonts",
      spacing: "Dense layouts",
      borderRadius: "Rounded (8-16px)"
    }
  },
  {
    name: "Cyberpunk",
    description: "Neon colors, dark backgrounds, and futuristic tech aesthetics",
    characteristics: [
      "Neon accent colors",
      "Dark dystopian themes",
      "Glitch effects",
      "High-tech interfaces"
    ],
    useCase: "Gaming, tech products, and futuristic brands",
    gradient: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
    textColor: "#00ffff",
    components: {
      colors: ["#0a0e27", "#00ffff", "#ff00ff", "#ffff00"],
      typography: "Monospace, tech fonts",
      spacing: "Dense, complex",
      borderRadius: "Sharp (0-4px)"
    }
  },
  {
    name: "Memphis Design",
    description: "Bold geometric shapes, bright colors, and playful patterns from 1980s",
    characteristics: [
      "Geometric patterns",
      "Bright color combinations",
      "Abstract shapes",
      "Asymmetric layouts"
    ],
    useCase: "Creative agencies, art projects, and bold brands",
    gradient: "#FFD700",
    textColor: "#000000",
    components: {
      colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#000000"],
      typography: "Bold, geometric fonts",
      spacing: "Irregular, playful",
      borderRadius: "Various (0-50%)"
    }
  },
  {
    name: "Aurora UI",
    description: "Ethereal gradient overlays with aurora borealis-inspired colors",
    characteristics: [
      "Flowing gradients",
      "Ethereal light effects",
      "Soft color transitions",
      "Dreamy atmosphere"
    ],
    useCase: "Premium apps, creative portfolios, and immersive experiences",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    textColor: "white",
    components: {
      colors: ["#667eea", "#764ba2", "#f093fb", "#feca57"],
      typography: "Light, elegant fonts",
      spacing: "Generous, flowing",
      borderRadius: "Large (16-24px)"
    }
  },
  {
    name: "Vaporwave",
    description: "Retro-futuristic aesthetic with pink/cyan colors and 80s-90s nostalgia",
    characteristics: [
      "Pink and cyan palette",
      "Retro computer graphics",
      "Glitch aesthetics",
      "Classical statues/pillars"
    ],
    useCase: "Art projects, music platforms, and nostalgic brands",
    gradient: "linear-gradient(135deg, #FF6EC7 0%, #7EE8FA 100%)",
    textColor: "white",
    components: {
      colors: ["#FF6EC7", "#7EE8FA", "#b967ff", "#fffb96"],
      typography: "Retro computer fonts",
      spacing: "Grid-based",
      borderRadius: "Minimal (0-4px)"
    }
  },
  {
    name: "Synthwave",
    description: "80s retro-futurism with neon grids and sunset gradients",
    characteristics: [
      "Neon pink/purple",
      "Grid perspectives",
      "Sunset gradients",
      "Chrome effects"
    ],
    useCase: "Music apps, gaming, and retro-futuristic brands",
    gradient: "linear-gradient(135deg, #FE53BB 0%, #09FBD3 100%)",
    textColor: "white",
    components: {
      colors: ["#FE53BB", "#09FBD3", "#F5D300", "#7122FA"],
      typography: "Retro-futuristic fonts",
      spacing: "Perspective grids",
      borderRadius: "Sharp (0-4px)"
    }
  },
  {
    name: "Bauhaus",
    description: "Form follows function with geometric shapes and primary colors",
    characteristics: [
      "Geometric shapes",
      "Primary colors",
      "Functional design",
      "Grid-based layouts"
    ],
    useCase: "Modern art, architecture sites, and design-focused brands",
    gradient: "#000000",
    textColor: "#FFCC00",
    components: {
      colors: ["#000000", "#FF0000", "#0000FF", "#FFCC00"],
      typography: "Sans-serif, geometric",
      spacing: "Grid-based system",
      borderRadius: "None (0px)"
    }
  },
  {
    name: "Art Deco",
    description: "Elegant geometric patterns with gold accents and luxury aesthetics",
    characteristics: [
      "Geometric patterns",
      "Gold accents",
      "Symmetrical layouts",
      "Luxury materials"
    ],
    useCase: "Luxury brands, hotels, and premium services",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    textColor: "#FFD700",
    components: {
      colors: ["#1a1a1a", "#FFD700", "#2d2d2d", "#C0C0C0"],
      typography: "Elegant serif fonts",
      spacing: "Symmetrical, balanced",
      borderRadius: "Art deco curves"
    }
  },
  {
    name: "Minimalism",
    description: "Less is more - essential elements with maximum whitespace",
    characteristics: [
      "Maximum whitespace",
      "Minimal elements",
      "Neutral colors",
      "Simple typography"
    ],
    useCase: "Portfolios, luxury brands, and content-focused sites",
    gradient: "#ffffff",
    textColor: "#000000",
    components: {
      colors: ["#ffffff", "#000000", "#f5f5f5"],
      typography: "Simple sans-serif",
      spacing: "Maximum breathing room",
      borderRadius: "None or subtle (0-4px)"
    }
  },
  {
    name: "3D Web / 3D UI",
    description: "Three-dimensional elements and interactions in web interfaces",
    characteristics: [
      "3D transforms",
      "Depth and perspective",
      "Interactive 3D objects",
      "Spatial design"
    ],
    useCase: "Product showcases, immersive experiences, and modern portfolios",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    textColor: "white",
    components: {
      colors: ["#1e3c72", "#2a5298", "#74ebd5"],
      typography: "Modern sans-serif",
      spacing: "3D spatial layouts",
      borderRadius: "Medium (8-12px)"
    }
  },
  {
    name: "Dark Mode Aesthetic",
    description: "Eye-friendly dark interfaces with accent colors",
    characteristics: [
      "Dark backgrounds",
      "Reduced eye strain",
      "Vibrant accents",
      "High contrast text"
    ],
    useCase: "Apps, developer tools, and evening-use products",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    textColor: "#ffffff",
    components: {
      colors: ["#1a1a1a", "#2d2d2d", "#00ff88", "#3b82f6"],
      typography: "Clear, readable fonts",
      spacing: "Comfortable spacing",
      borderRadius: "Medium (8-12px)"
    }
  },
  {
    name: "Dopamine Design",
    description: "Bright, joy-inducing colors creating positive emotional responses",
    characteristics: [
      "Vibrant bright colors",
      "Playful interactions",
      "Joyful animations",
      "Energy-boosting palette"
    ],
    useCase: "Social apps, wellness products, and engaging platforms",
    gradient: "linear-gradient(135deg, #FF6B9D 0%, #C06C84 50%, #6C5CE7 100%)",
    textColor: "white",
    components: {
      colors: ["#FF6B9D", "#C06C84", "#6C5CE7", "#FFA502"],
      typography: "Friendly, rounded fonts",
      spacing: "Dynamic, energetic",
      borderRadius: "Very rounded (16-24px)"
    }
  }
];
