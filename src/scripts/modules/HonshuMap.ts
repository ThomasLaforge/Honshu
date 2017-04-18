import { Tile } from './Tile'

export class HonshuMap {
    
    private _map: Tile[][];

	constructor(map: Tile[][] = [ [] ]) {
	}
    
	public get map(): Tile[][] {
		return this._map;
	}
	public set map(value: Tile[][]) {
		this._map = value;
	}
    
}