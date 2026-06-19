// ============================================
// East Sea of Korea - JavaScript
// ============================================

// Language translations
const translations = {
    en: {
        title: "The East Sea of Korea",
        subtitle: "Our Heritage, Our Name",
        description: "For over 2,000 years, Korea's territorial waters have been known as the East Sea. This is our history. This is our right.",
        facts: "The Facts",
        timeline: "Historical Timeline",
        status: "Global Recognition Status",
        help: "How You Can Help",
        faq: "Frequently Asked Questions",
        signNow: "Sign Now",
        learnMore: "Learn More",
        shareMessage: "Share the Message",
        supportMovement: "Support the Movement"
    },
    ko: {
        title: "대한민국의 동해",
        subtitle: "우리의 유산, 우리의 이름",
        description: "2,000년 이상 한국의 영해로 불려온 동해. 이것이 우리의 역사입니다. 이것이 우리의 권리입니다.",
        facts: "사실",
        timeline: "역사 타임라인",
        status: "글로벌 인식 현황",
        help: "도움을 주는 방법",
        faq: "자주 묻는 질문",
        signNow: "지금 서명하기",
        learnMore: "더 알아보기",
        shareMessage: "메시지 공유하기",
        supportMovement: "운동 지원하기"
    },
    ja: {
        title: "大韓民国の東海",
        subtitle: "我らの遺産、我らの名前",
        description: "2,000年以上、韓国の領海として知られてきた東海。これが私たちの歴史です。これが私たちの権利です。",
        facts: "事実",
        timeline: "歴史的タイムライン",
        status: "グローバル認識状況",
        help: "お手伝いの方法",
        faq: "よくある質問",
        signNow: "今すぐ署名",
        learnMore: "詳しく知る",
        shareMessage: "メッセージを共有",
        supportMovement: "運動をサポート"
    }
};

let currentLanguage = 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('eastseaLang', lang);
    updatePageContent();
}

// Update page content based on language
function updatePageContent() {
    // This function updates page text based on selected language
    // For a more complete implementation, you'd update all text elements
    console.log('Language changed to:', currentLanguage);
}

// Load saved language preference
function loadLanguagePreference() {
    const saved = localStorage.getItem('eastseaLang');
    if (saved) {
        currentLanguage = saved;
        document.getElementById('langSelect').value = saved;
    }
}

// Share on social media
function shareOnSocial() {
    const text = "I support Korea's rightful claim to the East Sea. Join me in this important campaign! #EastSeaOfKorea #동해 eastseaofkorea.com";
    const url = "https://eastseaofkorea.com";
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    
    // Create share options menu
    const shareOptions = confirm("Choose where to share:\n\nOK = Twitter\nCancel = Facebook");
    
    if (shareOptions) {
        window.open(twitterUrl, '_blank', 'width=600,height=400');
    } else {
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Link copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy. Please try again.');
    });
}

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.facts, .timeline, .status, .help, .faq').forEach(section => {
    observer.observe(section);
});

// Counter animation for statistics (if needed)
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Mobile menu toggle (if navigation menu is added)
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Close mobile menu on link click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        if (menu) {
            menu.classList.remove('active');
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLanguagePreference();
    updatePageContent();
    
    // Log message
    console.log('%c🌊 East Sea of Korea Campaign', 'font-size: 20px; color: #1e90ff; font-weight: bold;');
    console.log('%cReclaiming our heritage, asserting our right.', 'font-size: 14px; color: #0047ab;');
});

// Performance optimization - lazy load images if added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add event listener for petition link
document.addEventListener('DOMContentLoaded', () => {
    const petitionLinks = document.querySelectorAll('a[href*="petiti"]');
    petitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // You can replace the petition form URL here
            e.preventDefault();
            window.open('https://forms.gle/eastseapetition', '_blank');
        });
    });
});
