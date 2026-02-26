import FoodCard from './FoodCard'
import './MenuSection.css'

const MenuSection = ({ title, items, description }) => {
  return (
    <div className="menu-section">
      <div className="menu-section-header">
        <h2 className="menu-section-title">{title}</h2>
        {description && <p className="menu-section-description">{description}</p>}
      </div>
      <div className="menu-grid">
        {items.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MenuSection
