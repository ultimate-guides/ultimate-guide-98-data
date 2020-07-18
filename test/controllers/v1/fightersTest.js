const assert = require('chai').assert;
const { describe, it, before } = require('mocha');
const utility = require('../../../util/utility');
const fs = require('fs');

describe('This function will check if the fightsouls.json contains valid names', () => {
	let fightosulsJson;
	before(async () => {
		fightosulsJson = await fs.readFileSync(
			'./jsons/global/fighters/fightsouls.json',
			'utf8'
		);
	});
	describe('Check if is valid JSON and Valid Fightsoul Name', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(fightosulsJson);
			assert.equal(true, isValid);
			const jsonData = JSON.parse(fightosulsJson);
			for (const fightsoul of jsonData.fightsouls) {
				const isValidName = utility.isValidFightsoul(
					fightsoul.fightsoul.name
				);
				assert.equal(true, isValidName);
			}
		});
	});
});
