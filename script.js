// FUNGSI BARU: Untuk pindah antar slide
// Menerima dua parameter: id slide sekarang, dan id slide tujuan
function pindahSlide(currentId, nextId) {
    // 1. Ambil elemen slide yang sedang aktif sekarang
    const currentSlide = document.getElementById('slide-' + currentId);
    
    // 2. Ambil elemen slide tujuan
    const nextSlide = document.getElementById('slide-' + nextId);

    // 3. Sembunyikan slide sekarang
    // Kita hapus class 'active' dan tambahkan 'hidden'
    currentSlide.classList.remove('active');
    currentSlide.classList.add('hidden');

    // 4. Munculkan slide tujuan
    // Kita hapus class 'hidden' dan tambahkan 'active'
    nextSlide.classList.remove('hidden');
    nextSlide.classList.add('active');
}


// FUNGSI LAMA: Untuk membuka pesan di slide terakhir
function bukaPesan() {
    const kotak = document.getElementById('kotak-pesan');
    const judul = document.getElementById('pesan-utama');
    const tombol = document.getElementById('tombol-buka');
    
    // Munculkan kotak pesan
    kotak.classList.remove('hidden');
    kotak.classList.add('active'); // Tambah active biar ada animasinya
    
    // Ubah judul
    judul.innerHTML = "Happy Valentine's Day! ❤️";
    
    // Hilangkan tombolnya
    tombol.style.display = 'none';
}

function createHeart() {
    const container = document.getElementById('heart-bg');
    const heart = document.createElement('div');
    
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️'; // Kamu bisa ganti dengan ikon lain
    
    // Posisi horizontal acak (0-100% lebar layar)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Durasi animasi acak (biar tidak barengan jalannya)
    const duration = Math.random() * 3 + 2; // Antara 2 sampai 5 detik
    heart.style.animationDuration = duration + 's';
    
    // Ukuran acak
    const size = Math.random() * 15 + 10; // Antara 10px sampai 25px
    heart.style.fontSize = size + 'px';

    container.appendChild(heart);

    // Hapus elemen hati setelah animasinya selesai (biar gak menumpuk di memori)
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Jalankan fungsi createHeart setiap 300 milidetik
setInterval(createHeart, 300);