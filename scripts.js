$(document).ready(function(){

	var bludgeon =[" ", "You call that a crit? Roll damage as normal.",
	 "Smashed off balance! Roll damage as normal and the next attack against the creature has advantage",
	 "Smashed off balance! Roll damage as normal and the next attack against the creature has advantage",
	 "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	 "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	 "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	 "Sent reeling! Do not roll your damage dice, instead deal the maximum result possible with those dice and push the creature up to 15 feet in any direction.",
	 "Sent reeling! Do not roll your damage dice, instead deal the maximum result possible with those dice and push the creature up to 15 feet in any direction.",
	 "Great hit! Roll your damage dice twice and add them together.",
	 "Great hit! Roll your damage dice twice and add them together.",
	 "Great hit! Roll your damage dice twice and add them together.",
	 "Take a seat! Roll damage dice twice and add them together and the creature is knocked prone",
	 "Take a seat! Roll damage dice twice and add them together and the creature is knocked prone",
	 "Rocked and rolled! Roll damage dice twice and add them together, push the creature up to 15 feet away, and the creature is knocked prone.",
	 "Rocked and rolled! Roll damage dice twice and add them together, push the creature up to 15 feet away, and the creature is knocked prone.",
	 "Rocked and rolled! Roll damage dice twice and add them together, push the creature up to 15 feet away, and the creature is knocked prone.",
	 "Grievous injury! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing heavy armor roll on the Major Injury chart instead.",
	 "Grievous injury! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing heavy armor roll on the Major Injury chart instead.",
	 "Crushed! Deal the twice maximum result of your damage dice and roll on the major injury chart",
	 "Splat! Deal the maximum result of your damage dice twice, the creature is stunned until the end of your next turn, and roll on the major injury chart."];

	var piercing = [" ", "You call that a crit? Roll damage as normal",
	"Lunge and thrust! Roll damage dice twice and use the higher result.",
	"Lunge and thrust! Roll damage dice twice and use the higher result.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Stabbed! Roll your damage dice twice and add them together.",
	"Stabbed! Roll your damage dice twice and add them together.",
	"Great hit! Roll your damage dice twice and add them together.",
	"Great hit! Roll your damage dice twice and add them together.",
	"Great hit! Roll your damage dice twice and add them together.",
	"Swiss cheese! Roll twice as many damage dice as normal. Then roll twice on the minor injury chart and use the lower result.",
	"Swiss cheese! Roll twice as many damage dice as normal. Then roll twice on the minor injury chart and use the lower result.",
	"Punctured! Roll your damage dice twice and add them together and roll on the minor injury chart",
	"Punctured! Roll your damage dice twice and add them together and roll on the minor injury chart",
	"Punctured! Roll your damage dice twice and add them together and roll on the minor injury chart",
	"Cruel prick! Roll your damage dice twice and add them together and roll on the major injury chart.",
	"Cruel prick! Roll your damage dice twice and add them together and roll on the major injury chart.",
	"Run through! Deal twice the maximum result of your damage dice and roll on the major injury chart",
	"Pierce! Deal the maximum result of your damage dice twice, roll on the minor injury chart, and roll on the major injury chart."];

	var slashing = [" ", "You call that a crit? Roll damage as normal.",
	"Sliced and diced! Roll damage as normal and the creature loses 1d6 hit points at the start of its next turn.",
	"Sliced and diced! Roll damage as normal and the creature loses 1d6 hit points at the start of its next turn.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Open gash! Roll your damage dice as normal and the creature is bleeding. For the next minute the creature loses 1d4 damage at the start of each of its turns until it uses an action to staunch this wound.",
	"Open gash! Roll your damage dice as normal and the creature is bleeding. For the next minute the creature loses 1d4 damage at the start of each of its turns until it uses an action to staunch this wound.",
	"Great hit! Roll your damage dice twice and add them together",
	"Great hit! Roll your damage dice twice and add them together",
	"Great hit! Roll your damage dice twice and add them together",
	"Deep slice! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d8 hit points at the start of each of its turns until it uses an action to staunch this wound.",
	"Deep slice! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d8 hit points at the start of each of its turns until it uses an action to staunch this wound.",
	"Lacerated! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d12 hit points at the start of each of its turns until it uses an action to staunch this wound",
	"Lacerated! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d12 hit points at the start of each of its turns until it uses an action to staunch this wound",
	"Lacerated! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d12 hit points at the start of each of its turns until it uses an action to staunch this wound",
	"Severed! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing light or no armor roll on the Major Injury chart instead. ",
	"Severed! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing light or no armor roll on the Major Injury chart instead. ",
	"Dissected! Deal twice the maximum result of your damage dice and roll on the major injury chart",
	"Slash! Deal the maximum result of your damage dice twice, roll on the major injury chart, and the creature is bleeding. For the next minute the creature loses 2d8 hit points at the start of each of its turns until it uses an action to staunch this wound."];

	var acid = [" ","You call that a crit? Roll damage as normal",
	"Scalding bile! Roll damage as normal and the creature is scarred. While scarred the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being scarred can be healed in the same way as a minor injury.",
	"Scalding bile! Roll damage as normal and the creature is scarred. While scarred the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being scarred can be healed in the same way as a minor injury.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Melted flesh! Roll your damage as normal and the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration",
	"Melted flesh! Roll your damage as normal and the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration",
	"Great hit! Roll your damage dice twice and add them together.",
	"Great hit! Roll your damage dice twice and add them together.",
	"Great hit! Roll your damage dice twice and add them together.",
	"Boiling flesh! Roll twice as many damage dice as normal and if the creature is wearing armor its AC modifier is reduced by 1 until it can be repaired (for 1/4th the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the minor injury chart.",
	"Boiling flesh! Roll twice as many damage dice as normal and if the creature is wearing armor its AC modifier is reduced by 1 until it can be repaired (for 1/4th the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the minor injury chart.",
	"Horrific mutilation! Roll twice as many damage dice as normal and roll on the minor injury chart. Additionally, the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration",
	"Horrific mutilation! Roll twice as many damage dice as normal and roll on the minor injury chart. Additionally, the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration",
	"Horrific mutilation! Roll twice as many damage dice as normal and roll on the minor injury chart. Additionally, the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration",
	"Caustic trauma! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. If the creature is wearing armor, roll on the minor injury chart and its AC modifier is reduced by 2 until it can be repaired (for half the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the major injury chart.",
	"Caustic trauma! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. If the creature is wearing armor, roll on the minor injury chart and its AC modifier is reduced by 2 until it can be repaired (for half the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the major injury chart.",
	"Vitriolic! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Acid bath! Deal twice the maximum result of your damage dice. If the creature is wearing armor, the armor is destroyed (if non-magical) or rendered useless until cleaned during a long rest (if magical) and roll on the major injury chart. If the creature is not wearing armor, roll on the major injury chart and the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration"];
	var cold = [" ", "You call that a crit? Roll damage as normal",
	"Chills! Roll damage as normal and the creature may only move half its movement speed on its next turn",
	"Chills! Roll damage as normal and the creature may only move half its movement speed on its next turn",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Frosty! Roll your damage as normal and the creature’s movement speed is 0 until the end of its next turn",
	"Frosty! Roll your damage as normal and the creature’s movement speed is 0 until the end of its next turn",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Freezing! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn",
	"Freezing! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn",
	"Frozen! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn. If the creature takes damage before the end of its next turn, roll on the minor injury chart",
	"Frozen! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn. If the creature takes damage before the end of its next turn, roll on the minor injury chart",
	"Frozen! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn. If the creature takes damage before the end of its next turn, roll on the minor injury chart",
	"Ice block! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature is paralyzed until the end of its next turn and rolls on the minor injury chart",
	"Ice block! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature is paralyzed until the end of its next turn and rolls on the minor injury chart",
	"Glacial! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Subzero! Deal twice the maximum result of your damage dice, roll on the major injury chart, and the creature is paralyzed for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect. If it fails this saving throw three times it is frozen solid and becomes a petrified but frozen solid in a block of ice rather than turned to stone."];

	var fire = [" ", "You call that a crit? Roll damage as normal.",
	"Heat wave! Roll damage as normal and attack rolls for attacks that deal fire damage have advantage when made against the creature until the end of its next turn.",
	"Heat wave! Roll damage as normal and attack rolls for attacks that deal fire damage have advantage when made against the creature until the end of its next turn.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Hot flash! Roll your damage as normal and the creature is on fire. While the creature is on fire it takes 2d4 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Hot flash! Roll your damage as normal and the creature is on fire. While the creature is on fire it takes 2d4 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Ablaze! Roll twice as many damage dice as normal and the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Ablaze! Roll twice as many damage dice as normal and the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Burnt to a crisp! Roll twice as many damage dice as normal and the creature is charred. If the creature has resistance to fire, it loses that resistance. If the creature does not have resistance to fire, it gains vulnerability to fire. Both of these effects can be ended the same as a minor injury. ",
	"Burnt to a crisp! Roll twice as many damage dice as normal and the creature is charred. If the creature has resistance to fire, it loses that resistance. If the creature does not have resistance to fire, it gains vulnerability to fire. Both of these effects can be ended the same as a minor injury. ",
	"Burnt to a crisp! Roll twice as many damage dice as normal and the creature is charred. If the creature has resistance to fire, it loses that resistance. If the creature does not have resistance to fire, it gains vulnerability to fire. Both of these effects can be ended the same as a minor injury. ",
	"Hellfire! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Hellfire! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground.",
	"Combustion! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Inferno! Deal twice the maximum result of your damage dice and roll on the major injury chart. Additionally, the creature is on fire. While the creature is on fire it takes 2d8 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground."];
	
	var force = ["", "You call that a crit? Roll damage as normal.",
	"Spellstruck! Roll damage as normal and the creature has disadvantage on saving throws against spells until the end of its next turn.",
	"Spellstruck! Roll damage as normal and the creature has disadvantage on saving throws against spells until the end of its next turn.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Eldritch incandescence! Roll your damage as normal and spell attack rolls against the creature have advantage until the end of its next turn",
	"Eldritch incandescence! Roll your damage as normal and spell attack rolls against the creature have advantage until the end of its next turn",
	"Great hit! Roll twice as many damage dice as normal",
	"Great hit! Roll twice as many damage dice as normal",
	"Great hit! Roll twice as many damage dice as normal",
	"Bewitching blow! Roll twice as many damage dice as normal and the creature is spellbound until the end of its next turn. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage.",
	"Bewitching blow! Roll twice as many damage dice as normal and the creature is spellbound until the end of its next turn. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage.",
	"Mystic magnet! Roll twice as many damage dice as normal and the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 14) to end this effect.",
	"Mystic magnet! Roll twice as many damage dice as normal and the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 14) to end this effect.",
	"Mystic magnet! Roll twice as many damage dice as normal and the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 14) to end this effect.",
	"Ensorcelled! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 16) to end this effect.",
	"Ensorcelled! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 16) to end this effect.",
	"Arcane injury! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Magically mauled! Deal twice the maximum result of your damage dice and roll on the major injury chart. Additionally, the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 18) to end this effect."];
	
	var lightning = [" ", "You call that a crit? Roll damage as normal",
	"Shocking! Roll damage as normal and the creature cannot use reactions until the end of its next turn",
	"Shocking! Roll damage as normal and the creature cannot use reactions until the end of its next turn",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Sparks fly! Roll your damage as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 14) or take half as much damage",
	"Sparks fly! Roll your damage as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 14) or take half as much damage",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Electric arc! Roll twice as many damage dice as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 18) or take half as much damage. ",
	"Electric arc! Roll twice as many damage dice as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 18) or take half as much damage. ",
	"Fulminate! Roll twice as many damage dice as normal and roll on the minor injury chart. If the creature is wearing metal armor roll on the major injury chart instead.",
	"Fulminate! Roll twice as many damage dice as normal and roll on the minor injury chart. If the creature is wearing metal armor roll on the major injury chart instead.",
	"Fulminate! Roll twice as many damage dice as normal and roll on the minor injury chart. If the creature is wearing metal armor roll on the major injury chart instead.",
	"Lit up! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature and each creature you choose within 15 ft. of it cannot take reactions until the end of their next turn. Then roll on the minor injury chart.",
	"Lit up! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature and each creature you choose within 15 ft. of it cannot take reactions until the end of their next turn. Then roll on the minor injury chart.",
	"Electrocuted! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Lightning rod! Deal twice the maximum result of your damage dice and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 20) or take half as much damage. Then roll on the major injury chart."];
	
	var necrotic = ["", "You call that a crit? Roll damage as normal",
	"Spoil! Roll damage as normal and the creature cannot regain hit points until the end of its next turn",
	"Spoil! Roll damage as normal and the creature cannot regain hit points until the end of its next turn",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Fester! Roll your damage as normal and the creature’s maximum hit points are reduced by the same amount.",
	"Fester! Roll your damage as normal and the creature’s maximum hit points are reduced by the same amount.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Decay! Roll twice as many damage dice as normal and the creature’s maximum hit points are reduced by the same amount.",
	"Decay! Roll twice as many damage dice as normal and the creature’s maximum hit points are reduced by the same amount.",
	"Rot! Roll twice as many damage dice as normal and the creature cannot regain hit points for the next minute. It may make a saving throw (DC 16) at the end of each of its turns to end this effect.",
	"Rot! Roll twice as many damage dice as normal and the creature cannot regain hit points for the next minute. It may make a saving throw (DC 16) at the end of each of its turns to end this effect.",
	"Rot! Roll twice as many damage dice as normal and the creature cannot regain hit points for the next minute. It may make a saving throw (DC 16) at the end of each of its turns to end this effect.",
	"Blight! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature’s maximum hit points are reduced by the same amount. Then roll on the minor injury chart.",
	"Blight! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature’s maximum hit points are reduced by the same amount. Then roll on the minor injury chart.",
	"Atrophy! Deal twice the maximum result of your damage dice and roll on the major injury chart",
	"Putrefy! Deal twice the maximum result of your damage dice, the creature’s maximum hitpoints are reduced by the same amount, and the creature cannot regain hit points until the end of its next turn. Then roll on the major injury chart."];
	
	var poison = ["", "You call that a crit? Roll damage as normal.",
	"Nauseous! Roll damage as normal and the creature has disadvantage on its next ability check, attack roll, or saving throw.",
	"Nauseous! Roll damage as normal and the creature has disadvantage on its next ability check, attack roll, or saving throw.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
	"Sickened! Roll your damage as normal and the creature has disadvantage on all ability checks, attack rolls, and saving throws until the end of its next turn.",
	"Sickened! Roll your damage as normal and the creature has disadvantage on all ability checks, attack rolls, and saving throws until the end of its next turn.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Poisoned! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect.",
	"Poisoned! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect.",
	"Contaminated! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect",
	"Contaminated! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect",
	"Contaminated! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect",
	"Toxic shock! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the minor injury chart and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect.",
	"Toxic shock! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the minor injury chart and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect.",
	"System failure! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
	"Biological breakdown! Deal twice the maximum result of your damage dice, roll on the major injury chart, and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect."
	];

	var psychic = ["", "You call that a crit? Roll damage as normal.",
	"Roll your damage dice as normal and you control the creature’s movement on its next turn",
	"Roll your damage dice as normal and you control the creature’s movement on its next turn",
	"Confused! Roll your damage dice as normal and the creature cannot differentiate friend from foe until the end of its next turn.",
	"Confused! Roll your damage dice as normal and the creature cannot differentiate friend from foe until the end of its next turn.",
	"Confused! Roll your damage dice as normal and the creature cannot differentiate friend from foe until the end of its next turn.",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Great hit! Roll twice as many damage dice as normal.",
	"Dominated! Roll twice as many damage dice as normal and you control the creature’s action on its next turn.",
	"Dominated! Roll twice as many damage dice as normal and you control the creature’s action on its next turn.",
	"Psychological fracture! Roll twice as many damage dice as normal and roll on the Insanity chart with disadvantage",
	"Psychological fracture! Roll twice as many damage dice as normal and roll on the Insanity chart with disadvantage",
	"Psychological fracture! Roll twice as many damage dice as normal and roll on the Insanity chart with disadvantage",
	"Psychological break! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the Insanity chart.",
	"Psychological break! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the Insanity chart.",
	"Madness! Deal twice the maximum result of your damage dice and roll on the Insanity chart.",
	"Mind melt! Deal twice the maximum result of your damage dice and roll on the Insanity chart with advantage."];
	
	var radiant = [];
	var thunder = [];

	function checkValue(damageType){
		var values = document.getElementById('inputSubmit').value;
		console.log(values);
		console.log(damageType);
		document.getElementById('inputResult').innerHTML = damageType[values];		
	}


	$('#btnSubmit').on("click", function(){
		if ($('#bludgeonRad').prop('checked')) {
			console.log($('#bludgeonRad').prop('checked'));
			checkValue(bludgeon);
		}
		else if ($('#piercingRad').prop('checked')) {
			console.log($('#piercingRad').prop('checked'));
			checkValue(piercing);
		}
		else if ($('#slashingRad').prop('checked')) {
			console.log($('#slashingRad').prop('checked'));
			checkValue(slashing);
		}
		else if ($('#acidRad').prop('checked')) {
			console.log($('#acidRad').prop('checked'));
			checkValue(acid);
		}
		else if ($('#acidRad').prop('checked')) {
			console.log($('#acidRad').prop('checked'));
			checkValue(acid);
		}
		else if ($('#coldRad').prop('checked')) {
			console.log($('#coldRad').prop('checked'));
			checkValue(cold);
		}
		else if ($('#fireRad').prop('checked')) {
			console.log($('#fireRad').prop('checked'));
			checkValue(fire);
		}
		else if ($('#forceRad').prop('checked')) {
			console.log($('#forceRad').prop('checked'));
			checkValue(force);
		}
		else if ($('#lightningRad').prop('checked')) {
			console.log($('#lightningRad').prop('checked'));
			checkValue(lightning);
		}
		else if ($('#necroticRad').prop('checked')) {
			console.log($('#necroticRad').prop('checked'));
			checkValue(necrotic);
		}
		else if ($('#poisonRad').prop('checked')) {
			console.log($('#poisonRad').prop('checked'));
			checkValue(poison);
		}
		else if ($('#psychicRad').prop('checked')) {
			console.log($('#psychicRad').prop('checked'));
			checkValue(psychic);
		}
		else if ($('#radiantRad').prop('checked')) {
			console.log($('#radiantRad').prop('checked'));
			checkValue(radiant);
		}
		else if ($('#thunderRad').prop('checked')) {
			console.log($('#thunderRad').prop('checked'));
			checkValue(thunder);
		}
		
	});
})
