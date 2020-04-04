// ----------------------------------------------
console.log('Aplikasi Penumpang Angkot')
console.log('-------------------------')
// ----------------------------------------------

var penumpang = ['indra', 'regi']

var tambahPenumpang = function(namaPenumpang, penumpang) {

	if (penumpang.length == 0) {
		penumpang.push(namaPenumpang)
		return penumpang
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			
			if (penumpang[i] == undefined) {
				penumpang[i] = namaPenumpang
				return penumpang
			} else if (penumpang[i] == namaPenumpang){
				return 'Nama penumpang sudah ada.'
			}
			else if ( i == penumpang.length - 1 ){
				penumpang.push(namaPenumpang)
				return penumpang
			}
		}		
	}


}

var hapusPenumpang = function(namaPenumpang, penumpang) {

	namaPenumpang = namaPenumpang.toLowerCase()

	if (penumpang.length == 0) {
		return 'Penumpang kosong.'
	}

	for (var i = 0; i < penumpang.length; i++) {

		if (penumpang[i] == namaPenumpang) {
			penumpang[i] = undefined
			return penumpang
		} else if (!penumpang.includes(namaPenumpang)){
			return 'tidak ada penumpang bernama ' + namaPenumpang
		}

	}

}

console.log(penumpang)