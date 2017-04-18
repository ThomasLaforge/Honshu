import { Tile } from './Tile'
import { ResourceType } from './Honshu'

export abstract class ResourceTile extends Tile {

    protected _resource: ResourceType;

    constructor(resource: ResourceType){
        super();
        this._resource = resource;
    }

    abstract work():void;

// Getters / Setters
	public get resource(): ResourceType {
		return this._resource;
	}
	public set resource(value: ResourceType) {
		this._resource = value;
	}
    
}