
import Hero from '../components/Hero';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import AIPlayground from '../components/AIPlayground';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="bg-brutal-black text-brutal-white overflow-x-hidden">
      {/* Console Easter Egg */}
      <div className="hidden">
        {console.log(`
%c╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                                   ║
║    ██████╗ ██████╗ ██╗   ██╗████████╗ █████╗ ██╗     ██╗███████╗████████╗    ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗    ║
║    ██╔══██╗██╔══██╗██║   ██║╚══██╔══╝██╔══██╗██║     ██║██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║    ║
║    ██████╔╝██████╔╝██║   ██║   ██║   ███████║██║     ██║███████╗   ██║       ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║    ║
║    ██╔══██╗██╔══██╗██║   ██║   ██║   ██╔══██║██║     ██║╚════██║   ██║       ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║    ║
║    ██████╔╝██║  ██║╚██████╔╝   ██║   ██║  ██║███████╗██║███████║   ██║       ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║    ║
║    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝   ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ║
║                                                                                                                   ║
║    Hey there, fellow code explorer! 👋                                                                           ║
║    You've found my secret console message. Here's a brutalist design tip:                                       ║
║                                                                                                                   ║
║    "True brutalism in design isn't about being harsh—it's about being honest.                                   ║
║     Strip away the unnecessary, embrace the functional, and let raw purpose drive aesthetic decisions."          ║
║                                                                                                                   ║
║    Want to collaborate on something brutally beautiful? Let's talk!                                             ║
║    Email: abhijeet@brutaldesign.dev                                                                              ║
║                                                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
        `, 'color: #00FFFF; font-family: monospace;')}
      </div>

      <Hero />
      <About />
      <CaseStudies />
      <AIPlayground />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-brutal-black border-t border-brutal-white/20 py-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono text-sm text-brutal-white/60 mb-4 md:mb-0">
              © 2024 ABHIJEET KUMAR — BRUTALIST × EXPERIMENTAL UI/UX
            </div>
            <div className="font-mono text-xs text-brutal-white/40">
              DESIGNED WITH SYSTEMATIC_CHAOS.JS × BUILT WITH REACT.BRUTAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
