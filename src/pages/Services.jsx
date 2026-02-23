import React, { useEffect } from 'react';
import '../styles/wedding.css';
import '../assets/music.js';
import '../assets/optimize.js';
import Footer from '../components/Footer';

function Services() {
 useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
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
            <a className="nav-link active" href="/services">Услуги</a>
            <a className="nav-link" href="/about">Обо мне</a>
            <a className="nav-link" href="/portfolio">Портфолио</a>
            <a className="nav-link" href="/contact">Контакты</a>
          </div>
        </div>
      </nav>

      {/* ЗАГОЛОВОК */}
      <section className="page-header">
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>МОИ УСЛУГИ</h1>
          <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Узнайте подробности и стоимость в Instagram
          </p>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          {/* УСЛУГА 1: СВАДЬБА ПОД КЛЮЧ */}
          <div id="wedding-full" className="service-card">
            <h2>СВАДЬБА ПОД КЛЮЧ</h2>
            <p className="lead">(подготовка и сопровождение вашего мероприятия от поиска идеи до координации в день свадьбы)</p>
            
            <div className="mt-4 mb-4">
              <h4>ДЛЯ КОГО ПОДХОДИТ:</h4>
              <ul>
                <li>Для пар, которые много работают или учатся и в свободное время хотят отдыхать.</li>
                <li>Для пар, которые живут в другом городе или стране.</li>
                <li>Для пар, которые не ориентируются в свадебном рынке.</li>
                <li>Для тех, кто хочет свадьбу с идеей, что-то интересное и нестандартное.</li>
                <li>Для тех, кто ценит свое время и хочет получить качественные услуги профессионалов.</li>
                <li>Для тех, кто хочет свадьбу мечты.</li>
              </ul>
            </div>
            
            <div className="mt-4 mb-4">
              <h4>ЧТО ВХОДИТ:</h4>
              <ul>
                <li>Знакомство и обсуждение всех пожеланий.</li>
                <li>Разработка концепции и стилистики свадьбы.</li>
                <li>Определение и распределение бюджета свадьбы.</li>
                <li>Подбор площадки для проведения свадьбы.</li>
                <li>Подбор подрядчиков, в первую очередь выбираем ведущего.</li>
                <li>Заключение договор со всеми свадебными специалистами.</li>
                <li>Работа над образами жениха и невесты. Сопровождение на примерки в салоны и магазины.</li>
              </ul>
              
              <h5 className="mt-3">Работа над блоками мероприятия:</h5>
              <ul>
                <li>Утро жениха и невесты (место, реквизит для съемок)</li>
                <li>Фотосессия (выбор локации с фотографом, обсуждение образа, логистика, аксессуары)</li>
                <li>Первая встреча жениха и невесты</li>
                <li>Тайминг свадебного дня (совместно с ведущим)</li>
                <li>Финал свадьбы</li>
              </ul>
              
              <h5 className="mt-3">Дополнительно включено:</h5>
              <ul>
                <li>Дополнение свадьбы необходимым оборудованием: свет, звук, мебель, дым и т.д.</li>
                <li>Забота о гостях: трансфер и расселение, детская анимация, интерактивные зоны</li>
                <li>Работа с командой.</li>
                <li>Коммуникация с гостями</li>
                <li>Координация в день свадьбы (уже включена в организацию)</li>
                <li>Контроль своевременной передачи фото и видео.</li>
              </ul>
            </div>
            
            <div className="mt-4">
              <p style={{ color: '#d4a5a5', fontWeight: '600' }}>
                 Узнайте подробности и стоимость в Instagram
              </p>
              <a href="https://instagram.com/anna_sanko_wedding" 
                 target="_blank" 
                 className="btn btn-instagram btn-lg"
                 rel="noopener noreferrer">
                 <i className="fab fa-instagram"></i> Узнать в Instagram
              </a>
            </div>
          </div>

          {/* УСЛУГА 2: КООРДИНАЦИЯ */}
          <div id="coordination" className="service-card">
            <h2>КООРДИНАЦИЯ СВАДЬБЫ</h2>
            <p className="lead">Если Вы самостоятельно организовали свадьбу, но в день Х хотели бы насладиться своим праздником</p>
            
            <div className="mt-4 mb-4">
              <h4>ДЛЯ КОГО ПОДХОДИТ:</h4>
              <ul>
                <li>Для пар, которые готовились к свадьбе самостоятельно и хотят полностью погрузиться в атмосферу свадебного дня.</li>
                <li>Для пар, которые хотят освободить от забот мам, сестёр и подруг.</li>
                <li>Для тех, кто хочет, чтобы их свадьба прошла идеально.</li>
              </ul>
            </div>
            
            <div className="mt-4 mb-4">
              <h4>КООРДИНАЦИЯ СВАДЕБНОГО ДНЯ - ЧТО ВХОДИТ:</h4>
              
              <h5>До свадьбы (за 3-4 недели):</h5>
              <ul>
                <li>Проверка готовности к свадьбе (смотрим что не учтено и что нужно еще доделать)</li>
                <li>Составление тайминга свадебного дня, составление технического тайминга для подрядчиков, чек-лист для молодоженов</li>
              </ul>
              
              <h5>До свадьбы (за 2-7 дней):</h5>
              <ul>
                <li>Приём всех необходимых аксессуаров и атрибутов (бонбоньерки, план рассадки, книга пожеланий, букет дублер, подвязка, семейный очаг, подарки гостям и т.д.)</li>
                <li>Коммуникация с гостями (организационные вопросы, логистика)</li>
              </ul>
              
              <h5>В День свадьбы:</h5>
              <ul>
                <li>Контроль внешнего вида, своевременное прибытие на площадку всех подрядчиков</li>
                <li>Помощь невесте и жениху во время сборов, фотосессии</li>
                <li>Рассадка гостей в трансфер. Встреча гостей и молодоженов на площадке</li>
                <li>Встреча и координация гостей на месте регистрации, контроль организации welcome фуршета</li>
                <li>Контроль оформления декора, готовность технического обеспечения, готовность ведущего, церемониймейстера</li>
                <li>Раскладка именных карточек рассадки, помощь гостям в рассадке. Расстановка всех необходимых аксессуаров</li>
                <li>Согласование и контроль подачи горячих блюд в соответствии с программой ведущего. А также наполненность фуршета, кэнди бара и иных фуд-зон</li>
                <li>Контроль своевременной доставки свадебного торта</li>
                <li>Контроль питания свадебных специалистов</li>
                <li>Решение всех вопросов возникающих в течение всего свадебного дня</li>
                <li>Контроль отъезда гостей домой (вызов такси или трансфер)</li>
                <li>Помощь в сборах по завершению свадебного дня</li>
              </ul>
            </div>
            
            <div className="mt-4">
              <p style={{ color: '#d4a5a5', fontWeight: '600' }}>
                 Узнайте подробности и стоимость в Instagram
              </p>
              <a href="https://instagram.com/anna_sanko_wedding" 
                 target="_blank" 
                 className="btn btn-instagram btn-lg"
                 rel="noopener noreferrer">
                 <i className="fab fa-instagram"></i> Узнать в Instagram
              </a>
            </div>
          </div>

          {/* УСЛУГА 3: МЕРОПРИЯТИЯ */}
          <div id="events" className="service-card">
            <h2>ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ</h2>
            <p className="lead">Помогу в организации девичника, дня рождения, юбилея, крестин, гендер-пати и других мероприятий</p>
            
            <div className="mt-4 mb-4">
              <h4>ОРГАНИЗУЮ:</h4>
              <ul>
                <li>Девичники и мальчишники</li>
                <li>Дни рождения и юбилеи</li>
                <li>Корпоративные мероприятия</li>
                <li>Гендер-пати</li>
                <li>Тематические вечеринки</li>
                <li>Крестины и другие семейные праздники</li>
              </ul>
              <p className="mt-3"><em>Все моменты обсуждаются индивидуально</em></p>
            </div>
            
            <div className="mt-4">
              <p style={{ color: '#d4a5a5', fontWeight: '600' }}>
                 Узнайте подробности и стоимость в Instagram
              </p>
              <a href="https://instagram.com/anna_sanko_wedding" 
                 target="_blank" 
                 className="btn btn-instagram btn-lg"
                 rel="noopener noreferrer">
                 <i className="fab fa-instagram"></i> Узнать в Instagram
              </a>
            </div>
          </div>

          {/* КНОПКА НАЗАД */}
          <div className="text-center mt-5">
            <a href="/" className="btn btn-back">
              <i className="fas fa-arrow-left me-2"></i> Вернуться на главную
            </a>
          </div>
        </div>
      </section>

<Footer />
    </div>
  );
}

export default Services;