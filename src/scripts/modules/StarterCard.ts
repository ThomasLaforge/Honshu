import { CardFaceStarter } from './CardFaceStarter'
import { FaceVersion } from './Honshu'

export class StarterCard {
    
    private _cardFaces: CardFaceStarter[]
    private _currentFace: CardFaceStarter;

    constructor(cardFaces: CardFaceStarter[]){
        console.log('new starter card')
    }

    getCardFaceByFace(hopedface: FaceVersion){
        let resCardFace = this.cardFaces[0];
        this.cardFaces.forEach( cardFace => {
            if( cardFace.face === hopedface ){
                resCardFace = cardFace;
            }
        })

        return resCardFace;
    }

    public get cardFaces(){
        return this._cardFaces;
    }
    public set cardFaces(cardFaces: CardFaceStarter[]){
        this._cardFaces = cardFaces;
    }
}