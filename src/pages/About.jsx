import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">About FlavorFiesta</h1>
          <p className="page-subtitle">
            Our journey of bringing happiness through food
          </p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2015, FlavorFiesta began as a small food truck with a big dream - 
                to bring people together through the joy of great food. What started as a 
                humble operation serving grilled sandwiches has grown into a beloved culinary 
                destination known for our commitment to quality and innovation.
              </p>
              <p>
                Our founder, Chef Maria Rodriguez, believed that food should be more than 
                just sustenance - it should be an experience that creates lasting memories. 
                With over 20 years of culinary expertise, she brought her family recipes and 
                passion for flavors to every dish we serve.
              </p>
              <p>
                Today, FlavorFiesta stands as a testament to that vision. We've served over 
                100,000 happy customers, expanded our menu to include everything from 
                sizzling grilled specialties to decadent desserts, and built a community 
                of food lovers who share our passion for exceptional flavors.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🍽️</span>
                <p>Our Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-values section">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion for Food</h3>
              <p>We approach every dish with passion and creativity, ensuring each bite is a memorable experience.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality, using only the finest ingredients and maintaining the highest standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community Focus</h3>
              <p>We believe in giving back to our community and creating a welcoming space for everyone.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to sustainable practices, from sourcing local ingredients to minimizing waste.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👩‍🍳</span>
              </div>
              <h3>Maria Rodriguez</h3>
              <p className="member-title">Founder & Head Chef</p>
              <p className="member-bio">With 20+ years of culinary experience, Maria brings passion and innovation to every dish.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👨‍🍳</span>
              </div>
              <h3>James Chen</h3>
              <p className="member-title">Executive Chef</p>
              <p className="member-bio">James specializes in grilled specialties and brings Asian fusion techniques to our menu.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👩‍🍳</span>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-title">Pastry Chef</p>
              <p className="member-bio">Sarah creates our decadent desserts with artistic flair and attention to detail.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👨‍💼</span>
              </div>
              <h3>David Thompson</h3>
              <p className="member-title">Restaurant Manager</p>
              <p className="member-bio">David ensures every guest has an exceptional dining experience from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement">
              <div className="achievement-number">100K+</div>
              <div className="achievement-label">Happy Customers</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Menu Items</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">15+</div>
              <div className="achievement-label">Awards Won</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">8</div>
              <div className="achievement-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
