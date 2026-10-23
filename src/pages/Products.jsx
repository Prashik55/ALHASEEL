import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products({ onOpenSpec }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <main>
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products &amp; Brands</span>
          </div>
          <h1 className="page-title">Specialty Flours &amp; Commercial Brands</h1>
          <p className="page-subtitle">
            Precision-milled grain products engineered for commercial bakeries, fine-dining restaurants, and regional distributors across the UAE.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="product-tabs">
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Products ({products.length})
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'flour' ? 'active' : ''}`}
              onClick={() => setActiveTab('flour')}
            >
              Whole Wheat Flour
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'maida' ? 'active' : ''}`}
              onClick={() => setActiveTab('maida')}
            >
              Refined Maida
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'semolina' ? 'active' : ''}`}
              onClick={() => setActiveTab('semolina')}
            >
              Durum Semolina
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'brands' ? 'active' : ''}`}
              onClick={() => setActiveTab('brands')}
            >
              Featured Brands
            </button>
          </div>

          {/* Grid */}
          <div className="products-grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onOpenSpec={onOpenSpec} />
            ))}
          </div>

          {/* Culinary Applications Showcase */}
          <div style={{
            marginTop: '64px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            alignItems: 'center'
          }}>
            <div style={{ padding: '44px 40px' }}>
              <span className="section-label">Culinary Applications</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--ink-900)', marginBottom: '14px' }}>
                Treat Yourself to Healthier Cooking
              </h3>
              <p style={{ color: 'var(--ink-600)', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.96rem' }}>
                From piping hot tandoori rotis and flaky layered Pakistani parathas to authentic Mediterranean pastas and artisan European loaves, Karawan Al Aseel flours provide the foundational purity trusted by over 80 UAE culinary operators.
              </p>
              <Link to="/contact" className="btn-dark" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
                Request Commercial Sample Batch &rarr;
              </Link>
            </div>
            <div style={{ height: '100%', minHeight: '320px' }}>
              <img 
                src="/assets/images/culinary-dishes.jpg" 
                alt="Golden flaky parathas and artisan loaves" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
