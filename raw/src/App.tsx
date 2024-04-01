import React, { useState } from 'react'; // Импорт React и useState из библиотеки react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт BrowserRouter, Routes и Route из библиотеки react-router-dom
import CatalogPage from './pages/CatalogPage'; // Импорт компонента CatalogPage из файла ./pages/CatalogPage
import CartPage from './pages/CartPage'; // Импорт компонента CartPage из файла ./pages/CartPage
import Header from './components/Header/Header'; // Импорт компонента Header из файла ./components/Header
import Footer from './components/Footer/Footer'; // Импорт компонента Footer из файла ./components/Footer
import './App.css';

interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: string;
  quantity: number;
}

function App() {
  // Состояние для хранения количества товаров в корзине
  const [cartItemsCount, setCartItemsCount] = useState(0);
  // Состояние для хранения количества избранных товаров
  const [favoriteItemsCount, setFavoriteItemsCount] = useState(0);

  // Обработчик для увеличения количества товаров в корзине
  const handleAddToCart = () => {
    setCartItemsCount(prevCount => prevCount + 1);
  };

  // Обработчик для увеличения количества избранных товаров
  // const handleAddToFavorite = () => {
  //   setFavoriteItemsCount(prevCount => prevCount + 1);
  // };




  // Состояние для хранения списка избранных товаров
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  // Обработчик для добавления товара в избранное
  const handleAddToFavorite = (product: Product) => {
    // Проверяем, если товар уже в списке избранных
    if (!favoriteItems.includes(product)) {
      // Увеличиваем счетчик и добавляем товар в список избранных
      setFavoriteItemsCount(prevCount => prevCount + 1);
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  // Обработчик для удаления товара из избранного
  const handleRemoveFromFavorite = (product: Product) => {
    // Уменьшаем счетчик и удаляем товар из списка избранных
    setFavoriteItemsCount(prevCount => prevCount - 1);
    setFavoriteItems(favoriteItems.filter(item => item !== product));
  };










  const [cartItems, setCartItems] = useState<Product[]>([]);
  // const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    handleAddToCart();
  };

  const removeFromCart = (product: Product) => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
    setCartItemsCount(cartItemsCount - product.quantity);
  };

  const decreaseCartItemQuantity = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
      setCartItemsCount(prevCount => prevCount - 1);
    } else {
      removeFromCart(product);
    }
  };








  return (
    <Router>
      <div className="app">
        {/* Хедер сайта */}
        <Header cartItemsCount={cartItemsCount} favoriteItemsCount={favoriteItemsCount} />

        {/* Роуты */}
        <Routes>
          {/* Страница каталога */}
          <Route path="/" element={<CatalogPage addToCart={addToCart} onAddToFavorite={handleAddToFavorite} />} />
          {/* Страница корзины */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} decreaseCartItemQuantity={decreaseCartItemQuantity} />} />
        </Routes>

        {/* Футер сайта */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
