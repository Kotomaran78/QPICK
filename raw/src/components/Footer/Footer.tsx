import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импорт компонента Link из библиотеки react-router-dom
import './Footer.css';



function Footer() {

  // Состояние для хранения выбранного языка
  const [language, setLanguage] = useState('ru');

  // Функция для смены языка
  const handleChangeLanguage = (newLanguage: string) => {
    let message = '';
    if (newLanguage === 'ru') {
      message = 'Язык изменен на русский';
    } else if (newLanguage === 'en') {
      message = 'Language changed to English';
    }
    alert(message);
    setLanguage(newLanguage);
  };

  return (
    <footer className="footer">
      {/* Секция с логотипом */}
      <div className="footer-section">
        {/* Ссылка на главную страницу */}
        <Link to="/" className="logo">
          QPICK
        </Link>
      </div>

      {/* Секция с ссылками */}
      <div className="footer-section">
        {/* Список ссылок */}
        <ul className="footer-links">
          {/* Элемент списка - ссылка на страницу избранных товаров */}
          <li className="footer-link">
            <a href="#" onClick={() => alert('Функционал "Избранные товары" пока не реализован')}>
              Избранное
            </a>
          </li>
          {/* Элемент списка - ссылка на страницу корзины */}
          <li className="footer-link">
            {/* Ссылка на страницу корзины */}
            <Link to="/cart">
              Корзина
            </Link>
          </li>
          {/* Элемент списка - ссылка на страницу контактов */}
          <li className="footer-link">
            <a href="#" onClick={() => alert('Функционал "Контакты" пока не реализован')}>
              Контакты
            </a>
          </li>
          {/* Элемент списка - ссылка на страницу с условиями сервиса */}
          <li className="footer-link">
            <a href="#" onClick={() => alert('Функционал "Условия сервиса" пока не реализован')}>
              Условия сервиса
            </a>
          </li>
        </ul>
      </div>

      {/* Секция смены языка */}
      <div className="footer-section">
        <div className="language-btn">
          {/* Иконка языка */}
          <img src={require("../../assets/icons/Lang.svg").default} alt="Language" />
          {/* Текст кнопки - русский язык */}
          <span
            className={`language-btn ${language === 'ru' ? 'russian' : ''}`} 
            onClick={() => handleChangeLanguage('ru')}
          >
            Рус
          </span>
          {/* Текст кнопки - английский язык */}
          <span
            className={`language-btn ${language === 'en' ? 'english' : ''}`} 
            onClick={() => handleChangeLanguage('en')}
          >
            Eng
          </span>
        </div>
      </div>

      {/* Секция с социальными иконками */}
      <div className="footer-section">
        {/* Список социальных иконок */}
        <div className="social-icons">
          {/* Ссылка с иконкой ВК */}
          <a href="#" className="social-icon">
            <img src={require("../../assets/icons/VK.svg").default} alt="VK" />
          </a>
          {/* Ссылка с иконкой Telegram */}
          <a href="#" className="social-icon">
            <img src={require("../../assets/icons/Telegram.svg").default} alt="Telegram" />
          </a>
          {/* Ссылка с иконкой WhatsApp */}
          <a href="#" className="social-icon">
            <img src={require("../../assets/icons/Whatsapp.svg").default} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
