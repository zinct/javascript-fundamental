var persetujuan = confirm('Selamat Datang DI Aplikasi Suit Jawa \nKlik Oke Untuk Melanjutkan');


if (persetujuan == true) {

	while (persetujuan) {

		var player = prompt('Pilih Karakter : Gajah, Orang, Semut').toLowerCase();
		var computer = Math.floor(Math.random() * 10);

		if (computer <= 4) {
			computer = 'gajah';
		} else if (computer <= 8) {
			computer = 'orang';	
		} else if (computer >=8) {
			computer = 'semut'
		}

		var hasil;

		if (player == computer) {
			hasil = 'PERMAINAN SERI!';
		} else if (player == 'gajah') {
			if (computer == 'orang') {
				hasil = 'ANDA MENANG!';
			} else {
				hasil = 'ANDA KALAH!';
			}
		} else if (player == 'orang') {
			if (computer == 'semut') {
				hasil = 'ANDA MENANG!';
			} else {
				hasil = 'ANDA KALAH!';
			}
		} else if (player == 'semut') {
			if (computer == 'gajah') {
				hasil = 'ANDA MENANG!';
			} else {
				hasil = 'ANDA KALAH!';
			}
		} else {
			alert('Oppsss... Anda Salah Memasukan Format \nFormat Berupa : Gajah, Orang, Semut');
			
		}

		alert('Player : ' + player + '\nComputer : ' + computer + '\n\n' + hasil);
		persetujuan = confirm('Bermain Lagi?');


	}
}


alert('Permainan Telah Berakhir');