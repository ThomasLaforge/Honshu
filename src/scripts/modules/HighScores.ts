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

    add(highscore: HighScoreElt){
        // TODO : Check integrity
        this.highscores.push(highscore)
        this.save()
    }

    save(){
        localStorage.setItem('highscores', JSON.stringify(this.highscores))
    }

    getSorted(betterFirst = true){
        let highscores = _.sortBy(this.highscores, ['score', 'date'])
        return betterFirst ? highscores.reverse() : highscores;
    }

    public get highscores(): HighScoreElt[] {
		return this._highscores;
	}
	public set highscores(value: HighScoreElt[]) {
		this._highscores = value;
	}
}