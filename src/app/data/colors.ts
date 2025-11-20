export interface Color {
  name: string;
  hex: string;
  rgb: string;
  usage?: string;
}

export interface ColorPalette {
  name: string;
  colors: Color[];
}

export interface ColorPalettes {
  [key: string]: ColorPalette;
}

export const colorPalettes: ColorPalettes = {
  brand: {
    name: 'Brand Colors',
    colors: [
      { name: 'Primary BG', hex: '#f4f3ee', rgb: 'rgb(244, 243, 238)', usage: 'Main background' },
      { name: 'Primary Dark', hex: '#e5e3db', rgb: 'rgb(229, 227, 219)', usage: 'Darker variant' },
      { name: 'Foreground', hex: '#171717', rgb: 'rgb(23, 23, 23)', usage: 'Primary text' },
    ]
  },
  ui: {
    name: 'UI Colors',
    colors: [
      { name: 'Accent', hex: '#6366f1', rgb: 'rgb(99, 102, 241)', usage: 'Primary accent, buttons' },
      { name: 'Accent Light', hex: '#818cf8', rgb: 'rgb(129, 140, 248)', usage: 'Hover states' },
      { name: 'Border', hex: '#e5e5e5', rgb: 'rgb(229, 229, 229)', usage: 'Borders, dividers' },
      { name: 'Hover BG', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)', usage: 'Hover backgrounds' },
    ]
  },
  semantic: {
    name: 'Semantic Colors',
    colors: [
      { name: 'Success', hex: '#22c55e', rgb: 'rgb(34, 197, 94)', usage: 'Success states' },
      { name: 'Warning', hex: '#f59e0b', rgb: 'rgb(245, 158, 11)', usage: 'Warning states' },
      { name: 'Error', hex: '#ef4444', rgb: 'rgb(239, 68, 68)', usage: 'Error states' },
      { name: 'Info', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)', usage: 'Info messages' },
    ]
  },
  neutrals: {
    name: 'Neutrals',
    colors: [
      { name: 'Gray 50', hex: '#fafafa', rgb: 'rgb(250, 250, 250)' },
      { name: 'Gray 100', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)' },
      { name: 'Gray 200', hex: '#e5e5e5', rgb: 'rgb(229, 229, 229)' },
      { name: 'Gray 300', hex: '#d4d4d4', rgb: 'rgb(212, 212, 212)' },
      { name: 'Gray 400', hex: '#a3a3a3', rgb: 'rgb(163, 163, 163)' },
      { name: 'Gray 500', hex: '#737373', rgb: 'rgb(115, 115, 115)' },
      { name: 'Gray 600', hex: '#525252', rgb: 'rgb(82, 82, 82)' },
      { name: 'Gray 700', hex: '#404040', rgb: 'rgb(64, 64, 64)' },
      { name: 'Gray 800', hex: '#262626', rgb: 'rgb(38, 38, 38)' },
      { name: 'Gray 900', hex: '#171717', rgb: 'rgb(23, 23, 23)' },
    ]
  },
  vibrant: {
    name: 'Vibrant Colors',
    colors: [
      { name: 'Red', hex: '#dc2626', rgb: 'rgb(220, 38, 38)' },
      { name: 'Orange', hex: '#ea580c', rgb: 'rgb(234, 88, 12)' },
      { name: 'Yellow', hex: '#eab308', rgb: 'rgb(234, 179, 8)' },
      { name: 'Green', hex: '#16a34a', rgb: 'rgb(22, 163, 74)' },
      { name: 'Blue', hex: '#2563eb', rgb: 'rgb(37, 99, 235)' },
      { name: 'Purple', hex: '#9333ea', rgb: 'rgb(147, 51, 234)' },
      { name: 'Pink', hex: '#db2777', rgb: 'rgb(219, 39, 119)' },
    ]
  },
  pastels: {
    name: 'Pastels',
    colors: [
      { name: 'Soft Pink', hex: '#fecdd3', rgb: 'rgb(254, 205, 211)' },
      { name: 'Soft Blue', hex: '#bfdbfe', rgb: 'rgb(191, 219, 254)' },
      { name: 'Soft Green', hex: '#bbf7d0', rgb: 'rgb(187, 247, 208)' },
      { name: 'Soft Yellow', hex: '#fef08a', rgb: 'rgb(254, 240, 138)' },
      { name: 'Soft Purple', hex: '#e9d5ff', rgb: 'rgb(233, 213, 255)' },
      { name: 'Soft Orange', hex: '#fed7aa', rgb: 'rgb(254, 215, 170)' },
    ]
  }
};

export const colorCategories = ['All', 'Brand', 'UI', 'Semantic', 'Neutrals', 'Vibrant', 'Pastels'];
