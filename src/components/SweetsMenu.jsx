import { useState } from 'react';
import './SweetsMenu.css';

const sweetsDishes = [
  { 
    id: 1, 
    name: 'بقلاوة بالفستق الحلبي والآيس كريم', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800', 
    desc: 'طبقات البقلاوة المقرمشة والمحشوة بالفستق الفاخر تقدم مع كرة آيس كريم فانيلا.' 
  },
  { 
    id: 2, 
    name: 'كنافة بالجبنة والقطر', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800', 
    desc: 'كنافة ذهبية دافئة محشوة بالجبن المذاب ومسقية بالقطر الفاخر.' 
  },
  { 
    id: 3, 
    name: 'حلاوة الجبن السورية بالقشطة', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800', 
    desc: 'شرائح حلاوة الجبن الطرية المحشوة بالقشطة البلدية والمزينة بالفستق والورد.' 
  },
  { 
    id: 4, 
    name: 'معمول بالتمر والجوز الفاخر', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800', 
    desc: 'معمول السميد الهش بالسمن البلدي محشو بالتمر والجوز المطحون.' 
  },
  { 
    id: 5, 
    name: 'بسبوسة بالقشطة واللوز', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800', 
    desc: 'كيكة السميد الناعمة المشرّبة بالقطر والمزينة بحبات اللوز المحمص والقشطة.' 
  },
  { 
    id: 6, 
    name: 'قطايف عصافيري بالقشطة والكرز', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800', 
    desc: 'أقراص القطايف الطرية المحشوة بالقشطة البلدية والمزينة بالفستق والكرز.' 
  },
  { 
    id: 7, 
    name: 'غريبة بيضاء بالفستق الحلبي', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800', 
    desc: 'حلوى الغريبة الهشة المجهزة بالسمن البلدي والتي تذوب بالفم.' 
  },
  { 
    id: 8, 
    name: 'أم علي بالمكسرات والقشطة', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800', 
    desc: 'طاجن الرقاق المخبوز بالحليب الساخن والمكسرات المحمصة والقشطة.' 
  },
  { 
    id: 9, 
    name: 'لقيمات مقرمشة بالعسل', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800', 
    desc: 'كرات العجين الذهبية المقرمشة المغمورة بالعسل الصافي والسمسم.' 
  },
  { 
    id: 10, 
    name: 'بلح الشام بالشوكولاتة', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=800', 
    desc: 'أصابيع العجين المقرمشة والمشرّبة بالشربات مع صوص الشوكولاتة.' 
  },
  { 
    id: 11, 
    name: 'تشيز كيك بالتوت والفراولة', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800', 
    desc: 'طبقة البسكويت المقرمشة مع كريمة الجبن وصوص التوت البري.' 
  },
  { 
    id: 12, 
    name: 'تورتة الشوكولاتة الداكنة', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800', 
    desc: 'كيك الشوكولاتة الفاخر الغني بصلصة الكاكاو والجاناش.' 
  },
  { 
    id: 13, 
    name: 'تارت الفواكه الاستوائية', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800', 
    desc: 'قاعدة العجين الهشة المحشوة بكريمة الباستري وقطع الفواكه.' 
  },
  { 
    id: 14, 
    name: 'ماكرون فرنسي ملون', 
    price: 16, 
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800', 
    desc: 'قطع الماكرون الفرنسية الهشة المحشوة بالكريمة بنكهات متعددة.' 
  },
  { 
    id: 15, 
    name: 'إكلير بالشوكولاتة والكريمة', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800', 
    desc: 'عجين الشو الفرنسي المحشو بكريمة الفانيلا والمغطى بالشوكولاتة.' 
  },
  { 
    id: 16, 
    name: 'وافل بالآيس كريم والشوكولاتة', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800', 
    desc: 'قطع الوافل الذهبية الدافئة تقدم مع الآيس كريم وصوص نوتيلا.' 
  },
  { 
    id: 17, 
    name: 'براونيز بالشوكولاتة والجوز', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800', 
    desc: 'مكعبات كيك الشوكولاتة الكثيفة المخبوزة مع قطع عين الجمل.' 
  },
  { 
    id: 18, 
    name: 'سينابون بالقرفة والصوص الأبيض', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800', 
    desc: 'لفائف القرفة الدافئة المغطاة بجبن الكريمة المذاب والكراميل.' 
  },
  { 
    id: 19, 
    name: 'تيراميسو إيطالي بالقهوة', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800', 
    desc: 'طبقات بسكويت السافوياردي المغطس بالقهوة مع كريم الماسكاربوني.' 
  },
  { 
    id: 20, 
    name: 'سوفليه الشوكولاتة الساخنة', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800', 
    desc: 'كيك الشوكولاتة الدافئ المتميز بقلبه السائل الساخن والذائب.' 
  },
];

export default function SweetsMenu({ onBack, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="sweets-page">
      <div className="sweets-header">
        <button className="btn-back" onClick={onBack}>
          ← العودة لقائمة المنتجات
        </button>
        <span className="sweets-tag">― ختامها مسك ونكهات ساحرة ―</span>
        <h1 className="sweets-title">قائمة الحلويات الفاخرة</h1>
        <p className="sweets-subtitle">
          20 صنفاً من أشهى وأرقى الحلويات الشرقية والغربية المجهزة يومياً بأجود المكونات
        </p>
      </div>

      <div className="sweets-grid">
        {sweetsDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div 
              className="dish-image-container"
              onClick={() => setSelectedImage({ url: dish.image, title: dish.name })}
              title="انقر لعرض الصورة بحجمها الطبيعي"
            >
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <span className="dish-badge">${dish.price}</span>
              <div className="zoom-hint">🔍 تكبير</div>
            </div>

            <div className="dish-details">
              <h3 className="dish-title">{dish.name}</h3>
              <p className="dish-desc">{dish.desc}</p>

              <div className="dish-footer">
                <span className="dish-price">${dish.price} USD</span>
                <button 
                  className="cart-btn" 
                  title="أضف للسلة"
                  onClick={() => onAddToCart && onAddToCart(dish)}
                >
                  <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  أضف للسلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.url} alt={selectedImage.title} className="modal-full-image" />
            <p className="modal-image-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
