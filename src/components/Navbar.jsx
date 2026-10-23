import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onNavigate, cartCount, onOpenCart, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // تأثير التمرير للنافبار لإضافة الخلفية والظل عند النزول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* خلفية البلور المظلمة عند فتح القائمة الجانبية */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-[#120A05]/60 backdrop-blur-md z-[9998] lg:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${theme === 'light' ? 'light-theme' : ''}`}>
        <div className="navbar-container">
          {/* الشعار - Logo */}
          <div className="navbar-brand" onClick={() => onNavigate('hero')}>
            <span className="brand-logo">M</span>
            <div className="brand-text">
              <h1 className="brand-name">MANDELLA</h1>
              <span className="brand-tagline">Gold Restaurant</span>
            </div>
          </div>

          {/* قائمة الروابط الرئيسية / القائمة الجانبية للموبايل والآيباد */}
          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            {/* زر الإغلاق ✕ بأقصى اليسار داخل المينيو الجانبي */}
            <li className="lg:hidden drawer-close-container mb-2">
              <button 
                onClick={() => setMenuOpen(false)}
                className="drawer-close-btn"
                aria-label="Close Menu"
              >
                ✕
              </button>
            </li>

            <li>
              <button className="nav-item" onClick={() => handleLinkClick('hero')}>
                الرئيسية
              </button>
            </li>
            <li>
              <button className="nav-item" onClick={() => handleLinkClick('about')}>
                عن مانديلا
              </button>
            </li>
            <li>
              <button className="nav-item" onClick={() => handleLinkClick('products')}>
                قائمة الطعام
              </button>
            </li>
            <li>
              <button className="nav-item" onClick={() => handleLinkClick('contact')}>
                تواصل معنا
              </button>
            </li>
            
            {/* خيار حجز الطاولة يظهر داخل القائمة الجانبية فقط في الموبايل والآيباد */}
            <li className="lg:hidden">
              <button className="nav-item highlight-btn" onClick={() => handleLinkClick('reserve')}>
                حجز طاولة
              </button>
            </li>
          </ul>

          {/* أزرار الإجراءات (السلة، حجز الطاولة للشاشات الكبيرة، الثيم، زر Menu) */}
          <div className="navbar-actions">
            {/* زر السلة */}
            <button className="navbar-cart-btn" onClick={onOpenCart} title="عرض سلة الطلبات">
              <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-label">السلة</span>
              {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
            </button>

            {/* زر حجز الطاولة للديسكتوب فقط (مخفي في الآيباد والموبايل) */}
            <button className="nav-item highlight-btn desktop-reserve-btn hidden lg:block" onClick={() => onNavigate('reserve')}>
              حجز طاولة
            </button>

            {/* زر تبديل الوضع النهاري والداكن */}
            <button 
              className="theme-toggle-btn" 
              onClick={onToggleTheme} 
              title={theme === 'dark' ? 'التحويل للوضع النهاري' : 'التحويل للوضع الليلي'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* زر Menu للموبايل والآيباد */}
            <button 
              className="mobile-menu-btn lg:hidden" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <span 
                className="menu-text-label"
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}