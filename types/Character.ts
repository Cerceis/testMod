import { Ability, GameEventType, AbilityEffectsFunctionOptions } from "./Abilities";
import { Game } from "./Game";

export type CharaterStatus =
"str" | "vit" | "int" | "psy" | "agi" | "dex" | "hp" | "maxHp" | "mp" | "maxMp" | "physicalDmg" | "physicalDef" | "magicalDmg" | "magicalDef"

export type CharacterPreviousStatus = {
    [key in CharaterStatus] : number[]
}

export interface Character{
    id: string,
    abilities: Ability[],
    isDead: boolean,
    init: boolean,
    name: string,
    hp: number,
    mp: number,
    hpRegenPerTurn: number,
    mpRegenPerTurn: number,
    maxHp: number,
    maxHMp: number,
    str: number,
    vit: number,
    int: number,
    psy: number,
    agi: number,
    dex: number,
    
    modStr: number
    modVit: number
    modInt: number
    modPsy: number
    modAgi: number
    modDex: number

    modPhysicalDmg: number,
    modPhysicalDef: number,
    modMagicalDmg: number,
    modMagicalDef: number,
    modHpRegen: number,
    modMpRegen: number,
    modMaxHp: number,
    modMaxMp: number,
    basePhysicalDmg: number,
    basePhysicalDe: number,
    baseMagicalDmg: number,
    baseMagicalDe: number,
    physicalDmg: number,
    physicalDef: number,
    magicalDmg: number,
    magicalDef: number,

    previous:CharacterPreviousStatus
        
    fullRestore: (stats: "MP" | "HP" | "" ) => void,
    addAbility:(id: string) => Promise<void>,
    removeAbility:(id: string) => Promise<void>,
    activateEvent:(event: GameEventType, enemy: Character | null, arg: AbilityEffectsFunctionOptions) => Promise<void>,
    focusPhysicalDefense:(game: Game) => void,
    physicalAttack:(enemy: Character) => Promise<void>,
    physicalDefend:(physicalAttack: number, enemy:Character) => Promise<{hit: boolean, damage: number}>,
    focusMagicalDefense:(game: Game) => void,
    magicalAttack:(enemy: Character) => Promise<void>,
    magicalDefend:(magicalAttack: number, enemy:Character) => Promise<{hit: boolean, damage: number}>,
    addRandomAttribute:(v: number) => string,
}