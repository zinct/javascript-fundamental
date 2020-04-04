// Refactoring => membuat program supaya lebih efisien
// - Readibilty => mudah dipahami oleh orang lain saat bekerja dengan team
// - DRY (Dont repeat yourself) => jangan mengulangi
// - Testability => penulisan kode agar mudah saat pengujian
// - Perfomance => supaya pengalokasian memory yang efektif
// - Maintainability => supaya mudah dikelola / dikembangkan

function hitungVolume(a, b) // nama fungsi harus mudah dipahami / readibility
{
	// var volume1 => dihapus / Perfomance
	// var volume2 => dihapus / Perfomance
	// var hasil => dihapus / Perfomance

	// volume1 = a * a * a => dihapus / Perfomance
	// volume2 = b * b * b => dihapus / Perfomance

	// hasil = a * a * a + b * b * b => dihapus / Perfomance

	return a * a * a + b * b * b
}

console.log(hitungVolume(8, 3))