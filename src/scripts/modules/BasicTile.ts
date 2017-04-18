import { FINAL_COUNT__FOREST_VALUE, FINAL_COUNT__CITY_VALUE, FINAL_COUNT__LAKE_VALUE } from './Honshu'

export class BasicTile {

    private _value: number;
	
	constructor(value: number) {
		this._value = value;
	}
    
// Getters / Setters
	public get type(): number {
		return this._value;
	}
	public set type(value: number) {
		this._value = value;
	}

}

export class FieldTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__FOREST_VALUE)
	}
}

export class CityTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__CITY_VALUE)
	}
}

export class ForestTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__FOREST_VALUE)
	}
}

export class LakeTile extends BasicTile {

	constructor(){
		super(FINAL_COUNT__LAKE_VALUE)
	}
}