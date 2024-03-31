my-app/                      # Корневая папка проекта
  node_modules/              # Папка, содержащая установленные зависимости
  public/                    # Папка с публичными файлами
    index.html               # Входной HTML файл приложения
    favicon.ico              # Иконка, отображаемая в браузере
  src/                       # Папка с исходными файлами приложения
    components/              # Папка для компонентов React
      Header/                # Папка для компонента хедера
        Header.tsx           # Компонент хедера
        Header.css           # Стили для хедера
      Footer/                # Папка для компонента футера
        Footer.tsx           # Компонент футера
        Footer.css           # Стили для футера
      ProductCard/           # Папка для компонента карточки товара
        ProductCard.tsx      # Компонент карточки товара
        ProductCard.css      # Стили для карточки товара
      CartItem/              # Папка для компонента элемента корзины
        CartItem.tsx         # Компонент элемента корзины
        CartItem.css         # Стили для элемента корзины
      CartSummary/           # Папка для компонента суммарной информации корзины
        CartSummary.tsx      # Компонент суммарной информации корзины
        CartSummary.css      # Стили для суммарной информации корзины
    pages/                   # Папка для страниц приложения
      CatalogPage.tsx        # Страница каталога товаров
      CartPage.tsx           # Страница корзины
    assets/                  # Папка для статических ресурсов (изображения и т.д.)
      icons/                 # Иконки проекта
      img/                   # Изображения проекта
    App.tsx                  # Основной компонент приложения
    index.tsx                # Главный JavaScript файл, точка входа для приложения
    App.css                  # Файл стилей для компонента App
    index.css                # Глобальные стили
  package.json               # Файл конфигурации npm, содержащий зависимости и скрипты
  package-lock.json          # Файл, создаваемый npm для фиксации версий зависимостей
  README.md                  # Файл с описанием проекта


import React, { useState } from 'react';

const ProductCard = ({ img, title, price, rate, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ img, title, price, quantity });
  };

  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Rating: {rate}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Buy</button>
    </div>
  );
};

export default ProductCard;





import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Headphones = [
  {
    img: "../../assets/img/S852.png",
    title: "Apple BYZ 58521",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "../../assets/img/earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "../../assets/img/earpods2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.title === product.title);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartItemsCount(cartItemsCount + 1);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.title !== product.title);
    setCartItems(updatedCartItems);
    setCartItemsCount(cartItemsCount - product.quantity);
  };

  return (
    <div>
      {Headphones.map((product, index) => (
        <ProductCard key={index} {...product} addToCart={addToCart} />
      ))}
      <div>Cart Items Count: {cartItemsCount}</div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
