const distance = (a, b) => {
	if (typeof (a) === 'string' && typeof (b) === 'string') {
		const t = Array(b.length + 1).fill(null).map(() =>
			Array(a.length + 1).fill(null));
		for (let i = 0; i <= a.length; i += 1) {
			t[0][i] = i;
		}
		for (let j = 0; j <= b.length; j += 1) {
			t[j][0] = j;
		}
		for (let j = 1; j <= b.length; j += 1) {
			for (let i = 1; i <= a.length; i += 1) {
				var ind = 0;
				if (a[i - 1] === b[j - 1])
					ind = 0;
				else
					ind = 1;
				t[j][i] = Math.min(
					t[j][i - 1] + 1,
					t[j - 1][i] + 1,
					t[j - 1][i - 1] + ind,
				);
			}
		}
		return t[b.length][a.length];
	}
	else throw new Error('InvalidType');
};

module.exports.distance = distance
module.exports.distance = distance