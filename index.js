import Book from "./model/Book.js"
import add from "./service/add.js"

// inisialisasi daftar buku yang ada di awal
let daftarBuku = []
daftarBuku.push(new Book(1, 'Mencari Tinta Sejati', 'Mizan Amanah', 2019, 'James Budi'))
daftarBuku.push(new Book(2, 'Doa seorang Supir', 'Taman Taubat', 2022, 'Rowan Atkinson'))
console.log('DAFTAR BUKU AWAL \n--------\n', daftarBuku)

// tambah buku baru
let newBook = new Book(3, 'Takdir Bawang Merah', 'Hiburan Semata', 2021, 'Muhammad Iqbal')
add(daftarBuku, newBook)
console.log('TAMBAH BUKU \n--------\n', daftarBuku)