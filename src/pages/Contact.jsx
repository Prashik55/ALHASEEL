import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import QuickRfqForm from '../components/QuickRfqForm';

export default function Contact({ onShowToast }) {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') || '';

  return (
    <main>
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="page-title">Commercial Desk &amp; Dubai Warehouse</h1>
          <p className="page-subtitle">
            Connect with our wholesale specialists for bulk order quotations, sample consignments, or contract agreements.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info-panel">
              <span className="section-label">Direct Communication</span>
              <h3>Let's Do Business</h3>
              <p>
                We welcome inquiries from restaurant groups, bakery commissaries, supermarket distributors, and food exporters across the GCC region.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-text">
                    <strong>Warehouse &amp; Offices</strong>
                    <span>Al Khawaneej 2, Warehouse No. 11, Alttay, Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-text">
                    <strong>Official Email</strong>
                    <a href="mailto:karawanalaseel@gmail.com">karawanalaseel@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-text">
                    <strong>Working Hours</strong>
                    <span>Monday – Saturday: 7:30 AM – 5:30 PM<br /><small style={{ color: 'var(--ink-400)' }}>(Closed Sundays &amp; UAE Public Holidays)</small></span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-text">
                    <strong>Direct Telephone &amp; WhatsApp</strong>
                    <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">+971 50 123 4567 (Wholesale Desk)</a>
                  </div>
                </div>
              </div>

              <div className="direct-wa-box" style={{ marginTop: '24px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#166534' }}>Instant WhatsApp Support</strong>
                  <span style={{ fontSize: '0.8rem', color: '#15803d' }}>Connect directly with a sales representative</span>
                </div>
                <a href="https://wa.me/971501234567?text=Hello%20Karawan%20Al%20Aseel%2C%20I%20would%20like%20to%20inquire%20about%20wholesale%20flour%20pricing." target="_blank" rel="noopener noreferrer">
                  Chat &rarr;
                </a>
              </div>
            </div>

            {/* Right: RFQ Form */}
            <div className="form-panel">
              <h4>Request Wholesale Quotation</h4>
              <p>Complete the form below and an account manager will reply with customized commercial rates.</p>

              <QuickRfqForm 
                initialProduct={productParam} 
                onShowToast={onShowToast} 
              />
            </div>
          </div>

          {/* Embedded Location Map */}
          <div style={{ marginTop: '48px' }}>
            <span className="section-label">Location Map</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--ink-900)', marginBottom: '8px' }}>
              Warehouse 11, Al Khawaneej 2, Dubai
            </h3>
            <div className="map-container">
              <iframe 
                title="Karawan Al Aseel Warehouse Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.46788414995!2d55.4522818!3d25.1764789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6063b4685ff5%3A0xc3cf9bce0b534608!2sAl%20Khawaneej%202%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
