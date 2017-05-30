import { CardFace } from './CardFace'
import { Tile } from './Tile'
import { FaceVersion } from './Honshu'

export class CardFaceStarter extends CardFace {

    private _face: FaceVersion;

	constructor(tiles: Tile[][], face: FaceVersion = FaceVersion.A) {
		super(tiles);
		this.face = face;
	}
	
	public get face(): FaceVersion {
		return this._face;
	}
	public set face(face: FaceVersion) {
		this._face = face;
	}
}