
import { useState, useEffect } from 'react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'humans & machines through design.',
    'chaos into beautiful experiences.',
    'AI with human intuition.',
    'brutalist aesthetics with UX.'
  ];

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const typingSpeed = isDeleting ? 50 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === phrase) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setTypewriterText(phrase.substring(0, typewriterText.length - 1));
      } else {
        setTypewriterText(phrase.substring(0, typewriterText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentPhrase, isDeleting, phrases]);

  return (
    <section className="min-h-screen flex items-center justify-start bg-brutal-black relative noise-bg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="brutal-grid h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-brutal-white/10 h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 z-10">
        <div className="max-w-4xl">
          {/* Pre-header */}
          <div className="mb-8">
            <span className="text-neon-blue font-mono text-sm tracking-wider uppercase">
              &gt; PORTFOLIO.EXE INITIALIZED
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-brutal font-black mb-8 chaos-text">
            <span className="block mb-4">I'M</span>
            <span className="block mb-4 glitch-text text-neon-blue" data-text="ABHIJEET">
              ABHIJEET
            </span>
            <span className="block mb-4">KUMAR.</span>
            <div className="text-3xl md:text-4xl lg:text-5xl font-light">
              <span className="text-brutal-white/70">I MERGE </span>
              <span className="text-neon-magenta console-cursor">{typewriterText}</span>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="text-lg md:text-xl font-mono mb-12 brutal-break">
            <p className="text-brutal-white/80 leading-relaxed max-w-2xl">
              Product & UI/UX Designer fusing human-centered design with 
              cutting-edge AI. Building the future of digital experiences 
              through <span className="text-neon-blue">radical experimentation</span> 
              and <span className="text-neon-magenta">systematic chaos</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <button className="group bg-transparent border-2 border-neon-blue text-neon-blue px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-neon-blue hover:text-brutal-black transition-all duration-300 transform hover:scale-105">
              <span className="group-hover:animate-glitch">VIEW WORK</span>
            </button>
            <button className="group bg-transparent border-2 border-neon-magenta text-neon-magenta px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-neon-magenta hover:text-brutal-black transition-all duration-300 transform hover:scale-105">
              <span className="group-hover:animate-glitch">AI PLAYGROUND</span>
            </button>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-neon-blue mb-1">50+</div>
              <div className="text-xs uppercase tracking-wider text-brutal-white/60">PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-neon-magenta mb-1">5Y</div>
              <div className="text-xs uppercase tracking-wider text-brutal-white/60">EXPERIENCE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-brutal-white mb-1">∞</div>
              <div className="text-xs uppercase tracking-wider text-brutal-white/60">CREATIVITY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-brutal-white/40 font-mono text-xs">
        <div className="rotate-90 origin-center whitespace-nowrap">
          SCROLL TO EXPLORE &gt;&gt;&gt;
        </div>
      </div>
    </section>
  );
};

export default Hero;
