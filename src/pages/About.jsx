import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-title">Direct Sourcing. Decades of Wholesale Mastery.</h1>
          <p className="page-subtitle">
            Founded in Dubai in 2019, Karawan Al Aseel bridges the gap between global agricultural mills and commercial food operators across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <span className="section-label">Our Heritage</span>
              <h2 className="section-h2" style={{ marginBottom: '20px' }}>Built by Food Industry Veterans</h2>
              <p>
                While Karawan Al Aseel Foodstuff Trading LLC was formally established in 2019, our leadership team brings more than <strong>30 cumulative years</strong> of dedicated food supply chain experience across the Middle East.
              </p>
              <p>
                Having observed traditional supply models burdened with cascading brokers and unnecessary distribution layers, we set out to build a streamlined, transparent model: <strong>connecting commercial food producers directly with premier milling sources</strong>.
              </p>
              <p>
                This direct model ensures our B2B partners — from neighborhood bakeries to large supermarket distributors — receive the highest grade grains with guaranteed freshness, verifiable laboratory parameters, and significant savings on their landed costs.
              </p>

              <div className="about-pillars">
                <div className="pillar-item">
                  <h4>Our Mission</h4>
                  <p>To eliminate unnecessary supply layers, delivering pure, unadulterated foodstuff with maximum operational reliability.</p>
                </div>
                <div className="pillar-item">
                  <h4>Our Slogan</h4>
                  <p>"Treat yourself to healthier cooking" — the standard behind every metric ton we dispatch.</p>
                </div>
              </div>
            </div>

            <div className="about-media-box">
              <img 
                src="/assets/images/warehouse-hub.jpg" 
                alt="Karawan Al Aseel commercial logistics facility in Al Khawaneej 2 Dubai with forklift and loading bay" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Banner */}
      <div className="container" style={{ marginBottom: '40px' }}>
        <div style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          height: '200px'
        }}>
          <img 
            src="/assets/images/slogan-banner.jpg" 
            alt="Treat yourself to healthier cooking banner" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Who We Serve */}
      <section className="section" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-label">Our Market</span>
              <h2 className="section-h2">Trusted by 80+ B2B Partners Across UAE</h2>
            </div>
            <p className="section-summary">
              We provide dependable, scheduled bulk grain supplies tailored to the operational demands of commercial kitchens.
            </p>
          </div>

          <div className="advantage-grid">
            <div className="advantage-card">
              <span className="advantage-num">01</span>
              <h3 className="advantage-title">Commercial Bakeries</h3>
              <p className="advantage-text">
                High-output bakeries and patisseries rely on our refined Maida and Chef's Flour for consistent gluten elasticity, high water absorption, and predictable oven spring.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">02</span>
              <h3 className="advantage-title">Restaurants &amp; Caterers</h3>
              <p className="advantage-text">
                Over 80 high-volume Arabic, Pakistani, and Indian restaurant kitchens use Pak Chef™ and Pak Chef Paratha™ flours daily for authentic rotis, naans, and flaky layered breads.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">03</span>
              <h3 className="advantage-title">Distributors &amp; Retailers</h3>
              <p className="advantage-text">
                Supermarket chains and regional food distributors partner with us for bulk wholesale consignments in branded, durable 25kg and 50kg poly-woven sacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Facility */}
      <section className="section">
        <div className="container">
          <div className="about-split" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
            <div className="about-media-box" style={{ height: '380px' }}>
              <img 
                src="/assets/images/hero-bakery-marble.jpg" 
                alt="Flour craftsmanship and premium grain quality" 
              />
            </div>

            <div className="about-text">
              <span className="section-label">Logistics Facility</span>
              <h2 className="section-h2" style={{ marginBottom: '18px' }}>Warehouse 11, Al Khawaneej 2</h2>
              <p>
                Centrally stationed in the Alttay industrial cluster of Al Khawaneej 2, Dubai, our commercial warehouse facility is strategically positioned for rapid highway access to Dubai, Sharjah, Abu Dhabi, and Northern Emirates.
              </p>
              <p>
                The facility is equipped with clean palletized racking, strict humidity and temperature stabilization, and dedicated loading bays capable of handling container shipments and daily dispatched distribution trucks simultaneously.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn-dark" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                  Schedule a Warehouse Visit &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-badges-grid">
            <div className="cert-card">
              <div style={{ fontSize: '1.8rem' }}>🏛️</div>
              <h4>Dubai Municipality</h4>
              <p>Full food safety &amp; hygiene code compliance</p>
            </div>
            <div className="cert-card">
              <div style={{ fontSize: '1.8rem' }}>🌿</div>
              <h4>100% Halal Certified</h4>
              <p>Accredited global milling origin</p>
            </div>
            <div className="cert-card">
              <div style={{ fontSize: '1.8rem' }}>🔬</div>
              <h4>ESMA 232/2009</h4>
              <p>Strict moisture &amp; ash threshold verification</p>
            </div>
            <div className="cert-card">
              <div style={{ fontSize: '1.8rem' }}>📦</div>
              <h4>Moisture Protected</h4>
              <p>Heavy-duty poly-woven packaging</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
