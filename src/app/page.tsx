import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  const cards = [
   
    {
      title: "Typography",
      description: "Explore beautiful font combinations and typography systems for your projects",
      icon: "✍️",
      href: "/typography",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Colors",
      description: "Discover harmonious color palettes and schemes to bring your designs to life",
      icon: "🎨",
      href: "/colors",
      gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      title: "Design Systems",
      description: "Modern design systems and UI frameworks to accelerate your workflow",
      icon: "🎯",
      href: "/design-systems",
      gradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-4rem)] bg-background px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Design Helper
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit for web designers
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                  card.href === "/" ? "pointer-events-none" : ""
                }`}
                style={{
                  background: "var(--background)",
                  boxShadow: `
                    12px 12px 24px rgba(0, 0, 0, 0.15),
                    -12px -12px 24px rgba(255, 255, 255, 0.05),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                {/* Gradient Overlay */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-foreground transition-colors">
                    {card.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {card.description}
                  </p>

                  {/* Arrow Icon */}
                  {card.href !== "/" && (
                    <div className="mt-6 flex items-center text-foreground/40 group-hover:text-foreground/70 transition-all group-hover:translate-x-2">
                      <span className="text-sm font-medium mr-2">Explore</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
