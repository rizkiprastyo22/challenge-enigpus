import Book from "./model/Book.js"
import add from "./service/add.js"
import getAll from "./service/getAll.js"
import searchByTitle from "./service/searchByTitle.js"

// inisialisasi daftar buku yang ada di awal
let daftarBuku = []
daftarBuku.push(new Book(1, 'Mencari Tinta Sejati', 'Mizan Amanah', 2019, 'James Budi'))
daftarBuku.push(new Book(2, 'Doa Seorang Supir', 'Taman Taubat', 2022, 'Rowan Atkinson'))
console.log('DAFTAR BUKU AWAL \n--------\n', daftarBuku)

// tambah buku baru
let newBook = new Book(3, 'Takdir Bawang Merah', 'Hiburan Semata', 2021, 'Muhammad Iqbal')
add(daftarBuku, newBook)
console.log('TAMBAH BUKU \n--------\n', daftarBuku)

// tampil buku dalam array
console.log('DAFTAR BUKU SAAT INI \n--------\n', getAll(daftarBuku))

// searchByTitle
let findBook = searchByTitle(daftarBuku, 'Doa Seorang Supir')
console.log('BUKU DITEMUKAN \n--------\n', findBook)