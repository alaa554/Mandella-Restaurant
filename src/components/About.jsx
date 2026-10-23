import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* الجانب الأيمن: النص والوصف */}
        <div className="about-content">
          <span className="about-tag"> رؤيتنا وشغفنا</span>
          <h2 className="about-title">شغف يصنع السعادة في كل طبق</h2>
          <p className="about-description">
            في <strong className="gold-text">مانديلا</strong>، نعتبر الطهي فناً قائماً على الشغف والابتكار , نسعى لتقديم تجربة طعام مخملية تدمج بين أجود المكونات الطازجة واللمسات الإبداعية لشعور دائم بالبهجة والأناقة
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-number">01</span>
              <div>
                <h4 className="feature-title">طهاة عالميون</h4>
                <p className="feature-desc">خبراء في ابتكار أطباق تجمع الفخامة والمذاق الرفيع</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-number">02</span>
              <div>
                <h4 className="feature-title">أجواء استثنائية</h4>
                <p className="feature-desc">تصاميم دافئة وإطلالة ساحرة تمنحك راحة تامّة</p>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيسر: بطاقات بصرية فاخرة */}
        <div className="about-visuals">
          <div className="visual-card visual-card-1">
            <div className="card-overlay"></div>
            <div className="card-badge">تجربة مخملية</div>
          </div>
          <div className="visual-card visual-card-2">
            <div className="card-overlay"></div>
            <div className="card-badge">جودة فاخرة</div>
          </div>
        </div>

      </div>
    </section>
  );
}