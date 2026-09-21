/* ─── Data ──────────────────────────────────────────────────────── */
const TEAS = [
  {
    id: 1, category: 'puer',
    name: 'Шэн пуэр 2019',
    origin: 'Юньнань, Мэнхай',
    price: 1200,
    weight: '100 г',
    desc: 'Прессованный блин из дикорастущих деревьев урочища Лаобаньчжан. Лёгкая горечь в начале и долгое сладкое послевкусие — характерная черта высококачественного шэна.',
    brew: '95°C · 5 г · гайвань 100 мл',
    taste: 'Горечь, мёд, дымность',
    img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&q=80'
  },
  {
    id: 2, category: 'puer',
    name: 'Шу пуэр «Земля»',
    origin: 'Юньнань, Симао',
    price: 780,
    weight: '100 г',
    desc: 'Тёмный мягкий шу с землистым ароматом и бархатным вкусом. Идеален для вечернего чаепития. Выдержка 5 лет.',
    brew: '95°C · 6 г · чайник',
    taste: 'Земля, чернослив, ваниль',
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=80'
  },
  {
    id: 3, category: 'oolong',
    name: 'Дань Цун «Утиный помёт»',
    origin: 'Фэнхуан, Гуандун',
    price: 950,
    weight: '50 г',
    desc: 'Один из самых ароматных улунов Китая. Несмотря на название, аромат напоминает цветущий персик и лёгкую медовую сладость.',
    brew: '90°C · 5 г · гайвань',
    taste: 'Персик, нектар, цветы',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80'
  },
  {
    id: 4, category: 'oolong',
    name: 'Те Гуань Инь',
    origin: 'Аньси, Фуцзянь',
    price: 640,
    weight: '50 г',
    desc: '«Железная богиня милосердия» — один из самых знаменитых улунов. Цветочный, с молочными нотами и долгим освежающим послевкусием.',
    brew: '85°C · 5 г · гайвань',
    taste: 'Орхидея, сливки, луговые травы',
    img: 'https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=500&q=80'
  },
  {
    id: 5, category: 'white',
    name: 'Бай Хао Инь Чжэнь',
    origin: 'Фудин, Фуцзянь',
    price: 1400,
    weight: '30 г',
    desc: '«Серебряные иглы» — белый чай из нераскрывшихся почек, собранных в начале весны. Деликатный, почти прозрачный настой с ароматом свежего сена.',
    brew: '75°C · 3 г · высокий стакан',
    taste: 'Сено, белый виноград, роса',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80'
  },
  {
    id: 6, category: 'white',
    name: 'Шоу Мэй выдержанный',
    origin: 'Фуцзянь',
    price: 860,
    weight: '50 г',
    desc: 'Выдержанный белый чай с шестилетней историей. С каждым годом становится мягче. Сухофрукты, дерево, лёгкая сладость.',
    brew: '90°C · 5 г · чайник',
    taste: 'Финики, дерево, карамель',
    img: 'https://images.unsplash.com/photo-1597133586177-69a3b43c3c9c?w=500&q=80'
  },
  {
    id: 7, category: 'green',
    name: 'Лун Цзин «Колодец дракона»',
    origin: 'Ханчжоу, Чжэцзян',
    price: 720,
    weight: '50 г',
    desc: 'Классический плоский зелёный чай из Западного озера. Прожарен на сковороде вручную. Весенний сбор первого срыва — самый ценный.',
    brew: '80°C · 4 г · стакан',
    taste: 'Орехи, горох, свежая зелень',
    img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&q=80'
  },
  {
    id: 8, category: 'green',
    name: 'Би Ло Чунь',
    origin: 'Сучжоу, Цзянсу',
    price: 890,
    weight: '50 г',
    desc: '«Изумрудные спирали весны» — скрученные в спираль молодые листья с белым ворсом. Тонкий цветочный аромат и очень мягкий вкус.',
    brew: '75°C · 3 г · стакан',
    taste: 'Цветы, дыня, лёгкая сладость',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80'
  }
];

const CEREMONY_PRICES = {
  'Гун-фу чай': 1500,
  'Медитативная церемония': 2000,
  'Групповая церемония': 800,
  'День чая': 4500,
  'Выездная церемония': 5000
};

