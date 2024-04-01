import React from 'react';
import { Link } from 'react-router-dom'; // Импорт компонента Link из библиотеки react-router-dom
import './Header.css';

// Определение интерфейса пропсов компонента Header
interface HeaderProps {
  favoriteItemsCount: number; // Количество избранных товаров
  cartItemsCount: number; // Количество товаров в корзине
}

// Компонент Header
const Header: React.FC<HeaderProps> = ({ favoriteItemsCount, cartItemsCount }) => {
  return (
    <header className="header">
      {/* Логотип с ссылкой на главную страницу */}
      <Link to="/" className="logo">
        QPICK
      </Link>

      {/* Иконки */}
      <div className="icons">
        {/* Иконка для избранных товаров с заглушкой */}
        <div className="icon" onClick={() => alert('Функционал "Избранные товары" пока не реализован')}>
          <img src={require("../../assets/icons/Heart.svg").default} alt="Избранные товары" />
          <span className="badge">{favoriteItemsCount}</span>
        </div>

        {/* Иконка для корзины с ссылкой на страницу корзины */}
        <div>
          <Link to="/cart" className="icon">
            <img src={require("../../assets/icons/Cart.svg").default} alt="Корзина" />
            <span className="badge">{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
