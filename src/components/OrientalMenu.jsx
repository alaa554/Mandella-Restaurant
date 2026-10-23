
import './OrientalMenu.css';

const orientalDishes = [
  { 
    id: 1, 
    name: 'مشاوي مشكلة فاخرة', 
    price: 28, 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800', 
    desc: 'كباب، شش طاووق، وقطع لحم الغنم المتبلة المشوية على الفحم.' 
  },
  { 
    id: 2, 
    name: 'كباب حلبي بالفستق', 
    price: 24, 
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800', 
    desc: 'لحم ضأن مفروم مع الفستق الحلبي والبهارات الشامية الخاصة.' 
  },
  { 
    id: 3, 
    name: 'منسف أردني بالجميد', 
    price: 26, 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', 
    desc: 'لحم بلدي طري مطبوخ بجميد الكرك الفاخر مع الأرز والمكسرات.' 
  },
  { 
    id: 4, 
    name: 'شاورما عربي فاخرة', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800', 
    desc: 'شرائح شاورما دجاج ولحم على الفحم يقدم مع الثومية والبطاطس.' 
  },
  { 
    id: 5, 
    name: 'كبسة لحم نعيمي', 
    price: 25, 
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800', 
    desc: 'أرز بسمتي معطر بالبهارات الخليجية مع قطعتي لحم مبخرة.' 
  },
  { 
    id: 6, 
    name: 'مقلوبة دجاج بالباذنجان', 
    price: 18, 
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800', 
    desc: 'طبقات من الأرز الذهبي مع الباذنجان المقلي والدجاج المحمر.' 
  },
  { 
    id: 7, 
    name: 'كبة مطبوخة باللبن', 
    price: 20, 
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800', 
    desc: 'أقراص الكبة المحشوة باللحم والمكسرات في لبن مخفوق دافئ.' 
  },
  { 
    id: 8, 
    name: 'خاروف محشي على الحطب', 
    price: 35, 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', 
    desc: 'لحم محشي بالأرز المتبل واللوز والمكسرات المحمصة.' 
  },
  { 
    id: 9, 
    name: 'شيخ المحشي (كوسا باللبن)', 
    price: 19, 
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800', 
    desc: 'كوسا محشوة باللحم المفروم الصافي ومطبوخة باللبن الرائب.' 
  },
  { 
    id: 10, 
    name: 'طاجن لحم بالبرقوق', 
    price: 27, 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', 
    desc: 'طاجن مغربي أصيل بقطع اللحم المطهوة بطئ مع البرقوق والسمسم.' 
  },
  { 
    id: 11, 
    name: 'فتة حمص باللحم والصنوبر', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800', 
    desc: 'خبز محمص مع الحمص واللبن والمكسرات ولحم الضأن المقلي.' 
  },
  { 
    id: 12, 
    name: 'شيش طاووق بالثوم والأعشاب', 
    price: 18, 
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800', 
    desc: 'قطع صدر الدجاج المتبلة بالزبادي والليمون المشوية بعناية.' 
  },
  { 
    id: 13, 
    name: 'مسخن دجاج فلسطيني', 
    price: 21, 
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800', 
    desc: 'خبز طابون محمص بالبصل والسماق البلدي وزيت الزيتون البكر.' 
  },
  { 
    id: 14, 
    name: 'ريش غنم مشوية', 
    price: 30, 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', 
    desc: 'ريش ضأن طرية متبلة بالأعشاب العطرية ومشوية على الفحم.' 
  },
  { 
    id: 15, 
    name: 'سمك مسكوف عراقي', 
    price: 32, 
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=800', 
    desc: 'سمك طازج مفتوح ومتبل بصلصة التمر الهندي والبهارات المشوية.' 
  },
  { 
    id: 16, 
    name: 'صينية كفتة بالبندورة', 
    price: 17, 
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800', 
    desc: 'كفتة لحم مشوية بالفرن مع صلصة الطماطم الطازجة وشرائح البطاطس.' 
  },
  { 
    id: 17, 
    name: 'أوزي صراصر بالمكسرات', 
    price: 22, 
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800', 
    desc: 'رقائق العجين الهشة المحشوة بالأرز واللحم المفروم والمكسرات.' 
  },
  { 
    id: 18, 
    name: 'طاجن باميا باللحم الضأن', 
    price: 19, 
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800', 
    desc: 'باميا بلدي طازجة مع قطع اللحم والصلصة الحمراء الغنية.' 
  },
  { 
    id: 19, 
    name: 'ورق عنب وكوسا محشي', 
    price: 16, 
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800', 
    desc: 'تشكيلة محاشي متبلة بزيت الزيتون ودبس الرمان الرفيع.' 
  },
  { 
    id: 20, 
    name: 'كباب خشخاش شامي', 
    price: 23, 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800', 
    desc: 'كباب مشوي يقدّم على ثريد صلصة الطماطم الحارة مع الثوم.' 
  },
];

export default function OrientalMenu({ onBack, onAddToCart }) {
  return (
    <section className="oriental-page">
      <div className="oriental-header">
        <button className="btn-back" onClick={onBack}>← العودة لقائمة المنتجات</button>
        <span className="oriental-tag">― أصالة النكهة الشرقية ―</span>
        <h1 className="oriental-title">القائمة الشرقية الملكية</h1>
      </div>

      <div className="oriental-grid">
        {orientalDishes.map((dish) => (
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