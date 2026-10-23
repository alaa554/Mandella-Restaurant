
import './CocktailsMenu.css';

const cocktailsDishes = [
 { 
    id: 1, 
    name: 'كوكتيل المانجو والاستوائي', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800', 
    desc: 'مزج طازج من عصير المانجو الطبيعي، الفراولة، وقطع الأناناس مع آيس كريم الفانيلا.' 
  },
  { 
    id: 2, 
    name: 'موهيتو التوت الأزرق والنضارة', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800', 
    desc: 'توت أزرق طازج مهروس مع أوراق النعناع البري، الليمون الحامض، والمياه الغازية المنعشة.' 
  },
  { 
    id: 3, 
    name: 'كوكتيل الفراولة والريحان الملكي', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800', 
    desc: 'فراولة طازجة مهروسة مع أوراق الريحان العطرية وعصير الليمون الصافي.' 
  },
  { 
    id: 4, 
    name: 'موهيتو البطيخ والنعناع', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800', 
    desc: 'قطع البطيخ الأحمر الطبيعي المهروسة مع النعناع والثلج المجروش.' 
  },
  { 
    id: 5, 
    name: 'بينا كولادا الاستوائية', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800', 
    desc: 'مزيج فاخر من حليب جوز الهند الطبيعي وعصير الأناناس الطازج مع لمسة كريمية.' 
  },
  { 
    id: 6, 
    name: 'عصير البرتقال والنعناع المبتكر', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800', 
    desc: 'عصير برتقال معصور طازجاً مع قطرات الليمون الأخضر وأوراق النعناع.' 
  },
  { 
    id: 7, 
    name: 'سبيسيال مانديلا بالطبقات', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800', 
    desc: 'طبقات ملونة من المانجو، الكيوي، الموز بالحليب، والمزين بالقشطة والمكسرات.' 
  },
  { 
    id: 8, 
    name: 'موهيتو الكيوي والليمون', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800', 
    desc: 'قطع الكيوي المهروسة مع الصودا والنعناع المنعش وشرائح الليمون.' 
  },
 { 
    id: 9, 
    name: 'كوكتيل الأفوكادو بالعسل والجوز', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800', 
    desc: 'أفوكادو كريمي مخفوق بالحليب والعسل الطبيعي، ومغطى بقطع الجوز والقشطة.' 
  },
  { 
    id: 10, 
    name: 'عصير الرمان والتوت العليق', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800', 
    desc: 'عصير رمان طازج مركز وممزوج مع التوت العليق المهروس وشرائح الثولج.' 
  },
 { 
    id: 11, 
    name: 'مكس التوت المشكل المقرمش', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800', 
    desc: 'توليفة من التوت الأسود، الأحمر، والأزرق مع عصير التفاح الفوار.' 
  },
  { 
    id: 12, 
    name: 'سانغريا الفواكه الاستوائية (بدون كحول)', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800', 
    desc: 'قطع التفاح، البرتقال، والليمون المغمورة في عصير العنب الفوار والبهارات العطرية.' 
  },
  { 
    id: 13, 
    name: 'موهيتو الفراولة والنعناع', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800', 
    desc: 'فراولة طازجة مهروسة مع النعناع المنعش والصودا والثلج المجروش.' 
  },
  { 
    id: 14, 
    name: 'ليموناضة بالنعناع والزنجبيل', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?q=80&w=800', 
    desc: 'عصير ليمون طازج مع عصرة من النعناع ولمسة زنجبيل دافئة ومنعشة.' 
  },
  { 
    id: 15, 
    name: 'كوكتيل الموز والشوكولاتة', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800', 
    desc: 'موز مثلج مخفوق مع الحليب الطازج وصوص الشوكولاتة الداكنة.' 
  },
  { 
    id: 16, 
    name: 'موهيتو الأناناس والروزماري', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800', 
    desc: 'عصير الأناناس الطبيعي مع غصن إكليل الجبل والنعناع والصودا.' 
  },
  { 
    id: 17, 
    name: 'عصير الجريب فروت الوردي', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=800', 
    desc: 'عصير جريب فروت وردي طازج مع قطرات العسل وماء الورد.' 
  },
  { 
    id: 18, 
    name: 'كوكتيل الخوخ واللافندر', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800', 
    desc: 'بيوريه الخوخ الطبيعي المستخلص مع سيروب اللافندر الهادئ والصودا.' 
  },
  { 
    id: 19, 
    name: 'سموذي المانجو والبرتقال', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800', 
    desc: 'مانجو مثلجة مع عصير البرتقال والزبادي اليوناني لانتكاشة مخملية.' 
  },
  { 
    id: 20, 
    name: 'كوكتيل الشاي المثلج بالفواكه', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800', 
    desc: 'شاي أحمر مثلج ومستخلص مع شرائح الخوخ، الليمون، والنعناع.' 
  },
];

export default function CocktailsMenu({ onBack, onAddToCart }) {
  return (
    <section className="cocktails-page">
      <div className="cocktails-header">
        <button className="btn-back" onClick={onBack}>← العودة لقائمة المنتجات</button>
        <h1 className="cocktails-title">العصائر والكوكتيلات المنعشة</h1>
      </div>

      <div className="cocktails-grid">
        {cocktailsDishes.map((dish) => (
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