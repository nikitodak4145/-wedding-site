import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
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
              href="https://my-django-blog.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="promo-link"
            >
               Моё портфолио
            </a>
          </div>

          <div className="footer-social">
            <a 
              href="https://instagram.com/anna_sanko_wedding" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> @anna_sanko_wedding
            </a>
          </div>
        </div>

        <p className="copyright">
          © 2026  Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;