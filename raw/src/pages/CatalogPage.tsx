import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard'; // Импорт компонента ProductCard

const headphones = [
  {
    img: "S852.png",
    title: "Apple BYZ 58521",
    price: 2927,
    rate: 4.7,
    id: 'H001',
    quantity: 0,
  },
  {
    img: "earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    id: 'H002',
    quantity: 0,
  },
  {
    img: "earpods2.png",
    title: "Apple EarPods+",
    price: 2327,
    rate: 4.5,
    id: 'H003',
    quantity: 0,
  },
  {
    img: "S852.png",
    title: "Apple BYZ 58521 Plus",
    price: 2927,
    rate: 4.7,
    id: 'H004',
    quantity: 0,
  },
  {
    img: "earpods1.png",
    title: "Apple EarPods 2",
    price: 2327,
    rate: 4.5,
    id: 'H005',
    quantity: 0,
  },
  {
    img: "earpods2.png",
    title: "Apple EarPods 2+",
    price: 2327,
    rate: 4.5,
    id: 'H006',
    quantity: 0,
  },
];

const wirelessheadphones = [
  {
    img: "AirPods.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    id: 'WH001',
    quantity: 0,
  },
  {
    img: "GH-04.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    id: 'WH002',
    quantity: 0,
  },
  {
    img: "BO4.png",
    title: "Apple EarPods+",
    price: 7527,
    rate: 4.7,
    id: 'WH003 ',
    quantity: 0,
  },
];

interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: string;
  quantity: number;
}

interface CatalogPageProps {
  onAddToFavorite: (product: Product) => void;
  addToCart: (product: Product) => void; // Функция для добавления товара в корзину
}

const CatalogPage: React.FC<CatalogPageProps> = ({ addToCart, onAddToFavorite }) => {
  return (
    <div className="catalogpage">
      <h2>Наушники</h2>
      <div className="cataloge">
        {headphones.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={() => addToCart(product)} onAddToFavorite={() => onAddToFavorite(product)} />
        ))}
      </div>
      <h2>Беспроводные наушники</h2>
      <div className="cataloge">
        {wirelessheadphones.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={() => addToCart(product)} onAddToFavorite={() => onAddToFavorite(product)} />
        ))}
      </div>
    </div>
    
  );
};

export default CatalogPage;
