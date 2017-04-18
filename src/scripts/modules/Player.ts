export class Player {

    private _pseudo: string;

	constructor(pseudo: string) {
		this._pseudo = pseudo;
	}

	public get pseudo(): string {
		return this._pseudo;
	}
	public set pseudo(value: string) {
		this._pseudo = value;
	}    

}