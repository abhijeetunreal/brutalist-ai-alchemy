
import { useState } from 'react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', message: 'Hello! I\'m Abhijeet\'s AI assistant. Ask me anything about his work or availability.' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages(prev => [...prev, { sender: 'user', message: chatInput }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Abhijeet is currently available for new projects. His rate starts at $150/hour for design consultation.',
        'He specializes in AI-powered design systems and brutalist UI/UX. Timeline depends on project scope.',
        'For enterprise projects, he offers comprehensive design audits and systematic redesigns.',
        'His current focus is on experimental interfaces that bridge human intuition and machine learning.'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { sender: 'ai', message: randomResponse }]);
    }, 1000);

    setChatInput('');
  };

  const socialLinks = [
    { name: 'GITHUB', url: '#', ascii: '{ CODE }' },
    { name: 'DRIBBBLE', url: '#', ascii: '( DESIGN )' },
    { name: 'LINKEDIN', url: '#', ascii: '[ NETWORK ]' },
    { name: 'TWITTER', url: '#', ascii: '< THOUGHTS >' }
  ];

  return (
    <section className="min-h-screen bg-brutal-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-brutal font-black mb-4 chaos-text">
            <span className="text-neon-blue">[</span>
            CONTACT.EXE
            <span className="text-neon-blue">]</span>
          </h2>
          <p className="font-mono text-lg text-brutal-white/70 max-w-2xl">
            Ready to build something brutally beautiful? Let's break some design rules together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Primary CTA */}
            <div className="bg-brutal-gray p-8 border-l-4 border-neon-magenta">
              <h3 className="font-mono text-xl font-bold text-neon-magenta mb-4">
                &gt; HIRE_ME.NOW()
              </h3>
              <p className="font-mono text-base text-brutal-white/80 mb-6 leading-relaxed">
                Available for freelance projects, design consultations, and AI integration work. 
                Currently booking for Q2 2024.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border-2 border-neon-magenta text-neon-magenta px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-neon-magenta hover:text-brutal-black transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="group-hover:animate-glitch">START_PROJECT</span>
              </button>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-bold text-neon-blue mb-4">
                &gt; DIRECT_CHANNELS
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-neon-blue w-16">EMAIL:</span>
                  <span className="text-brutal-white/80">abhijeet@brutaldesign.dev</span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-neon-magenta w-16">PHONE:</span>
                  <span className="text-brutal-white/80">+1 (555) BRUTAL-1</span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-neon-blue w-16">RATE:</span>
                  <span className="text-brutal-white/80">$150-300/hour</span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-neon-magenta w-16">STATUS:</span>
                  <span className="text-neon-blue animate-pulse">AVAILABLE</span>
                </div>
              </div>
            </div>

            {/* ASCII Social Links */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-bold text-neon-blue mb-4">
                &gt; SOCIAL_NETWORK.LINKS
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group bg-brutal-gray p-4 border border-brutal-white/20 hover:border-neon-blue transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="font-mono text-center">
                      <div className="text-neon-blue text-xs mb-2 group-hover:animate-glitch">
                        {social.ascii}
                      </div>
                      <div className="text-brutal-white/80 text-xs uppercase tracking-wider">
                        {social.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Chat Assistant */}
          <div className="bg-brutal-gray border-2 border-neon-blue p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-lg font-bold text-neon-blue">
                AI_ASSISTANT.CHAT
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-brutal-white/60">ONLINE</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="bg-brutal-black p-4 h-64 overflow-y-auto mb-4 border border-brutal-white/20">
              <div className="space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 font-mono text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-neon-blue text-brutal-black' 
                        : 'bg-brutal-gray text-brutal-white border border-neon-magenta'
                    }`}>
                      <div className="text-xs opacity-60 mb-1">
                        {msg.sender === 'user' ? 'YOU' : 'AI_ASSISTANT'}
                      </div>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about availability, rates, process..."
                className="flex-1 bg-brutal-black text-brutal-white font-mono text-sm p-3 border border-brutal-white/20 focus:border-neon-blue focus:outline-none"
              />
              <button
                type="submit"
                className="bg-transparent border border-neon-blue text-neon-blue px-4 py-3 font-mono text-xs uppercase hover:bg-neon-blue hover:text-brutal-black transition-all duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-brutal-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-brutal-gray border-4 border-neon-magenta max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-mono text-2xl font-bold text-neon-magenta glitch-text" data-text="PROJECT_BRIEF.FORM">
                  PROJECT_BRIEF.FORM
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-2xl font-mono text-brutal-white hover:text-neon-magenta transition-colors duration-300"
                >
                  [X]
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-sm text-neon-blue uppercase tracking-wider mb-2">
                      NAME*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-brutal-black text-brutal-white font-mono p-3 border border-brutal-white/20 focus:border-neon-blue focus:outline-none"
                      placeholder="Your name here..."
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-sm text-neon-blue uppercase tracking-wider mb-2">
                      EMAIL*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-brutal-black text-brutal-white font-mono p-3 border border-brutal-white/20 focus:border-neon-blue focus:outline-none"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm text-neon-magenta uppercase tracking-wider mb-2">
                    PROJECT_TYPE
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="w-full bg-brutal-black text-brutal-white font-mono p-3 border border-brutal-white/20 focus:border-neon-magenta focus:outline-none"
                  >
                    <option value="">Select project type...</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="design-system">Design System</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="full-project">Full Project</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-sm text-neon-blue uppercase tracking-wider mb-2">
                    PROJECT_DETAILS*
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full bg-brutal-black text-brutal-white font-mono p-3 border border-brutal-white/20 focus:border-neon-blue focus:outline-none resize-none"
                    placeholder="Describe your project, timeline, budget, and what makes it brutally interesting..."
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="bg-transparent border-2 border-neon-magenta text-neon-magenta px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-neon-magenta hover:text-brutal-black transition-all duration-300 transform hover:scale-105"
                  >
                    SEND_BRIEF
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-transparent border border-brutal-white/40 text-brutal-white/60 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:border-brutal-white hover:text-brutal-white transition-all duration-300"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
