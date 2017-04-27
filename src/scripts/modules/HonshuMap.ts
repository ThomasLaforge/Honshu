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

	// Count //
    getFieldCount(){
        let gridField = this.extract(FieldTile.name);
		return gridField.getHowManyOccurence() * FINAL_COUNT__FIELD_VALUE;
    }

    getCityCount(){
        let gridCity = this.extract(CityTile.name);
        return gridCity.getLongestChain() * FINAL_COUNT__CITY_VALUE;
    }

    getForestCount(){
        let gridForest = this.extract(ForestTile.name);
        return gridForest.getHowManyOccurence() * FINAL_COUNT__FOREST_VALUE;
    }
    
    getLakeCount(){
        let gridLake = this.extract(LakeTile.name);
		let areaLengths = gridLake.getAllAreaSize();
		console.log(areaLengths, _.sum(areaLengths.map(areaLength => { return (areaLength - 1) * FINAL_COUNT__LAKE_VALUE}) ))
        return _.sum(areaLengths.map(areaLength => { return (areaLength - 1) * FINAL_COUNT__LAKE_VALUE}) );
    }

    getManufacturingCount(){
        let cpt = 0;
        return cpt;
    }

    getBonusCount(){
        let cpt = 0;

        // if(this.bonus){

        // }

        return cpt;        
    }

    getTotalCount(){
        return this.getCityCount() + this.getForestCount() + this.getLakeCount() + this.getManufacturingCount() + this.getBonusCount();
    }
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}