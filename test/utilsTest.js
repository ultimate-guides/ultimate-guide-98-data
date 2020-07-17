const assert = require('chai').assert;
const utility = require('../util/utility');
const { describe, it, before } = require('mocha');
const fs = require('fs');

describe('This function will check if the fighters.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/fighters.json',
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

describe('This function will check if the fates.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/fates.json',
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

describe('This function will check if the fashions.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/fashions.json',
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

describe('This function will check if the fightsouls.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/fightsouls.json',
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

describe('This function will check if the partners.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/partners.json',
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

describe('This function will check if the recommended_runes.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/recommended_runes.json',
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

describe('This function will check if the skills.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/skills.json',
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

describe('This function will check if the skills_elements.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/skills_elements.json',
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

describe('This function will check if the strikers.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/strikers.json',
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

describe('This function will check if the weapons_awakened.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/global/fighters/weapons_awakened.json',
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

describe('This function will check if the timeLine.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/global/timeLine.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the aidbooks.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/aidbooks.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the awakened_fightsouls.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/awakened_fightsouls.json',
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

describe('This function will check if the awakenName.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/awakenName.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the elements_requirements.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/elements_requirements.json',
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
describe('This function will check if the events.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/events.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the runeName.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/runeName.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the runes.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync('./jsons/runes.json', 'utf8');
	});
	describe('Check if is valid JSON', async () => {
		it('should be true if validation Pass', () => {
			const isValid = utility.isJsonValidJSON(json);
			assert.equal(true, isValid);
		});
	});
});

describe('This function will check if the chinese_fighters.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_fighters.json',
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

describe('This function will check if the chinese_fates.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_fates.json',
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

describe('This function will check if the chinese_fightsouls.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_fightsouls.json',
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

describe('This function will check if the chinese_partners.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_partners.json',
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

describe('This function will check if the chinese_skills.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_skills.json',
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

describe('This function will check if the chinese_skills_elements.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_skills_elements.json',
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

describe('This function will check if the chinese_weapons.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/fighters/chinese_weapons.json',
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

describe('This function will check if the chinese_time_line.json file is correct', () => {
	let json;
	before(async () => {
		json = await fs.readFileSync(
			'./jsons/chinese/chinese_time_line.json',
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
