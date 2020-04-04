var input = prompt('Masukan Makanan : \nContoh:\n- nasi\n- hamburger\n- sayur')
var makanan = input.toLowerCase()

switch(makanan) {
	case 'nasi':
		console.log('Makanan Sehat')
		break
	case 'hamburger':
		console.log('makanan tidak sehat')
		break
	case 'sayur':
		console.log('makanan sehat')
		break
}