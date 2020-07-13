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
  <a href="https://play.google.com/store?hl=en">
<img
      alt="ultimate Guide Pro"
      src="https://www.ultimate-guides.net/assets/ug98/img/google_play.png" 
      width="32%"
    />
</a>
</div>

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
-   Others
    -   [Time Line](#Time-Line)

## List of Fighters

<img src="https://www.ultimate-guides.net/assets/ug98/img/fighters.GIF" align="right" width="32%"/>
Every fighter require **fighter_id** is a unique id will be referenced in all documents (skills, weapons, fashions, etc). This is the structure:

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

Structure:

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

Structure:

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

Structure:

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
Structure:

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

Structure:

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

## Follow us

Facebook Fan Page - https://www.facebook.com/UgKof98/

Discord - https://discord.gg/mvC8R7p

Twitter - https://twitter.com/98_guide

### Donate

If you like our work, you can donate , 2 years of work with the comunnity to made this posible.

<p align="center">  
<a href='https://ko-fi.com/G2G11VE3M' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
