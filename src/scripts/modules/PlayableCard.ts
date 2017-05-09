import { CardFace } from './CardFace'
import { Tile } from './Tile'
import { CARD_COL } from './Honshu'

import * as _ from 'lodash'

export class PlayableCard {
    
    private _tiles: Tile[][]
    private _value: number

    constructor(tiles: Tile[] | Tile[][] | CardFace, value: number){
        console.log('new playable card')
        this.value = value;
        if(!(tiles instanceof CardFace) && !Array.isArray(tiles[0])){
            tiles = _.chunk(tiles, CARD_COL)
        }
        this.tiles = tiles instanceof CardFace ? tiles.tiles : <Tile[][]>tiles;
    }

    public get tiles(){
        return this._tiles;
    }
    public set tiles(tiles: Tile[][]){
        this._tiles = tiles;
    }
    public get value(){
        return this._value;
    }
    public set value(value: number){
        this._value = value;
    }

}