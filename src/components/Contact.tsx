import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Let's Connect</h2>
      <p className="contact-intro">
        I'm available for freelance projects, collaborations, and full-time opportunities. 
        Whether you need a trading system, web application, or e-commerce platform, I'd love to hear about your project.
      </p>
      <div className="contact-content">
        <p>
          Reach out to me at <a href="mailto:contact@dolese.dev">contact@dolese.dev</a>
        </p>
        <p>
          Connect with me on{' '}
          <a 
            href="https://github.com/dolese"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
