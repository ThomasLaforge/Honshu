import { CardFace } from './CardFace'
import { Tile } from './Tile'
import { FaceVersion } from './Honshu'

export class FaceInitialCard extends CardFace {

    private _faceVersion: FaceVersion;

	constructor(tiles: Tile[][], faceVersion: FaceVersion) {
		super(tiles);
		this.faceVersion = faceVersion;
	}
	
	public get faceVersion(): FaceVersion {
		return this._faceVersion;
	}
	public set faceVersion(faceVersion: FaceVersion) {
		this._faceVersion = faceVersion;
	}
}