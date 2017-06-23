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
    import { HighScores }             from './HighScores'
// -------

export abstract class Game {

	private _players?: Player[];
	private _player?: Player;
    private _turn: number;
    private _playableCardDeck: PlayableCardDeck;
    private _timer: Timer;
    private _bonus: Bonus;
    private _highscores: HighScores;

	constructor(p: Player | Player[], bonus: Bonus = null, autostart = true) {
        if(autostart){ 
            // this.start();
        }
        if(Array.isArray(p)){
            this.players = p
        }
        else{
            this.player = p
        }
        this.turn = 1
        this.highscores = new HighScores()
        this.playableCardDeck = new PlayableCardDeck();
        this.draw();
    }

    // State //
    start(){
        this.timer.start();
    }

    abstract isFinished() : boolean
    abstract closeGame() : void

    // PlayableCardDeck //
    abstract draw(nbCardToDraw?: number) : void
    abstract play(card: PlayableCard, row: number, col: number, x: number, y: number, p?: Player ): void

    // Hand //s


// Getters / Setters

	public get players(): Player[] {
		return this._players;
	}
	public set players(value: Player[]) {
		this._players = value;
	}
    public get player(): Player {
		return this._player;
	}
	public set player(value: Player) {
		this._player = value;
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
    public get highscores(): HighScores {
		return this._highscores;
	}
	public set highscores(value: HighScores) {
		this._highscores = value;
	}
    public get turn(): number {
		return this._turn;
	}
	public set turn(value: number) {
		this._turn = value;
	}
	public get bonus(): Bonus {
		return this._bonus;
	}
	public set bonus(value: Bonus) {
		this._bonus = value;
	}

//------------------- 

}