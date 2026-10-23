
import './WesternMenu.css';

const westernDishes = [
  { id: 1, name: 'ستيك ريب آي بلاك أنغوس', price: 38, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', desc: 'قطعة ستيك أنغوس فاخرة مشوية حسب الرغبة مع زبدة الأعشاب وخضار سوتيه.' },
  { id: 2, name: 'سلمون مشوي بصلصة الليمون', price: 32, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800', desc: 'فيلييه سلمون نرويجي طازج مشوي يقدم مع صلصة الشبت والبطاطس المهروسة.' },
  { id: 3, name: 'برغر واغيو الفاخر', price: 25, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800', desc: 'لحم واغيو مشوي مع جبنة الشيدر المعتقة وشريحة الترافل الخفيفة.' },
  { id: 4, name: 'باستا الترافل والفراميد', price: 27, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800', desc: 'معكرونة فيتوتشيني طازجة بصلصة الكريمة الغنية وزيت الكمأة الرفيع.' },
  { id: 5, name: 'دجاج بارميجانا إيطالي', price: 22, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=800', desc: 'صدر دجاج مقرمش مغطى بصلصة المارينارا المخبوزة وجبن الموزاريلا المذاب.' },
  { id: 6, name: 'بيف أورلوف مع الفطر', price: 34, image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800', desc: 'شرائح فيليه البقر المطبوخة ببطء بصلصة الفطر الفاخرة والأعشاب البرية.' },
  { id: 7, name: 'لازانيا بولونيز فاخرة', price: 21, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800', desc: 'طبقات العجين الطازج مع صلصة اللحم المفروم والبشاميل المخملي.' },
  { id: 8, name: 'كوردون بلو دجاج', price: 23, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', desc: 'صدر دجاج محشو بالجبن السويسري واللحم المقدد والمقرمش بامتياز.' },
  { id: 9, name: 'تندرلوين بصلصة الببركورن', price: 36, image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800', desc: 'قطعة طرية من الفيليه المشوي تقدم مع صلصة الفلفل الأسود والبطاطس المقرمشة.' },
  { id: 10, name: 'سبيغيتي دي ماري بالبحريات', price: 29, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800', desc: 'معكرونة اسباجيتي مع الروبيان والكلاماري وبقليص البحر بصلصة الطماطم.' },
  { id: 11, name: 'دجاج مكسيكي بيكانتي', price: 20, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800', desc: 'قطع الدجاج المشوية ببهارات الفاهيتا المكسيكية مع الفلفل الملون.' },
  { id: 12, name: 'ضلوع بقرية BBQ ببطء', price: 35, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', desc: 'ضلوع بقرية مدخنة ومطهوة ببطء لمدة 12 ساعة بصلصة الباربكيو الخاصة.' },
  { id: 13, name: 'ستيك ستربلوين نيو يورك', price: 33, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800', desc: 'قطع قطع ستربلوين نيو يورك مشوية على الفحم مع زبدة الثوم والأعشاب.' },
  { id: 14, name: 'ريزوتو الفطر والترافل', price: 24, image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800', desc: 'أرز أربوريو الإيطالي المطبوخ بمرق الفطر وجبن البارميزان المعتق.' },
  { id: 15, name: 'روبيان جامبو بالثوم والليمون', price: 31, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800', desc: 'روبيان جامبو طازج مشوي ومغسول بالزبادي والثوم والليمون الصافي.' },
  { id: 16, name: 'دجاج بفرانسيز الفرنسي', price: 22, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', desc: 'شرائح دجاج رفيعة متبلة ومقلية بزبدة الليمون والصلصة البيضاء.' },
  { id: 17, name: 'فيليه دو دوراد بحري', price: 28, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800', desc: 'سمك الدنيس المشوي بالفرن مع الأعشاب البحرية وصلصة المارينارا.' },
  { id: 18, name: 'بانيني دجاج توسكاني', price: 18, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800', desc: 'سندويش بانيني محمص بدجاج مشوي وجبن الموزاريلا وصلصة البيستو.' },
  { id: 19, name: 'فاهيتا لحم مكسيكية', price: 26, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800', desc: 'شرائح ستيك مشوية تقدم على المقلاة الساخنة مع خضار الفاهيتا وتورتيلا.' },
  { id: 20, name: 'نوكي إيطالي بصلصة الأجبان', price: 23, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800', desc: 'زغبيات البطاطس الإيطالية بصلصة الأجبان الأربعة الغنية والمكسرات.' },
];

export default function WesternMenu({ onBack, onAddToCart }) {
  return (
    <section className="western-page">
      <div className="western-header">
        <button className="btn-back" onClick={onBack}>← العودة لقائمة المنتجات</button>
        <span className="western-tag">― الفخامة الأوروبية ―</span>
        <h1 className="western-title">القائمة الغربية</h1>
      </div>

      <div className="western-grid">
        {westernDishes.map((dish) => (
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