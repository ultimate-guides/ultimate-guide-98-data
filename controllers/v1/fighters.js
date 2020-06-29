const fs = require('fs');
const db = require('../../util/database');

const getFighters = async (req, res, next) => {
	try {
		const query =
			'SELECT UPPER(fighter_id) as fighter_id, name, description, description_es, description_pt, contributor From chinese_weapons';
		const [fighters] = await db.execute(query);
		let masterData = [];

		for (const f of fighters) {
			let json = {
				fighter_id: f.fighter_id,
				weapon_awakened: {
					name: f.name,
					description: f.description,
					description_es: f.description_es,
					description_pt: f.description_pt,
					description_zh: null,
					contributor: f.contributor,
				},
			};
			masterData.push(json);
		}

		res.status(200).json({
			chinese_weapons_awakened: masterData,
		});
	} catch (err) {
		console.error(err);
		res.status(400).json({
			error: false,
			msg: err,
		});
	}
};

module.exports = {
	getFighters,
};
