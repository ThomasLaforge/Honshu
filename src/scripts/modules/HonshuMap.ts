import { Tile } from './Tile'
import { ManufacturingTile } from './ManufacturingTile'
import { ProductionTile } from './ProductionTile'
import { FieldTile, CityTile, ForestTile, LakeTile } from './BasicTile'
import { Grid } from './Grid'
import { TileType, ResourceType, FINAL_COUNT__FIELD_VALUE, FINAL_COUNT__CITY_VALUE, FINAL_COUNT__FOREST_VALUE, FINAL_COUNT__LAKE_VALUE } from './Honshu'

import * as _ from 'lodash'

export class HonshuMap {
    
    private _map: Tile[][];

	constructor(map: Tile[][] = [ [] ]) {
		this.map = map
	}

	extract( tileClassName: string, resource?: ResourceType) : Grid {
		let gridArr = this.map.map( row => {
			return row.map( tile => {
				return tile && tile.constructor.name === tileClassName;
			})
		})

		return new Grid(gridArr);
	}
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}