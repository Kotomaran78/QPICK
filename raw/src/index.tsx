import React from 'react';
import { createRoot } from 'react-dom/client'; // Импорт функции createRoot из библиотеки react-dom
import App from './App'; // Путь к корневому компоненту приложения
import './index.css'; // Подключаем глобальные стили

const root = createRoot(document.getElementById('root') as HTMLElement); // Создание корневого элемента приложения

root.render( // Рендеринг приложения в корневом элементе
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
