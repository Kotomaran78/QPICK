import React from 'react';
import './CartItem.css';

interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: string;
  quantity: number;
}

interface ProductCardProps {
  cartItems: Product; // Принимаем объект Product в качестве пропса
  removeFromCart: () => void; 
  addToCart: () => void; 
  decreaseCartItemQuantity: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ cartItems, removeFromCart, addToCart, decreaseCartItemQuantity }) => {
  return (
    <div className="cart-items">
      <div className="cart-item">
        <img className="cart-delete" onClick={removeFromCart} src={require("../../assets/icons/Delete.svg").default} alt="Delete"/>
        <div className="cart-element">
          <div className="cart-img">
            <img src={require('../../assets/img/' + cartItems.img)} alt={cartItems.title} />
          </div>
          <div className="cart-quantity">
            <button onClick={decreaseCartItemQuantity}>-</button>
            <span>{cartItems.quantity}</span>
            <button onClick={addToCart}>+</button>
          </div>
        </div>
        <div className="cart-element">
          <h3>{cartItems.title}</h3>
          <p>Price: {cartItems.price} ₽</p>
        </div>
        <div className="cart-element">
          {/* <p>Total: {calculate(cartItems.quantity * cartItems.price)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
