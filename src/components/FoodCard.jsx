import { useCart } from '../contexts/CartContext'
import './FoodCard.css'

const FoodCard = ({ item }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(item)
  }

  return (
    <div className="food-card card">
      <div className="food-image">
        <img src={item.image} alt={item.name} />
        <div className="food-category">
          {item.category}
        </div>
      </div>
      <div className="food-content">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <div className="food-footer">
          <div className="food-price">${item.price.toFixed(2)}</div>
          <button 
            className="btn add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
