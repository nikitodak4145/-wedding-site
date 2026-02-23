import React from 'react';
import '../styles/wedding.css';

function About() {
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
            <a className="nav-link active" href="/about">Обо мне</a>
            <a className="nav-link" href="/portfolio">Портфолио</a>
            <a className="nav-link" href="/contact">Контакты</a>
          </div>
        </div>
      </nav>

      {/* ТОЧНАЯ КОПИЯ IVANOVA EVENT */}
      <section className="ivanova-section">
        <div className="container">
          {/* ЗАГОЛОВОК ТОЧЬ-В-ТОЧЬ */}
          <h1 className="ivanova-title">
            ОРГАНИЗОВЫВАЮ<br />
            СВАДЬБУ МЕЧТЫ
          </h1>
          <h2 className="ivanova-subtitle">ANNA SANKO WEDDING</h2>

          {/* НАВИГАЦИЯ КАК В ПРИМЕРЕ */}
          <div className="ivanova-nav">
            <a href="/services" className="ivanova-nav-btn">МОИ УСЛУГИ</a>
            <a href="/contact" className="ivanova-nav-btn">СВЯЗАТЬСЯ СО МНОЙ</a>
            <a href="/about" className="ivanova-nav-btn active">ОБО МНЕ</a>
          </div>

          {/* КОНТЕНТ ТОЧЬ-В-ТОЧЬ */}
          <div className="ivanova-content">
            <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' }}>ОБО МНЕ</h3>

            <ul className="ivanova-list">
              <li><strong>ОРГАНИЗУЮ СВАДЬБУ С ДУШОЙ И СМЫСЛОМ</strong></li>
              <li><strong>ПОМОГУ ОРГАНИЗОВАТЬ ДЕВИЧНИК, ДЕНЬ РОЖДЕНИЯ, ГЕНДЕР-ПАТИ, КОРПОРАТИВЫ</strong></li>
              <li><strong>КООРДИНИРУЮ ВАШИ СОБЫТИЯ</strong></li>
            </ul>

            <div className="about-text">
              <p>Я Анна Санько, свадебный организатор. Создаю красивые и уникальные истории любви.</p>
              <p>Создавая красивый проект очень важен четкий план подготовки! Делюсь своим планом подготовки с невестами, которые готовятся без организатора. Этот план для невест которые сами в роли организатора на протяжении всей подготовки, а в свадебный день приглашают координатора.</p>
              <p>С этим планом ты сможешь чётко, по шагам подготовиться к своей свадьбе самостоятельно!</p>
            </div>
          </div>

          {/* КНОПКА НАЗАД */}
          <div className="text-center">
            <a href="/" className="btn-back">
              <i className="fas fa-arrow-left me-2"></i> Вернуться на главную
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
                <a href="https://instagram.com/anna_sanko_wedding" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: '#e6c8a0', textDecoration: 'none' }}>
                   <i className="fab fa-instagram"></i> @anna_sanko_wedding
                </a>
              </p>
              <p style={{ color: '#aaa', marginTop: '20px' }}>
                © 2026 by <a href='https://my-django-blog.vercel.app/'></a>. Все права защищены. 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;