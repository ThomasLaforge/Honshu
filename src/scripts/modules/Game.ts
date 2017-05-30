// imports
    import { PlayableCard }          from './PlayableCard';
    import { Player }                from './Player';
    import { PlayableCardDeck }      from './PlayableCardDeck';
    import { Timer }                 from './Timer';
    import { Bonus }                 from './Bonus';
    import { Grid }                  from './Grid';
    import { Hand }                  from './Hand';
    import { HonshuMap }             from './HonshuMap';
    import { DRAW__DEFAULT_NB_CARD } from './Honshu';
// -------

class Game {

	private _players: Player[]; 
    private _playableCardDeck: PlayableCardDeck;
    private _timer: Timer;
    private _bonus: Bonus;

	constructor(bonus: Bonus = null, autostart = true) {
        if(autostart){ 
            // this.start();
        }
        this.playableCardDeck = new PlayableCardDeck();
        this.players = [ new Player('Thomas') ]
        this.draw();
    }

    // State //
    start(){
        this.timer.start();
    }

    // PlayableCardDeck //
    draw(nbCardToDraw = DRAW__DEFAULT_NB_CARD){
        this.players.forEach( p => {
            let drawedCards = this.playableCardDeck.drawCards(nbCardToDraw);
            p.hand.addNewCards(drawedCards);
        })
    }

    play(p: Player, card: PlayableCard, x: number, y: number){
        
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
	public get playableCardDeck(): PlayableCardDeck {
		return this._playableCardDeck;
	}
	public set playableCardDeck(value: PlayableCardDeck) {
		this._playableCardDeck = value;
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
