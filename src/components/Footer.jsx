import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/assets/images/karawan-logo-emblem.png" alt="Karawan Al Aseel" style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'contain' }} />
          <span>&copy; {new Date().getFullYear()} Karawan Al Aseel Foodstuff Trading LLC. All rights reserved.</span>
        </div>
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-choose-us">Why Choose Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
