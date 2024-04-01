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
    <div className='row-card'>
      <div className="cart-card">
        <div className="cart-content">
          <div className="cart-element cart-img-quantity">
            <div className="cart-img">
              <img src={require('../../assets/img/' + cartItems.img)} alt={cartItems.title} />
            </div>
            <div className="cart-quantity">
              <img className="minus" onClick={decreaseCartItemQuantity} src={require("../../assets/icons/Minus.svg").default} alt="Minus"/>
              {/* <button onClick={decreaseCartItemQuantity}>-</button> */}
              <span>{cartItems.quantity}</span>
              <img className="plus" onClick={addToCart} src={require("../../assets/icons/Plus.svg").default} alt="Plus"/>
              {/* <button onClick={addToCart}>+</button> */}
            </div>
          </div>
          <div className="cart-element cart-title-price">
            <h3>{cartItems.title}</h3>
            <p>{cartItems.price} ₽</p>
          </div>
          <div className="cart-element cart-sum-price">
            <div>
              <p>{(cartItems.quantity * cartItems.price)} ₽</p>
            </div>
          </div>
        </div>      
      </div>
      <div>
        <img className="cart-delete" onClick={removeFromCart} src={require("../../assets/icons/Delete.svg").default} alt="Delete"/>
      </div>
    </div>
    
  );
}

export default ProductCard;
