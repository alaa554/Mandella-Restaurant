import './CartModal.css';

export default function CartModal({ cartItems, onClose, onRemove, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    let text = "مرحباً مطعم مانديلا، أود طلب الأطباق التالية:\n\n";
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (عدد ${item.quantity}) - $${item.price * item.quantity}\n`;
    });
    text += `\nإجمالي الحساب: $${totalPrice} USD`;

    const url = `https://wa.me/963999888777?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>🛒 سلة الطلبات الخاصة بك</h2>
          <button className="close-cart-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>السلة فارغة حالياً. تصفح القوائم وأضيف أطباقك المفضلة!</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">${item.price} USD</span>
                  </div>
                  
                  <div className="cart-item-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>

                  <button className="remove-item-btn" onClick={() => onRemove(item.id)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-modal-footer">
              <div className="cart-total">
                <span>المجموع الكلي:</span>
                <strong>${totalPrice} USD</strong>
              </div>
              
              <button className="whatsapp-order-btn" onClick={handleSendWhatsApp}>
                💬 إرسال الطلب عبر الواتساب
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}