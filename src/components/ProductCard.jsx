import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onOpenSpec }) {
  return (
    <article className="product-item">
      <div className="product-thumb">
        <span className="product-category-tag">{product.categoryLabel}</span>
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta-row">
          {product.specsSummary.map((spec, i) => (
            <span key={i}>
              {spec.label} <strong>{spec.value}</strong>
            </span>
          ))}
        </div>
        <div className="product-actions">
          <button 
            type="button" 
            className="btn-spec" 
            onClick={() => onOpenSpec(product)}
          >
            Technical Specs
          </button>
          <Link 
            to={`/contact?product=${encodeURIComponent(product.title)}`} 
            className="btn-inquire"
          >
            Order
          </Link>
        </div>
      </div>
    </article>
  );
}
