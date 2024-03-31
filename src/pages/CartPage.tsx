import React from 'react';
import CartItem from '../components/CartItem/CartItem'; 

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
      <h1>Shopping Cart</h1>
      <div>
        <div className="cataloge">
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
      </div>
      <div className="checkout">
        <h2>Total: {calculateTotal(cartItems)} ₽</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

const calculateTotal = (cartItems: Product[]) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default CartPage;
