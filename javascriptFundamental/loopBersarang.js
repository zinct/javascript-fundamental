var content = ''
for(var y = 1; y <= 10; y++) {
	for(var x = y; x <= 10; x++) {
		content += '*'
	}
	content += '\n'
}

console.log(content)