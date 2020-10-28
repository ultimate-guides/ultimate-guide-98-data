$('#data').click(function () {
	$('<a />', {
		download: 'data.json',
		href:
			'data:application/json,' +
			encodeURIComponent(JSON.stringify($(this).data().obj)),
	})
		.appendTo('body')
		.click(function () {
			$(this).remove();
		})[0]
		.click();
});

function downloadObjectAsJson(exportObj, exportName) {
	var dataStr =
		'data:text/json;charset=utf-8,' + encodeURIComponent(exportObj);
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute('href', dataStr);
	downloadAnchorNode.setAttribute('download', exportName + '.json');
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}

$('#generate').click(function () {
	var str = $('#textareaEvents').val();
	var myre = /^[\n$]+/gm;
	var bStr = str.replace(myre, '');
	var events = bStr.split('\n');

	datosIndividual = [];
	datos = [];
	cont = 0;

	obj = {
		day: 0,
		dayEnd: 0,
		description: '',
		month: '',
		month_id: 0,
		name: '',
		eveimgurl: '',
	};

	var temp = [''];
	var x = 0;
	var eventsSize = events.length;
	for (var i = 0; i < eventsSize; i++) {
		if (events[i].trim() != '') {
			temp[x] = events[i];
			x++;
		}
	}

	// temp = temp.join('\n');

	temp.forEach(function (element) {
		if (element != '.') {
			switch (cont) {
				case 0:
					d = element.split('. ');
					obj.name = d[0] + '. ';
					if (obj.name.includes('Tome Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_tome_exange.png';
					} else if (obj.name.includes('Badge Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_badge_exchange.png';
					} else if (obj.name.includes('Minigame - Seal Orochi')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_seal_orochi.png';
					} else if (obj.name.includes('Promotion Gem Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_promotion_gem_exchange.png';
					} else if (obj.name.includes('Promotion Gems Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_promotion_gem_exchange.png';
					} else if (obj.name.includes('Shermie Adventure')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_ShermiAdv.png';
					} else if (obj.name.includes('Team Battle')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_clone.png';
					} else if (obj.name.includes('Esoteric Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_esoteric_exchange.png';
					} else if (obj.name.includes('Fashion Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Fashion_Pack.png';
					} else if (
						obj.name.includes('Draw Esoteric Stone for rewards')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_draw_esoteric.png';
					} else if (
						obj.name.includes('ULT Esoteric Stone Limited Exchange')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_ULT_Esoteric_Chest.png';
					} else if (
						obj.name.includes('Small Recharge for Resources')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Single_Top_Up.png';
					} else if (obj.name.includes('Pop Balloons')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_pop_balloons.png';
					} else if (obj.name.includes('Limited Gift Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Limited_Gift_Pack.png';
					} else if (obj.name.includes('Work Benefits')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_task_rewards.png';
					} else if (
						obj.name.includes('Refine Blessing for Rewards')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_refine_blessing.png';
					} else if (obj.name.includes('Fighter Fashion Sale')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_rare_fashion_exchange.png';
					} else if (obj.name.includes('Aid Pack Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_aid_pack.png';
					} else if (obj.name.includes('Wishing Tree')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_wishing_tree.png';
					} else if (obj.name.includes('Club Lucky Bag Discount')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_club_lucky_bag.png';
					} else if (obj.name.includes('Club Shopping Spree')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_chooping.png';
					} else if (obj.name.includes('Rewards for Midas Touch')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_midas_touch.png';
					} else if (obj.name.includes('Midas Touch Double')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_midas_touch.png';
					} else if (obj.name.includes('Double SP')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_sp_double.png';
					} else if (obj.name.includes('EXP Rush')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_EXP_Rush.png';
					} else if (obj.name.includes('Rewards for Arena Points')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_arena_points.png';
					} else if (obj.name.includes('Fighter Fragment Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_frag_exchange.png';
					} else if (obj.name.includes('Resource Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_frag_exchange.png';
					} else if (obj.name.includes('Time-Limited Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_time_limited_exchange.png';
					} else if (obj.name.includes('Egg Frenzy')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_eggs.png';
					} else if (obj.name.includes('Mini game-Aircraft')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Aircraft_Game.png';
					} else if (obj.name.includes('Gold Rush')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_gold_rush.png';
					} else if (obj.name.includes('VIP Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_VIP_pack.png';
					} else if (obj.name.includes('Super Scratcher')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_super_scratcher.png';
					} else if (obj.name.includes('Fight Recharge Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_recharge.png';
					} else if (obj.name.includes('FightSoul Essence Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fightsoul_essence.png';
					} else if (obj.name.includes('Artifact Source Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_artifact.png';
					} else if (obj.name.includes('Ash Secret Garden')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Secret_Garden.png';
					} else if (
						obj.name.includes('Double Gold in Trial Hidden Safe')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_double_gold_trial.png';
					} else if (obj.name.includes('Fighter Equipment Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_equipment.png';
					} else if (obj.name.includes('Fighter Upgrade Pack')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_upgrade.png';
					} else if (obj.name.includes('Time-limited Chest')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_time_limited_chest.png';
					} else if (obj.name.includes('Spend for Rewards')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Spend_rewards.png';
					} else if (obj.name.includes('Slot Machine')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_slot_machine.png';
					} else if (obj.name.includes('2048 Challenge')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_2048.png';
					} else if (obj.name.includes('Minigame Eat Buns')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_eat_buns.png';
					} else if (obj.name.includes('Campaign Reward')) {
						if (obj.name.includes('Doubled' || 'doubled')) {
							obj.eveimgurl =
								'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_double_campaign.png';
						} else {
							obj.eveimgurl =
								'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_campaing_master_abyss.png';
						}
					} else if (obj.name.includes('SP on Sale')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_sp.png';
					} else if (obj.name.includes('Login for Gifts')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_gift_login.png';
					} else if (obj.name.includes('Mystic Store')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_mystic_store.png';
					} else if (
						obj.name.includes('1 of 4 Fighter Fragment Pack')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fighter_fragment.png';
					} else if (
						obj.name.includes(
							'1 of 4 Fighter Awaken Weapon Frag Pack'
						)
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_weapon.png';
					} else if (
						obj.name.includes('Open Equipment Chests for Rewards')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_equipment_chest.png';
					} else if (obj.name.includes('Equipment Frag Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_equipment_frag_exchange.png';
					} else if (obj.name.includes('Awaken Fragment Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_equipment_frag_exchange.png';
					} else if (
						obj.name.includes('First x10 Equipment Chest 50% off')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_equipment_chest.png';
					} else if (obj.name.includes('Aid Pack Sale')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_aid_pack.png';
					} else if (obj.name.includes('Task Rewards')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_task_rewards.png';
					} else if (obj.name.includes('Single Top-up')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_Single_Top_Up.png';
					} else if (obj.name.includes('Wheel of Fortune')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_wheel_fortune.png';
					} else if (obj.name.includes('Campaign Master')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_campaing_master_main.png';
					} else if (obj.name.includes('Tower Drop')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_tower.png';
					} else if (obj.name.includes('Elite Campaign')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_campaing_master_elite.png';
					} else if (obj.name.includes('Female Fighter')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_female.png';
					} else if (obj.name.includes('Defense War')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_defense_war.png';
					} else if (obj.name.includes('Cuisine' || 'Cousine')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_cousine.png';
					} else if (obj.name.includes('Mirage Challenge')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_mirage.png';
					} else if (obj.name.includes('Egg Machine')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_weapon_egg.png';
					} else if (obj.name.includes('Rewards for Trial Points')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_trial_point.png';
					} else if (
						obj.name.includes(
							'Ultimate Trials, Level Bonus Rewards'
						)
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_trial_point.png';
					} else if (obj.name.includes('Couisine')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_cousine.png';
					}
					//Singapur Events
					else if (obj.name.includes('Gene Converter')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_gene_conventer.png';
					} else if (obj.name.includes('Flash Sale')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_flash_sale.png';
					} else if (obj.name.includes('EXP Challenge Bonus')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_EXP_Rush.png';
					} else if (obj.name.includes('Lucky Draw')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_lucky_draw.png';
					} else if (obj.name.includes('Rare Fashion Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_rare_fashion_exchange.png';
					} else if (obj.name.includes('Town Gift Giveaway')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_town_gift.png';
					} else if (obj.name.includes('Item Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_item_exchange.png';
					} else if (obj.name.includes('Biography Challenge Gift')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_biography.png';
					} else if (obj.name.includes('Diamonds for Gifts')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_diamond_gifts.png';
					} else if (obj.name.includes('Recharge for Gifts')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_recharge.png';
					} else if (obj.name.includes('Charm Competition')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_charm_constest.png';
					} else if (obj.name.includes('Rune Converter')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_rune_converter.png';
					} else if (obj.name.includes('Hot Runes')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_rune_converter.png';
					} else if (obj.name.includes('Fortune Frog')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_fortune_frog.png';
					} else if (
						obj.name.includes('Gifts from the Ultimate Trial')
					) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_gifts_trial.png';
					} else if (obj.name.includes('FightSoul Wish')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_FS_wish.png';
					} else if (obj.name.includes('Fortune Cat')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_slot_machine.png';
					} else if (obj.name.includes('Aid Doll Machine')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_aid_doll_machine.png';
					} else if (obj.name.includes('Aid Resource Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_aid_bless.png';
					} else if (obj.name.includes('Equip Nucleus Sale')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_nucleus.png';
					} else if (obj.name.includes('Equip Nucleus Exchange')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_nucleus.png';
					} else if (obj.name.includes('Small Recharge')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_small_recharge.png';
					} else if (obj.name.includes('Soulcase')) {
						obj.eveimgurl =
							'https://www.mxl-apps.com/ugkof98api_staging/api/v1/../../assets/images/events/event_soulcase.png';
					} else obj.eveimgurl = '';
					break;
				case 1:
					element = element.replace('~  ', '~ ');
					d = element.split(': ');
					d = d[1].split(' ~ ');
					dayArray = d[0].split(' ');
					obj.day = parseInt(dayArray[1].slice(0, -1));
					//    obj.day = d[0]
					dayEndArray = d[1].split(' ');
					obj.dayEnd = parseInt(dayEndArray[1].slice(0, -1));
					//obj.dayEnd = d[1]
					mes = d[0].split(' ');

					if (mes[0].includes('Jan')) obj.month_id = 1;
					else if (mes[0].includes('Feb')) obj.month_id = 2;
					else if (mes[0].includes('Mar')) obj.month_id = 3;
					else if (mes[0].includes('Apr')) obj.month_id = 4;
					else if (mes[0].includes('May')) obj.month_id = 5;
					else if (mes[0].includes('Jun')) obj.month_id = 6;
					else if (mes[0].includes('Jul')) obj.month_id = 7;
					else if (mes[0].includes('Aug')) obj.month_id = 8;
					else if (mes[0].includes('Sep')) obj.month_id = 9;
					else if (mes[0].includes('Oct')) obj.month_id = 10;
					else if (mes[0].includes('Nov')) obj.month_id = 11;
					else if (mes[0].includes('Dec')) obj.month_id = 12;

					obj.month = mes[0];
					console.log('Mes:' + obj.month);
					break;
				case 3:
					d = element.split(': ');
					obj.description = d[1];
					break;
				default:
					break;
			}
			cont++;
		} else {
			datos.push(obj);
			datosIndividual = [];
			cont = 0;
			obj = {
				day: 0,
				dayEnd: 0,
				description: '',
				month_id: 0,
				month: '',
				name: '',
				eveimgurl: '',
			};
		}
	});
	console.log(datos);
	// jsonFinal = [];
	formatJson = {
		date: 180120000,
		events: datos,
	};

	// formatJson.events = datos;

	// jsonFinal.push(formatJson);

	var myJSON = JSON.stringify(formatJson);
	var api_json = JSON.stringify(datos);
	// $.ajax({
	// 	type: 'POST',
	// 	url:
	// 		'https://www.mxl-apps.com/ugkof98api_staging/api/v2/data/events?data[token]=8fXgPpvhpt',
	// 	data: api_json,
	// 	dataType: 'json',
	// 	success: function (response) {
	// 		if (!response.error) {
	// 			console.log('Success Post on Staging');
	// 			alert(response.msg);
	// 			// toastr.success(response.msg)
	// 		} else {
	// 			console.log('Error Post on Stating');
	// 		}
	// 	},
	// });
	$('#textareaEvents').val(myJSON);
	// console.log('JSON FINAL');
	// console.log(myJSON);
	// downloadObjectAsJson(myJSON, 'events_json');
	// var myJSON = JSON.stringify(datos);
	// console.log(myJSON);
	// downloadObjectAsJson(myJSON, 'events_json');
});

function funcionSuperChingonadelAngelayWey() {
	datosIndividual = [];
	datos = [];
	cont = 0;

	obj = {
		day: 0,
		dayEnd: 0,
		description: '',
		month: 0,
		name: '',
	};

	$('.tab01 p').each(function (i, e) {
		if ($(this)[0].outerHTML != '<p>.</p>') {
			switch (cont) {
				case 0:
					d = $(this)[0].innerText.split('. ');
					obj.name = d[0] + '. ' + d[1];
					break;
				case 1:
					d = $(this)[0].innerText.split(': ');
					d = d[1].split(' ~ ');
					dayArray = d[0].split(' ');
					obj.day = parseInt(dayArray[1].slice(0, -1));
					//    obj.day = d[0]
					dayEndArray = d[1].split(' ');
					obj.dayEnd = parseInt(dayEndArray[1].slice(0, -1));
					//obj.dayEnd = d[1]
					mes = d[0].split(' ');
					if (mes[0] == 'February') obj.month = 2;
					break;
				case 3:
					d = $(this)[0].innerText.split(': ');
					obj.description = d[1];
					break;
				default:
					break;
			}
			cont++;
		} else {
			datos.push(obj);
			datosIndividual = [];
			cont = 0;
			obj = {
				day: 0,
				dayEnd: 0,
				description: '',
				month: 0,
				name: '',
			};
		}
	});
	var myJSON = JSON.stringify(datos);
	console.log(myJSON);
}
