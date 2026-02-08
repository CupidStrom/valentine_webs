function pindahSlide(currentId, nextId) {
    const currentSlide = document.getElementById('slide-' + currentId);
    const nextSlide = document.getElementById('slide-' + nextId);
    currentSlide.classList.remove('active');
    currentSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
    nextSlide.classList.add('active');
}

function bukaPesan() {
    const kotak = document.getElementById('kotak-pesan');
    const judul = document.getElementById('pesan-utama');
    const tombol = document.getElementById('tombol-buka');
    kotak.classList.remove('hidden');
    kotak.classList.add('active');
    judul.innerHTML = "Happy Valentine's Day! ❤️";
    tombol.style.display = 'none';
}

function createHeart() {
    const container = document.getElementById('heart-bg');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + 'px';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}

setInterval(createHeart, 300);