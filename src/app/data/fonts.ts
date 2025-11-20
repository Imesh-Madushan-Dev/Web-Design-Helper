export interface Font {
  name: string;
  category: string;
  fontFamily: string;
  googleFont: string;
}

export const fonts: Font[] = [
  // Sans Serif (Modern UI & Body)
  { name: 'Inter', category: 'Sans Serif', fontFamily: '"Inter", sans-serif', googleFont: 'https://fonts.google.com/specimen/Inter' },
  { name: 'Plus Jakarta Sans', category: 'Sans Serif', fontFamily: '"Plus Jakarta Sans", sans-serif', googleFont: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans' },
  { name: 'Outfit', category: 'Sans Serif', fontFamily: '"Outfit", sans-serif', googleFont: 'https://fonts.google.com/specimen/Outfit' },
  { name: 'Manrope', category: 'Sans Serif', fontFamily: '"Manrope", sans-serif', googleFont: 'https://fonts.google.com/specimen/Manrope' },
  { name: 'DM Sans', category: 'Sans Serif', fontFamily: '"DM Sans", sans-serif', googleFont: 'https://fonts.google.com/specimen/DM+Sans' },
  { name: 'Roboto', category: 'Sans Serif', fontFamily: '"Roboto", sans-serif', googleFont: 'https://fonts.google.com/specimen/Roboto' },
  { name: 'Work Sans', category: 'Sans Serif', fontFamily: '"Work Sans", sans-serif', googleFont: 'https://fonts.google.com/specimen/Work+Sans' },

  // Serif (Editorial & Elegant)
  { name: 'Playfair Display', category: 'Serif', fontFamily: '"Playfair Display", serif', googleFont: 'https://fonts.google.com/specimen/Playfair+Display' },
  { name: 'Lora', category: 'Serif', fontFamily: '"Lora", serif', googleFont: 'https://fonts.google.com/specimen/Lora' },
  { name: 'Merriweather', category: 'Serif', fontFamily: '"Merriweather", serif', googleFont: 'https://fonts.google.com/specimen/Merriweather' },
  { name: 'Cormorant Garamond', category: 'Serif', fontFamily: '"Cormorant Garamond", serif', googleFont: 'https://fonts.google.com/specimen/Cormorant+Garamond' },
  { name: 'Fraunces', category: 'Serif', fontFamily: '"Fraunces", serif', googleFont: 'https://fonts.google.com/specimen/Fraunces' },
  { name: 'Libre Baskerville', category: 'Serif', fontFamily: '"Libre Baskerville", serif', googleFont: 'https://fonts.google.com/specimen/Libre+Baskerville' },

  // Display (Creative & Heading)
  { name: 'Syne', category: 'Display', fontFamily: '"Syne", sans-serif', googleFont: 'https://fonts.google.com/specimen/Syne' },
  { name: 'Space Grotesque', category: 'Display', fontFamily: '"Space Grotesque", sans-serif', googleFont: 'https://fonts.google.com/specimen/Space+Grotesque' },
  { name: 'Bebas Neue', category: 'Display', fontFamily: '"Bebas Neue", sans-serif', googleFont: 'https://fonts.google.com/specimen/Bebas+Neue' },
  { name: 'Oswald', category: 'Display', fontFamily: '"Oswald", sans-serif', googleFont: 'https://fonts.google.com/specimen/Oswald' },
  { name: 'Abril Fatface', category: 'Display', fontFamily: '"Abril Fatface", cursive', googleFont: 'https://fonts.google.com/specimen/Abril+Fatface' },
  { name: 'Righteous', category: 'Display', fontFamily: '"Righteous", cursive', googleFont: 'https://fonts.google.com/specimen/Righteous' },

  // Monospace (Code & Technical)
  { name: 'JetBrains Mono', category: 'Monospace', fontFamily: '"JetBrains Mono", monospace', googleFont: 'https://fonts.google.com/specimen/JetBrains+Mono' },
  { name: 'Fira Code', category: 'Monospace', fontFamily: '"Fira Code", monospace', googleFont: 'https://fonts.google.com/specimen/Fira+Code' },
  { name: 'Space Mono', category: 'Monospace', fontFamily: '"Space Mono", monospace', googleFont: 'https://fonts.google.com/specimen/Space+Mono' },
  { name: 'IBM Plex Mono', category: 'Monospace', fontFamily: '"IBM Plex Mono", monospace', googleFont: 'https://fonts.google.com/specimen/IBM+Plex+Mono' },
];

export const fontCategories = ['All', 'Sans Serif', 'Serif', 'Display', 'Monospace'];
