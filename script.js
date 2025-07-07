// Burger Menu
document.getElementById('menu-toggle').onclick = () => document.getElementById('navbar').classList.toggle('active');

// Slider
let idx = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(n) {
  slides.forEach(s=>s.classList.remove('active'));
  slides[(n+slides.length)%slides.length].classList.add('active');
}
document.querySelector('.prev').onclick = ()=>{ idx--; showSlide(idx); };
document.querySelector('.next').onclick = ()=>{ idx++; showSlide(idx); };
showSlide(idx);

// Form Kontak
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Terima kasih, ' + document.getElementById('name').value + '! Pesan Anda telah dikirim.');
  e.target.reset();
});

// Google Maps
function initMap(){
  new google.maps.Map(document.getElementById('map'), {
    center: {lat: -6.2000, lng: 106.8166}, // Contoh: Jakarta
    zoom: 10
  });
}
window.initMap = initMap;

// Back-to-Top button
const topBtn = document.getElementById('topBtn');
window.onscroll = () => topBtn.style.display = (window.pageYOffset > 300) ? 'block':'none';
topBtn.onclick = () => window.scrollTo({top:0,behavior:'smooth'});
