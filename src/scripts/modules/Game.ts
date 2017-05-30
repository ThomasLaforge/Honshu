// imports
    import { Player }    from './Player';
    import { Deck }      from './Deck';
    import { Card }      from './Card';
    import { Timer }     from './Timer';
    import { Bonus }     from './Bonus';
    import { Grid }      from './Grid';
    import { Hand }      from './Hand';
    import { HonshuMap } from './HonshuMap';
    import { DRAW__DEFAULT_NB_CARD } from './Honshu';
// -------

class Game {

	private _players: Player[]; 
    private _deck: Deck;
    private _timer: Timer;
    private _bonus: Bonus;

	constructor(bonus: Bonus = null, autostart = true) {
        if(autostart){ 
            // this.start();
        }
    }

    // State //
    start(){
        this.timer.start();
    }

    // Deck //
    draw(nbCardToDraw = DRAW__DEFAULT_NB_CARD){
        this.players.forEach( p => {
            let drawCards = this.deck.drawCards(nbCardToDraw);
            p.hand.addNewCards(drawCards);
        })
    }

    play(p: Player, card: Card, x: number, y: number){
        
    }

    // Hand //
    switchHands(clockwise = true){
        // save
        let hands: Hand[] = [];
        this.players.forEach( p => {
            hands.push(p.hand);
        })

        // modify
        let handToSavePosition = clockwise ? hands.length - 1 : 0 
        let handToSave = hands[handToSavePosition];
        hands.splice(handToSavePosition, 1);
        hands.splice(clockwise ? 0 : hands.length, 0, handToSave);

        // re integrate on player collection
        this.players.forEach( (p, index) => {
            p.hand = hands[index];
        })
    }

// Getters / Setters

	public get players(): Player[] {
		return this._players;
	}
	public set players(value: Player[]) {
		this._players = value;
	}
	public get deck(): Deck {
		return this._deck;
	}
	public set deck(value: Deck) {
		this._deck = value;
	}
	public get timer(): Timer {
		return this._timer;
	}
	public set timer(value: Timer) {
		this._timer = value;
	}
	public get bonus(): Bonus {
		return this._bonus;
	}
	public set bonus(value: Bonus) {
		this._bonus = value;
	}

//------------------- 
    

}

export { Game }
