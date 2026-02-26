import { useState, useEffect } from 'react'
import './PromoBanner.css'

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set the target date to 7 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <section className="promo-banner">
      <div className="container">
        <div className="promo-content">
          <div className="promo-text">
            <h2 className="promo-title">
              🎉 Limited Time Offer! 🎉
            </h2>
            <p className="promo-description">
              Get <strong>30% OFF</strong> on all grilled items and <strong>Buy 1 Get 1 Free</strong> on selected desserts!
            </p>
            <p className="promo-code">
              Use code: <span className="code">FIESTA30</span>
            </p>
          </div>
          
          <div className="countdown">
            <h3 className="countdown-title">Offer Ends In:</h3>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-value">{formatNumber(timeLeft.days)}</span>
                <span className="time-label">Days</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{formatNumber(timeLeft.hours)}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{formatNumber(timeLeft.minutes)}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{formatNumber(timeLeft.seconds)}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
