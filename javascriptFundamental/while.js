// While

// Cara deklarasi while
// while ( konidisi ) {
// 		assigment        => jika kondisi bernilai true assigment akan berjalan trus
// }

// Jenis while
// - While infinity loop
// 
// while (true) {
//		console.log('infinity loop') 
// } 

// - While Dihentikan oleh user

var ulang = true
while(ulang){
	console.log('Hello world')
	ulang = confirm('Ulang lagi?')
} 

// - WHile dihentikan oleh program

var jumlahUlang = 1
while(jumlahUlang <= 10) {
	console.log('Hello world',jumlahUlang + 'x')
	jumlahUlang++
}

