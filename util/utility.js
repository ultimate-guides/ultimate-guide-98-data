const isJsonValidJSON = (string) => {
	try {
		JSON.parse(string);
	} catch (e) {
		return false;
	}
	return true;
};
const isValidFightsoul = (name) => {
	if (
		name == 'SNAKE' ||
		name == 'TIGER' ||
		name == 'TURTLE' ||
		name == 'BEAR' ||
		name == 'SPACE' ||
		name == null
	) {
		return true;
	} else {
		return false;
	}
};
module.exports = {
	isJsonValidJSON,
	isValidFightsoul,
};
