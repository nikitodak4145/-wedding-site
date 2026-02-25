import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Информация о свадебном организаторе */}
          <div className="footer-info">
            <h4>Anna Sanko Wedding Planner</h4>
            <p>Я за уникальную историю любви</p>
            <p>Услуги по планированию свадеб</p>
          </div>

          {/* ТВОЯ РЕКЛАМА */}
          <div className="footer-promo">
            <p className="promo-text">
               Сайт разработан <strong>Никитой</strong>
            </p>
            <a 
              href="https://portfolio-bdeb.vercel.app/projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className="promo-link"
            >
               Моё портфолио
            </a>
          </div>

          {/* Ссылка на Instagram */}
          <div className="footer-social">
            <a 
              href="https://wedding-site-zz3w.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> @anna_sanko_wedding
            </a>
          </div>
        </div>

        {/* Копирайт с твоей ссылкой */}
        <p className="copyright">
          © 2026 by <a href="https://portfolio-bdeb.vercel.app/projects" target="_blank" rel="noopener noreferrer">NK</a>. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;