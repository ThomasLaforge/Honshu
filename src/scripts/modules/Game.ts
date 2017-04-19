// imports
    import { Player }    from './Player';
    import { Deck }      from './Deck';
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
            this.start();
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

    getCityCount(){
        let cpt = 0;
        return cpt;    
    }

    getForestCount(){
        let cpt = 0;
        return cpt;    
    }
    
    getLakeCount(){
        let cpt = 0;
        return cpt;    
    }

    getManufacturingCount(){
        let cpt = 0;
        return cpt;    
    }

    getBonusCount(){
        let cpt = 0;

        if(this.bonus){

        }

        return cpt;        
    }

    getTotalCount(){
        return this.getCityCount() + this.getForestCount() + this.getLakeCount() + this.getManufacturingCount() + this.getBonusCount();
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
