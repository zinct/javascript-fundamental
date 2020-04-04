var jumlahAngkot = 10
var angkotBeroperasi = 6
var noAngkot = 1

while(noAngkot <= angkotBeroperasi) {
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
	noAngkot++
}

for(noAngkot = noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')	
}