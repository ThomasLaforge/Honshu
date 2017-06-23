// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { PlayableCard } from './modules/PlayableCard';
    import { Player } from './modules/Player';
    import { Grid } from './modules/Grid';
    import { HonshuMap } from './modules/HonshuMap';
    import { ResourceType } from './modules/Honshu';
    import { ManufacturingTile } from './modules/ManufacturingTile';
    import { ProductionTile } from './modules/ProductionTile';
    import { ForestTile, CityTile, LakeTile, FieldTile } from './modules/BasicTile'
    let newGame  = new Game();
    let player = newGame.players[0]

// Game Config

// Vue
    import { grid }       from './components/grid';
    import { honshuMap }  from './components/honshuMap';
    import { infoBar }    from './components/infoBar';
    import { hand }       from './components/hand';

// VueIt8n
    // import * as VueI18n from 'vue-i18n'
    // Vue.use(VueI18n)
    // Vue.config.lang = 'fr'
    // import {locales} from './locales'
    // Object.keys(locales).forEach(function (lang) {
    //     Vue.locale(lang, locales[lang])
    // })

// Main
let app = new Vue({
    el: '#app',
    data: (): { game: Game, map: HonshuMap, player: Player, dragdrop: any, hovercoords : { x: number, y: number}[] } => {
        return {
            game : newGame,
            map : newGame.players[0].map,
            player: newGame.players[0],
            dragdrop: {},
            hovercoords : []
        }
    },
    computed: {
    },
    components:{
        honshuMap,
        hand,
        infoBar
    },
    methods: {
        selectCard(card: PlayableCard, i: number, j: number) {
            this.dragdrop.card = card;
            this.dragdrop.i = i;
            this.dragdrop.j = j;
        },
        dragCard(x: number, y: number){
            this.hovercoords = this.player.map.getCellsUnderCard(this.dragdrop.card, this.dragdrop.i, this.dragdrop.j, y, x)
        },
        addCard(x: number, y: number){
            this.game.play(this.game.players[0], this.dragdrop.card, this.dragdrop.i, this.dragdrop.j, y, x)
        }
    }
})

