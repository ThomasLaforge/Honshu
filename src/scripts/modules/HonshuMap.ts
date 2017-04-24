import { Tile } from './Tile'
import { Grid } from './Grid'
import { TileType } from './Honshu'

export class HonshuMap {
    
    private _map: Tile[][];

	constructor(map: Tile[][] = [ [] ]) {
	}

	extract( TileType: TileType ) : Grid {
		return new Grid([[]]);
	}
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}