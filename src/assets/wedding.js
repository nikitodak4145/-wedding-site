// ============================================
// ВСЯ ЛОГИКА ДЛЯ САЙТА АННЫ САНЬКО
// ============================================

// 1. АНИМАЦИЯ СЧЁТЧИКОВ (success-stats)
export function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current);
      stat.style.animation = 'countUp 0.5s ease';
    }, 16);
  });
}

// 2. LAZY LOAD ДЛЯ ИЗОБРАЖЕНИЙ
export function initLazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const loadingOverlay = img.previousElementSibling;
          
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          
          img.classList.add('loaded');
          if (loadingOverlay && loadingOverlay.classList.contains('loading-overlay')) {
            loadingOverlay.style.display = 'none';
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    lazyImages.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
  }
}

// 3. АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ (fade-in)
export function initFadeAnimation() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '50px' });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
}

// 4. ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ (anchor links)
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        if (window.location.hash !== targetId) {
          window.location.hash = targetId;
        }
      }
    });
  });
}

// 5. СЕРДЕЧКО С УВЕДОМЛЕНИЯМИ (wedding-heart)
export function initWeddingHeart() {
  const heart = document.getElementById('weddingHeart');
  
  if (!heart) return;
  
  const messages = [
    "💕 Любовь с первого взгляда",
    "🌸 Свадьба мечты начинается здесь",
    "✨ Каждая история любви уникальна",
    "🎀 Ваш идеальный день уже близко"
  ];
  
  heart.addEventListener('click', function() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 30px;
      background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,240,245,0.95));
      padding: 15px 20px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(212, 165, 165, 0.3);
      z-index: 9999;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.3);
      animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  });
}

// 6. ПЕРЕКЛЮЧАТЕЛЬ ТЕМ (dark/light)
export function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  
  if (!themeToggle) return;
  
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    this.style.transform = 'rotate(180deg)';
    setTimeout(() => {
      this.style.transform = 'rotate(0)';
    }, 300);
  });
}

// 7. ФУНКЦИЯ ДЛЯ КОПИРОВАНИЯ ТЕКСТА (для страницы контактов)
export function setupCopyButton() {
  const copyBtn = document.getElementById('copyBtn');
  
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', function() {
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
    
    const originalText = copyBtn.innerHTML;
    
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Текст скопирован!';
    copyBtn.classList.add('success');
    
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
      copyBtn.classList.remove('success');
    }, 2000);
    
    showNotification('Текст скопирован в буфер обмена! ✨');
  });
}

// 8. УВЕДОМЛЕНИЯ (для копирования и других событий)
export function showNotification(message) {
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
}

// 9. ИНИЦИАЛИЗАЦИЯ ВСЕГО ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
export function initAll() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      initFadeAnimation();
      initSmoothScroll();
      initWeddingHeart();
      initThemeToggle();
      setupCopyButton();
      
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
    });
  } else {
    initLazyLoading();
    initFadeAnimation();
    initSmoothScroll();
    initWeddingHeart();
    initThemeToggle();
    setupCopyButton();
    
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
  }
}