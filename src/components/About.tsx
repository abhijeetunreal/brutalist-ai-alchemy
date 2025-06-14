
const About = () => {
  return (
    <section className="min-h-screen bg-brutal-black relative overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-8 py-16">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-brutal font-black mb-4 chaos-text">
            <span className="text-neon-magenta">[</span>
            ABOUT.ME
            <span className="text-neon-magenta">]</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue"></div>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Bio Section - Intentionally Offset */}
          <div className="md:col-span-7 md:col-start-1 transform md:-rotate-1 bg-brutal-gray p-8 border-l-4 border-neon-blue">
            <div className="font-mono space-y-6">
              <p className="text-lg leading-relaxed text-brutal-white/90">
                <span className="text-neon-blue">&gt;</span> I'm a Product & UI/UX Designer 
                who believes the future of design lies at the intersection of human intuition 
                and machine intelligence.
              </p>
              
              <p className="text-base leading-relaxed text-brutal-white/80">
                <span className="text-neon-magenta">&gt;</span> My approach is brutally honest: 
                strip away the noise, embrace the chaos, and let raw functionality drive 
                aesthetic decisions. Every pixel has a purpose, every interaction tells a story.
              </p>

              <p className="text-base leading-relaxed text-brutal-white/80">
                <span className="text-neon-blue">&gt;</span> Currently exploring how AI can 
                augment human creativity without replacing the messy, beautiful process of 
                human-centered design thinking.
              </p>

              <div className="pt-4 border-t border-brutal-white/20">
                <div className="text-xs uppercase tracking-wider text-brutal-white/60 mb-2">
                  CORE EXPERTISE
                </div>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'AI Integration', 'Design Systems', 'Prototyping', 'User Research', 'Brutalist Aesthetics'].map((skill) => (
                    <span key={skill} className="text-xs bg-brutal-black text-neon-blue px-2 py-1 border border-neon-blue/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Photo/Visual Section - Offset Grid Position */}
          <div className="md:col-span-4 md:col-start-9 transform md:rotate-1 relative">
            <div className="relative bg-brutal-gray aspect-square overflow-hidden border-4 border-neon-magenta">
              {/* Placeholder for photo - using ASCII art style */}
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-neon-magenta leading-none p-4">
                <pre className="text-center">
{`    ████████████
  ██              ██
██                  ██
██  ████      ████  ██
██  ████      ████  ██
██                  ██
██      ████        ██
██    ████████      ██
██      ████        ██
  ██              ██
    ████████████
      
  ABHIJEET.KUMAR.PNG
  [BRUTALIST_PORTRAIT]`}
                </pre>
              </div>
              
              {/* Glitch overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-magenta/10 animate-noise"></div>
            </div>
            
            {/* Meta info */}
            <div className="mt-4 font-mono text-xs text-brutal-white/60">
              <div>STATUS: ONLINE</div>
              <div>LOCATION: DESIGNING_THE_FUTURE.EXE</div>
              <div>MODE: EXPERIMENTAL</div>
            </div>
          </div>
        </div>

        {/* AI Timeline Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-brutal font-black mb-8 text-neon-blue">
            &gt; JOURNEY.LOG
          </h3>
          
          <div className="space-y-8">
            {[
              { year: '2024', title: 'AI INTEGRATION SPECIALIST', desc: 'Leading design for AI-powered products, exploring human-machine collaboration in creative workflows.' },
              { year: '2023', title: 'SENIOR UX DESIGNER', desc: 'Shipped brutalist design system that increased user engagement by 300% through radical simplification.' },
              { year: '2022', title: 'PRODUCT DESIGNER', desc: 'Pioneered experimental UI patterns that challenged conventional usability while maintaining accessibility.' },
              { year: '2021', title: 'UI DESIGNER', desc: 'Developed systematic approach to chaos - organized disorder that users actually understand and love.' }
            ].map((item, index) => (
              <div key={index} className="group flex items-start gap-6 hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brutal-gray border-2 border-neon-blue flex items-center justify-center font-mono text-xs font-bold text-neon-blue group-hover:bg-neon-blue group-hover:text-brutal-black transition-colors duration-300">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="font-mono font-bold text-lg mb-2 text-brutal-white group-hover:text-neon-magenta transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-mono text-sm text-brutal-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
