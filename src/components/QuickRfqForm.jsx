import React, { useState, useEffect } from 'react';

export default function QuickRfqForm({ initialProduct = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Chakki Fresh Whole Wheat Flour',
    emirate: 'Dubai',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const waText = encodeURIComponent(
      `*New Wholesale Inquiry - Karawan Al Aseel*\n` +
      `• Contact Name: ${formData.name}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Business Email: ${formData.email}\n` +
      `• Product: ${formData.product}\n` +
      `• Destination: ${formData.emirate}, UAE\n` +
      `• Order Details: ${formData.message || 'Standard wholesale consignment request'}`
    );

    if (onShowToast) {
      onShowToast(`Thank you, ${formData.name}. Your wholesale RFQ has been prepared.`);
    }

    setTimeout(() => {
      window.open(`https://wa.me/971501234567?text=${waText}`, '_blank');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: 'Chakki Fresh Whole Wheat Flour',
        emirate: 'Dubai',
        message: ''
      });
    }, 700);
  };

  return (
    <form className="minimal-form" onSubmit={handleSubmit}>
      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-clean"
            placeholder="e.g. Rashid Al Nuaimi"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="company">Company / Establishment</label>
          <input
            type="text"
            id="company"
            name="company"
            className="input-clean"
            placeholder="e.g. Emirates Gourmet Bakery LLC"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-clean"
            placeholder="name@company.ae"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input-clean"
            placeholder="+971 50 000 0000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="product">Product Required</label>
          <select
            id="product"
            name="product"
            className="input-clean"
            value={formData.product}
            onChange={handleChange}
          >
            <option value="Chakki Fresh Whole Wheat Flour">Chakki Fresh Whole Wheat Flour</option>
            <option value="High-Grade Refined Maida">High-Grade Refined Maida</option>
            <option value="Golden Durum Semolina">Golden Durum Semolina (Suji)</option>
            <option value="Pak Chef™ All-Purpose Atta">Pak Chef™ All-Purpose Atta</option>
            <option value="Pak Chef Paratha™ Special">Pak Chef Paratha™ Special</option>
            <option value="Chef's Flour™ Professional">Chef's Flour™ Professional</option>
            <option value="General Wholesale Consignment">General Wholesale Consignment</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="emirate">Delivery Destination (UAE)</label>
          <select
            id="emirate"
            name="emirate"
            className="input-clean"
            value={formData.emirate}
            onChange={handleChange}
          >
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Ajman">Ajman</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Umm Al Quwain">Umm Al Quwain</option>
            <option value="Al Ain">Al Ain</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="message">Estimated Volume &amp; Specific Requirements</label>
        <textarea
          id="message"
          name="message"
          className="input-clean"
          placeholder="Specify your required bag count (25kg/50kg) or metric tonnage, delivery frequency, and any specific milling requirements..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn-submit">
        Transmit Wholesale Inquiry
      </button>
    </form>
  );
}
