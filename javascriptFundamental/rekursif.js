// Rekursif => sebuah function yang memanggil dirinya sendiri
// Base Case => kondisi akhir dari rekursif yang menghasilkan nilai


function loop(n)
{
	if (n == 0) return

	console.log(n)
	return loop(n-1)
}

// Faktorial = 5! = 5 x 4 x 3 x 2 x 1

function faktorial(n)
{
	if (n == 0) return 1
	return n * faktorial( n - 1 ) // 5 * ( 4 * ( 3 * ( 2 * ( 1 ) ) ) )
}

console.log(faktorial(5))