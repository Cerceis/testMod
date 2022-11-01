/**
 * Settings
 * SOURCE: Name of your mod.
 */
const SOURCE = "Cerceis-tutorial-mod";
/**
 * Add your abilities here.
 */
export const Abilities = {
    "0000":{
        id: "0000",
        name: "Extra physical hit",
        source: SOURCE,
        description: "At the start of every turn, you dealt 1 extra physical attack and increase your physical defense by 5.",
        stackable: true,
        effects:{
            "onTurnStart":[
                async(player, enemy, game, arg) => {
                    if(!enemy || !game) return;
                    await game.addLog(`${player.name} dealing one extra physical attack!`)
                    await player.physicalAttack(enemy);
                    player.modPhysicalDef += 5;
                }
            ]
        }
    },
}