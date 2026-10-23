import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home({ onOpenSpec }) {
  // Show first 3 products as featured snapshot
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text-block">
            <div className="hero-pill-tag">
              <span className="dot"></span>
              Dubai Wholesale Foodstuff • Est. 2019
            </div>

            <h1 className="hero-h1">
              Pure Flour, Maida &amp; Semolina — <span>Direct from Source.</span>
            </h1>

            <p className="hero-p">
              <strong>Treat yourself to healthier cooking with Karawan Al Aseel.</strong> We bridge the gap between global agricultural mills and over 80 commercial restaurants, bakeries, and supermarkets across the UAE with consistent quality and source-direct pricing.
            </p>

            <div className="hero-btns">
              <Link to="/products" className="btn-dark">Explore Full Catalog</Link>
              <Link to="/contact" className="btn-light">Wholesale Inquiry</Link>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img 
              src="/assets/images/hero-bakery-marble.jpg" 
              alt="Milled flour, artisan loaves and golden wheat ears" 
            />
            <div className="hero-image-caption">
              Milled from select high-grade wheat • Warehouse 11, Al Khawaneej 2, Dubai
            </div>
          </div>

          {/* Metric Strip */}
          <div className="metrics-strip">
            <div className="metric-item">
              <span className="metric-val">2019</span>
              <span className="metric-lbl">Established in Dubai</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">80+</span>
              <span className="metric-lbl">B2B Clients</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">Direct Mill Sourced</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">Warehouse 11</span>
              <span className="metric-lbl">Al Khawaneej 2 Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-label">Core Specialties</span>
              <h2 className="section-h2">Flour, Maida &amp; Semolina</h2>
            </div>
            <div>
              <Link to="/products" className="btn-light" style={{ fontSize: '0.88rem', padding: '10px 20px' }}>
                View All 6 Products &rarr;
              </Link>
            </div>
          </div>

          <div className="products-grid">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onOpenSpec={onOpenSpec} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot with Warehouse Hub Image */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <span className="section-label">About Karawan Al Aseel</span>
              <h2 className="section-h2" style={{ marginBottom: '20px' }}>Direct Supply. Premium Quality.</h2>
              <p>
                Founded in 2019 in Dubai, <strong>Karawan Al Aseel Foodstuff Trading LLC</strong> is dedicated to closing the gap between agricultural sources and commercial buyers, delivering premium Flour, Maida, and Semolina efficiently and cost-effectively.
              </p>
              <p>
                Operating from Warehouse No. 11, Al Khawaneej 2, we proudly serve more than 80 restaurants, supermarkets, and distributors across the UAE with consistent quality and dependable wholesale delivery.
              </p>

              <div className="hero-btns" style={{ marginTop: '28px' }}>
                <Link to="/about" className="btn-dark" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
                  Read Our Story &rarr;
                </Link>
                <Link to="/why-choose-us" className="btn-light" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
                  B2B Advantage
                </Link>
              </div>
            </div>

            <div className="about-media-box">
              <img 
                src="/assets/images/warehouse-hub.jpg" 
                alt="Karawan Al Aseel commercial warehouse in Al Khawaneej 2, Dubai" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Banner Strip */}
      <section className="section" style={{ padding: '40px 0 0 0' }}>
        <div className="container">
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            minHeight: '220px',
            aspectRatio: '16/6',
            position: 'relative'
          }}>
            <img 
              src="/assets/images/slogan-banner.jpg" 
              alt="Karawan Al Aseel Foodstuff Trading LLC - Treat yourself to healthier cooking" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center left' }}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="section-label">Start Partnership</span>
          <h2 className="section-h2" style={{ marginBottom: '16px' }}>Ready for Reliable Flour Supply in the UAE?</h2>
          <p style={{ color: 'var(--ink-600)', marginBottom: '32px', fontSize: '1.05rem' }}>
            Contact our wholesale desk for bulk pricing, samples, or to discuss commercial restaurant and distributor supply agreements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-dark">Submit Wholesale Inquiry</Link>
            <a 
              href="https://wa.me/971501234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-light"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
