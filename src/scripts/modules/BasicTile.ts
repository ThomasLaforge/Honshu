import { FINAL_COUNT__FOREST_VALUE, FINAL_COUNT__CITY_VALUE, FINAL_COUNT__LAKE_VALUE, FINAL_COUNT__FIELD_VALUE } from './Honshu'

export abstract class BasicTile {

    private _value: number;
	
	constructor(value: number) {
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
		super(FINAL_COUNT__FIELD_VALUE)
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