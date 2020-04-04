var string1 = "Ini Adalah hari ju'mat"
var string2 = '"Gerakan Pungut Sampah"'
console.log(string1)
console.log(string2)

// Escape character pada String
var string3 = '"Gerakan Pungut Sampah" Dilaksanakan Pada Hari Jum\'at'
console.log(string3)

// Jenis jenis escape
var string4 = 'Hello\0World' // Karakter Null
var string5 = 'Hello\'World' // Karakter '
var string6 = 'Hello\"World' // Karakter "
var string7 = 'Hello\\World' // Karakter \
var string8 = 'Hello\tWorld' // Karakter tab
var string9 = 'Hello\nWorld' // Karakter newline
var string10 = 'Hello\bWorld' // Karakter backspace
var string11 = 'Hello\u00a9World' // Karakter unicode

console.log(string4)
console.log(string5)
console.log(string6)
console.log(string7)
console.log(string8)
console.log(string9)
console.log(string10)
console.log(string11)


// Concat / Penggabungan dengan string
console.log('Indra' + '\0' + 'Mahesa')
console.log('Jumlah Siswa' + '\0' + 200)

// Beberapa fungsi dari string
// .length => menghitung jumlah karakter pada string
var namaLength = 'Indra Mahesa'.length(2)
console.log(namaLength)
