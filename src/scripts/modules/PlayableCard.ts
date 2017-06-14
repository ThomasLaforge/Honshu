import { CardFace } from './CardFace'
import { Tile } from './Tile'
import { CARD_COL } from './Honshu'

import * as _ from 'lodash'

export class PlayableCard {
    
    private _tiles: Tile[][]
    private _value: number

    constructor(tiles: Tile[] | Tile[][] | CardFace, value: number){
        this.value = value;
        if(!(tiles instanceof CardFace) && !Array.isArray(tiles[0])){
            tiles = _.chunk(tiles, CARD_COL)
        }
        this.tiles = tiles instanceof CardFace ? tiles.tiles : <Tile[][]>tiles;
    }

    rotate(){
        let newTiles = _.cloneDeep(this.tiles);
        let N = this.tiles[1].length ;
        for (let x = 0; x < N / 2; x++){
            for (let y = x; y < N-x-1; y++){
                // store current cell in temp variable
                let temp = newTiles[x][y];
    
                // move values from right to top
                newTiles[x][y] = newTiles[y][N-1-x];
    
                // move values from bottom to right
                newTiles[y][N-1-x] = newTiles[N-1-x][N-1-y];
    
                // move values from left to bottom
                newTiles[N-1-x][N-1-y] = newTiles[N-1-y][x];
    
                // assign temp to left
                newTiles[N-1-y][x] = temp;
            }
        }
        this.tiles = newTiles;
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