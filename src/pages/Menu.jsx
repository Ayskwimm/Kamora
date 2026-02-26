import { useState } from 'react'
import FoodCard from '../components/FoodCard'
import { foodData, categories } from '../data/foodData'
import './Menu.css'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredItems = selectedCategory === 'all' 
    ? foodData 
    : foodData.filter(item => item.category === selectedCategory)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="menu-page">
      <section className="menu-hero section">
        <div className="container">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Explore our delicious selection of grilled dishes, desserts, and beverages
          </p>
        </div>
      </section>

      <section className="menu-content section">
        <div className="container">
          <div className="category-filters">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="menu-stats">
            <p className="items-count">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="menu-grid">
            {filteredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-items">
              <h3>No items found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <section className="menu-info section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>🍽️ Dietary Options</h3>
              <p>We offer vegetarian and gluten-free options. Please ask our staff for details.</p>
            </div>
            <div className="info-card">
              <h3>🌶️ Spice Levels</h3>
              <p>Most dishes can be customized to your preferred spice level.</p>
            </div>
            <div className="info-card">
              <h3>⏰ Preparation Time</h3>
              <p>Average preparation time: 15-25 minutes for grilled items, 5-10 minutes for desserts and beverages.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
