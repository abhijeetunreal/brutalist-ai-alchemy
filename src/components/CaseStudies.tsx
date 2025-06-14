
import { useState } from 'react';

const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      title: 'AI_DESIGN_ASSISTANT.EXE',
      category: 'AI INTEGRATION',
      problem: 'Designers spending 60% of time on repetitive tasks instead of creative problem-solving.',
      solution: 'Built AI-powered design assistant that automates layout generation while preserving human creative control.',
      impact: ['300% faster prototyping', '85% reduction in mundane tasks', '40% increase in creative output'],
      tech: ['React', 'TensorFlow.js', 'Figma API', 'GPT-4'],
      year: '2024',
      status: 'LIVE'
    },
    {
      id: 2,
      title: 'BRUTALIST_ECOM.UI',
      category: 'EXPERIMENTAL UX',
      problem: 'E-commerce platforms becoming indistinguishable, users craving authentic experiences.',
      solution: 'Designed brutalist e-commerce interface that increased conversion through radical honesty.',
      impact: ['45% conversion increase', '200% session duration', '90% brand recall'],
      tech: ['Next.js', 'Stripe', 'Framer Motion', 'Tailwind'],
      year: '2023',
      status: 'LIVE'
    },
    {
      id: 3,
      title: 'CHAOS_DESIGN_SYSTEM',
      category: 'SYSTEMATIC DISORDER',
      problem: 'Traditional design systems creating bland, predictable interfaces.',
      solution: 'Created "organized chaos" system with controlled randomness and intentional imperfections.',
      impact: ['500% developer adoption', '75% faster development', '95% design consistency'],
      tech: ['Storybook', 'Design Tokens', 'React', 'TypeScript'],
      year: '2023',
      status: 'OPENSOURCE'
    }
  ];

  return (
    <section className="min-h-screen bg-brutal-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-brutal font-black mb-4 chaos-text">
            <span className="text-neon-blue">[</span>
            CASE_STUDIES
            <span className="text-neon-blue">]</span>
          </h2>
          <p className="font-mono text-lg text-brutal-white/70 max-w-2xl">
            Real projects. Real impact. Real brutalist approach to solving human problems 
            through radical design thinking.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`group cursor-pointer transition-all duration-500 transform ${
                expandedCase === caseStudy.id 
                  ? 'scale-102 bg-brutal-gray' 
                  : 'hover:scale-101 hover:bg-brutal-gray/30'
              }`}
              onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
            >
              {/* Card Header */}
              <div className="border-l-4 border-neon-magenta p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="text-2xl md:text-3xl font-mono font-black text-neon-blue">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-brutal font-black text-brutal-white mb-2 group-hover:text-neon-magenta transition-colors duration-300">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center gap-4 font-mono text-xs">
                        <span className="text-neon-blue uppercase tracking-wider">
                          {caseStudy.category}
                        </span>
                        <span className="text-brutal-white/60">
                          {caseStudy.year}
                        </span>
                        <span className={`px-2 py-1 border ${
                          caseStudy.status === 'LIVE' ? 'border-neon-blue text-neon-blue' : 'border-neon-magenta text-neon-magenta'
                        }`}>
                          {caseStudy.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-mono text-neon-blue group-hover:animate-glitch">
                    {expandedCase === caseStudy.id ? '[-]' : '[+]'}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCase === caseStudy.id && (
                  <div className="mt-8 pt-8 border-t border-brutal-white/20 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Problem & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-mono text-sm uppercase tracking-wider text-neon-blue mb-3">
                            &gt; PROBLEM_STATEMENT
                          </h4>
                          <p className="font-mono text-base leading-relaxed text-brutal-white/80">
                            {caseStudy.problem}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-mono text-sm uppercase tracking-wider text-neon-magenta mb-3">
                            &gt; SOLUTION_APPROACH
                          </h4>
                          <p className="font-mono text-base leading-relaxed text-brutal-white/80">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Impact & Tech */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-mono text-sm uppercase tracking-wider text-neon-blue mb-3">
                            &gt; IMPACT_METRICS
                          </h4>
                          <ul className="space-y-2">
                            {caseStudy.impact.map((metric, i) => (
                              <li key={i} className="font-mono text-base text-brutal-white/80 flex items-center gap-2">
                                <span className="text-neon-magenta">■</span>
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-mono text-sm uppercase tracking-wider text-neon-magenta mb-3">
                            &gt; TECH_STACK
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.tech.map((tech) => (
                              <span key={tech} className="text-xs bg-brutal-black text-neon-blue px-2 py-1 border border-neon-blue/30 font-mono">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-brutal-white/10">
                      <button className="bg-transparent border border-neon-blue text-neon-blue px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-neon-blue hover:text-brutal-black transition-all duration-300">
                        VIEW_LIVE
                      </button>
                      <button className="bg-transparent border border-neon-magenta text-neon-magenta px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-neon-magenta hover:text-brutal-black transition-all duration-300">
                        CASE_STUDY
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="font-mono text-brutal-white/60 mb-4">
            &gt; MORE_PROJECTS.LOADING...
          </div>
          <button className="bg-transparent border-2 border-neon-blue text-neon-blue px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-neon-blue hover:text-brutal-black transition-all duration-300 transform hover:scale-105">
            VIEW_ALL_WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
