import { Deck } from './Deck'
import { TileCreator } from './Tile'
import { PlayableCard } from './PlayableCard'
import { PlayableCardInterface, TileInterface } from './Honshu'
let playableDeckJson: PlayableCardInterface[] = require('../../datas/playable_cards.json')

export class PlayableCardDeck extends Deck {
    constructor(arrayDeck: 
    any[] = [], arrayDiscard: any[] = []){
        super(arrayDeck, arrayDiscard);
    }

    initDeck(deck?: PlayableCardInterface[]){
        this.arrayDeck = deck ? deck : playableDeckJson.map( (cardDef: PlayableCardInterface) => {
            let tiles = cardDef.tiles.map( (tileDef:TileInterface) => {
                return TileCreator.create(tileDef)
            })
            return new PlayableCard(tiles, cardDef.value)
        })
    }
} 