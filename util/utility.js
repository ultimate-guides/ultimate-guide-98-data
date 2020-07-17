const isJsonValidJSON = (string) => {
	try {
		JSON.parse(string);
	} catch (e) {
		return false;
	}
	return true;
};
module.exports = {
	isJsonValidJSON,
};
