import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job</h1>
          <p className="hero-subtitle">
            Discover amazing opportunities from top companies. 
            Your next career move starts here.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Active Jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Job Seekers</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Browse Jobs</button>
            <button className="btn-secondary">Post a Job</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <div className="floating-card card-1">💼 Remote</div>
            <div className="floating-card card-2">🚀 Full-time</div>
            <div className="floating-card card-3">💰 High Salary</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
