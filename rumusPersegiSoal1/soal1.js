// Import module
const rumus = require('./rumus');

// Contoh penggunaan untuk menghitung luas dan keliling
const sisiPersegi = 5;
const panjangPersegiPanjang = 8;
const lebarPersegiPanjang = 6;

const luas1 = rumus.luasPersegi(sisiPersegi);
const keliling1 = rumus.kelilingPersegi(sisiPersegi);

const luas2 = rumus.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const keliling2 = rumus.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi: ${luas1}`);
console.log(`Keliling Persegi: ${keliling1}`);
console.log(`Luas Persegi Panjang: ${luas2}`);
console.log(`Keliling Persegi Panjang: ${keliling2}`);