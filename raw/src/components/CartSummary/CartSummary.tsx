import React from 'react';
import './CartSummary.css';

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="checkout">
      <div className="total">
        <p>ИТОГО</p>
        <p>₽ {total}</p>
      </div>
      <button className="button">Перейти к оформлению</button>
    </div>
  );
};

export default CartSummary;
