import React from 'react';
import '../styles/wedding.css';
import '../assets/music.js';

function Home() {
  
  return (
    <div>
      {/* НАВИГАЦИЯ */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-heart" style={{ color: '#d4a5a5' }}></i> ANNA SANKO
          </a>
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="/">Главная</a>
            <a className="nav-link" href="/services">Услуги</a>
            <a className="nav-link" href="/about">Обо мне</a>
            <a className="nav-link" href="/portfolio">Портфолио</a>
            <a className="nav-link" href="/contact">Контакты</a>
          </div>
        </div>
      </nav>

      {/* ГЛАВНАЯ СЕКЦИЯ */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '20px' }}>
                Я Анна Санько, свадебный организатор
              </h1>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                Создаю красивые и уникальные истории любви. Создавая красивый проект очень важен четкий план подготовки!
              </p>
              <a 
                href="https://instagram.com/anna_sanko_wedding" 
                target="_blank" 
                className="btn btn-instagram btn-lg"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Написать в Instagram
              </a>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="text-center">
                <img 
                  src="/photos/фотка на гл страницу.jpg" 
                  alt="Анна Санько - свадебный организатор" 
                  style={{ 
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '450px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРЕВЬЮ УСЛУГ */}
      <section className="services-preview">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#d4a5a5' }}>МОИ УСЛУГИ</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-preview-card">
                <h4>СВАДЬБА ПОД КЛЮЧ</h4>
                <p>Подготовка и сопровождение вашего мероприятия от поиска идеи до координации в день свадьбы</p>
                <a href="/services#wedding-full" className="btn btn-outline-secondary">Подробнее →</a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-preview-card">
                <h4>КООРДИНАЦИЯ СВАДЬБЫ</h4>
                <p>Если Вы самостоятельно организовали свадьбу, но в день Х хотели бы насладиться своим праздником</p>
                <a href="/services#coordination" className="btn btn-outline-secondary">Подробнее →</a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-preview-card">
                <h4>ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ</h4>
                <p>Помогу в организации девичника, дня рождения, юбилея, крестин, гендер-пати и других мероприятий</p>
                <a href="/services#events" className="btn btn-outline-secondary">Подробнее →</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a href="/services" className="btn btn-lg" style={{ background: '#d4a5a5', color: 'white', padding: '12px 40px', borderRadius: '30px' }}>
              Все услуги
            </a>
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section className="portfolio">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#d4a5a5' }}>МОИ РАБОТЫ</h2>
          <p className="text-center mb-5" style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Вот некоторые из свадеб, которые я организовала. Каждая история уникальна и создана с любовью.
          </p>
          
          <div className="row g-4">
            {/* ФОТО 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="photo-frame">
                <img 
                  src="/photos/photo_2026-01-24_17-42-31.jpg" 
                  alt="Свадьба 1"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&h=300';
                  }}
                />
              </div>
            </div>
            
            {/* ФОТО 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="photo-frame">
                <img 
                  src="/photos/photo_2026-01-24_17-42-28.jpg" 
                  alt="Свадьба 2"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&h=300';
                  }}
                />
              </div>
            </div>
            
            {/* ФОТО 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="photo-frame">
                <img 
                  src="/photos/photo_2026-01-24_17-42-23.jpg" 
                  alt="Свадьба 3"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&h=300';
                  }}
                />
              </div>
            </div>
            
            {/* ФОТО 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="photo-frame">
                <img 
                  src="/photos/photo_2026-01-24_17-42-13.jpg" 
                  alt="Свадьба 4"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=500&h=300';
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <p>Больше фото в моём Instagram</p>
            <a href="https://instagram.com/anna_sanko_wedding" target="_blank" className="btn btn-instagram" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> @anna_sanko_wedding
            </a>
          </div>
        </div>
      </section>

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
                <a href="https://instagram.com/anna_sanko_wedding" target="_blank" rel="noopener noreferrer" style={{ color: '#e6c8a0', textDecoration: 'none' }}>
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

export default Home;