import React from 'react';

export default function ProductCard({ product }) {
  return (
    <article className="product-item">
      {product.image && (
        <div className="product-thumb">
          <span className="product-category-tag">{product.categoryLabel}</span>
          <img src={product.image} alt={product.title} loading="lazy" />
        </div>
      )}
      <div className="product-body">
        <div className="product-card-top">
          <span className="product-category-tag-inline">{product.categoryLabel}</span>
          {product.brand && <span className="product-brand-tag">{product.brand}</span>}
        </div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
      </div>
    </article>
  );
}
