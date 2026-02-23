import React, { useEffect } from 'react';
import '../styles/wedding.css';
import { initLazyLoading, initFadeAnimation, animateStats } from '../assets/wedding';

function Portfolio() {
    
  useEffect(() => {
    // Запускаем lazy loading для картинок
    initLazyLoading();
    
    // Запускаем анимацию появления
    initFadeAnimation();
    
    // Запускаем анимацию статистики
    const statsSection = document.querySelector('.success-stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      statsObserver.observe(statsSection);
    }

    // Для картинок, которые могут не загрузиться через lazy load
    const images = document.querySelectorAll('.lazy-image');
    images.forEach(img => {
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src;
      }
    });
    
  }, []);

  return (
    <div>
      {/* НАВИГАЦИЯ */}
      <nav className="navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="/" className="navbar-brand">
            <span style={{ color: '#d4a5a5' }}>❤</span> ANNA SANKO
          </a>
          <div className="nav-links">
            <a href="/" className="nav-link">Главная</a>
            <a href="/services" className="nav-link">Услуги</a>
            <a href="/about" className="nav-link">Обо мне</a>
            <a href="/portfolio" className="nav-link active">Портфолио</a>
            <a href="/contact" className="nav-link">Контакты</a>
          </div>
        </div>
      </nav>

      {/* ЗАГОЛОВОК ПОРТФОЛИО */}
      <section className="portfolio-header fade-in">
        <h2 className="text-center mb-5" style={{ color: '#d4a5a5' }}>МОЁ ПОРТФОЛИО</h2>
        <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Реальные свадьбы, которые я организовала. Каждая история любви уникальна и создана с особой заботой.
        </p>
      </section>

      {/* ГАЛЕРЕЯ ФОТО */}
      <main>
        <div className="photo-grid">
          {/* ФОТО 1 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://i.pinimg.com/736x/52/b2/a0/52b2a06a53fc8e98c3573d70be2b5a86.jpg"
              className="lazy-image loaded"
              alt="Свадьба Алины и Максима"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Свадьба Алины и Максима</h4>
              <p>Летняя свадьба в саду с цветочной аркой и живой музыкой. Организация под ключ.</p>
            </div>
          </div>

          {/* ФОТО 2 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://top15moscow.ru/storage/blog-uploads/2020/December/desktop-retina/dzYYdufYb8UAqifDr39v.jpg"
              className="lazy-image loaded"
              alt="Свадьба Марии и Дениса"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Свадьба Марии и Дениса</h4>
              <p>Зимняя свадьба в загородном клубе. Координация свадебного дня.</p>
            </div>
          </div>

          {/* ФОТО 3 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://www.anikolsky.com/wp-content/uploads/2023/03/dsc01901-2-1200x800.jpg"
              className="lazy-image loaded"
              alt="Свадьба Екатерины и Артёма"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Свадьба Екатерины и Артёма</h4>
              <p>Морская тематика на берегу озера. Полная организация мероприятия.</p>
            </div>
          </div>

          {/* ФОТО 4 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://wedwed.ru/upload/articles/7a86a071525c4ee8aeb958b2bfd7b301.jpg"
              className="lazy-image loaded"
              alt="Свадьба Ольги и Сергея"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Свадьба Ольги и Сергея</h4>
              <p>Классическая свадьба в историческом особняке. Внимание к каждой детали.</p>
            </div>
          </div>

          {/* ФОТО 5 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://www.anikolsky.com/wp-content/uploads/2023/03/dsd00870-1200x800.jpg"
              className="lazy-image loaded"
              alt="Девичник в стиле бохо"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Девичник в стиле бохо</h4>
              <p>Организация девичника с тематическим декором и развлекательной программой.</p>
            </div>
          </div>

          {/* ФОТО 6 */}
          <div className="photo-item fade-in">
            <div className="loading-overlay">
              <div className="spinner"></div>
              <div className="loading-text">Загрузка фото...</div>
            </div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW-zzCs4ObQSJ9t8smIMUHOhjm8eKkjc9-w&s"
              className="lazy-image loaded"
              alt="Корпоративное мероприятие"
              loading="lazy"
            />
            <div className="photo-caption">
              <h4>Корпоративное мероприятие</h4>
              <p>Организация новогоднего корпоратива для компании из 150 человек.</p>
            </div>
          </div>
        </div>

        {/* СТАТИСТИКА */}
        <div className="success-stats">
          <div className="stat-item">
            <div className="stat-number" data-count="125">125+</div>
            <div className="stat-label">Успешных свадеб</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="250">250+</div>
            <div className="stat-label">Довольных пар</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="5">5</div>
            <div className="stat-label">Лет опыта</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="99">99%</div>
            <div className="stat-label">рекомендаций</div>
          </div>
        </div>

        {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8f9fa', marginTop: '40px' }}>
          <h3 style={{ color: '#d4a5a5', marginBottom: '20px', fontSize: '28px' }}>Хотите такую же свадьбу?</h3>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto 30px' }}>
            Посмотрите больше моих работ в Instagram и напишите для консультации
          </p>
          <a href="https://instagram.com/anna_sanko_wedding" 
             target="_blank" 
             className="btn-instagram"
             rel="noopener noreferrer">
            <span style={{ marginRight: '8px' }}>📷</span> Больше фото в Instagram
          </a>
        </div>

        {/* КНОПКА НАЗАД */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a href="/" className="btn-back">
            <span style={{ marginRight: '8px' }}>←</span> Вернуться на главную
          </a>
        </div>
      </main>

      {/* ФУТЕР */}
      <footer className="footer">
        <div>
          <h4>Anna Sanko Wedding Planner</h4>
          <p style={{ color: '#aaa', margin: '15px 0' }}>Я за уникальную историю любви</p>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/">Главная</a>
            <a className="nav-link" href="/services">Услуги</a>
            <a className="nav-link" href="/about">Обо мне</a>
            <a className="nav-link active" href="/portfolio">Портфолио</a>
            <a className="nav-link" href="/contact">Контакты</a>
          </div>

          <div style={{ margin: '25px 0' }}>
            <a href="https://instagram.com/anna_sanko_wedding" 
               target="_blank" 
               className="footer-link"
               rel="noopener noreferrer"
               style={{ fontSize: '16px' }}>
              <span style={{ marginRight: '5px' }}>📱</span> @anna_sanko_wedding
            </a>
          </div>
          
          <p style={{ color: '#888', fontSize: '14px' }}>
            © 2026 Анна Санько. Свадебный организатор. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;