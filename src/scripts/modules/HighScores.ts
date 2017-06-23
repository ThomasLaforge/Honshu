import { GlobalScoresInterface } from './HonshuMap'

import * as _ from 'lodash'

export interface HighScoreElt {
    date: number
    scores: GlobalScoresInterface
    name: string
}


export class HighScores {

    private _highscores : HighScoreElt[]

    constructor(){
        // Get highscores from localStorage
        let highscores: HighScoreElt[];
        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            highscores = JSON.parse(localStorage.getItem("highscores"));
        }
        this._highscores = highscores || [];
    }

    save(){
        localStorage.setItem('highscores', JSON.stringify(this.highscores))
    }

    sort(betterFirst = true){
        this.highscores = _.sortBy(this.highscores, ['score', 'date'])
        if(betterFirst){
            this.highscores = this.highscores.reverse();
        }
    }

    add(highscore: HighScoreElt){
        // TODO : Check integrity
        this.highscores.push(highscore)
        this.save()
    }

    public get highscores(): HighScoreElt[] {
		return this._highscores;
	}
	public set highscores(value: HighScoreElt[]) {
		this._highscores = value;
	}
}