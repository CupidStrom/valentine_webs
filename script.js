function pindahSlide(curr, next) {
    document.getElementById('slide-' + curr).classList.replace('active', 'hidden');
    document.getElementById('slide-' + next).classList.replace('hidden', 'active');
    if (curr === 1) document.getElementById('bg-music').play();
}

function cekSoal1() {
    const val = document.getElementById('ans-1').value.toLowerCase().trim();
    if (val === "ara") pindahSlide(2, 3); // Ganti "ara" sesuai nickname aslinya
    else document.getElementById('err-1').classList.remove('hidden');
}

function cekSoal2() {
    const res = document.querySelector('input[name="soal2"]:checked');
    if (res && res.value === "benar") pindahSlide(3, 4);
    else document.getElementById('err-2').classList.remove('hidden');
}

function cekSoal3() {
    const val = document.getElementById('ans-3').value.toLowerCase().trim();
    if (val === "minecraft") pindahSlide(4, 5); // Game favorit Akbar
    else document.getElementById('err-3').classList.remove('hidden');
}

function cekSoal4() {
    const res = document.querySelector('input[name="soal4"]:checked');
    if (res && res.value === "benar") pindahSlide(5, 6);
    else document.getElementById('err-4').classList.remove('hidden');
}

function cekSoal5() {
    const val = document.getElementById('ans-5').value.toUpperCase().trim();
    if (val === "SAYANG") pindahSlide(6, 7);
}

function createHeart() {
    const container = document.getElementById('heart-bg');
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 300);