/* ─── State ─────────────────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('ll_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ll_wishlist') || '[]');
let currentFilter = 'all';
let user = JSON.parse(localStorage.getItem('ll_user') || 'null');
let orders = JSON.parse(localStorage.getItem('ll_orders') || '[]');
let bookings = JSON.parse(localStorage.getItem('ll_bookings') || '[]');

/* ─── Save helpers ──────────────────────────────────────────────── */
const saveCart = () => localStorage.setItem('ll_cart', JSON.stringify(cart));
const saveWishlist = () => localStorage.setItem('ll_wishlist', JSON.stringify(wishlist));
const saveUser = () => localStorage.setItem('ll_user', JSON.stringify(user));
const saveOrders = () => localStorage.setItem('ll_orders', JSON.stringify(orders));
const saveBookings = () => localStorage.setItem('ll_bookings', JSON.stringify(bookings));

/* ─── Navigation ────────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  updateJourneySteps();
  revealSections();
});

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenuClose.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

function closeMobileMenu() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Parallax hero ─────────────────────────────────────────────── */
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `scale(1.04) translateY(${window.scrollY * 0.25}px)`;
  }
}, { passive: true });

/* ─── Section reveal ────────────────────────────────────────────── */
function revealSections() {
  document.querySelectorAll('.section-reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      el.classList.add('visible');
    }
  });
}
revealSections();

