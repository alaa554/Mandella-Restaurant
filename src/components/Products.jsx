import './Products.css';

const categories = [
  { id: 'oriental', title: 'وجبات شرقية', desc: 'أصالة النكهات الشرقية المحضرة بأجود أنواع اللحوم والتوابل الفاخرة.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800' },
  { id: 'western', title: 'وجبات غربية', desc: 'تشكيلة ساحرة من الأطباق العالمية المبتكرة بأسلوب فاخر ومميز.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800' },
  { id: 'pastries', title: 'معجنات', desc: 'مخبوزات طازجة يومياً بعجينة هشة ولذيذة تناسب جميع الأذواق.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800' },
  { id: 'salads', title: 'سلطات', desc: 'مكونات خضراء طازجة مع صلصات مبتكرة تمنحك الانتعاش والخفة.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800' },
  { id: 'cocktails', title: 'كوكتيلات', desc: 'مشروبات وعصائر منعشة ممزوجة بمهارة وبألوان جذابة.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800' },
  {
  id: 'fruit_salads', // أبقينا المعرّف كما هو لتجنب أي مشاكل بالربط مع App.jsx
  title: 'الحلويات الفاخرة',
  image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
  desc: 'تشكيلة مميزة من أشهى الحلويات الشرقية والغربية المجهزة بلمسة مانديلا الملكية.'
}
];

export default function Products({ onSelectCategory }) {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <span className="products-tag">― قائمة الإبداع ―</span>
        <h2 className="products-title">منتجاتنا الفاخرة</h2>
        <p className="products-subtitle">
          اختر الفئة المفضلة لديك واستكشف تشكيلة أطباقنا المصممة بشغف
        </p>
      </div>

      <div className="products-grid">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="product-card"
            onClick={() => onSelectCategory(cat.id)}
          >
            <div className="card-bg" style={{ backgroundImage: `url(${cat.image})` }}></div>
            <div className="card-overlay"></div>
            
            <div className="card-content">
              <h3 className="card-title">{cat.title}</h3>
              <p className="card-desc">{cat.desc}</p>
              <span className="card-btn">استكشف الأصناف ←</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}