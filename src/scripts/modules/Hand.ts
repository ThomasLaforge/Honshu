import {PlayableCard} from './PlayableCard'

class Hand {
    
    private _cards:PlayableCard[];

	constructor(cards: PlayableCard[] = []) {
		this._cards = cards;
	}

	addNewCards(cards: PlayableCard | PlayableCard[]){
		if(!Array.isArray(cards)){
			cards = [cards]	
		}
		cards.forEach( (c: PlayableCard) => {
			this.cards.push(c)
		})
	}

	getNbCards(): number {
		return this.cards.length
	}

	public get cards(): PlayableCard[] {
		return this._cards;
	}

	public set cards(value: PlayableCard[]) {
		this._cards = value;
	}
    

}

export {Hand}