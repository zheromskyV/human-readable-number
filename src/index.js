module.exports = function toReadable (number) {
	
	const numToNumbers = (num) => {
		let res = [];
		while (Math.floor(num)) {
			res.push(Math.floor(num % 10));
			num /= 10;
		}
		return res.reverse();
	}

	const numToString = (num) => {
		let s = "";
		switch (num) {
			case 1:
				s = "one";
				break;
			case 2:
				s = "two";
				break;
			case 3:
				s = "three";
				break;
			case 4:
				s = "four";
				break;
			case 5:
				s = "five";
				break;
			case 6:
				s = "six";
				break;
			case 7:
				s = "seven";
				break;
			case 8:
				s = "eight";
				break;
			case 9:
				s = "nine";
				break;
			default:
				break;
		}
		return s;
	};
	
	if (number === 0) {
		return "zero";
	}

	let res = "";
	let nums = numToNumbers(number);

	if (nums.length === 3) {
		res = numToString(nums.shift());
		res += " hundred ";
	}
	if (nums.length === 2) {
		let n = nums[0];
		let s = "";
		switch (n) {
			case 2:
				s = "twenty";
				break;
			case 3:
				s = "thirty";
				break;
			case 4:
				s = "forty";
				break;
			case 5:
				s = "fifty";
				break;
			case 6:
				s = "sixty";
				break;
			case 7:
				s = "seventy";
				break;
			case 8:
				s = "eighty";
				break;
			case 9:
				s = "ninety";
				break;
			case 0:
				break;
			default:
				s = "UNDEF";
				break;
		}
		if (s === "UNDEF") {
			let tale = "";
			let x = nums[0] * 10 + nums[1];
			switch (x) {
				case 10:
					tale = "ten";
					break;
				case 11:
					tale = "eleven";
					break;
				case 12:
					tale = "twelve";
					break;
				case 13:
					tale = "thirteen";
					break;
				case 14:
					tale = "fourteen";
					break;
				case 15:
					tale = "fifteen";
					break;
				case 16:
					tale = "sixteen";
					break;
				case 17:
					tale = "seventeen";
					break;
				case 18:
					tale = "eighteen";
					break;
				case 19:
					tale = "nineteen";
					break;
				default:
					tale = "UNDEF";
					break;
			}
			res += tale;

			return res.trim();

		} else {
			if (s !== "") {
				res += s;
				res += " ";
			}
			nums.shift();
		}
	}
	if (nums.length === 1) {
		res += numToString(nums[0]);
	}

	return res.trim();
}
