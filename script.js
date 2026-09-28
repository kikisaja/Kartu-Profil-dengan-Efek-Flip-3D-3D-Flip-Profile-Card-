// --- 1. AMBIL ELEMEN DOM ---
const flipCard = document.getElementById("flip-card");
const btnFlip = document.getElementById("btn-flip");

// --- 2. FUNGSI UNTUK MEMUTAR KARTU ---
function toggleFlip() {
    // Menambah/menghapus kelas 'flipped' pada elemen kartu
    flipCard.classList.toggle("flipped");
}

// --- 3. EVENT LISTENERS ---
// Putar kartu saat elemen kartu diklik langsung
flipCard.addEventListener("click", toggleFlip);

// Putar kartu saat tombol di bagian bawah diklik
btnFlip.addEventListener("click", toggleFlip);
