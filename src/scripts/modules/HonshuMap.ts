import { Tile } from './Tile'
import { ManufacturingTile } from './ManufacturingTile'
import { ProductionTile } from './ProductionTile'
import { FieldTile, CityTile, ForestTile, LakeTile } from './BasicTile'
import { Grid } from './Grid'
import { TileType, ResourceType, FINAL_COUNT__FIELD_VALUE, FINAL_COUNT__CITY_VALUE, FINAL_COUNT__FOREST_VALUE, FINAL_COUNT__LAKE_VALUE } from './Honshu'
import { PlayableCard } from './PlayableCard'

import * as _ from 'lodash'

export class HonshuMap {
    
    private _map: Tile[][];

	constructor(map: Tile[][] = [ [] ]) {
		this.map = map
	}

    // 
    addCard( card: PlayableCard, row: number,  col: number, y: number, x: number ) {
        let translateX = x - col;
        let translateY = y - row;

        let copyArr = _.cloneDeep(this.map)

        card.tiles.forEach( (line, i) => {
            line.forEach( (tile, j) => {
                copyArr[i + translateY][j + translateX] = tile;
            })
        })

        this.map = copyArr
        this.addGapCells()
    }

    addGapCells() {
        let i = 0;
        let j = 0;
        while(i < this.map.length && j < this.map[0].length){
            if( this.map[i][j] ){
                if(!this.map[i - 2][j - 2]){

                }
            }
            i++;
            j++;
        }
    }

    addRow(start = true) {
        let newRow: Tile[] = []
        this.map[0].forEach( (col) => { newRow.push(null) })

        if(start){
            this.map.unshift(newRow)
        }
        else {
            this.map.push(newRow)
        }
    }

    addColumn(left = true){
        if(left){
            this.map = this.map.map( row => {
                row.unshift(null)
                return row
            })
        }
        else {
            this.map = this.map.map( row => {
                row.push(null)
                return row
            })
        }
    }

    removeRow(start = true) {
        if(start){
            this.map.shift()
        }
        else {
            this.map.pop()
        }
    }

    removeColumn(left = true){
        if(left){
            this.map = this.map.map( row => {
                row.shift()
                return row
            })
        }
        else {
            this.map = this.map.map( row => {
                row.pop()
                return row
            })
        }
    }

    shrink() {
        let toShrinkAgain = false;

        // shrink row
        this.map.forEach((row, i) => {
            let isEmpty = true;
            row.forEach((tile, j) => {
                isEmpty = isEmpty && (!tile || tile === 0)
            })
            if (isEmpty) {
                this.removeRow(i === 0);
                i--;
                toShrinkAgain = true;
            }
        })

        // this.map.forEach((row, i) => {
        //     let isEmpty = true;
        //     row.forEach((tile, j) => {
        //         isEmpty = isEmpty && (!tile || tile === 0)
        //     })
        //     if (isEmpty) {
        //         this.removeRow(i === 0);
        //         toShrinkAgain = true;
        //     }
        // })

        if (toShrinkAgain) {
            this.shrink();
        }
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
        // console.log('grid Field', gridField)
		return gridField.getHowManyOccurence() * FINAL_COUNT__FIELD_VALUE;
    }

    getCityCount(){
        let gridCity = this.extract(CityTile.name);
        // console.log('grid City', gridCity, gridCity.getLongestChain())        
        return gridCity.getLongestChain() * FINAL_COUNT__CITY_VALUE;
    }

    getForestCount(){
        let gridForest = this.extract(ForestTile.name);
        // console.log('grid Forest', gridForest)
        return gridForest.getHowManyOccurence() * FINAL_COUNT__FOREST_VALUE;
    }
    
    getLakeCount(){
        let gridLake = this.extract(LakeTile.name);
        // console.log('grid Lake', gridLake)        
		let areaLengths = gridLake.getAllAreaSize();
        // console.log('areaLength LakeCount', areaLengths)
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
        // console.log(this.getCityCount(), this.getForestCount(), this.getFieldCount(), this.getLakeCount(), this.getManufacturingCount(), this.getBonusCount());
        return this.getCityCount() + this.getForestCount() + this.getFieldCount() + this.getLakeCount() + this.getManufacturingCount() + this.getBonusCount();
    }
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}