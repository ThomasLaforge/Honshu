import { Deck } from './Deck'
let starterDeckJson = require('../../datas/starter_cards.json')

export class StarterDeck extends Deck {
    constructor(arrayDeck: any[] = [], arrayDiscard: any[] = []){
        super(arrayDeck, arrayDiscard);
    }

    initDeck(){
        
    }
} 