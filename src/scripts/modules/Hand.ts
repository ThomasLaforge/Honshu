import {Card} from './Card'

class Hand {
    
    private _cards:Array<Card>;

	constructor(cards: Array<Card> = []) {
		this._cards = cards;
	}

	addNewCard(cards:Card|Array<Card>){
		if(!Array.isArray(cards)){
			cards = [cards]	
		}
		cards.forEach(c => {
			this.cards.push(c)
		})
	}

	getNbCards(): number {
		return this.cards.length
	}

	public get cards(): Array<Card> {
		return this._cards;
	}

	public set cards(value: Array<Card>) {
		this._cards = value;
	}
    

}

export {Hand}