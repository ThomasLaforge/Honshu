// imports
    import { PlayableCard }          from './PlayableCard';
    import { Player }                from './Player';
    import { PlayableCardDeck }      from './PlayableCardDeck';
    import { Timer }                 from './Timer';
    import { Bonus }                 from './Bonus';
    import { Grid }                  from './Grid';
    import { Hand }                  from './Hand';
    import { HonshuMap }             from './HonshuMap';
    import { DRAW__DEFAULT_NB_CARD, NB_TURN } from './Honshu';
    import { Game } from './Game'
    import { HighScoreElt } from './HighScores'
    
// -------

export class GameSolo extends Game {

	constructor(p: Player = new Player('Invité'), bonus: Bonus = null, autostart = true) {
        super(p, bonus, autostart);
    }

    isFinished(){
        return this.turn > NB_TURN
    }

    closeGame(){
        this.highscores.add({
            name: this.player.pseudo,
            date: Date.now(),
            scores: this.player.map.getScores()
        })
    }

    draw(nbCardToDraw = DRAW__DEFAULT_NB_CARD){
        let drawedCards = this.playableCardDeck.drawCards(nbCardToDraw);
        this.player.hand.addNewCards(drawedCards);
    }

    play(card: PlayableCard, row: number, col: number, x: number, y: number){
        let map = this.player.map;
        let hand = this.player.hand;
        if( map.addCard(card, row, col, y, x) ) {
            hand.removeCards(card)
        }
        if( hand.lenght() === DRAW__DEFAULT_NB_CARD / 2 ){
            hand.reset();
            console.log(DRAW__DEFAULT_NB_CARD / 2, hand.lenght())
            this.draw(DRAW__DEFAULT_NB_CARD / 2);
        }
        else if( hand.lenght() === 0) {
            this.turn++
            if(this.isFinished()){
                this.closeGame()
            }
            else{
                this.draw(DRAW__DEFAULT_NB_CARD)            
            }
        }
    }

// Getters / Setters

//------------------- 
    

}