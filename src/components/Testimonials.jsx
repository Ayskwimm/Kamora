import { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely amazing food! The grilled chicken skewers were perfectly seasoned and the service was exceptional. Will definitely be coming back!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Best dining experience I've had in years! The BBQ ribs are to die for, and the chocolate lava cake is simply divine. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    comment: "Great atmosphere and delicious food. The fresh orange juice was exactly what I needed. Only wish they had more dessert options!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    comment: "Kamora never disappoints! The quality is consistently excellent and the staff is always friendly. My go-to restaurant!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    id: 5,
    name: "Jessica Martinez",
    rating: 5,
    comment: "The tiramisu is the best I've ever had! Perfect balance of coffee and cream. The grilled salmon was also cooked to perfection.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Real reviews from real customers who love our food
        </p>

        <div className="testimonial-slider">
          <button 
            className="slider-btn prev-btn"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-text">
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-comment">
                      "{testimonial.comment}"
                    </p>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="slider-btn next-btn"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
