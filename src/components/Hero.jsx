import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    'Experience the Taste of Happiness',
    'Discover Amazing Flavors',
    'Savor Every Moment'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typewriter">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Welcome to Kamora, where every dish tells a story of passion, 
            quality, and unforgettable taste. From sizzling grilled specialties to 
            decadent desserts, we bring you the finest culinary experience.
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/menu" className="btn btn-primary pulse">
              Order Now
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="hero-features fade-in">
            <div className="feature">
              <span className="feature-icon">🔥</span>
              <span>Grilled to Perfection</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🍰</span>
              <span>Artisanal Desserts</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🥤</span>
              <span>Refreshing Beverages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
