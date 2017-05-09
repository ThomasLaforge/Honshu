export abstract class Tile {

    constructor(){
        console.log('new Tile')
    }

}

import { CityTile, FieldTile, ForestTile, LakeTile } from './BasicTile'
import { ProductionTile } from './ProductionTile'
import { ManufacturingTile } from './ManufacturingTile'
import { TileInterface, TileType } from './Honshu'

export class TileCreator {
    constructor(){}

    static create(tileDef: TileInterface): Tile {
        switch (tileDef.type) {
            case TileType.City          : return new CityTile();
            case TileType.Lake          : return new LakeTile();
            case TileType.Forest        : return new ForestTile();
            case TileType.Field         : return new FieldTile();
            case TileType.Manufacturing : return new ManufacturingTile(tileDef.resource, tileDef.points);
            case TileType.Production    : return new ProductionTile(tileDef.resource);
            default: console.log('tile type doesn\'t exist'); break;
        }
    }
}