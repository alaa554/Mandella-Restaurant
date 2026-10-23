import './Toast.css';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-content">
        <span className="toast-icon">✨</span>
        <span className="toast-text">{message}</span>
        <button className="toast-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}