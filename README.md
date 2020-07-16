# Ultimate Guide 98 Data

<!--lint disable no-literal-urls-->
<p align="center">  
    <img
      alt="Ug 98"
      src="https://www.ultimate-guides.net/assets/ug98/img/banner.png" 
    />      
</p>

<div align="center">
  <a href="https://apps.apple.com/mx/app/ultimate-guide-98/id1481396840?l=en">
    <img
      alt="ultimate Guide 98"
      src="https://www.ultimate-guides.net/assets/ug98/img/appstore.png" 
      width="32%"
    />
  <a href="https://play.google.com/store/apps/details?id=com.ultimateguides.ultimatePro">
<img
      alt="ultimate Guide Pro"
      src="https://www.ultimate-guides.net/assets/ug98/img/google_play.png" 
      width="32%"
    />
</a>
</div>

_Read this in other languages: [English](README.md), [Spanish](README.es.md)._

The propose of this repo is for everyone who wants to contribute sharing information or helping whit translation and missing content. You are free to modify all files of the App(Android/iOS), any modification will be verify before release to the real APP. I will create a list of contributors inside the app to everyone can see your names there.

## Notes

If you don't know how to use git system, don't worry you can send the modifications trough the [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) .

## How To submit a feature or Bug

Click on the [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) and search for an existing issue. Voting thumbs up on an issue will increase its priority and attention. Duplicates will eventually be closed.

If the bug / issue you want to report doesn't exist, hit "New Issue" and select from the correct option.

Be as detailed as you can and provide screenshots and any logs you may be able to gather from your device as they will greatly increase the time to a solution.

## How to contribute on a missing info, description or language

To navigate a desire section or document, see the table of content and read the rules to modify or add information.

# Table of Content

