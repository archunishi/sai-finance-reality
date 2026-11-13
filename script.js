const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !phone) return;
  const text = `Hello Sai Finance and Reality,\nMy name is ${name}.\nMy mobile number is ${phone}.\nI am interested in: ${interest}.\n${message ? `Details: ${message}` : ''}`;
  window.open(`https://wa.me/919049080499?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
