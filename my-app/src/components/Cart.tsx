import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Button from './Button';

// Order interface for receipt
type OrderDetails = {
  items: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
  total: number;
  paymentMethod: 'gcash';
  orderNumber: string;
  orderDate: string;
  pickupDate: string;
  pickupTime: string;
  pickupOption: 'store' | 'rider' | null;
  customerName: string;
  phoneNumber: string;
};

const Cart: React.FC = () => {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'gcash'>('gcash');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  
  // New form fields
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickupOption, setPickupOption] = useState<'store' | 'rider' | null>(null);

  const generateOrderNumber = () => {
    return 'KAM' + Date.now().toString().slice(-8);
  };

  const getCurrentDateTime = () => {
    return new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCheckout = () => {
    if (!pickupOption || cart.items.length === 0) {
      return;
    }
    
    const orderNumber = generateOrderNumber();
    const orderDate = getCurrentDateTime();
    
    const newOrderDetails: OrderDetails = {
      items: [...cart.items],
      total: cart.total,
      paymentMethod,
      orderNumber,
      orderDate,
      pickupDate,
      pickupTime,
      customerName,
      phoneNumber,
      pickupOption
    };
    
    setOrderDetails(newOrderDetails);
    setShowConfirmation(true);
  };

  const isSunday = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDay() === 0;
  };

  const validatePickupDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return date >= today && date <= oneWeekFromNow && !isSunday(dateString);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 19; hour++) {
      const displayTime = hour === 12 ? '12:00 PM - 1:00 PM' : 
                         hour === 11 ? '11:00 AM - 12:00 PM' :
                         hour < 12 ? `${hour}:00 AM - ${hour + 1}:00 AM` :
                         `${hour - 12}:00 PM - ${hour - 11}:00 PM`;
      slots.push({
        value: `${hour}:00-${hour + 1}:00`,
        display: displayTime
      });
    }
    return slots;
  };

  if (cart.items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-kamora-dark mb-4">Your Cart</h3>
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-kamora-dark">Your Cart</h3>
        <Button
          onClick={clearCart}
          variant="secondary"
          className="text-sm py-2 px-4"
        >
          Clear Cart
        </Button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-kamora-dark">{item.name}</h4>
              <p className="text-kamora-orange font-bold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>
            <div className="text-right">
              <p className="font-bold text-kamora-dark">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-kamora-dark">Total:</span>
          <span className="text-2xl font-bold text-kamora-orange">
            ${cart.total.toFixed(2)}
          </span>
        </div>

        {/* Customer Information */}
        <div className="space-y-4 mb-4">
          {/* Name Input */}
          <div className="bg-kamora-cream rounded-lg p-4">
            <label className="block text-sm font-medium text-kamora-dark mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamora-orange"
              required
            />
          </div>
          
          {/* Phone Number Input */}
          <div className="bg-kamora-cream rounded-lg p-4">
            <label className="block text-sm font-medium text-kamora-dark mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 11))}
              placeholder="Enter 11-digit phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamora-orange"
              maxLength={11}
              required
            />
          </div>
          
          {/* Date Pickup Input */}
          <div className="bg-kamora-cream rounded-lg p-4">
            <label className="block text-sm font-medium text-kamora-dark mb-2">
              Pickup Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => {
                if (validatePickupDate(e.target.value)) {
                  setPickupDate(e.target.value);
                }
              }}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamora-orange"
              required
            />
          </div>
          
          {/* Pickup Time Input */}
          <div className="bg-kamora-cream rounded-lg p-4">
            <label className="block text-sm font-medium text-kamora-dark mb-2">
              Pickup Time <span className="text-red-500">*</span>
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamora-orange"
              required
            >
              <option value="">Select a time slot</option>
              {generateTimeSlots().map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.display}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Payment Method Selection */}
        <div className="bg-kamora-cream rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-kamora-dark mb-3">Payment Method</h4>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="gcash"
              checked={paymentMethod === 'gcash'}
              onChange={() => setPaymentMethod('gcash')}
              className="w-4 h-4 text-kamora-orange"
            />
            <span className="text-sm font-medium">GCash</span>
          </label>
        </div>

        {/* Pickup Option Selection */}
        {pickupDate && customerName && phoneNumber.length === 11 && pickupTime && (
          <div className="bg-kamora-cream rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-kamora-dark mb-3">Choose Pickup Option</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPickupOption('store')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pickupOption === 'store'
                    ? 'bg-kamora-orange text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                🏪 Pick-up at Store
              </button>
              <button
                onClick={() => setPickupOption('rider')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pickupOption === 'rider'
                    ? 'bg-kamora-orange text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                🛵 Book Your Rider
              </button>
            </div>
          </div>
        )}
        
        <Button
          onClick={handleCheckout}
          variant="primary"
          disabled={cart.items.length === 0 || !pickupOption}
          className="w-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
