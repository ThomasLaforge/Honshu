import { CardFace } from './CardFace'
import { Tile } from './Tile'
import { CARD_COL } from './Honshu'

import * as _ from 'lodash'

export class PlayableCard {
    
    private _tiles: Tile[][]
    private _value: number
    private clockwise: boolean

    constructor(tiles: Tile[] | Tile[][] | CardFace, value: number){
        this.value = value;
        this.clockwise = null;
        if(!(tiles instanceof CardFace) && !Array.isArray(tiles[0])){
            tiles = _.chunk(tiles, CARD_COL)
        }
        this.tiles = tiles instanceof CardFace ? tiles.tiles : <Tile[][]>tiles;
    }

    rotate(clockwise = true){
        let turnToDo = clockwise ? 1 : 3;
        for(let i = 0; i < turnToDo; i++){
            this.clockwise = this.clockwise && !clockwise ? clockwise : false
            this.tiles = _.zip.apply(_, this.clockwise ? this.tiles : this.tiles.reverse());
        }
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