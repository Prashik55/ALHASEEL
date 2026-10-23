import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Why Choose Us</span>
          </div>
          <h1 className="page-title">The B2B Wholesale Advantage</h1>
          <p className="page-subtitle">
            Engineered for commercial food operators: direct source pricing, uncompromising grain consistency, and dependable UAE logistics.
          </p>
        </div>
      </section>

      {/* 6 Core Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-label">Core Pillars</span>
              <h2 className="section-h2">Why 80+ Commercial Partners Trust Us</h2>
            </div>
            <p className="section-summary">
              We understand commercial kitchen margins. Our supply model eliminates intermediaries and guarantees supply reliability.
            </p>
          </div>

          <div className="advantage-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="advantage-card">
              <span className="advantage-num">01</span>
              <h3 className="advantage-title">Direct Mill Procurement</h3>
              <p className="advantage-text">
                By procuring directly from primary milling origins, we bypass multiple broker markups, giving our clients sustainable, cost-effective wholesale rates.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">02</span>
              <h3 className="advantage-title">Consistent Gluten &amp; Moisture</h3>
              <p className="advantage-text">
                No unpredictable batch variations. Every shipment undergoes laboratory inspection for moisture %, ash, and wet gluten index before release.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">03</span>
              <h3 className="advantage-title">Al Khawaneej 2 Hub (Wh. 11)</h3>
              <p className="advantage-text">
                Our warehouse facility in Alttay, Dubai, provides temperature-regulated, pest-free palletized storage to preserve grain quality throughout UAE summers.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">04</span>
              <h3 className="advantage-title">Scheduled Daily UAE Delivery</h3>
              <p className="advantage-text">
                Dedicated commercial trucks operate scheduled daily routes across Dubai, Abu Dhabi, Sharjah, Ajman, and Northern Emirates with rapid turnarounds.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">05</span>
              <h3 className="advantage-title">Commercial Credit &amp; Contracts</h3>
              <p className="advantage-text">
                We offer structured credit terms and volume-based agreements for established restaurant chains, hotel groups, and central bakeries.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-num">06</span>
              <h3 className="advantage-title">30+ Years Leadership Support</h3>
              <p className="advantage-text">
                Benefit from direct access to industry experts who understand commercial baking chemistry, high-tandoor tolerances, and large-scale catering demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div>
              <span className="section-label">Comparative Analysis</span>
              <h2 className="section-h2">Traditional Brokers vs. Karawan Al Aseel</h2>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'var(--bg-canvas)' }}>
                  <th style={{ padding: '18px 24px', color: 'var(--ink-700)', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '18px 24px', color: 'var(--ink-400)', fontWeight: 600 }}>Traditional Food Brokers</th>
                  <th style={{ padding: '18px 24px', color: 'var(--accent-brass)', fontWeight: 700 }}>Karawan Al Aseel Model</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--ink-900)' }}>Sourcing Origin</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-600)' }}>Layered through 2-3 third-party traders</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-900)', fontWeight: 600 }}>Direct from primary certified mills</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--ink-900)' }}>Pricing Structure</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-600)' }}>Compounded margin markups</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-900)', fontWeight: 600 }}>Transparent, source-direct wholesale pricing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--ink-900)' }}>Quality Verification</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-600)' }}>Irregular batch checks</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-900)', fontWeight: 600 }}>Continuous moisture, ash &amp; gluten lab testing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--ink-900)' }}>Warehousing Standard</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-600)' }}>Outsourced or standard ambient storage</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-900)', fontWeight: 600 }}>Dedicated Warehouse 11, Al Khawaneej 2 Hub</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--ink-900)' }}>Delivery Commitment</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-600)' }}>Dependent on third-party courier availability</td>
                  <td style={{ padding: '16px 24px', color: 'var(--ink-900)', fontWeight: 600 }}>Daily dedicated fleet dispatch across UAE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="section-label">Get Started</span>
          <h2 className="section-h2" style={{ marginBottom: '16px' }}>Upgrade Your Kitchen's Flour Supply</h2>
          <p style={{ color: 'var(--ink-600)', marginBottom: '28px' }}>
            Join over 80 commercial UAE partners benefiting from direct source pricing and reliable delivery schedules.
          </p>
          <Link to="/contact" className="btn-dark">Request Wholesale Quotation &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
