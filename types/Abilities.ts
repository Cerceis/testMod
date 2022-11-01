import { Character } from "./Character";
import { Game } from "./Game";

export interface Ability{
    id: string,
    name: string,
    source: string,
    description: string,
    stackable: boolean,
    _funcs?: AbilityEffectsFunction[]
    effects: {
        [key in GameEventType]?: AbilityEffectsFunction[]
    },
}

export type GameEventType = 
"onGameStart" | "onTurnStart" | "onAttack" | "onPhysicalAttack" | "onMagicalAttack" |
"onAttackMissed" | "onPhysicalAttackMissed" | "onMagicalAttackMissed" | 
"onHit" | "onPhysicalHit" | "onMagicalHit" | "onEvaded" | "onPhysicalEvaded" | 
"onMagicalEvaded" | "onDefend" | "onPhysicalDefend" | "onMagicalDefend" | 
"onDamageTaken" | "onPhysicalDamageTaken" | "onMagicalDamageTaken" | "onTurnEnd" |
"onGameEnd" | "onAdded" | "onRemoved" | "onEvent"; 

export interface AbilityEffectsFunctionOptions{
    damageDealt?: number,               //
    damageType?: string                 //
    incomingDamage?: number,            //
    mpCost?: number                     //
}
export interface AbilityEffectsFunction {
    (player: Character, enemy: Character|null, game: Game|null, arg: AbilityEffectsFunctionOptions): any;
}
export interface AbilitiesMap{
    [key: string]: Ability
}