import { FaceInitialCard } from './FaceInitialCard'

export class InitialCard {

    private _faces: FaceInitialCard[];

	constructor( faces: FaceInitialCard[]) {
        this._faces = faces;
	}
    
// Getters / Setters
	public get faces(): FaceInitialCard[] {
		return this._faces;
	}
	public set faces(faces: FaceInitialCard[]) {
		this._faces = faces;
	}

}