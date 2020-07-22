# Ultimate Guide 98 Data

<!--lint disable no-literal-urls-->
<p align="center">  
    <img
      alt="Ug 98"
      src="https://www.ultimate-guides.net/assets/ug98/img/banner.png" 
    />      
</p>

![Node.js CI](https://github.com/ultimate-guides/ultimate-guide-98-data/workflows/Node.js%20CI/badge.svg?branch=master)
![GitHub last commit](https://img.shields.io/github/last-commit/ultimate-guides/ultimate-guide-98-data?logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/ultimate-guides/ultimate-guide-98-data?logo=github)
![GitHub followers](https://img.shields.io/github/followers/ultimate-guides?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/ultimate-guides/ultimate-guide-98-data?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/98_guide?style=social)
![Discord](https://img.shields.io/discord/433856287894405123?logo=discord&style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/ultimate-guides/ultimate-guide-98-data)

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

_Lee esto en otros lenguajes: [Ingles](README.md), [Español](README.es.md)._

El proposito de este repositorio es para todos los que quieran contribuir compartiendo información o ayudando con la traducción y el contenido faltante. Pueden modificar todos los archivos de la aplicación (Android / iOS), cualquier modificación se verificará antes de su lanzamiento a la aplicación real. Creare una lista de contribuyentes dentro de la aplicación para que todos puedan ver sus nombres ahi.

## Notas

Si no sabes cómo usar el sistema git, no te preocupes, puedes enviar las modificaciones a través del [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) .

## Beta Programs

Si quieres unirte al programa Beta y ayudarnos con contenido anticipado da click en [Android](https://play.google.com/apps/testing/com.ultimateguides.ultimatePro), ademas tenemos un canal dedicado a mandar notificaciones cuando una version esta disponible atravez del discord.

## Desbloquea todas las imagenes de la APPs

Ve a Settings Android/iOS y presiona el boton Code password: **ug98**

<div align="center">
    <img
      alt="ultimate Guide 98"
      src="https://www.ultimate-guides.net/assets/ug98/img/unlock_ios.jpeg" 
      width="32%" />
	  <img
      alt="ultimate Guide 98"
      src="https://www.ultimate-guides.net/assets/ug98/img/unllock_android.png" 
      width="32%" />	
</div>

## Como enviar una mejora o subir un Bug

Presiona en [Issues Tab](https://github.com/ultimate-guides/ultimate-guide-98-data/issues) y busca un problema existente. Votar con aprobación sobre un tema aumentará su prioridad y atención. Los duplicados eventualmente se cerrarán.

Si el error / problema que desea informar no existe, presione "New Issue" y seleccione la opción correcta.

Sea lo más detallado posible y proporcione capturas de pantalla y todos los registros que pueda recopilar de su dispositivo, ya que aumentarán en gran medida el tiempo para llegar a una solución.

## Cómo contribuir en la falta de información, descripción o idioma

Para navegar por una sección o documento que desee, vea la tabla de contenido y lea las reglas para modificar o agregar información.

# Tabla de Contenido

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
    -   [Events](#Events)
    -   [Time Line](#Time-Line)
    -   [Recommended Runes](#Recommended-Runes)
    -   [Follow us](#Follow-us)
    -   [Donate](#Donate)

## List of Fighters

[![Everything Is AWESOME](https://www.ultimate-guides.net/assets/ug98/img/github_fightersList.png)](https://youtu.be/HBwH86Onp6E 'Fighters List')

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

Estructura del json:

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

Estructura del json:

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

| Key         | Description                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| **bosses:** | El nombre de los luchadores se separa con comas, puede ser cualquier nombre, no necesita fighter_id esta vez. |
| **attr:**   | El beneficio de completar los luchadores, como ATK + 20%, HP + 25%, etc.                                      |

Para modificar o agregar fates ve a [fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/fates.json) o si quieres la versión china [chinese_fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_fates.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Partners

<img src="https://www.ultimate-guides.net/assets/ug98/img/partners.jpeg" align="right" width="32%"/>

Para modificar esta sección use la referencia de **fighter_id** .

Estructura del json:

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

Para modificar esta sección use la referencia de **fighter_id** .
Estructura del json:

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

| Key                         | Description                                                    |
| --------------------------- | -------------------------------------------------------------- |
| **name:**                   | El nombre del Fashion.                                         |
| **cost:**                   | El costo del Fashion en diamantes (8800 debe ser un número).   |
| **atribute_1, atribute_2:** | Los beneficios del Fashion que da cuando el usuario la compra. |
| **img_name:**               | El nombre del Archivo del fashion.                             |

## Weapons

Para modificar esta sección use la referencia de **fighter_id** .

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/weapons.JPG" width="32%"/>
</a>

Estructura del json:

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

| Key                 | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| **name:**           | El nombre del arma.                                                           |
| **description:**    | Description en Ingles del arma(los beneficios).                               |
| **description_es:** | Description en Español del arma(los beneficios).                              |
| **description_pt:** | Description en Portuguese del arma(los beneficios).                           |
| **contributor:**    | El nombre de la persona que agrega o edita el arma. ejemplo (PETS - Server 5) |

## Skills

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills.jpeg"  width="32%"/>
</p>

Para modificar esta sección use la referencia de **fighter_id** .

Estructura del json:

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

| Key                 | Description                          |
| ------------------- | ------------------------------------ |
| **name:**           | El nombre del skill.                 |
| **description:**    | Description en Ingles del Skill.     |
| **description_es:** | Description en Español del Skill.    |
| **description_pt:** | Description en Portuguese del Skill. |

Para modificar o agregar skills, vaya a [skills.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/skills.json) o si quieres la versión china [chinese_fates.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_skills.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Skills 8 Elements (Gates)

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/skills_elements.jpeg"  width="32%"/>
</p>

Para modificar esta sección use la referencia de **fighter_id** . Para que la mejora sea mas notoria incluye el tag `<font color='#FFA726'>`<font color='#FFA726'> `Texto que cambiara de color`</font>`</font>` asi sera mas visible como se ve en la imagen de arriba

Estructura del json:

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
| **lake:**       | Descripcion en Ingles del lake element.        |
| **lake_es:**    | Descripcion en Español del lake element.       |
| **lake_pt:**    | Descripcion en Portuguese del lake element.    |
| **thunder:**    | Descripcion en Ingles del thunder element.     |
| **thunder_es:** | Descripcion en Español del thunder element.    |
| **thunder_pt:** | Descripcion en Portuguese del thunder element. |
| **water:**      | Descripcion en Ingles del water element.       |
| **water_es:**   | Descripcion en Español del water.              |
| **water_pt:**   | Descripcion en Portuguese del water.           |

Para modificar o agregar skills_elements, vaya a [skills_elements.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/skills_elements.json) o si quieres la versión china [chinese_skills_elements.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_skills_elements.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Strikers

For modify this section use the reference of **fighter_id** .

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/strikers.jpeg" width="32%"/>
</a>

Estructura del json:

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

| Key                       | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| **trigger_condition:**    | Descripcion en Ingles de las condiciones para activiar el striker (aid).     |
| **trigger_condition_es:** | Descripcion en Español de las condiciones para activiar el striker (aid).    |
| **trigger_condition_pt:** | Descripcion en Portuguese de las condiciones para activiar el striker (aid). |
| **green_1:**              | Descripcion en Ingles del green promote.                                     |
| **green_1_es:**           | Descripcion en Español del green promote.                                    |
| **green_1_pt:**           | Descripcion en Portuguese del green promote.                                 |
| **blue_1:**               | Descripcion en Ingles del blue + 1 promote.                                  |
| **blue_1_es:**            | Descripcion en Español del blue + 1 promote.                                 |
| **blue_1_pt:**            | Descripcion en Portuguese del blue + 1 promote.                              |
| **purple_1:**             | Descripcion en Ingles del purple + 1 promote.                                |
| **purple_1_es:**          | Descripcion en Español del purple + 1 promote.                               |
| **purple_1_pt:**          | Descripcion en Portuguese del purple + 1 promote.                            |
| **purple_2:**             | Descripcion en Ingles del purple + 2 promote.                                |
| **purple_2_es:**          | Descripcion en Español del purple + 2 promote.                               |
| **purple_2_pt:**          | Descripcion en Portuguese del purple + 2 promote.                            |
| **orange_1:**             | Descripcion en Ingles del orange + 1 promote.                                |
| **orange_1_es:**          | Descripcion en Español del orange + 1 promote.                               |
| **orange_1_pt:**          | Descripcion en Portuguese del orange + 1 promote.                            |
| **orange_2:**             | Descripcion en Ingles del orange + 2 promote.                                |
| **orange_2_es:**          | Descripcion en Español del orange + 2 promote.                               |
| **orange_2_pt:**          | Descripcion en Portuguese del orange + 2 promote.                            |
| **orange_3:**             | Descripcion en Ingles del orange + 3 promote.                                |
| **orange_3_es:**          | Descripcion en Español del orange + 3 promote.                               |
| **orange_3_pt:**          | Descripcion en Portuguese del orange + 3 promote.                            |
| **red:**                  | Descripcion en Ingles del red promote.                                       |
| **red_es:**               | Descripcion en Español del red promote.                                      |
| **red_pt:**               | Descripcion en Portuguese del red promote.                                   |
| **red_1:**                | Descripcion en Ingles del red + 1 promote.                                   |
| **red_1_es:**             | Descripcion en Español del red + 1 promote.                                  |
| **red_1_pt:**             | Descripcion en Portuguese del red + 1 promote.                               |

Para modificar o agregar strikers, vaya a [strikers.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/strikers.json) o si quieres la versión china [chinese_strikers.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_strikers.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Events

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/evemts.jpeg"  width="32%"/>
</p>

Para modificar los events hay una se debe ingresar a la pagina oficial de la [kof98umol](http://98kof-us.game-bean.com/t2/178/3575.html) y entrar al mes que corresponden los eventos
deben copiar desde donde empieza el primer evento ejemplo: despues del time:　 2020-07-22 03:49 hasta el ultimo evento incluyendo el punto ".", y pegarlo en la pagona [Events Generator]() , les va a generar los eventos en formato json todo desordenado, para ordernalo copien todo el codigo y pegenlo en esta pagina [jsonLint](https://jsonlint.com/) y presionen el boton validate Json. Les va acomodar todo el codigo, copian todo y lo reemplazan en el archivo ([events.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/events.json)) agregan comentario del pull request y listo, una vez validado todos tendremos los nuevos eventos.

## Time Line

<p align="center"> 
    <img src="https://www.ultimate-guides.net/assets/ug98/img/time_line.jpeg"  width="32%"/>
</p>

Para modificar esta sección use la referencia de **fighter_id** .

Estructura del json:

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

| Key             | Description                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title:**      | El título del evento si fue por tiempo limitado u otro evento.                                                                                                            |
| **fighter_id:** | El fighter_id se necesita para obtener toda la información de fighters.json o chinese_fighters.json, fighter_id debe existir en esos archivos antes de poner el time Line |
| **date:**       | La fecha de lanzamiento del Time Limited Chest u otros eventos.                                                                                                           |

Para modificar o agregar Time Line, vaya a [time_line.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/time_line.json) o si quieres la versión china [chinese_time_line.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_time_line.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Recommended Runes

<img src="https://www.ultimate-guides.net/assets/ug98/img/recommended_runes.GIF" align="right" width="32%"/>

Para modificar esta sección use la referencia de **fighter_id** .

Estructura del json:

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

| Key                 | Description                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **rune_id:**        | La identificación de la Runa puede ser (KILLING, GODS, WOLVES, CHAOS, BOLLING, DRAGON, EARTH, HEART ). |
| **description:**    | Descripcion en Ingles de porque es bueno para el peleador                                              |
| **description_es:** | Descripcion en Español de porque es bueno para el peleador                                             |
| **description_pt:** | Descripcion en Portuguese de porque es bueno para el peleador                                          |

Para modificar o agregar runas recomendadas, vaya a [recommended_runes.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/global/fighters/recommended_runes.json) o si quieres la versión china [chinese_recommended_runes.json](https://github.com/ultimate-guides/ultimate-guide-98-data/blob/master/jsons/chinese/fighters/chinese_recommended_runes.json), una vez que haya terminado, puede solicitar su modificación o puede abrir un problema para solicitar una función o un error.

## Follow us

Facebook Fan Page - https://www.facebook.com/UgKof98/

Discord - https://discord.gg/mvC8R7p

Twitter - https://twitter.com/98_guide

### Donate

Si le gusta nuestro trabajo, puede donar hemos trabajdo 2 años con la comunidad para que esto sea posible.

<p align="center">
<a href='https://ko-fi.com/G2G11VE3M' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
