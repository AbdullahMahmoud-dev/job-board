import React from "react";

const Stats = () => {
  const stats = [
    {
      icon: "👥",
      number: "50,000+",
      label: "Active Job Seekers",
      description: "Professionals looking for their next opportunity"
    },
    {
      icon: "🏢",
      number: "5,000+",
      label: "Companies",
      description: "Top companies hiring talent"
    },
    {
      icon: "📋",
      number: "10,000+",
      label: "Job Listings",
      description: "Available positions across all industries"
    },
    {
      icon: "✅",
      number: "95%",
      label: "Success Rate",
      description: "Candidates who found their dream job"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <h2>Why Choose Job Board?</h2>
          <p>Join thousands who have found their perfect career match</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
