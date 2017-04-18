import { CardFace } from './CardFace'
import { Tile } from './Tile'

export class Card extends CardFace {

    private _value: number;

	constructor(tiles: Tile[][], value: number) {
		super(tiles);
		this.value = value;
	}
	
	public get value(): number {
		return this._value;
	}
	public set value(value: number) {
		this._value = value;
	}
}