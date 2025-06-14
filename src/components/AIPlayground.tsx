
import { useState, useRef, useEffect } from 'react';

const AIPlayground = () => {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tracking for generative visuals
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isActive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw reactive grid based on mouse position
      const gridSize = 50;
      const mouseInfluence = 100;
      
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt((mousePos.x - x) ** 2 + (mousePos.y - y) ** 2);
          const influence = Math.max(0, mouseInfluence - distance) / mouseInfluence;
          
          ctx.globalAlpha = 0.1 + influence * 0.5;
          
          ctx.beginPath();
          ctx.rect(x, y, gridSize, gridSize);
          ctx.stroke();
          
          if (influence > 0.5) {
            ctx.fillStyle = '#FF00FF';
            ctx.globalAlpha = influence * 0.3;
            ctx.fillRect(x + 10, y + 10, gridSize - 20, gridSize - 20);
          }
        }
      }
      
      if (isActive) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [isActive, mousePos]);

  const handleInputChange = (value: string) => {
    setUserInput(value);
    
    // Simulate AI response generation
    if (value.length > 3) {
      const responses = [
        'Interesting approach to brutalist design...',
        'Consider breaking conventional grid systems...',
        'Raw functionality over aesthetic perfection...',
        'Embrace systematic chaos in your layouts...',
        'Human intuition + machine learning = innovation...'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiResponse(randomResponse);
    } else {
      setAiResponse('');
    }
  };

  return (
    <section className="min-h-screen bg-brutal-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-brutal font-black mb-4 chaos-text">
            <span className="text-neon-magenta">[</span>
            AI_PLAYGROUND
            <span className="text-neon-magenta">]</span>
          </h2>
          <p className="font-mono text-lg text-brutal-white/70 max-w-2xl">
            Interactive canvas where AI meets brutalist design. Move your cursor, 
            type your thoughts, watch the machine respond.
          </p>
        </div>

        {/* Playground Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Canvas */}
          <div className="relative">
            <div className="bg-brutal-gray border-2 border-neon-blue p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-xs text-neon-blue uppercase tracking-wider">
                  VISUAL_GENERATOR.EXE
                </div>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`px-3 py-1 font-mono text-xs border transition-all duration-300 ${
                    isActive 
                      ? 'border-neon-magenta text-neon-magenta bg-neon-magenta/10' 
                      : 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-brutal-black'
                  }`}
                >
                  {isActive ? 'ACTIVE' : 'ACTIVATE'}
                </button>
              </div>
              
              <canvas
                ref={canvasRef}
                className="w-full h-64 bg-brutal-black border border-brutal-white/20"
                style={{ cursor: isActive ? 'crosshair' : 'default' }}
              />
              
              <div className="mt-4 font-mono text-xs text-brutal-white/60">
                {isActive ? (
                  <>MOUSE: [{mousePos.x}, {mousePos.y}] | STATUS: GENERATING_VISUALS</>
                ) : (
                  'CLICK ACTIVATE TO START INTERACTION'
                )}
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="space-y-4">
            <div className="bg-brutal-gray border-2 border-neon-magenta p-4">
              <div className="font-mono text-xs text-neon-magenta uppercase tracking-wider mb-4">
                AI_DESIGN_ASSISTANT.BETA
              </div>
              
              {/* Chat Input */}
              <div className="mb-4">
                <textarea
                  value={userInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="Describe your design challenge..."
                  className="w-full bg-brutal-black text-brutal-white font-mono text-sm p-3 border border-brutal-white/20 focus:border-neon-magenta focus:outline-none resize-none"
                  rows={4}
                />
              </div>

              {/* AI Response */}
              {aiResponse && (
                <div className="bg-brutal-black p-4 border-l-4 border-neon-magenta">
                  <div className="font-mono text-xs text-neon-magenta uppercase tracking-wider mb-2">
                    AI_SUGGESTION:
                  </div>
                  <p className="font-mono text-sm text-brutal-white/90 leading-relaxed">
                    {aiResponse}
                  </p>
                </div>
              )}

              {/* Quick Prompts */}
              <div className="mt-6">
                <div className="font-mono text-xs text-brutal-white/60 uppercase tracking-wider mb-3">
                  QUICK_PROMPTS:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'How to make brutalist design accessible?',
                    'AI tools for experimental typography?',
                    'Breaking grid systems systematically?',
                    'Balancing chaos with usability?'
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleInputChange(prompt)}
                      className="text-left text-xs font-mono text-brutal-white/70 hover:text-neon-blue p-2 border border-transparent hover:border-neon-blue/30 transition-all duration-300"
                    >
                      &gt; {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Component Playground Preview */}
            <div className="bg-brutal-gray border-2 border-neon-blue p-4">
              <div className="font-mono text-xs text-neon-blue uppercase tracking-wider mb-4">
                COMPONENT_GENERATOR.PREVIEW
              </div>
              
              <div className="space-y-4">
                {/* Sample generated components */}
                <div className="p-3 bg-brutal-black border border-neon-blue">
                  <div className="font-mono text-xs text-neon-blue mb-2">BRUTAL_BUTTON.JSX</div>
                  <button className="bg-transparent border-2 border-neon-magenta text-neon-magenta px-4 py-2 font-mono text-xs uppercase hover:bg-neon-magenta hover:text-brutal-black transition-all duration-300">
                    GENERATED_BUTTON
                  </button>
                </div>
                
                <div className="p-3 bg-brutal-black border border-neon-magenta">
                  <div className="font-mono text-xs text-neon-magenta mb-2">CHAOS_CARD.JSX</div>
                  <div className="bg-brutal-gray p-4 transform -rotate-1 border-l-4 border-neon-blue">
                    <div className="font-mono text-sm text-brutal-white chaos-text">
                      SYSTEMATIC DISORDER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'AI_RESPONSES', value: '2.1K' },
            { label: 'COMPONENTS_GENERATED', value: '847' },
            { label: 'DESIGN_PATTERNS', value: '156' },
            { label: 'ACTIVE_SESSIONS', value: '23' }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-brutal-gray border border-brutal-white/20">
              <div className="text-2xl font-mono font-bold text-neon-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-brutal-white/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;
