import React from 'react';
import './ProductCard.css';

interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product; // Принимаем объект Product в качестве пропса
  addToCart: () => void; // Принимаем функцию для добавления товара в корзину как пропс
  onAddToFavorite: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, onAddToFavorite }) => {
  return (
    <div className="product-card">
      <div className="product-content">
        <div className="product-img">
          <img  src={require('../../assets/img/' + product.img)} alt={product.title} />
        </div>
        <div className="product-info">
          <div className="title-price">
            <h3 className="title">{product.title}</h3>
            <p className="price">{product.price} ₽</p>
          </div>
          <div className="rating-button">
            <div className="rating">
              <img onClick={onAddToFavorite} src={require("../../assets/icons/Star.svg").default} alt="Рейтинг" />
              <span>{product.rate}</span>
            </div>
            <button onClick={addToCart} className="buy-btn">Купить</button>
          </div>
        </div>
      </div>
     
      
      
    </div>
  );
}

export default ProductCard;
