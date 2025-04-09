function generateId() {
	let number = "";
	for (let index = 0; index < 10; index++) {
		const num = Math.floor(Math.random() * 10 + 1);
		number += num;
	}
	number = Number(number);
	return number;
}

export { generateId };
