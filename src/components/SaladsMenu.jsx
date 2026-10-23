
import './SaladsMenu.css';

const saladsDishes = [
  { 
    id: 1, 
    name: 'سلطة سيزر بالدجاج المشوي', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800', 
    desc: 'خس روماني طازج مع قطع دجاج مشوية، جبن بارميزان معتق، وخبز محمص بصلصة السيزر الغنية.' 
  },
  { 
    id: 2, 
    name: 'تبولة شامية بالرمان', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800', 
    desc: 'بقدونس مفروم ناعم مع الطماطم، البرغل الناعم، نعناع طازج، حبوب الرمان وزيت الزيتون الصافي.' 
  },
  { 
    id: 3, 
    name: 'فتوش فاخر بدبس الرمان', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800', 
    desc: 'خضار موسمية مقرمشة مع الخبز المحمص، السماق البلدي، وتتبيلة دبس الرمان الفاخرة.' 
  },
  { 
    id: 4, 
    name: 'سلطة يونانية أصيلة', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800', 
    desc: 'طماطم طازجة، خيار، بصل أحمر، زيتون كالاماتا، مكعبات جبن الفيتا مع الأوريغانو وزيت الزيتون.' 
  },
  { 
    id: 5, 
    name: 'سلطة الكينوا والأفوكادو', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800', 
    desc: 'كينوا عضوية مع شرائح الأفوكادو، طماطم كرزية، ورمّان بتتبيلة الليمون والخردل.' 
  },
 { 
    id: 6, 
    name: 'سلطة كابريزي إيطالية', 
    price: 13, 
    image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=800', 
    desc: 'شرائح الموزاريلا الطازجة مع الطماطم، أوراق الريحان العطري، ورشة زيت زيتون بكر وخل بلساميك.' 
  },
  { 
    id: 7, 
    name: 'سلطة الروبيان المشوي', 
    price: 18, 
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800', 
    desc: 'روبيان مشوي بالأعشاب يقدم فوق طبقة من الخضار المشكلة مع صلصة المانجو والليمون.' 
  },
  { 
    id: 8, 
    name: 'سلطة الراهب الباذنجانية', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800', 
    desc: 'باذنجان مشوي على الفحم مفروم مع الفلفل الملون، الثوم، دبس الرمان، وزيت الزيتون.' 
  },
  { 
    id: 9, 
    name: 'سلطة جرجير بالشارلوت والجوز', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800', 
    desc: 'أوراق الجرجير الطازجة مع الفطر، عين الجمل، وجبن البارميزان مع صوص البلساميك.' 
  },
  { 
    id: 10, 
    name: 'سلطة الشمندر والفيتا', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800', 
    desc: 'مكعبات الشمندر المسلوق مع فتات جبن الفيتا، أوراق السبانخ، والجوز المكرمل.' 
  },
  { 
    id: 11, 
    name: 'سلطة نيسواز فرنسية', 
    price: 16, 
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800', 
    desc: 'تونة فاخرة مع بيض مسلوق، بطاطس صغيرة، فاصولياء خضراء، وزيتون مع صلصة الخردل.' 
  },
  { 
    id: 12, 
    name: 'سلطة الشيف الخاصة', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=800', 
    desc: 'تشكيلة خضار مع شرائح الديك الرومي المتبل، الأجبان الثلاثة، وبيض السمان.' 
  },
  { 
    id: 13, 
    name: 'سلطة الأفوكادو بالمانجو', 
    price: 14, 
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=800', 
    desc: 'شرائح الأفوكادو والمانجو الطازجة مع خس مشكل، بصل أحمر، وتتبيلة الحامض والنعناع.' 
  },
  { 
    id: 14, 
    name: 'سلطة الذرة والفاكهة الاستوائية', 
    price: 11, 
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800', 
    desc: 'ذرة مشوية مع قطع الأناناس، الخيار، والفلفل الحلو بصلصة الرانش المبتكرة.' 
  },
  { 
    id: 15, 
    name: 'سلطة السلمون المدخن', 
    price: 19, 
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800', 
    desc: 'شرائح سلمون نرويجي مدخن على جرجير وشبت طازج مع الكابار وصلصة الليمون.' 
  },
  { 
    id: 16, 
    name: 'سلطة الملفوف الآسيوية', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=800', 
    desc: 'ملفوف بنفسجي وأبيض مبشور مع الجزر، السمسم المحمص، وصلصة الصويا والسمسم.' 
  },
 { 
    id: 17, 
    name: 'سلطة التين وجبن المعز', 
    price: 16, 
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800', 
    desc: 'قطع التين الطازج مع جبن المعز المحمص، ورق السبانخ، وجوز عين الجمل.' 
  },
  { 
    id: 18, 
    name: 'سلطة المعكرونة بالبيستو', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?q=80&w=800', 
    desc: 'معكرونة فوسيلي مبردة بصلصة الريحان الأخضر، طماطم مجففة، وجبن بارميزان.' 
  },
  { 
    id: 19, 
    name: 'سلطة الحمص بالمكسرات', 
    price: 9, 
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800', 
    desc: 'حمص مسلوق مع الخيار، البقدونس، الصنوبر المحمص، وتتبيلة الثوم والليمون.' 
  },
  { 
    id: 20, 
    name: 'سلطة مانديلا الخضراء الملكية', 
    price: 17, 
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800', 
    desc: 'مزيج فريد من أوراق الخس البري، التوت المجفف، بذور القرع، والصلصة الخاصة.' 
  },
];

export default function SaladsMenu({ onBack, onAddToCart }) {
  return (
    <section className="salads-page">
      <div className="salads-header">
        <button className="btn-back" onClick={onBack}>← العودة لقائمة المنتجات</button>
        <h1 className="salads-title">السلطات والمقبلات</h1>
      </div>

      <div className="salads-grid">
        {saladsDishes.map((dish) => (
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