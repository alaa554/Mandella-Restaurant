import { useState } from 'react';
import './ContactUs.css';

export default function ContactUs({ onBack, initialSubject = 'حجز طاولة' }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    subject: initialSubject, 
    guests: '2',
    bookingDate: '',
    seating: 'glass',
    message: '' 
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      {/* العودة والترويسة */}
      <div className="contact-header">
        <button className="btn-back" onClick={onBack}>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          العودة للرئيسية
        </button>
        <span className="contact-badge">― خدمة ملكية على مدار الساعة ―</span>
        <h1 className="contact-title">
          {formData.subject === 'حجز طاولة' ? 'حجز طاولة خاصة' : 'تواصل مع مطعم مانديلا'}
        </h1>
        <p className="contact-subtitle">
          سواء كنت تخطط لأمسية خاصة، حجز طاولة فاخرة، أو لديك أي استفسار، فريقنا في خدمتك دائماً.
        </p>
      </div>

      {/* أزرار الاتصال السريع المجهزة بأيقونات SVG */}
      <div className="quick-contact-bar">
        <a href="tel:+963112223333" className="quick-btn">
          <div className="quick-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <small>اتصال مباشر</small>
            <strong>+963 11 222 3333</strong>
          </div>
        </a>

        <a href="https://wa.me/963999888777" target="_blank" rel="noreferrer" className="quick-btn whatsapp">
          <div className="quick-icon-wrapper wa-bg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <div>
            <small>واتساب الحجوزات</small>
            <strong>+963 999 888 777</strong>
          </div>
        </a>

        <a href="mailto:info@mandella.com" className="quick-btn">
          <div className="quick-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <small>البريد الإلكتروني</small>
            <strong>info@mandella.com</strong>
          </div>
        </a>
      </div>

      {/* الحاوية الرئيسية */}
      <div className="contact-main-grid">
        {/* نموذج التواصل والحجز */}
        <div className="contact-card form-section">
          <h2 className="card-heading">
            {formData.subject === 'حجز طاولة' ? 'تفاصيل حجز الطاولة' : 'أرسل لنا رسالة'}
          </h2>
          <p className="card-desc">سيتواصل معك مسؤول الضيافة خلال دقائق معدودة لتأكيد طلبك.</p>

          {submitted ? (
            <div className="success-box">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>تم استقبال طلبك بنجاح!</h3>
              <p>شكراً لتواصلك مع مطعم مانديلا. يسعدنا استقبالك وستصلك أرقام التأكيد قريباً.</p>
              <button className="reset-btn" onClick={() => setSubmitted(false)}>إرسال طلب آخر</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>الاسم الكامل</label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك الكريم" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input 
                    type="tel" 
                    placeholder="+963 9XX XXX XXX" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    placeholder="example@domain.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>نوع الطلب</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="حجز طاولة">حجز طاولة خاصة</option>
                    <option value="استفسار عام">استفسار عام / اقتراح</option>
                  </select>
                </div>
              </div>

              {/* قسم خاص بحجز الطاولات يظهر عند التحديد */}
              {formData.subject === 'حجز طاولة' && (
                <div className="reservation-extra-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label>عدد الأشخاص</label>
                      <select 
                        value={formData.guests} 
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      >
                        <option value="1-2">شخصين (طاولة ثنائية)</option>
                        <option value="3-4">3 - 4 أشخاص</option>
                        <option value="5-8">5 - 8 أشخاص</option>
                        <option value="+8">أكثر من 8 (مجموعة / مناسبة)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>تاريخ الموعد ووقت الحجز</label>
                      <input 
                        type="datetime-local" 
                        required
                        value={formData.bookingDate}
                        onChange={(e) => setFormData({...formData, bookingDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>تفضيل الجلسة</label>
                    <select 
                      value={formData.seating} 
                      onChange={(e) => setFormData({...formData, seating: e.target.value})}
                    >
                      <option value="glass">🌊 جلسة إطلالة زجاجية / بحرية</option>
                      <option value="vip">🛋️ صالة VIP داخلية هادئة</option>
                      <option value="terrace">🌿 التراس الخارجي</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>نص الرسالة / الملاحظات الخاصة</label>
                <textarea 
                  rows="4" 
                  placeholder="حدد أي تفضيلات خاصة (تزيين الطاولة، كعكة ميلاد، كرسي أطفال...)" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="gold-submit-btn">
                <span>تأكيد وإرسال الطلب</span>
                <svg className="btn-send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* تفاصيل الموقع وساعات العمل والخريطة */}
        <div className="contact-card info-section">
          <div className="info-block">
            <div className="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3>موقع المطعم</h3>
            </div>
            <p>دمشق، الكورنيش البحري الفاخر، مقابل برج مانديلا الزجاجي</p>
          </div>

          <div className="info-block">
            <div className="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <h3>ساعات الاستقبال</h3>
            </div>
            <div className="hours-grid">
              <span>الأحد - الأربعاء:</span>
              <strong>12:00 ظهراً - 12:00 ليلاً</strong>
              <span>الخميس - السبت:</span>
              <strong>12:00 ظهراً - 02:00 فجراً</strong>
            </div>
          </div>

          {/* الخريطة التفاعلية */}
          <div className="map-wrapper">
            <iframe 
              title="Mandella Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.738128392182!2d36.291280!3d33.513807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzQ5LjciTiAzNsKwMTcnMjguNiJF!5e0!3m2!1sar!2s!4v1620000000000!5m2!1sar!2s" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}