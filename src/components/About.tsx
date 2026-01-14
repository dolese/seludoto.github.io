import React from 'react'

export default function About() {
  return (
    <section id="about" className="about container">
      <h2>About me</h2>
      <p className="about-bio">
        I'm a Full Stack Developer specializing in web applications, e-commerce platforms, and financial technology. 
        I build scalable solutions using React, TypeScript, Python, and Django. My work spans from trading bots and 
        FX platforms to cryptocurrency wallets and AI development. I'm passionate about creating efficient, 
        user-friendly applications that solve real-world problems.
      </p>
      
      <div className="skills-section">
        <h3>Skills & Technologies</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="tech-badges">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Django</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Trading</h4>
            <div className="tech-badges">
              <span className="tech-badge">MetaTrader 5 (MQ5)</span>
              <span className="tech-badge">Forex Algorithms</span>
              <span className="tech-badge">Backtesting</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Database</h4>
            <div className="tech-badges">
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">PostgreSQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="tech-badges">
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
              <span className="tech-badge">Vercel</span>
              <span className="tech-badge">OAuth 2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
