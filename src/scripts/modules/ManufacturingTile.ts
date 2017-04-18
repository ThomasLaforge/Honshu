import { ResourceTile } from './ResourceTile'
import { ResourceType } from './Honshu'

export class ManufacturingTile extends ResourceTile {

    private _value: boolean;
    private _complete: boolean;  

    constructor(resourceType: ResourceType, value = false, complete = false){
        super(resourceType);
        this._value = value;
        this._complete = complete;
    }

    work(){
        this.complete = true;
    }

// Getters / Setters
	public get value(): boolean {
		return this._value;
	}
	public set value(value: boolean) {
		this._value = value;
	}
	public get complete(): boolean {
		return this._complete;
	}
	public set complete(value: boolean) {
		this._complete = value;
	}
    
}