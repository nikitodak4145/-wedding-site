import React, { useEffect } from 'react';

function FallingFlowers() {
  useEffect(() => {
    // Изменяем отступ body для этой страницы
    document.body.style.paddingTop = '60px'; // меньше отступ

    // Функция для создания падающих элементов (редко)
    const createFallingElement = () => {
      const elements = ['🌸', '✨'];
      const el = document.createElement('div');
      el.innerHTML = elements[Math.floor(Math.random() * elements.length)];
      el.style.position = 'fixed';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-20px';
      el.style.fontSize = '12px';
      el.style.opacity = '0.3';
      el.style.zIndex = '9999';
      el.style.pointerEvents = 'none';
      el.style.animation = `fall ${Math.random() * 10 + 8}s linear forwards`;
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 12000);
    };

    // Добавляем стили анимации
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Запускаем интервал РЕДКО (каждые 2 секунды)
    const interval = setInterval(createFallingElement, 2000);

    // Очистка при размонтировании компонента
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
      document.body.style.paddingTop = '80px'; // возвращаем обратно
    };
  }, []);

  return null; // Компонент ничего не рисует, только эффект
}

export default FallingFlowers;