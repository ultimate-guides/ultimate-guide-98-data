const assert = require('chai').assert;
const utility = require('../util/utility');
const { describe, it, before } = require('mocha');
const fs = require('fs');

describe('This function will check if the asfighters.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/allstars/fighters/asfighters.json',
			'utf8'
		);
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});