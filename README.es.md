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

_Lee esto en otros lenguajes: [Ingles](README.md), [Español](README.es.md)._

El proposito de este repositorio es para todos los que quieran contribuir compartiendo información o ayudando con la traducción y el contenido faltante. Pueden modificar todos los archivos de la aplicación (Android / iOS), cualquier modificación se verificará antes de su lanzamiento a la aplicación real. Creare una lista de contribuyentes dentro de la aplicación para que todos puedan ver sus nombres ahi.

## Notas

Si no sabes cómo usar el sistema git, no te preocupes, puedes enviar las modificaciones a través del [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) .

## Como enviar una mejora o subir un Bug

Presiona en [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) y busca un problema existente. Votar con aprobación sobre un tema aumentará su prioridad y atención. Los duplicados eventualmente se cerrarán.

Si el error / problema que desea informar no existe, presione "New Issue" y seleccione la opción correcta.

Sea lo más detallado posible y proporcione capturas de pantalla y todos los registros que pueda recopilar de su dispositivo, ya que aumentarán en gran medida el tiempo para llegar a una solución.

## Cómo contribuir en la falta de información, descripción o idioma

Para navegar por una sección o documento que desee, vea la tabla de contenido y lea las reglas para modificar o agregar información.

# Table of Content

-   Fighters
    -   [List of fighters](#List-of-Fighters)
    -   [Fightsouls](#Fightsouls)
    -   [Fates](#Fates)
    -   [Partners](#Partners)
    -   [Weapons](#Weapons)
    -   [Skills](#Skills)
    -   [Skills 8 Elements (Gates)](<#Skills-8-Elements-(Gates)>)
-   Others

    -   [Time Line](#Time-Line)
    -   [Recommended Runes](#Recommended-Runes)
    -   [Follow us](#Follow-us)
    -   [Donate](#Donate)

## List of Fighters

<img src="https://www.ultimate-guides.net/assets/ug98/img/fighters.GIF" align="right" width="32%"/>

Cada luchador requiere ** fighter_id ** es una identificación única que se hará referencia en todos los documentos (skills, weapons, fashions, etc).

Estructura:

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

| Key               | Description                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fighter_id:**   | La identificación única hará referencia a toda la información relacionada con el luchador.                                                                                                                                                                                                                                                                                 |
| **fightsoul_id:** | Tipo de Fightsoul puede ser (TIGER, TURTLE, SNAKE, BEAR, SPACE).                                                                                                                                                                                                                                                                                                           |
| **name:**         | Nombre del peleador                                                                                                                                                                                                                                                                                                                                                        |
| **chinese_name:** | El nombre del luchador en chino (no se preocupe si no lo sabe, puede dejarlo en blanco).                                                                                                                                                                                                                                                                                   |
| **api:**          | La aptitud del luchador (12,13,14,15), necesita un número aquí, elimine el "".                                                                                                                                                                                                                                                                                             |
| **type_id:**      | El tipo del peleador puede ser (DPS, GANK, TANK).                                                                                                                                                                                                                                                                                                                          |
| **gender_id:**    | El genero del peleador , puder ser (MALE , FEMALE).                                                                                                                                                                                                                                                                                                                        |
| **tome_id:**      | El tomo del peleador , puder ser (SCORCHING, JUDO, KARATE, KICK, MANA, STREET, SUPER, THAI).                                                                                                                                                                                                                                                                               |
| **badge_id:**     | El badge del peleador, puder ser (BEAUTY, DAZZLING, EARTH, FLAME, GALE, OROCHI).                                                                                                                                                                                                                                                                                           |
| **status:**       | El estado significa si el luchador está en mantenimiento, si el valor es 1 significa SÍ, la información se ocultará para todos en la aplicación real. Como puede ver, algunos de los peleadores que aun no han salido en la global están marcados como 1, por eso no puede ver en la lista principal de la aplicación.                                                     |
| **striker:**      | El Striker quiere decir si el luchador también tiene la información sobre su forma de Striker. Puede ser 0 si NO, y 1 si es SI, ya que puede ver dentro de la información detallada de cada luchador que presiona dentro de la aplicación, observe que la navegación inferior con la información del striker aparece en los tabs, si no lo ve porque el ** striker = 0 **. |

Para modificar o agregar luchadoras ve a [fighter.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fighters.json) o si quieres la versión china [chinese_fighters.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fighters.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

---

## Fightsouls

<img src="https://www.ultimate-guides.net/assets/ug98/img/fightsouls.jpg" align="right" width="32%"/>

Para modificar esta sección use la referencia de **fighter_id** .

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

| Key                 | Description                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fighter_id:**     | La identificación única hará referencia a toda la información relacionada con el luchador.                                                         |
| **name:**           | Nombre del Fightsoul puede ser (TIGER, SNAKE, TURTLE, BEAR, SPACE), try to match this name with the **fightsoul_id** inside of the fighters.json . |
| **description:**    | Description en Ingles del fightsoul, puede ser cualquier nivel que desees solo especificalo.                                                       |
| **description_es:** | Description en Español del fightsoul, puede ser cualquier nivel que desees solo especificalo.                                                      |
| **description_pt:** | Description en Portugues del fightsoul, puede ser cualquier nivel que desees solo especificalo.                                                    |

Para modificar o agregar almas de lucha, vaya a [fightsouls.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fightsouls.json) o si quieres la versión china [chinese_fightsouls.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fightsouls.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error. |

## Fates

<img src="https://www.ultimate-guides.net/assets/ug98/img/fates.jpeg" align="right" width="32%"/>

Para modificar esta sección use la referencia de **fighter_id** .

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
| **contributor:**    | The name of the person who add or edit the weapon   |

## Skills

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .
Structure:

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
| **name:**           | The name of the weapon.                            |
| **description:**    | English description of the Skill(the benefits).    |
| **description_es:** | Spanish description of the Skill(the benefits).    |
| **description_pt:** | Portuguese description of the Skill(the benefits). |

To modify or add skills go to [skills.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/skills.json) or if you want the chinese version [chinese_fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_skills.json), once you finished you can pull request your modification or you can open a issue to request a feature or a bug.

## Skills 8 Elements (Gates)

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills_elements.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .

Structure:

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

## Time Line

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/time_line.jpeg"  width="32%"/>
</p>

For modify this section use the reference of **fighter_id** .

Structure:

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

Structure:

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
