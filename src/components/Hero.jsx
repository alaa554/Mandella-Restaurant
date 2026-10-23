import './Hero.css';

export default function Hero({ onNavigate }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <video
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <span className="hero-tag">حيث يترجم الشغف إلى لحظات من السعادة</span>
        
        <h1 className="hero-title">إبداع المذاق ليصاغ الإلهام بالسعادة
        </h1>

        <p className="hero-description">
          استمتع بأشهى الأطباق الفاخرة المحضرة بأيدي أشهر الطهاة العالميين في أجواء مخملية وإطلالة ساحرة على البحر داخل مطعم مانديلا
        </p>

        <div className="hero-buttons">
          <button 
            className="btn-primary" 
            onClick={() => onNavigate && onNavigate('products')}
          >
            الدخول لعالم مانديلا
          </button>
        </div>
        
      </div>
    </section>
  );
}