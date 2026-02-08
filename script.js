function bukaPesan() {
    // Mencari elemen berdasarkan ID
    const kotak = document.getElementById('kotak-pesan');
    const judul = document.getElementById('pesan-utama');
    
    // Menghilangkan class 'hidden' agar pesan muncul
    kotak.classList.remove('hidden');
    
    // Mengubah teks judul
    judul.innerHTML = "Happy Valentine's Day!";
    
    // Menghilangkan tombol setelah diklik
    event.target.style.display = 'none';
}