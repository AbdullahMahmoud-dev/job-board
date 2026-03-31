import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Senior Developer",
      company: "Tech Corp",
      avatar: "👩‍💼",
      content: "Job Board helped me find my dream job in just 2 weeks! The platform is intuitive and the job quality is excellent.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "StartupXYZ",
      avatar: "👨‍💼",
      content: "I was struggling to find the right opportunity until I discovered Job Board. The matching algorithm is spot on!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "UX Designer",
      company: "Design Studio",
      avatar: "👩‍🎨",
      content: "The best job platform I've ever used. Found a remote position that perfectly matches my skills and lifestyle.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Success Stories</h2>
          <p>Hear from professionals who found their dream jobs through our platform</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position} at {testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