-   Fighters
    -   [List of fighters](#List-of-Fighters)
    -   [Fightsouls](#Fightsouls)
    -   [Fates](#Fates)
    -   [Partners](#Partners)
    -   [Weapons](#Weapons)
    -   [Skills](#Skills)
    -   [Skills 8 Elements (Gates)](<#Skills-8-Elements-(Gates)>)
    -   [Strikers](#Strikers)
-   Others

    -   [Time Line](#Time-Line)
    -   [Recommended Runes](#Recommended-Runes)
    -   [Follow us](#Follow-us)
    -   [Donate](#Donate)

## List of Fighters

<img src="https://www.ultimate-guides.net/assets/ug98/img/fighters.GIF" align="right" width="32%"/>

Every fighter require **fighter_id** is a unique id will be referenced in all documents (skills, weapons, fashions, etc). This is the structure of the json:

```json
{
	"fighter_id": "KYO",
	"fightsoul_id": "TIGER",
	"name": "Kyo",
	"chinese_name": "草薙京",
	"api": 13,
	"type_id": "DPS",
	"gender_id": "MALE",
	"tome_id": "SCORCHING",
	"badge_id": "FLAME",
	"status": 0,
	"striker": 1
}
```

| Key               | Description                                                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fighter_id:**   | Unique ID will be reference all the information related to the fighter.                                                                                                                                                                                                                                               |
| **fightsoul_id:** | The type of fightsoul (TIGER, TURTLE, SNAKE, BEAR, SPACE).                                                                                                                                                                                                                                                            |
| **name:**         | The name of the fighter.                                                                                                                                                                                                                                                                                              |
| **chinese_name:** | The name of the fighter in chinese (don't worry if you don't know, you can leave it at null).                                                                                                                                                                                                                         |
| **api:**          | The aptitude of the fighter (12,13,14,15), need a number here, remove the " ".                                                                                                                                                                                                                                        |
| **type_id:**      | The type of the fighter can be (DPS, GANK, TANK).                                                                                                                                                                                                                                                                     |
| **gender_id:**    | The gender of the fighter, can be (MALE , FEMALE).                                                                                                                                                                                                                                                                    |
| **tome_id:**      | The tome of the fighter , can be (SCORCHING, JUDO, KARATE, KICK, MANA, STREET, SUPER, THAI).                                                                                                                                                                                                                          |
| **badge_id:**     | The badge of the fighter, can be (BEAUTY, DAZZLING, EARTH, FLAME, GALE, OROCHI).                                                                                                                                                                                                                                      |
| **status:**       | The status mean if the fighter is under maintenance , if the value is 1 it mean YES, the information will will hide for everyone in the real APP. As you can see some of the unreleased characters are marked as 1, that's why you can't see in the main list of the App.                                             |
| **striker:**      | The striker mean if the fighter also have the information about him/her striker form. Can be 0 if not, and 1 if have , as you can see inside the detail information in each fighter you press inside the APP , you notice a bottom navigation with the striker info, if you don't see its because the **striker=0** . |

To modify or add fighters go to [fighter.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fighters.json) or if you want the chinese version [chinese_fighters.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fighters.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

---

## Fightsouls

<img src="https://www.ultimate-guides.net/assets/ug98/img/fightsouls.jpg" align="right" width="32%"/>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
{
	"fighter_id": "KYO",
	"fightsoul": {
		"name": "TIGER",
		"description": "Restore 126 Rage when ally dies. (3/4 for enemy)",
		"description_es": "Recupera 126 ira (Rage) cuando un aliado muere. (3 /4 por enemigo)",
		"description_pt": "Recupera 126 de rage quando um aliado morre (3/4 por inimigo)."
	}
}
```

| Key                 | Description                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **fighter_id:**     | Unique ID will be reference all the information related to the fighter.                                                                          |
| **name:**           | Name of the fightsoul can be (TIGER, SNAKE, TURTLE, BEAR, SPACE), try to match this name with the **fightsoul_id** inside of the fighters.json . |
| **description:**    | English description of the fightsoul, can be at any lvl you want just specify in the description.                                                |
| **description_es:** | Spanish description of the fightsoul, can be any lvl you want just specify in the description.                                                   |
| **description_pt:** | Portuguese description of the fightsoul, can be any lvl you want just specify in the description.                                                |

To modify or add fightsouls go to [fightsouls.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fightsouls.json) or if you want the chinese version [chinese_fightsouls.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fightsouls.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug. |

## Fates

<img src="https://www.ultimate-guides.net/assets/ug98/img/fates.jpeg" align="right" width="32%"/>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
{
	"fighter_id": "KYO",
	"fates": [
		{
			"bosses": "Kyo, Benimaru, Daimon",
			"attr": "ATK +20%"
		},
		{
			"bosses": "Kyo, Iori, Chizuru",
			"attr": "ATK +20%"
		},
		{
			"bosses": "Kyo, Shingo",
			"attr": "ATK +20%"
		}
	]
}
```

| Key         | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| **bosses:** | The name of the fighters separate with comas, can be any name, no need fighter_id this time. |
| **attr:**   | The benefit of complete the fighters , like ATK + 20% , HP + 25% etc.                        |

To modify or add fighters go to [fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fates.json) or if you want the chinese version [chinese_fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fates.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Partners

<img src="https://www.ultimate-guides.net/assets/ug98/img/partners.jpeg" align="right" width="32%"/>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
{
	"fighter_id": "KYO",
	"partners": {
		"partner_1": "BENIMARU",
		"partner_2": "SAISYU",
		"partner_3": "KASUMI"
	}
}
```

**partner_1, partner_2, partner_3:** Is the partner referenced with the fighter_id (The fighter_id needs to exist in the fighters.json file).

## Fashions

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/fashions.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .
Structure of the json:

```json
{
	"fighter_id": "KYO",
	"name": "Red Fire",
	"cost": null,
	"atribute_1": "ATK: +300",
	"atribute_2": "DEF: +240",
	"img_name": "fashion_kyo_1"
}
```

| Key                         | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| **name:**                   | The name of the fashion.                                        |
| **cost:**                   | The cost of the fashion in diamonds (8800 need to be a number). |
| **atribute_1, atribute_2:** | The benefits of the fashion that gives when user buy it.        |
| **img_name:**               | The name of the fashion file.                                   |

## Weapons

For modify this section use the reference of **fighter_id** .

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/weapons.JPG" width="32%"/>
</a>

Structure of the json:

```json
{
	"fighter_id": "KYO",
	"weapon_awakened": {
		"name": "Kusanagi Sword",
		"description": "Strikes a Column, burning them and reducing their Rage by 300.",
		"description_es": "Impacta a una columna quemando los enemigos y reduciendoles la ira (rage) por 300.",
		"description_pt": "Atinge uma coluna de inimigos, causando queimadura e reduzindo 300 de rage. ",
		"contributor": "Sangogrin (s5)"
	}
}
```

| Key                 | Description                                         |
| ------------------- | --------------------------------------------------- |
| **name:**           | The name of the weapon.                             |
| **description:**    | English description of the weapon(the benefits).    |
| **description_es:** | Spanish description of the weapon(the benefits).    |
| **description_pt:** | Portuguese description of the weapon(the benefits). |
| **contributor:**    | The name of the person who add or edit the weapon   |

## Skills

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
{
	"fighter_id": "KYO",
	"skills": [
		{
			"name": "Fire Ball",
			"description": "Make use of Kusanagi's bloodline to conjure up scorching flames, then strikes a single enemy with great combos with burning. Also cause burning damage for 2 rounds.",
			"description_es": "Hace uso del linaje de la sangre Kusanagi para conjurar abrasadoras llamas, luego ataca a un solo objetivo único con gran combinación en llamas. Ademas causa efecto quemadura por 2 rondas.",
			"description_pt": "Usa a sua linhagem Kusanagi para conjurar chamas ardentes e, em seguida, atingir um único inimigo com grandes combinações, causando queimaduras. Também causa dano de queimadura por 2 rodadas."
		}
	]
}
```

| Key                 | Description                                        |
| ------------------- | -------------------------------------------------- |
| **name:**           | The name of the Skill.                             |
| **description:**    | English description of the Skill(the benefits).    |
| **description_es:** | Spanish description of the Skill(the benefits).    |
| **description_pt:** | Portuguese description of the Skill(the benefits). |

To modify or add skills go to [skills.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/skills.json) or if you want the chinese version [chinese_fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_skills.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Skills 8 Elements (Gates)

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills_elements.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** . To visualize the improve of the skill add the tag`<font color='#FFA726'>`<font color='#FFA726'> `Text with color`</font>`</font>` with this everyone will see with color like the image above.

Structure of the json:

```json
"skills_elements": [
		{
			"fighter_id": "KYO",
			"skills_elements": {
				"lake": "Increases allies ATK in battle. <font color='#FFA726'>When Kyo enters the fight, if the match has Iori or Crazy Iori (ally or foe), increase own Control Resist by 30% for 2 rounds and increase initial Rage by 200.</font>",
				"lake_es": "Incrementa el ATK de los aliados. <font color='#FFA726'>Cuando Kyo esta en el campo, Si Iori o Crazy Iori (aliado u enemigo) estan en batalla, Incrementara su resistencia al control en 30% por 2 rounds e incrementara su rage inicial en 200.</font>",
				"lake_pt": "Usa a sua linhagem Kusanagi para conjurar chamas ardentes e, em seguida, atingir um único inimigo com grandes combinações, causando queimaduras. Também causa dano de queimadura por 2 rodadas. <font color='#FFA726'>Recupera 100 de Rage.</font>",
				"thunder": "Make use of Kusanagi's bloodline to conjure up scorching flames, then strikes a single enemy with great combos with burning. Also cause burning damage for 2 rounds. <font color='#FFA726'>Restore own rage by 100.</font>",
				"thunder_es": "Hace uso del linaje de la sangre Kusanagi para conjurar abrasadoras llamas, luego ataca a un solo objetivo único con gran combinación en llamas. Ademas causa efecto quemadura por 2 rondas. <font color='#FFA726'>Recupera 100 de Rage.</font>",
				"thunder_pt": "Usa a sua linhagem Kusanagi para conjurar chamas ardentes e, em seguida, atingir um único inimigo com grandes combinações, causando queimaduras. Também causa dano de queimadura por 2 rodadas. <font color='#FFA726'>Recupera 100 de Rage.</font>",
				"water": "Strikes a column, burning them and reducing their Rage by 300. <font color='#FFA726'>Reduce targets 100% recovery rage for 1 round, deal 20% additional DMG to the front row.</font>",
				"water_es": "Impacta a una columna quemando los enemigos y reduciendoles la ira (rage) por 300. <font color='#FFA726'>Los enemigos golpeados no cargaran Rage por 1 turno, 20% de daño adicional al enemigo que este en la fila delantera.</font>",
				"water_pt": "Atinge uma coluna de inimigos, causando queimadura <font color='#FFA726'>e reduzindo 300 de rage. Reduz completamente a recarga de rage do inimigo atingido por 1 round; causa 20% de dano adicional ao inimigo atingido que estiver na linha de frente.</font>"
			}
		}
		]
```

| Key             | Description                                    |
| --------------- | ---------------------------------------------- |
| **lake:**       | English description of the lake element.       |
| **lake_es:**    | Spanish description of the lake element.       |
| **lake_pt:**    | Portuguese description of the lake element.    |
| **thunder:**    | English description of the thunder element.    |
| **thunder_es:** | Spanish description of the thunder element.    |
| **thunder_pt:** | Portuguese description of the thunder element. |
| **water:**      | English description of the water element.      |
| **water_es:**   | Spanish description of the water.              |
| **water_pt:**   | Portuguese description of the water.           |

To modify or add skills_elements go to [skills_elements.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/skills_elements.json) or if you want the chinese version [chinese_skills_elements.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_skills_elements.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Strikers

For modify this section use the reference of **fighter_id** .

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/strikers.jpeg" width="32%"/>
</a>

Structure of the json:

```json
"strikers": [
		{
			"fighter_id": "KYO",
			"striker_info": {
				"trigger_condition": "Round 1 onwards, will trigger Aid when 2 of your fighters trigger skill within each round, cooldwn for 2 rounds.",
				"trigger_condition_es": null,
				"trigger_condition_pt": null,
				"green_1": "Aid Skill will also cause burning, losing 2.5% HP, lasts 2 rounds",
				"green_1_es": "",
				"green_1_pt": "",
				"blue_1": "Burning DMG effect increased to 3.5%",
				"blue_1_es": "",
				"blue_1_pt": "",
				"purple_1": "Burning effect decrease target 10% rage recovery, 2 rounds",
				"purple_1_es": "",
				"purple_1_pt": "",
				"purple_2": "Burning effect increase to 3 rounds",
				"purple_2_es": "",
				"purple_2_pt": "",
				"orange_1": "Burning DMG increased to 4.5%",
				"orange_1_es": "",
				"orange_1_pt": "",
				"orange_2": "Burning decrease rage recovery effect increased to 20%",
				"orange_2_es": "",
				"orange_2_pt": "",
				"orange_3": "Burning effect increased to 4 rounds",
				"orange_3_es": "",
				"orange_3_pt": "",
				"red": "",
				"red_es": "",
				"red_pt": "",
				"red_1": "",
				"red_1_es": "",
				"red_1_pt": ""
			}
		}]
```

| Key                       | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **trigger_condition:**    | English description of the condition too activate the striker (aid).    |
| **trigger_condition_es:** | Spanish description of the condition too activate the striker (aid).    |
| **trigger_condition_pt:** | Portuguese description of the condition too activate the striker (aid). |
| **green_1:**              | English description of the green promote.                               |
| **green_1_es:**           | Spanish description of the green promote.                               |
| **green_1_pt:**           | Portuguese description of the green promote.                            |
| **blue_1:**               | English description of the blue + 1 promote.                            |
| **blue_1_es:**            | Spanish description of the blue + 1 promote.                            |
| **blue_1_pt:**            | Portuguese description of the blue + 1 promote.                         |
| **purple_1:**             | English description of the purple + 1 promote.                          |
| **purple_1_es:**          | Spanish description of the purple + 1 promote.                          |
| **purple_1_pt:**          | Portuguese description of the purple + 1 promote.                       |
| **purple_2:**             | English description of the purple + 2 promote.                          |
| **purple_2_es:**          | Spanish description of the purple + 2 promote.                          |
| **purple_2_pt:**          | Portuguese description of the purple + 2 promote.                       |
| **orange_1:**             | English description of the orange + 1 promote.                          |
| **orange_1_es:**          | Spanish description of the orange + 1 promote.                          |
| **orange_1_pt:**          | Portuguese description of the orange + 1 promote.                       |
| **orange_2:**             | English description of the orange + 2 promote.                          |
| **orange_2_es:**          | Spanish description of the orange + 2 promote.                          |
| **orange_2_pt:**          | Portuguese description of the orange + 2 promote.                       |
| **orange_3:**             | English description of the orange + 3 promote.                          |
| **orange_3_es:**          | Spanish description of the orange + 3 promote.                          |
| **orange_3_pt:**          | Portuguese description of the orange + 3 promote.                       |
| **red:**                  | English description of the red promote.                                 |
| **red_es:**               | Spanish description of the red promote.                                 |
| **red_pt:**               | Portuguese description of the red promote.                              |
| **red_1:**                | English description of the red + 1 promote.                             |
| **red_1_es:**             | Spanish description of the red + 1 promote.                             |
| **red_1_pt:**             | Portuguese description of the red + 1 promote.                          |

To modify or add strikers go to [strikers.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/strikers.json) or if you want the chinese version [chinese_strikers.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_strikers.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Time Line

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/time_line.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
"time_line": [{
	"title": "TIME LIMITED CHEST",
	"fighter_id": "MAXIMA_XIV",
	"date": "07/04/2020"
},
{
	"title": "TIME LIMITED CHEST",
	"fighter_id": "CHANG_XIV",
	"date": "06/05/2020"
},
{
	"title": "TIME LIMITED CHEST",
	"fighter_id": "CHOI_XIV",
	"date": "02/06/2020"
}]
```

| Key             | Description                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title:**      | The title of the event if was time Limited or other event.                                                                                                        |
| **fighter_id:** | The fighter_id where need to get all the info from the fighters.json or chinese_fighters.json, fighter_id need to exist in that files before put in the time Line |
| **date:**       | The release date of the time limited chest or other events                                                                                                        |

To modify or add Time Line go to [time_line.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/time_line.json) or if you want the chinese version [chinese_time_line.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_time_line.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Recommended Runes

<img src="https://www.ultimate-guides.net/assets/ug98/img/recommended_runes.GIF" align="right" width="32%"/>

For modify this section use the reference of **fighter_id** .

Structure of the json:

```json
"recommended_runes": [
		{
			"fighter_id": "KYO",
			"runes": [
				{
					"rune_id": "KILLING",
					"description": "",
					"description_es": "",
					"desceiption_pt": ""
				},
				{
					"rune_id": "GODS",
					"description": "",
					"description_es": "",
					"desceiption_pt": ""
				}
			]
		}]
```

| Key                 | Description                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **rune_id:**        | The id of the Rune can be (KILLING, GODS, WOLVES, CHAOS, BOLLING, DRAGON, EARTH, HEART ). |
| **description:**    | The English Description of why is good for the fighter                                    |
| **description_es:** | The Spanish Description of why is good for the fighter                                    |
| **description_pt:** | The Portuguese Description of why is good for the fighter                                 |

To modify or add Recommended runes go to [recommended_runes.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/recommended_runes.json) or if you want the chinese version [chinese_recommended_runes.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_recommended_runes.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Follow us

Facebook Fan Page - https://www.facebook.com/UgKof98/

Discord - https://discord.gg/mvC8R7p

Twitter - https://twitter.com/98_guide

### Donate

If you like our work, you can donate , 2 years of work with the comunnity to made this posible.

<p align="center">
<a href='https://ko-fi.com/G2G11VE3M' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
