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