"use client"

// ========================================
// MOROCCAN DECORATIVE PATTERNS & SHAPES
// ========================================

export function ZelligeBackground({ className = "", variant = "default" }: { className?: string; variant?: "default" | "dense" | "subtle" }) {
  const opacityMap = {
    default: "opacity-100",
    dense: "opacity-100",
    subtle: "opacity-50"
  }
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Multi-layer zellige pattern for richness */}
      <div className={`absolute inset-0 zellige-pattern ${opacityMap[variant]}`} />
      
      {/* Overlay arabesque for depth */}
      <div className="absolute inset-0 arabesque-pattern opacity-50" />
      
      {/* Decorative corner ornaments */}
      <ZakhrafCorner position="top-left" />
      <ZakhrafCorner position="top-right" />
      <ZakhrafCorner position="bottom-left" />
      <ZakhrafCorner position="bottom-right" />
    </div>
  )
}

export function ZakhrafCorner({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]"
  }
  
  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 md:w-48 md:h-48 pointer-events-none`}>
      <svg viewBox="0 0 200 200" className="w-full h-full text-primary/20 dark:text-primary/10">
        {/* Intricate corner zakhraf */}
        <defs>
          <linearGradient id={`corner-gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Main decorative arch */}
        <path 
          d="M0,0 Q100,0 100,100 Q100,50 50,50 Q0,50 0,0" 
          fill={`url(#corner-gradient-${position})`}
        />
        
        {/* 8-pointed star */}
        <g transform="translate(30, 30)">
          <path 
            d="M25,0 L31,19 L50,19 L35,31 L41,50 L25,38 L9,50 L15,31 L0,19 L19,19 Z" 
            fill="currentColor"
            opacity="0.4"
          />
        </g>
        
        {/* Decorative circles */}
        <circle cx="80" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="80" cy="80" r="8" fill="currentColor" opacity="0.2" />
        
        {/* Geometric lines */}
        <path d="M0,100 Q50,100 100,50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M0,150 Q75,150 150,75" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      </svg>
    </div>
  )
}

export function MoroccanStar({ className = "", size = 24, variant = "filled" }: { className?: string; size?: number; variant?: "filled" | "outline" | "double" }) {
  if (variant === "outline") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 0L14.4 7.2L22 9.6L14.4 12L12 19.2L9.6 12L2 9.6L9.6 7.2L12 0Z" />
      </svg>
    )
  }
  
  if (variant === "double") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path d="M12 0L14.4 7.2L22 9.6L14.4 12L12 19.2L9.6 12L2 9.6L9.6 7.2L12 0Z" fill="currentColor" opacity="0.3" />
        <path d="M12 4L13.6 8.4L18 9.6L13.6 10.8L12 15.2L10.4 10.8L6 9.6L10.4 8.4L12 4Z" fill="currentColor" />
      </svg>
    )
  }
  
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.4 7.2L22 9.6L14.4 12L12 19.2L9.6 12L2 9.6L9.6 7.2L12 0Z" />
    </svg>
  )
}

