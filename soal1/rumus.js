// Menghitung luas persegi
function luasPersegi(sisi) {
  return sisi * sisi;
}

// Menghitung keliling persegi
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

// Menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// Export fungsi-fungsi agar bisa digunakan di file lain
module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
};
