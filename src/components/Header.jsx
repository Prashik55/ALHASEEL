import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand-group">
          <img src="/assets/images/karawan-logo-emblem.png" alt="Karawan Al Aseel Logo" className="brand-logo-img" />
          <div className="brand-title">
            <span className="brand-name">Karawan Al Aseel</span>
            <span className="brand-tagline">كروان الأصيل لتجارة المواد الغذائية</span>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products &amp; Brands
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/why-choose-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Why Choose Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="header-action">
          <Link to="/contact" className="btn-pill">
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
