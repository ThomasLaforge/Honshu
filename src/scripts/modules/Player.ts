import { Hand } from './Hand'
import { HonshuMap } from './HonshuMap'

export class Player {

    private _pseudo: string;
	private _hand: Hand;
	private _map: HonshuMap;

	constructor( pseudo: string, hand = new Hand(), map = new HonshuMap() ) {
		this._pseudo = pseudo;
		this._hand = hand;
		this._map = map;
	}

// Getters / Setters
	public get pseudo(): string {
		return this._pseudo;
	}
	public set pseudo(value: string) {
		this._pseudo = value;
	}
	public get hand(): Hand {
		return this._hand;
	}
	public set hand(value: Hand) {
		this._hand = value;
	}
	public get map(): HonshuMap {
		return this._map;
	}
	public set map(value: HonshuMap) {
		this._map = value;
	}
	
}