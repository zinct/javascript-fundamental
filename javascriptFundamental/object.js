// Object => kumpulan nilai yang memiliki nama
// "In Javascript, Object Are King, If You Understand Object, You Understand Javascript"

// Istilah dalam object : 
// Variabel didalam object => properti
// Function didalam object => method

var siswa = {
	nama : 'Indra Mahesa', // Bisa menyimpan variabel di dalam object
	jurusan : 'Rekayasa Perangkat Lunak',
	nilai : [80, 90, 95], // bisa menyimpan array di dalam object
	alamat : { 
		kota : 'Bandung', // bisa menyimpan object di dalam object
		provinsi: 'Jawa Barat'
	},
	motto : function(string) { // bisa menyimpan function di dalam object
		console.log(string)
	}
}

// Membuat Object

// Object Literal
var siswa1 = {
	nama: 'Indra Mahesa',
	jurusan: 'Rekayasa Perangkat Lunak'
}

var siswa2 = {
	nama: 'Luthfiyyah Jumannisa Firdaus',
	jurusan: 'Desain Komunikasi Visual'
}

console.log(siswa1)
console.log(siswa2)

// Function Declaration
function tambahSiswa(nama, jurusan)
{
	var siswa = {}
	siswa.nama = nama
	siswa.jurusan = jurusan
	return siswa
}

var siswa3 = tambahSiswa('Regi Sukma', 'Rekayasa Perangkat Lunak')

console.log(siswa3)

// Constructor
function Siswa(nama, jurusan)
{
	this.nama = nama
	this.jurusan = jurusan
}

var siswa4 = new Siswa('Daffa Fadhil', 'Rekayasa Perangkat Lunak')
console.log(siswa4)

