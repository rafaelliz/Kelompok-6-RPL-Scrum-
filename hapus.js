
const daftarHapus = document.getElementById("daftarTugas");

// Klik dua kali pada tugas untuk menghapusnya
daftarHapus.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
