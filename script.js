// Мобільне меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Перемикаємо навігаційне меню
    nav.classList.toggle('nav-active');
    
    // Анімація для посилань
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Анімація бургер-меню
    burger.classList.toggle('toggle');
});

// Плавна прокрутка для навігаційних посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обробка форми контактів
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Отримуємо дані форми
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Тут можна додати код для відправки даних на сервер
        console.log('Форма відправлена:', formData);
        
        // Очищаємо форму
        contactForm.reset();
        
        // Показуємо повідомлення про успішну відправку
        alert('Дякуємо за повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    });
}

// Анімація появи елементів при прокручуванні
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Додаємо анімацію для секцій
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Додаємо анімацію для карток проектів
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Додаткові стилі для мобільного меню
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 60px;
        background: var(--background);
        width: 100%;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .animate {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style); 