import { Tile } from './Tile'
import { ManufacturingTile } from './ManufacturingTile'
import { ProductionTile } from './ProductionTile'
import { FieldTile, CityTile, ForestTile, LakeTile } from './BasicTile'
import { Grid } from './Grid'
import { TileType, ResourceType } from './Honshu'

export class HonshuMap {
    
    private _map: Tile[][];

	constructor(map: Tile[][] = [ [] ]) {
	}

	extract( tile: FieldTile | CityTile | ForestTile | LakeTile | ManufacturingTile | ProductionTile, resource?: ResourceType) : Grid {
		let tileType = tile.constructor.name
		let gridArr = this.map.map( row => {
			return row.map( tile => {
				return tile.constructor.name === tileType;
			})
		})

		return new Grid([[]]);
	}
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}