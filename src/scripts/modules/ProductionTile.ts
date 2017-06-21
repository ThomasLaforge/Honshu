import { ResourceTile } from './ResourceTile'
import { ResourceType, TileType } from './Honshu'

export class ProductionTile extends ResourceTile {

    private _resourceUsed: boolean;

    constructor(resourceType: ResourceType, resourceUsed = false){
        super(resourceType, TileType.Production);
        this._resourceUsed = resourceUsed;
    }

    work(){
        this.resourceUsed = true;
    }

// Getters / Setters
	public get resourceUsed(): boolean {
		return this._resourceUsed;
	}
	public set resourceUsed(value: boolean) {
		this._resourceUsed = value;
	}
    
}