function waLink(phone, text) {
  const msg = encodeURIComponent(text || DEFAULT_GREETING);
  return `https://wa.me/${phone}?text=${msg}`;
}

function createServiceCard(service) {
  const card = document.createElement('a');
  const message = service.message || `Hi! I’d like to book ${service.name}.`;
  card.href = waLink(PHONE_NUMBER, message);
  card.target = "_blank";
  card.rel = "noopener";
  card.className = "group block rounded-3xl bg-white p-6 shadow hover:shadow-lg transition border border-rose-100 hover:border-rose-200";

  const title = document.createElement('div');
  title.className = "flex items-center justify-between gap-3";
  title.innerHTML = `<h3 class="text-xl font-semibold text-brand-800">${service.name}</h3>
    <span class="inline-flex items-center rounded-full border border-rose-200 px-3 py-1 text-xs font-medium text-brand-700 bg-rose-50 group-hover:bg-rose-100 transition">Book</span>`;

  const meta = document.createElement('div');
  meta.className = "mt-3 text-sm text-gray-600";
  meta.innerHTML = `
    ${service.price ? `<div><strong class="text-gray-800">Price:</strong> ${service.price}</div>` : ""}
    ${service.duration ? `<div><strong class="text-gray-800">Duration:</strong> ${service.duration}</div>` : ""}
  `;

  card.appendChild(title);
  card.appendChild(meta);
  return card;
}

function render() {

  // Header CTA & hero WhatsApp
  const wa = waLink(PHONE_NUMBER, DEFAULT_GREETING);
  const headerBtn = document.getElementById('whatsappCTA');
  const heroWA = document.getElementById('heroWhatsApp');
  if (headerBtn) headerBtn.href = wa;
  if (heroWA) heroWA.href = wa;

  // Call Now
  const callBtn = document.getElementById('callNow');
  if (callBtn && CALL_NUMBER) {
    callBtn.addEventListener('click', () => {
      window.location.href = `tel:${CALL_NUMBER}`;
    });
  }

  // Services grid
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = "";
  SERVICES.forEach(svc => grid.appendChild(createServiceCard(svc)));
}

document.addEventListener('DOMContentLoaded', render);