/* ─── Tea grid ──────────────────────────────────────────────────── */
function renderTeas(filter = 'all') {
  const grid = document.getElementById('teaGrid');
  const filtered = filter === 'all' ? TEAS : TEAS.filter(t => t.category === filter);
  grid.innerHTML = filtered.map(tea => `
    <div class="tea-card" data-id="${tea.id}">
      <div class="tea-card-img">
        <img src="${tea.img}" alt="${tea.name}" loading="lazy" />
        <button class="tea-card-wish ${wishlist.includes(tea.id) ? 'active' : ''}"
          aria-label="В избранное" data-wish="${tea.id}" onclick="toggleWishlist(event, ${tea.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${wishlist.includes(tea.id) ? '#c0392b' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="tea-card-body">
        <div class="tea-card-cat">${getCatLabel(tea.category)}</div>
        <div class="tea-card-name">${tea.name}</div>
        <div class="tea-card-origin">${tea.origin}</div>
        <div class="tea-card-footer">
          <span class="tea-price">${tea.price} ₽ / ${tea.weight}</span>
          <button class="tea-add-btn" aria-label="В корзину" onclick="addToCart(event, ${tea.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.tea-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.tea-card-wish') || e.target.closest('.tea-add-btn')) return;
      openTeaModal(parseInt(card.dataset.id));
    });
  });
}

function getCatLabel(cat) {
  return { puer: 'пуэр', oolong: 'улун', white: 'белый', green: 'зелёный' }[cat] || cat;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTeas(currentFilter);
  });
});

renderTeas();

/* ─── Tea modal ─────────────────────────────────────────────────── */
function openTeaModal(id) {
  const tea = TEAS.find(t => t.id === id);
  if (!tea) return;
  document.getElementById('teaModalContent').innerHTML = `
    <div class="tea-modal-img">
      <img src="${tea.img}" alt="${tea.name}" />
    </div>
    <div class="tea-modal-body">
      <span class="tea-modal-cat">${getCatLabel(tea.category)}</span>
      <h2 class="tea-modal-name">${tea.name}</h2>
      <p class="tea-modal-origin">${tea.origin} · ${tea.weight}</p>
      <p class="tea-modal-desc">${tea.desc}</p>
      <div class="tea-modal-props">
        <span><strong>Заварка:</strong> ${tea.brew}</span>
        <span><strong>Вкус:</strong> ${tea.taste}</span>
      </div>
      <div class="tea-modal-price-row">
        <span class="tea-modal-price">${tea.price} ₽</span>
        <button class="btn btn-dark" onclick="addToCart(event, ${tea.id}); closeModal('teaModal')">
          В корзину
        </button>
      </div>
    </div>
  `;
  openModal('teaModal');
}

document.getElementById('teaModalClose').addEventListener('click', () => closeModal('teaModal'));

/* ─── Wishlist ──────────────────────────────────────────────────── */
function toggleWishlist(e, id) {
  e.stopPropagation();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
  } else {
    wishlist.push(id);
  }
  saveWishlist();
  renderTeas(currentFilter);
  renderWishlist();
}

document.getElementById('wishlistBtn').addEventListener('click', () => {
  renderWishlist();
  openModal('wishlistModal');
});
document.getElementById('wishlistModalClose').addEventListener('click', () => closeModal('wishlistModal'));

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  if (wishlist.length === 0) {
    grid.innerHTML = '<p class="empty-state">Пока здесь пусто.<br>Добавляйте чаи, нажимая на сердечко.</p>';
    return;
  }
  grid.innerHTML = wishlist.map(id => {
    const tea = TEAS.find(t => t.id === id);
    if (!tea) return '';
    return `
      <div class="wishlist-item">
        <img src="${tea.img}" alt="${tea.name}" />
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${tea.name}</div>
          <div class="wishlist-item-price">${tea.price} ₽</div>
        </div>
        <button class="wishlist-remove" aria-label="Удалить" onclick="toggleWishlist(event, ${id})">✕</button>
      </div>
    `;
  }).join('');
}

/* ─── Cart ──────────────────────────────────────────────────────── */
function addToCart(e, id) {
  if (e) e.stopPropagation();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const tea = TEAS.find(t => t.id === id);
    cart.push({ id, qty: 1, name: tea.name, price: tea.price, img: tea.img });
  }
  saveCart();
  updateCartCount();
  animateCartParticle(e);
  flashAddBtn(e);
}

function flashAddBtn(e) {
  if (!e) return;
  const btn = e.target.closest('.tea-add-btn');
  if (!btn) return;
  btn.classList.add('added');
  btn.textContent = '✓';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.textContent = '+';
  }, 1200);
}

function animateCartParticle(e) {
  if (!e) return;
  const particle = document.getElementById('cartParticle');
  const cartBtn = document.getElementById('cartBtn');
  const startRect = (e.target.closest('.tea-add-btn') || e.target).getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();

  particle.style.left = startRect.left + startRect.width / 2 + 'px';
  particle.style.top = startRect.top + startRect.height / 2 + 'px';
  particle.style.opacity = '1';
  particle.style.transform = 'scale(1)';
  particle.style.transition = 'none';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      particle.style.transition = 'left 0.5s ease-in, top 0.5s ease-in, opacity 0.5s, transform 0.5s';
      particle.style.left = endRect.left + endRect.width / 2 + 'px';
      particle.style.top = endRect.top + endRect.height / 2 + 'px';
      particle.style.opacity = '0';
      particle.style.transform = 'scale(0.3)';
    });
  });
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  el.textContent = count;
  el.classList.toggle('visible', count > 0);
}

updateCartCount();

document.getElementById('cartBtn').addEventListener('click', () => {
  renderCart();
  openModal('cartModal');
});
document.getElementById('cartModalClose').addEventListener('click', () => closeModal('cartModal'));

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-state">Корзина пуста</p>';
    footer.style.display = 'none';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" /></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} ₽</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Удалить">✕</button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = total.toLocaleString('ru') + ' ₽';
  footer.style.display = 'block';
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  closeModal('cartModal');
  setTimeout(() => openModal('checkoutModal'), 200);
});

/* ─── Checkout ──────────────────────────────────────────────────── */
document.getElementById('checkoutModalClose').addEventListener('click', () => closeModal('checkoutModal'));

const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const addressGroup = document.getElementById('addressGroup');
deliveryRadios.forEach(r => {
  r.addEventListener('change', () => {
    addressGroup.style.display = r.value === 'delivery' ? 'flex' : 'none';
  });
});

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const orderNum = String(orders.length + 1).padStart(5, '0');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  orders.push({ id: orderNum, items: [...cart], total, date: new Date().toLocaleDateString('ru') });
  saveOrders();
  cart = [];
  saveCart();
  updateCartCount();
  closeModal('checkoutModal');
  document.getElementById('orderNumber').innerHTML = `Номер вашего заказа: <strong>#${orderNum}</strong>`;
  setTimeout(() => openModal('orderSuccessModal'), 200);
});

document.getElementById('orderSuccessClose').addEventListener('click', () => closeModal('orderSuccessModal'));