export function MoroccanArch({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative arch top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4">
        <svg viewBox="0 0 200 40" className="w-full h-8" preserveAspectRatio="none">
          <path 
            d="M0,40 Q100,0 200,40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-primary/30"
          />
          <path 
            d="M10,40 Q100,5 190,40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-accent/20"
          />
        </svg>
      </div>
      
      <div className="relative bg-card rounded-t-[3rem] rounded-b-3xl border border-border/50 overflow-hidden">
        {/* Inner zellige pattern */}
        <div className="absolute inset-0 zellige-pattern opacity-30" />
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating star */}
      <div className="absolute top-[8%] right-[8%] animate-float">
        <MoroccanStar className="text-primary/30 dark:text-primary/20" size={60} variant="double" />
      </div>
      
      {/* Medium accent star */}
      <div className="absolute top-[25%] left-[5%] animate-float" style={{ animationDelay: '1s' }}>
        <MoroccanStar className="text-accent/25 dark:text-accent/15" size={45} variant="double" />
      </div>
      
      {/* Small decorative star */}
      <div className="absolute bottom-[25%] right-[12%] animate-float" style={{ animationDelay: '2s' }}>
        <MoroccanStar className="text-primary/20 dark:text-primary/10" size={35} />
      </div>
      
      {/* Bottom left star */}
      <div className="absolute bottom-[15%] left-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
        <MoroccanStar className="text-accent/20 dark:text-accent/10" size={50} variant="outline" />
      </div>
      
      {/* Decorative geometric circles */}
      <div className="absolute top-[45%] left-[85%] w-24 h-24 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/10" />
          <circle cx="50" cy="50" r="15" fill="currentColor" className="text-primary/10" />
        </svg>
      </div>
      
      {/* Interlocking diamonds */}
      <div className="absolute top-[60%] left-[3%] w-16 h-16 animate-float" style={{ animationDelay: '2.5s' }}>
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <path d="M25 0L50 25L25 50L0 25Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" />
          <path d="M25 10L40 25L25 40L10 25Z" fill="currentColor" className="text-accent/10" />
        </svg>
      </div>
    </div>
  )
}

export function GeometricDivider({ variant = "default" }: { variant?: "default" | "ornate" | "simple" }) {
  if (variant === "simple") {
    return (
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <MoroccanStar className="text-primary" size={16} />
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    )
  }
  
  if (variant === "ornate") {
    return (
      <div className="flex items-center justify-center gap-3 py-8">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rotate-45 bg-accent" />
          <MoroccanStar className="text-primary" size={24} variant="double" />
          <div className="w-2 h-2 rotate-45 bg-accent" />
        </div>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rotate-45 bg-primary" />
        <MoroccanStar className="text-primary" size={20} />
        <div className="w-2 h-2 rotate-45 bg-primary" />
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}

export function ZelligeBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="h-2 geometric-border rounded-full" />
    </div>
  )
}

export function MoroccanFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border with pattern */}
      <div className="absolute -top-1 left-4 right-4">
        <ZelligeBorder />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute -top-3 -left-3 w-8 h-8">
        <MoroccanStar className="text-primary" size={32} variant="double" />
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8">
        <MoroccanStar className="text-primary" size={32} variant="double" />
      </div>
      
      {/* Content with zellige background */}
      <div className="relative bg-card border-2 border-primary/20 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 zellige-pattern opacity-20" />
        <div className="relative p-6">
          {children}
        </div>
      </div>
      
      {/* Bottom corner decorations */}
      <div className="absolute -bottom-3 -left-3 w-8 h-8">
        <MoroccanStar className="text-accent" size={32} variant="double" />
      </div>
      <div className="absolute -bottom-3 -right-3 w-8 h-8">
        <MoroccanStar className="text-accent" size={32} variant="double" />
      </div>
    </div>
  )
}

export function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    plumber: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M4 22V12M4 12L8 8M4 12H8M8 8V4H16V8M8 8H16M16 8L20 12M16 8V12M20 12V22M20 12H16M12 12V22" />
      </svg>
    ),
    electrician: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    ),
    carpenter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    painter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
        <path d="M12 8V16M8 12H16" />
      </svg>
    ),
    cleaner: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 2V6M12 22V18M4.93 4.93L7.76 7.76M19.07 19.07L16.24 16.24M2 12H6M22 12H18M4.93 19.07L7.76 16.24M19.07 4.93L16.24 7.76" />
      </svg>
    ),
    cook: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6V13.87Z" />
        <path d="M6 17H18" />
      </svg>
    ),
    driver: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M19 17H21V11L17 7H5L1 11V17H3M7 17H17M7 17C7 18.6569 5.65685 20 4 20C2.34315 20 1 18.6569 1 17M7 17C7 15.3431 5.65685 14 4 14C2.34315 14 1 15.3431 1 17M17 17C17 18.6569 18.3431 20 20 20C21.6569 20 23 18.6569 23 17M17 17C17 15.3431 18.3431 14 20 14C21.6569 14 23 15.3431 23 17" />
      </svg>
    ),
    mechanic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  }

  return icons[category] || icons.plumber
}
