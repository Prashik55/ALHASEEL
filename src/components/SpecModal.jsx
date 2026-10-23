import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SpecModal({ product, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!product) return null;

  const handleOrder = () => {
    onClose();
    navigate(`/contact?product=${encodeURIComponent(product.title)}`);
  };

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <span className="modal-tag">{product.details.category}</span>
        <h3 className="modal-title">{product.title}</h3>
        <p className="modal-desc">{product.description}</p>

        <table className="spec-table">
          <tbody>
            <tr>
              <td>Moisture Content</td>
              <td>{product.details.moisture}</td>
            </tr>
            <tr>
              <td>Protein Content</td>
              <td>{product.details.protein}</td>
            </tr>
            <tr>
              <td>Gluten Strength</td>
              <td>{product.details.gluten}</td>
            </tr>
            <tr>
              <td>Total Ash</td>
              <td>{product.details.ash}</td>
            </tr>
            <tr>
              <td>Packaging Formats</td>
              <td>{product.details.packaging}</td>
            </tr>
            <tr>
              <td>Best Suited For</td>
              <td>{product.details.application}</td>
            </tr>
            <tr>
              <td>Standard Compliance</td>
              <td>{product.details.standard}</td>
            </tr>
          </tbody>
        </table>

        <button 
          type="button" 
          className="btn-dark" 
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={handleOrder}
        >
          Inquire for this Product
        </button>
      </div>
    </div>
  );
}
