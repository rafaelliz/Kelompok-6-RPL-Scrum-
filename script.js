
// Mengambil elemen dari HTML
const input = document.getElementById("inputTugas");
const tombol = document.getElementById("btnTambah");
const daftar = document.getElementById("daftarTugas");

// Menjalankan fungsi ketika tombol Tambah diklik
tombol.addEventListener("click", function () {

    // Mengambil teks dari input
    const teks = input.value.trim();

    // Mengabaikan input kosong
    if (teks === "") return;

    // Membuat elemen tugas baru
    const item = document.createElement("li");

    // Memasukkan teks ke dalam elemen tugas
    item.textContent = teks;

    // Menandai tugas selesai ketika diklik
    item.addEventListener("click", function () {
        item.classList.toggle("selesai");
    });

    // Menambahkan tugas ke dalam daftar
    daftar.appendChild(item);

    // Mengosongkan kolom input
    input.value = "";
});
