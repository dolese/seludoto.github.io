import React from 'react'

const realProjects = [
  {
    title: 'Dolese Wonderland FX',
    description: 'A comprehensive forex trading platform with real-time market data, paper trading, backtesting capabilities, and educational courses. Built with Python backend and React frontend.',
    technologies: ['Python', 'React', 'JWT Auth', 'MongoDB'],
    url: 'https://github.com/dolese/dolesewonderlandfx',
    featured: true
  },
  {
    title: 'SE Commerce',
    description: 'Full-featured e-commerce platform for goods and services with shopping cart, payment processing, and order management.',
    technologies: ['Django', 'Python', 'PostgreSQL'],
    url: 'https://github.com/dolese/secommerce',
    featured: true
  },
  {
    title: 'Premium FX Trading Bot',
    description: 'Automated forex trading robot for MetaTrader 5 with multi-timeframe analysis, risk management, trailing stops, and support/resistance detection.',
    technologies: ['MQ5', 'Trading Algorithms', 'Risk Management'],
    url: 'https://github.com/dolese/fxbot',
    featured: false
  },
  {
    title: 'Dolese Wallet',
    description: 'Cryptocurrency wallet implementation with PSBT (Partially Signed Bitcoin Transactions) support for secure multi-party transactions.',
    technologies: ['Bitcoin', 'PSBT', 'Cryptography'],
    url: 'https://github.com/dolese/dolesewallet',
    featured: false
  },
  {
    title: 'ProTrader Bot',
    description: 'Advanced trading bot with grid orders, virtual SL/TP, multi-account risk management, and comprehensive strategy backtesting.',
    technologies: ['Python', 'Backtrader', 'Trading Strategies'],
    url: 'https://github.com/dolese/protrader_bot',
    featured: false
  },
  {
    title: 'TAI - Trading AI Platform',
    description: 'AI-powered trading analysis and automation platform with deployment scripts and comprehensive infrastructure setup.',
    technologies: ['AI/ML', 'Python', 'PowerShell', 'Vercel'],
    url: 'https://github.com/dolese/TAI',
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Selected Projects</h2>
      <div className="grid">
        {realProjects.map((project) => (
          <article className={`card project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                className="link" 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
