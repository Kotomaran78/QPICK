import React from 'react';
import CartItem from '../components/CartItem/CartItem'; 
import CartSummary from '../components/CartSummary/CartSummary';

interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: string;
  quantity: number;
}

interface CartPageProps {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
  addToCart: (product: Product) => void; 
  decreaseCartItemQuantity: (product: Product) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart, addToCart, decreaseCartItemQuantity }) => {
  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      <div className="cart-page-content">
        <div className="shopping-cart">
          {cartItems.map((cartItems, index) => (
            <CartItem 
              key={index} 
              cartItems={cartItems} 
              removeFromCart={() => removeFromCart(cartItems)} 
              addToCart={() => addToCart(cartItems)} 
              decreaseCartItemQuantity={() => decreaseCartItemQuantity(cartItems)} 
            />
          ))}
        </div>
        <div className="shopping-total">
          <CartSummary total={calculateTotal(cartItems)} />
        </div>
      </div>
      
    </div>
  );
};

const calculateTotal = (cartItems: Product[]) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default CartPage;
