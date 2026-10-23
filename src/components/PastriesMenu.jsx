
import './PastriesMenu.css';

const pastriesDishes = [
  { 
    id: 1, 
    name: 'مناقيش زعتر بلدي فاخر', 
    price: 6, 
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800', 
    desc: 'عجينة هشة مخبوزة على الحطب مع الزعتر البلدي وزيت الزيتون الصافي.' 
  },
  { 
    id: 2, 
    name: 'مناقيش جبنة عكاوي وشيدر', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800', 
    desc: 'خبيزة ذهبية محشوة بمزيج جبن العكاوي والموزاريلا مع رشّة حبة البركة.' 
  },
  { 
    id: 3, 
    name: 'صفايح لحم شامية بالصنوبر', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800', 
    desc: 'عجين رقيق محشو باللحم المفروم المتبل بدبس الرمان والصنوبر المحمص.' 
  },
  { 
    id: 4, 
    name: 'كرواسون الزبدة الفرنسي', 
    price: 7, 
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800', 
    desc: 'رقائق الكرواسون الذهبية المقرمشة المصنوعة بزبادة فرنسية طبيعية فاخرة.' 
  },
  { 
    id: 15, 
    name: 'فطيرة دجاج مع الفطر والجبن', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800', 
    desc: 'دجاج كريمي مع الفطر الطازج مخبوز داخل طبقة عجين ذهبية.' 
  },
  { 
    id: 6, 
    name: 'بيتزا مارغريتا إيطالية', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800', 
    desc: 'صلصة الطماطم الطازجة وجبن الموزاريلا وأوراق الريحان العطرية.' 
  },
  { 
    id: 7, 
    name: 'فطيرة المحمرة بالجبن', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800', 
    desc: 'صلصة الفلفل الأحمر الجوزية المتبلة ومغطاة بطبقة غنية من الجبن.' 
  },
  { 
    id: 8, 
    name: 'كرواسون شوكولاتة نوتيلا', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=800', 
    desc: 'كرواسون محشو بكريمة الشوكولاتة والمكسرات المحمصة.' 
  },
  { 
    id: 9, 
    name: 'فطيرة أجبان أربعة فاخرة', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=800', 
    desc: 'مزيج مخبوز من أربعة أجبان عالمية فاخرة مع الأعشاب الإيطالية.' 
  },
  { 
    id: 10, 
    name: 'بيتزا الترافل والفطر', 
    price: 18, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800', 
    desc: 'عجينة بيتزا حجرية بالصلصة البيضاء وزيت الكمأة والفطر الطازج.' 
  },
  { 
    id: 11, 
    name: 'دانيش التوت والكرز', 
    price: 7, 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800', 
    desc: 'مخبوزات دانيش هشة بصلصة التوت الطبيعي وكريمة الفانيلا.' 
  },
  { 
    id: 12, 
    name: 'مناقيش سجق بالجبن', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800', 
    desc: 'شرائح السجق البلدي المتبل مع الجبن الذائب على النار.' 
  },
  { 
    id: 13, 
    name: 'قوارب الجبنة والبيض البلدي', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800', 
    desc: 'عجينة تركية على شكل قارب محشوة بالأجبان والبيض المخبوز بالفرن.' 
  },
  { 
    id: 14, 
    name: 'خبز الفوكاشيا بالأعشاب والزيتون', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=800', 
    desc: 'خبز إيطالي هش بالروزماري والزيتون الأسود وزيت الزيتون البكر.' 
  },
 { 
    id: 15, 
    name: 'فطيرة دجاج مع الفطر والجبن', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800', 
    desc: 'دجاج كريمي مع الفطر الطازج مخبوز داخل طبقة عجين ذهبية ومغطى بالجبن المذاب.' 
  },
  { 
    id: 16, 
    name: 'سينابون بالقرفة والجوز', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800', 
    desc: 'لفائف القرفة الطازجة المغطاة بصلصة الكريمة البيضاء والجوز.' 
  },
  { 
    id: 17, 
    name: 'بيتزا بيبروني بقرية', 
    price: 16, 
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800', 
    desc: 'شرائح البيبروني البقري المقرمش مع جبن الموزاريلا الفاخر.' 
  },
  { 
    id: 18, 
    name: 'مناقيش كشك شامية', 
    price: 7, 
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800', 
    desc: 'خلطة الكشك الشامي الأصيل مع خضار وزيت الزيتون.' 
  },
  { 
    id: 19, 
    name: 'كرواسون اللوز والسكر الناعم', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800', 
    desc: 'محشو بكريمة اللوز الغنية ومزين بشرائح اللوز المحمصة.' 
  },
  { 
    id: 20, 
    name: 'فطائر مشكلة مانديلا الخاصة', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800', 
    desc: 'تشكيلة فاخرة من 8 قطع معجنات صغيرة متنوعة النكهات.' 
  },
];

export default function PastriesMenu({ onBack, onAddToCart }) {
  return (
    <section className="pastries-page">
      <div className="pastries-header">
        <button className="btn-back" onClick={onBack}>← العودة لقائمة المنتجات</button>
        <h1 className="pastries-title">المعجنات والبيتزا الفاخرة</h1>
      </div>

      <div className="pastries-grid">
        {pastriesDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-details">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="dish-footer">
                <span className="dish-price">${dish.price} USD</span>
                <button className="cart-btn" onClick={() => onAddToCart && onAddToCart(dish)}>
                  🛒 أضف للسلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}