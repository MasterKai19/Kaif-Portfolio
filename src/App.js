import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Camera, PenTool, Megaphone, Code, Award, Users, BookOpen } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">KAIF</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#achievements">Achievements</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">MOHAMMAD KAIF RAJ</h1>
            <p className="hero-subtitle">Computer Science Student & Entrepreneur</p>
            <div className="hero-contact">
              <span><Phone size={16} /> +8801639-696287</span>
              <span><Mail size={16} /> kaifraj2002@gmail.com</span>
            </div>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#experience" className="btn btn-secondary">View Work</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">5.00</div>
            <div className="stat-label">SSC GPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.00</div>
            <div className="stat-label">HSC GPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Students Tutored</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">7.0</div>
            <div className="stat-label">IELTS Score</div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Founder & CEO - Flawed Unbunwear</h3>
              <span className="experience-date">2023 - Present</span>
            </div>
            <ul className="experience-list">
              <li>Established and managed a startup clothing brand targeting Gen Z and Gen Alpha</li>
              <li>Handled digital marketing, designing, content creation, and photography for brand campaigns</li>
              <li>Planned expansion into new products and market segments</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="edu-icon"><BookOpen size={24} /></div>
              <h3>Bachelor's in Computer Science</h3>
              <p className="edu-institute">United International University (UIU)</p>
              <p className="edu-detail">Dhaka, Bangladesh</p>
              <p className="edu-date">2024 - Present</p>
            </div>
            <div className="education-card">
              <div className="edu-icon"><Award size={24} /></div>
              <h3>HSC - Science</h3>
              <p className="edu-institute">Bangladesh International School and College</p>
              <p className="edu-detail">GPA: 5.00</p>
              <p className="edu-date">2022</p>
            </div>
            <div className="education-card">
              <div className="edu-icon"><Award size={24} /></div>
              <h3>SSC - Science</h3>
              <p className="edu-institute">Adamjee Cantonment Public School</p>
              <p className="edu-detail">GPA: 5.00</p>
              <p className="edu-date">2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="container">
          <h2 className="section-title">Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card"><Camera size={32} /><h4>Designing & Photography</h4></div>
            <div className="skill-card"><Megaphone size={32} /><h4>Digital Marketing</h4></div>
            <div className="skill-card"><PenTool size={32} /><h4>Content Creation</h4></div>
            <div className="skill-card"><Code size={32} /><h4>MS & Adobe Softwares</h4></div>
          </div>
        </div>
      </section>

      <section className="clubs">
        <div className="container">
          <h2 className="section-title">Clubs & Activities</h2>
          <div className="clubs-grid">
            <div className="club-card"><Users size={24} /><h4>English Language Club</h4></div>
            <div className="club-card"><Users size={24} /><h4>App Club</h4></div>
            <div className="club-card"><Users size={24} /><h4>Entrepreneur Development Club</h4></div>
            <div className="club-card"><Award size={24} /><h4>Bangladesh Scouts</h4></div>
          </div>
          <div className="club-description">
            Actively participated in workshops and events to enhance skills in leadership, communication, and technical development. Tutored over 15 students (Class 5-12) in both Bangla and English versions.
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-list">
            <div className="achievement-item"><span className="achievement-bullet">◆</span><p>Launched and scaled Flawed Urbanwear, a startup clothing brand</p></div>
            <div className="achievement-item"><span className="achievement-bullet">◆</span><p>Planned expansion into new products and market segments</p></div>
            <div className="achievement-item"><span className="achievement-bullet">◆</span><p>Actively represented UIU in entrepreneurial programs</p></div>
            <div className="achievement-item"><span className="achievement-bullet">◆</span><p>IELTS Score 7.0 (Overall) - Fluent in English & Bangla</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item"><Phone size={20} /><span>+8801639-696287</span></div>
            <div className="contact-item"><Mail size={20} /><span>kaifraj2002@gmail.com</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Mohammad Kaif Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;