import React from 'react';
import './Landing.css';

const Landing = () => {
  const handleConnectGitHub = () => {
    alert('UI-only for now');
  };

  return (
    <div className='landing-container'>
      <nav className='top-nav'>
        <div className='logo'>Uktics</div>
        <div className='nav-links'>
          <a href='/'>Home</a>
          <a href='/autofix'>AutoFix</a>
          <a href='/runs'>Runs</a>
          <button onClick={handleConnectGitHub}>Connect GitHub</button>
        </div>
      </nav>
      <header className='hero'>
        <h1>Welcome to Uktics</h1>
        <button onClick={() => window.location.href='/autofix'}>Get Started with AutoFix</button>
        <button onClick={() => window.location.href='/runs'}>View Runs</button>
      </header>
      <section className='features'>
        <div className='feature-card'>Plan → Code → Review</div>
        <div className='feature-card'>CI AutoFix</div>
        <div className='feature-card'>Run History</div>
      </section>
      <section className='how-it-works'>
        <h2>How it Works</h2>
        <ol>
          <li>Step 1: Connect your repository</li>
          <li>Step 2: Configure your settings</li>
          <li>Step 3: Start the CI process</li>
          <li>Step 4: Monitor your runs</li>
        </ol>
      </section>
      <footer className='footer'>
        <p>&copy; 2023 Uktics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;