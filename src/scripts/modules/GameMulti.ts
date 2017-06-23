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
    import { Game } from './Game';
// -------

export class GameMulti extends Game{

	constructor(players: Player[], bonus: Bonus = null, autostart = true) {
        super(players, bonus, autostart)
    }

    isFinished(){
        return false
    }

    closeGame(){
        
    }

    // PlayableCardDeck //
    draw(nbCardToDraw = DRAW__DEFAULT_NB_CARD){
        this.players.forEach( p => {
            let drawedCards = this.playableCardDeck.drawCards(nbCardToDraw);
            p.hand.addNewCards(drawedCards);
        })
    }

    play(card: PlayableCard, row: number, col: number, x: number, y: number, p: Player){
        let player = this.players[0]
        if( player.map.addCard(card, row, col, y, x) ) {
            let drawedCards = this.playableCardDeck.drawCards(1);            
            player.hand.addNewCards(drawedCards)
            player.hand.removeCards(card)
        }
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

//------------------- 
    

}