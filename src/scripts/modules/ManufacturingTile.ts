import { ResourceTile } from './ResourceTile'
import { ResourceType, TileType } from './Honshu'

export class ManufacturingTile extends ResourceTile {

    private _points: number;
    private _complete: boolean;  

    constructor(resourceType: ResourceType, points = 2, complete = false){
        super(resourceType, TileType.Manufacturing);
        this._points = points;
        this._complete = complete;
    }

    work(){
        this.complete = true;
    }

// Getters / Setters
	public get points(): number {
		return this._points;
	}
	public set points(points: number) {
		this._points = points;
	}
	public get complete(): boolean {
		return this._complete;
	}
	public set complete(value: boolean) {
		this._complete = value;
	}
    
}