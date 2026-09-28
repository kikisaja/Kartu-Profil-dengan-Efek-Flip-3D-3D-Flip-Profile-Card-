# 🎴 3D Flip Profile Card

Kartu profil identitas interaktif berbasis web dengan animasi efek putaran 3D (*3D Flip Animation*). Pengguna dapat mengklik kartu atau tombol untuk memutar kartu sebesar 180° untuk melihat detail informasi di bagian belakang.

Proyek ini sangat bagus untuk pemula yang ingin memahami konsep **CSS 3D Transforms** dan **Class Toggling JavaScript**.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **CSS 3D Transform Properties:**
   - `perspective: 1000px;` : Memberikan efek kedalaman visual 3D pada kontainer induk.
   - `transform-style: preserve-3d;` : Memastikan elemen anak dipertahankan dalam ruang 3D.
   - `backface-visibility: hidden;` : Menyembunyikan sisi belakang elemen saat menghadap ke belakang.
   - `transform: rotateY(180deg);` : Memutar elemen secara horizontal pada sumbu Y.
2. **DOM Event Handling (`classList.toggle`):**
   Menerapkan method `toggle()` untuk mengganti status kelas CSS secara fleksibel saat terjadi event `click`.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur HTML sisi depan & belakang kartu profil
├── style.css        # Desain 3D Perspective, Flip Animation, & Neobrutalism
└── script.js        # Logika pembawaan toggle class 'flipped'
