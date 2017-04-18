import { Tile } from './Tile'

export class CardFace {

    protected _tiles: Tile[][];

	constructor( tiles: Tile[][] ) {
		this._tiles = tiles;
	}

// Getters / Setters
	public get tiles(): Tile[][] {
		return this._tiles;
	}
	public set tiles(value: Tile[][]) {
		this._tiles = value;
	}    


}