/* ─── Booking ───────────────────────────────────────────────────── */
window.openBooking = function(ceremony, basePrice) {
  const sel = document.getElementById('bookingCeremonySelect');
  for (let i = 0; i < sel.options.length; i++) {
    if (sel.options[i].value === ceremony) { sel.selectedIndex = i; break; }
  }
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookingDate').min = today;
  document.getElementById('bookingDate').value = '';
  updateBookingTotal();
  openModal('bookingModal');
};

function updateBookingTotal() {
  const ceremony = document.getElementById('bookingCeremonySelect').value;
  const guests = parseInt(document.getElementById('bookingGuests').value) || 1;
  const base = CEREMONY_PRICES[ceremony] || 1500;
  let total = ceremony === 'Групповая церемония' ? base * guests : base;
  document.getElementById('bookingTotalPrice').textContent = total.toLocaleString('ru') + ' ₽';
}

document.getElementById('bookingCeremonySelect').addEventListener('change', updateBookingTotal);
document.getElementById('bookingGuests').addEventListener('change', updateBookingTotal);
updateBookingTotal();

document.getElementById('bookingModalClose').addEventListener('click', () => closeModal('bookingModal'));

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  bookings.push({
    ceremony: fd.get('ceremony'),
    guests: fd.get('guests'),
    date: fd.get('date'),
    time: fd.get('time'),
    name: fd.get('name'),
    date_created: new Date().toLocaleDateString('ru')
  });
  saveBookings();
  closeModal('bookingModal');
  setTimeout(() => openModal('successModal'), 200);
});

document.getElementById('successClose').addEventListener('click', () => closeModal('successModal'));

/* ─── Journey scroll ────────────────────────────────────────────── */
function updateJourneySteps() {
  document.querySelectorAll('.journey-step').forEach(step => {
    const rect = step.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
    step.classList.toggle('active', inView);
  });
}

/* ─── Auth ──────────────────────────────────────────────────────── */
document.getElementById('authBtn').addEventListener('click', () => {
  if (user) {
    showProfile();
  } else {
    showLoginForm();
  }
  openModal('authModal');
});
document.getElementById('authModalClose').addEventListener('click', () => closeModal('authModal'));

document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const which = tab.dataset.tab;
    document.getElementById('loginForm').style.display = which === 'login' ? 'flex' : 'none';
    document.getElementById('registerForm').style.display = which === 'register' ? 'flex' : 'none';
    document.getElementById('profilePanel').style.display = 'none';
  });
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('[type=email]').value;
  user = { name: email.split('@')[0], email };
  saveUser();
  showProfile();
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.querySelector('[type=text]').value;
  const email = e.target.querySelector('[type=email]').value;
  user = { name, email };
  saveUser();
  showProfile();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  user = null;
  saveUser();
  closeModal('authModal');
});

function showLoginForm() {
  document.getElementById('loginForm').style.display = 'flex';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('profilePanel').style.display = 'none';
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === 'login');
  });
}

function showProfile() {
  if (!user) return;
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('profilePanel').style.display = 'block';
  document.getElementById('profileName').textContent = user.name;

  const oh = document.getElementById('orderHistory');
  oh.innerHTML = orders.length
    ? orders.map(o => `<div style="font-size:.85rem;padding:8px 0;border-bottom:1px solid var(--border)">Заказ #${o.id} · ${o.total.toLocaleString('ru')} ₽ · ${o.date}</div>`).join('')
    : '<p class="empty-state">Заказов пока нет</p>';

  const bh = document.getElementById('bookingHistory');
  bh.innerHTML = bookings.length
    ? bookings.map(b => `<div style="font-size:.85rem;padding:8px 0;border-bottom:1px solid var(--border)">${b.ceremony} · ${b.date || 'дата не указана'} ${b.time || ''}</div>`).join('')
    : '<p class="empty-state">Бронирований пока нет</p>';
}

if (user) showProfile();

/* ─── Modal helpers ─────────────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  const anyOpen = document.querySelectorAll('.modal-overlay.open').length > 0;
  if (!anyOpen) document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

/* ─── Keyboard esc ──────────────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    closeMobileMenu();
  }
});

/* ─── Smooth anchor scroll ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
