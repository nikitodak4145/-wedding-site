import React, { useEffect } from 'react';
import '../styles/wedding.css';
import { initLazyLoading, initFadeAnimation } from '../assets/wedding';

function Contact() {
  useEffect(() => {
    // Сначала объявляем функции
    window.showNotification = function(message) {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
        font-weight: 500;
      `;
      notification.textContent = message;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 3000);
    };

    window.copyApplicationText = function() {
      const textElement = document.getElementById('applicationText');
      const text = textElement.textContent || textElement.innerText;
      
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      document.execCommand('copy');
      
      document.body.removeChild(textarea);
      
      const copyBtn = document.getElementById('copyBtn');
      const originalText = copyBtn.innerHTML;
      
      copyBtn.innerHTML = '<i className="fas fa-check"></i> Текст скопирован!';
      copyBtn.classList.add('success');
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('success');
      }, 2000);
      
      window.showNotification('Текст скопирован в буфер обмена! ✨');
    };

    // Инициализация общих скриптов
    initLazyLoading();
    initFadeAnimation();

    // Добавляем CSS анимации
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      
      .application-text::-webkit-scrollbar {
        width: 6px;
      }
      
      .application-text::-webkit-scrollbar-track {
        background: #e9ecef;
        border-radius: 3px;
      }
      
      .application-text::-webkit-scrollbar-thumb {
        background: #d4a5a5;
        border-radius: 3px;
      }
      
      .copy-btn.success {
        background: linear-gradient(135deg, #4CAF50, #66BB6A);
      }
    `;
    document.head.appendChild(style);

    // Очистка при размонтировании
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      {/* НАВИГАЦИЯ */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-heart" style={{ color: '#d4a5a5' }}></i> ANNA SANKO
          </a>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/">Главная</a>
            <a className="nav-link" href="/services">Услуги</a>
            <a className="nav-link" href="/about">Обо мне</a>
            <a className="nav-link" href="/portfolio">Портфолио</a>
            <a className="nav-link active" href="/contact">Контакты</a>
          </div>
        </div>
      </nav>

      {/* КОНТАКТЫ */}
      <section className="contact-section">
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>КОНТАКТЫ</h1>
          
          <div className="contact-card">
            <h3 style={{ color: '#d4a5a5', marginBottom: '30px' }}>
              Свяжитесь со мной удобным способом
            </h3>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon" style={{ color: '#E4405F' }}>
                  <i className="fab fa-instagram"></i>
                </div>
                <h5>Instagram</h5>
                <p>@anna_sanko_wedding</p>
                <a href="https://instagram.com/anna_sanko_wedding" 
                   target="_blank" 
                   className="btn-instagram"
                   rel="noopener noreferrer">
                   Написать
                </a>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon" style={{ color: '#0088cc' }}>
                  <i className="fab fa-telegram"></i>
                </div>
                <h5>Telegram</h5>
                <p>@SankoAnna</p>
                <a href="https://t.me/SankoAnna" 
                   target="_blank" 
                   className="btn-telegram"
                   rel="noopener noreferrer">
                   Написать
                </a>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon" style={{ color: '#25D366' }}>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h5>Телефон</h5>
                <p>+375 33 689-09-83</p>
              </div>
            </div>
            
            <p style={{ color: '#888', marginTop: '40px' }}>
              Отвечаю в течение нескольких часов.<br />
              Пишите для обсуждения деталей вашей свадьбы!
            </p>
          </div>

          {/* КАРТОЧКА С ГОТОВОЙ ЗАЯВКОЙ */}
          <div className="application-card">
            <h3 style={{ color: '#d4a5a5', marginBottom: '20px' }}>
              <i className="fas fa-file-alt"></i> Готовая заявка для Анны
            </h3>
            
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Просто скопируйте текст ниже и отправьте его Анне в Instagram:
            </p>
            
            <div className="application-text" id="applicationText">
Здравствуйте, Анна!

Меня зовут [ВСТАВЬТЕ ВАШЕ ИМЯ]
Хочу обсудить организацию свадьбы!

 Предполагаемая дата: [УКАЖИТЕ ДАТУ]
 Место проведения: [ГОРОД/МЕСТО]
 Количество гостей: [КОЛИЧЕСТВО]

 Что важно для нас:
[ОПИШИТЕ КОРОТКО ВАШИ ПОЖЕЛАНИЯ]

 Мой телефон для связи: [ВАШ ТЕЛЕФОН]

С нетерпением жду вашего ответа! 

#заявканасвадьбу #свадебныйпланировщик
            </div>
            
            <div style={{ textAlign: 'center', margin: '25px 0' }}>
              <button className="copy-btn" onClick={() => window.copyApplicationText()} id="copyBtn">
                <i className="fas fa-copy"></i> Скопировать текст заявки
              </button>
              
              <a href="https://instagram.com/direct/new/" target="_blank" className="copy-btn" style={{ background: 'linear-gradient(45deg, #405de6, #833ab4)' }} rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Перейти в Instagram
              </a>
            </div>
            
            <div className="instruction-box">
              <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                📌 Как отправить заявку:
              </p>
              <ol>
                <li>Нажмите "Скопировать текст заявки"</li>
                <li>Зайдите в Instagram и напишите Анне: <strong>@anna_sanko_wedding</strong></li>
                <li>Вставьте скопированный текст в сообщение</li>
                <li>Замените информацию в квадратных скобках [ ] на свои данные</li>
                <li>Отправьте сообщение</li>
              </ol>
              <p style={{ color: '#ff6b95', fontWeight: 'bold', marginTop: '15px' }}>
                ⏱ Анна ответит вам в течение 2-3 часов!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* КНОПКА НАЗАД */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <a href="/" className="btn-back">
          <i className="fas fa-arrow-left me-2"></i> Вернуться на главную
        </a>
      </div>

      {/* ФУТЕР */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Anna Sanko Wedding Planner</h4>
              <p>Я за уникальную историю любви</p>
              <p>Услуги по планированию свадеб</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                <a href="https://instagram.com/anna_sanko_wedding" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: '#e6c8a0', textDecoration: 'none' }}>
                   <i className="fab fa-instagram"></i> @anna_sanko_wedding
                </a>
              </p>
              <p style={{ color: '#aaa', marginTop: '20px' }}>
                © 2026 Анна Санько. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;