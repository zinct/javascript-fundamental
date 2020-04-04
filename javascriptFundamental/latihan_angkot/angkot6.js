function Angkot(supir, trayek, penumpang, kas)
{
	this.supir = supir
	this.trayek = trayek
	this.penumpang = penumpang
	this.kas = kas

	this.tambahPenumpang = function(namaPenumpang) {

		for (var i = 0; i < this.penumpang.length; i++) {

			if (this.penumpang[i] == undefined) {
				this.penumpang[i] = namaPenumpang
				return this.penumpang
			} else if (this.penumpang[i] === namaPenumpang) {
				alert('Nama penumpang ' + namaPenumpang + ' sudah ada!')
				return false	
			} else if (i == this.penumpang.length - 1) {
				this.penumpang.push(namaPenumpang)
				return this.penumpang				
			}

		}
	}

	this.hapusPenumpang = function(namaPenumpang, bayar) {

		if (this.penumpang.length === 0) {
			alert('Penumpang Kosong!')			
			return false
		}

		for(var i = 0; i < this.penumpang.length; i++) {
			
			if (this.penumpang[i] === namaPenumpang) {
				this.penumpang[i] = undefined
				this.kas += bayar
				return this.penumpang
			} else if (i == this.penumpang.length - 1) {
				alert('Tidak ada penumpang yang bernama ' + namaPenumpang)
				return false
			}	

		}

	}

}

var angkot1 = new Angkot('Indra Mahesa', ['Cicaheum', 'Cileunyi'], ['indra', 'mahesa', 'regi'], 0)
var angkot2 = new Angkot('Luhtfiyyah Jumannisa Firdaus', ['Antapani', 'Ciroyom'], [], 0)

