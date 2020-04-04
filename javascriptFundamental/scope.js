// Javascript menggunakan function scope

var a = 1 // variabel global / window

function coba()
{
	var a // variabel local
	a = 5
}

coba()
console.log(a)