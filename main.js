/**
 * Karawan Al Aseel Foodstuff Trading LLC
 * Minimalist Multi-Page Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initModal();
  initForm();
  initSmoothScroll();
  initUrlParams();
});

// ==========================================================================
// 1. Product Tabs Filter (products.html)
// ==========================================================================
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const items = document.querySelectorAll('.product-item');
  if (!tabs.length || !items.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-tab');

      items.forEach(item => {
        const cat = item.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 2. Technical Specifications Modal
// ==========================================================================
const specsData = {
  'chakki-atta': {
    title: 'Chakki Fresh Whole Wheat Flour',
    category: '100% Whole Wheat • Stone Ground',
    desc: 'High-absorption stone ground wheat flour milled to retain natural germ and bran, yielding softer rotis with superior aroma.',
    moisture: 'Max 13.5%',
    protein: '12.2%',
    gluten: 'Wet Gluten 29%',
    ash: 'Max 1.4%',
    packaging: '25kg & 50kg Moisture-Proof Poly Bags',
    application: 'Rotis, Chapatis, Tandoori Naan, High-Fiber Breads',
    standard: 'Dubai Municipality & UAE ESMA 232/2009'
  },
  'fine-maida': {
    title: 'High-Grade Refined Maida',
    category: 'Refined Wheat Flour • Bakery Grade',
    desc: 'Fine, silky texture with balanced gluten elasticity, ideal for commercial bakeries, pizza dough, samosa pastry, and parathas.',
    moisture: 'Max 13.0%',
    protein: '11.2%',
    gluten: 'Wet Gluten 30%',
    ash: 'Max 0.52%',
    packaging: '25kg & 50kg Multi-Wall Bags',
    application: 'Commercial Bread, Pizza Crust, Pastry, Naan',
    standard: 'HACCP & Dubai Food Safety Approved'
  },
  'durum-semolina': {
    title: 'Golden Durum Semolina (Suji)',
    category: 'Coarse Durum Middlings',
    desc: 'Evenly granulated durum wheat semolina offering high tensile heat tolerance and clean non-sticky release.',
    moisture: 'Max 13.5%',
    protein: '13.0%',
    gluten: 'High Tenacity Durum Matrix',
    ash: 'Max 0.85%',
    packaging: '25kg & 50kg Sacks',
    application: 'Pasta, Halwa, Basbousa, Semolina Breads',
    standard: 'ISO 22000 & Halal Certified'
  },
  'pak-chef': {
    title: 'Pak Chef™ All-Purpose Atta',
    category: 'Commercial Restaurant Brand',
    desc: 'Formulated specifically for the UAE commercial food service sector. High yield per bag with extended cooked warmth retention.',
    moisture: 'Max 13.2%',
    protein: '11.5%',
    gluten: 'Wet Gluten 28%',
    ash: 'Max 1.2%',
    packaging: '50kg Heavy-Duty Sacks',
    application: 'Commercial Caterers, Tandoor Restaurants',
    standard: 'UAE Municipality Compliant'
  },
  'pak-chef-paratha': {
    title: 'Pak Chef Paratha™ Special',
    category: 'Layered Paratha Blend',
    desc: 'Engineered specifically for flaky, multi-layered parathas, Malabar parottas, and puris. Crisp crusts with soft inner crumb.',
    moisture: 'Max 13.0%',
    protein: '11.8%',
    gluten: 'Wet Gluten 30% (High Stretch)',
    ash: 'Max 0.58%',
    packaging: '25kg Laminated Bags',
    application: 'Layered Parathas, Malabar Parottas, Poori',
    standard: 'Dubai Municipality Registered'
  },
  'chefs-flour': {
    title: "Chef's Flour™ Professional",
    category: 'Artisanal Bakery & Patisserie',
    desc: 'Tailored for artisanal bakeries and gourmet sourdough requiring prolonged fermentation stability and great oven spring.',
    moisture: 'Max 12.8%',
    protein: '13.5%',
    gluten: 'Wet Gluten 34%',
    ash: 'Max 0.55%',
    packaging: '25kg Kraft Multi-Wall',
    application: 'Sourdough, Baguettes, Brioche, Croissants',
    standard: 'International Food Standard Compliant'
  }
};

function initModal() {
  const modal = document.getElementById('specModal');
  const closeBtn = document.querySelector('.modal-close');
  const specBtns = document.querySelectorAll('.btn-spec');
  const orderBtn = document.getElementById('specOrderBtn');
  if (!modal) return;

  const open = (key) => {
    const data = specsData[key];
    if (!data) return;

    document.getElementById('specTitle').textContent = data.title;
    document.getElementById('specCategory').textContent = data.category;
    document.getElementById('specDesc').textContent = data.desc;
    document.getElementById('specMoisture').textContent = data.moisture;
    document.getElementById('specProtein').textContent = data.protein;
    document.getElementById('specGluten').textContent = data.gluten;
    document.getElementById('specAsh').textContent = data.ash;
    document.getElementById('specPackaging').textContent = data.packaging;
    document.getElementById('specApplication').textContent = data.application;
    document.getElementById('specStandard').textContent = data.standard;

    orderBtn.onclick = () => {
      close();
      window.location.href = `contact.html?product=${encodeURIComponent(data.title)}`;
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  specBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-product');
      open(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });
}

// ==========================================================================
// 3. Quick RFQ Form & Prefill Helper
// ==========================================================================
function prefillInquiry(productName) {
  const productSelect = document.getElementById('rfqProduct');
  if (productSelect) {
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
          productName.toLowerCase().includes(productSelect.options[i].text.toLowerCase())) {
        productSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function initUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');
  if (productParam) {
    prefillInquiry(productParam);
  }
}

function initForm() {
  const form = document.getElementById('quickRfqForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName').value.trim();
    const company = document.getElementById('rfqCompany').value.trim();
    const email = document.getElementById('rfqEmail').value.trim();
    const phone = document.getElementById('rfqPhone').value.trim();
    const product = document.getElementById('rfqProduct').value;
    const emirateEl = document.getElementById('rfqEmirate');
    const emirate = emirateEl ? emirateEl.value : 'Dubai, UAE';
    const message = document.getElementById('rfqMessage').value.trim();

    // Prepare WhatsApp RFQ Text
    const waText = encodeURIComponent(
      `*New Wholesale Inquiry - Karawan Al Aseel*\n` +
      `• Contact Name: ${name}\n` +
      `• Company: ${company || 'N/A'}\n` +
      `• Phone: ${phone}\n` +
      `• Business Email: ${email}\n` +
      `• Product: ${product}\n` +
      `• Destination: ${emirate}\n` +
      `• Order Details: ${message || 'Standard wholesale inquiry'}`
    );

    showToast(`Thank you, ${name}. Your wholesale RFQ has been prepared.`);
    
    setTimeout(() => {
      window.open(`https://wa.me/971501234567?text=${waText}`, '_blank');
      form.reset();
    }, 700);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toastBox');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ==========================================================================
// 4. Smooth Scrolling (for in-page anchors if present)
// ==========================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerH = 76;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });
}
