import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import OrientalMenu from './components/OrientalMenu';
import WesternMenu from './components/WesternMenu';
import PastriesMenu from './components/PastriesMenu';
import SaladsMenu from './components/SaladsMenu';
import CocktailsMenu from './components/CocktailsMenu';
import SweetsMenu from './components/SweetsMenu';
import ContactUs from './components/ContactUs';
import Toast from './components/Toast';
import CartModal from './components/CartModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [contactSubject, setContactSubject] = useState('حجز طاولة');

  // إدارة حالة الوضع الفاتح / الداكن
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mandella_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mandella_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // إدارة حالة السلة والإشعارات
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // دالة إظهار الإشعار المؤقت
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // دالة إضافة طبق للسلة
  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    showToast(`تمت إضافة "${dish.name}" إلى السلة ✨`);
  };

  // تعديل كمية طبق في السلة
  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // حذف عنصر من السلة
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // العودة لقسم المنتجات من القوائم الفرعية
  const handleBackToProducts = () => {
    setActiveCategory(null);
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // العودة للرئيسية (من الشعار)
  const handleBackToHome = () => {
    setActiveCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // التنقل بين الأقسام عبر النافبار
  const handleNavigate = (id) => {
    // إذا ضغط على "الرئيسية" أو الشعار
    if (id === 'hero' || id === 'home') {
      handleBackToHome();
      return;
    }

    // إغلاق أي قائمة فرعية نشطة أولاً
    setActiveCategory(null);

   // إذا كان الضغط على حجز طاولة أو تواصل معنا
    if (id === 'reserve' || id === 'contact') {
      setContactSubject(id === 'reserve' ? 'حجز طاولة' : 'استفسار عام');
      
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    // التمرير السلس نحو القسم المطلوب (سواء كان الأقسام الرئيسية أو قسم التواصل في الأسفل)
    setTimeout(() => {
      const targetElement = document.getElementById(id) || document.getElementById('contact-section');
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* النافبار مع زر السلة والوضع الفاتح/الداكن */}
      <Navbar 
        onNavigate={handleNavigate} 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* عرض القوائم الفرعية في حال اختيار فئة معينة */}
      {activeCategory === 'oriental' && <OrientalMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}
      {activeCategory === 'western' && <WesternMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}
      {activeCategory === 'pastries' && <PastriesMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}
      {activeCategory === 'salads' && <SaladsMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}
      {activeCategory === 'cocktails' && <CocktailsMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}
      {activeCategory === 'fruit_salads' && <SweetsMenu onBack={handleBackToProducts} onAddToCart={handleAddToCart} />}

      {/* الصفحة الرئيسية وأقسامها الأساسية (تظهر فقط عندما لا تكون هناك قائمة فرعية مفعلة) */}
      {!activeCategory && (
        <main>
          <div id="hero">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          <div id="about">
            <About />
          </div>

          <div id="products">
            <Products 
              onSelectCategory={(catId) => {
                setActiveCategory(catId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          </div>

          {/* قسم تواصل معنا وحجز الطاولة في نهاية الصفحة */}
          <section id="contact" className="contact-section-wrapper">
            <ContactUs 
              onBack={handleBackToHome} 
              initialSubject={contactSubject} 
            />
          </section>
        </main>
      )}

      {/* مكون الإشعار */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

      {/* مودال السلة */}
      {isCartOpen && (
        <CartModal 
          cartItems={cartItems} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
    </div>
  );
}