import { TileType, FINAL_COUNT__FOREST_VALUE, FINAL_COUNT__CITY_VALUE, FINAL_COUNT__LAKE_VALUE, FINAL_COUNT__FIELD_VALUE } from './Honshu'
import { Tile } from './Tile'

export abstract class BasicTile extends Tile {

    private _value: number;
	
	constructor(value: number, tileType: TileType) {
		super(tileType)
		this.value = value;
	}
    
// Getters / Setters
	public get value(): number {
		return this._value;
	}
	public set value(value: number) {
		this._value = value;
	}

}

export class FieldTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__FIELD_VALUE, TileType.Field)
	}
	
	
}

export class CityTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__CITY_VALUE, TileType.City)
	}
}

export class ForestTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__FOREST_VALUE, TileType.Forest)
	}
}

export class LakeTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__LAKE_VALUE, TileType.Lake)
	}
}