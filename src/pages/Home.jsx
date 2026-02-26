import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import PromoBanner from '../components/PromoBanner'
import Testimonials from '../components/Testimonials'
import { foodData } from '../data/foodData'
import './Home.css'

const Home = () => {
  // Get featured items for each category
  const featuredGrilled = foodData.filter(item => item.category === 'grilled').slice(0, 3)
  const featuredDesserts = foodData.filter(item => item.category === 'desserts').slice(0, 3)
  const featuredBeverages = foodData.filter(item => item.category === 'beverages').slice(0, 3)

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-menu section">
        <div className="container">
          <h2 className="section-title">Featured Menu Items</h2>
          <p className="section-subtitle">
            Discover our most popular dishes crafted with love and the finest ingredients
          </p>
          
          <MenuSection 
            title="🔥 Grilled Specialties"
            items={featuredGrilled}
            description="Sizzling grilled dishes cooked to perfection with our signature spices"
          />
          
          <MenuSection 
            title="🍰 Decadent Desserts"
            items={featuredDesserts}
            description="Indulge in our sweet creations that will satisfy your cravings"
          />
          
          <MenuSection 
            title="🥤 Refreshing Beverages"
            items={featuredBeverages}
            description="Cool down with our fresh and flavorful drink selections"
          />
        </div>
      </section>

      <PromoBanner />
      
      <Testimonials />

      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose FlavorFiesta?</h2>
          <p className="section-subtitle">
            We're committed to delivering the best dining experience
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Our talented chefs bring years of experience and passion to every dish</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Quality Ingredients</h3>
              <p>We source only the freshest, highest-quality ingredients for our menu</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Made with Love</h3>
              <p>Every dish is prepared with care and attention to detail</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Service</h3>
              <p>Quick and efficient service without compromising on quality</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Hygienic</h3>
              <p>Maintaining the highest standards of cleanliness and food safety</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our top priority, guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
