import { Ability } from "./Abilities";

export interface Game{
    encounterCount: number,
    encountered: boolean,
    currentTurn: number,
    chooseRewards: boolean,
    awaitingAnimation: boolean,
    allowPlayerAction: boolean,
    fixedRewardAddedAttribute: string,
    selectedRewardAddedAttribute: string,
    addCounter:(turn: number, fn: Function, id: string) => void,
    getRandomAbility:() => Ability,
    hasCounter:(id: string) => boolean,
    nextEncounter:() => void,
    battleInterval:() => Promise<void>,
}