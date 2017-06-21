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
    console.log(player)

// Game Config

// Vue
    import { grid }       from './Vue/grid';
    import { honshuMap }       from './Vue/honshuMap';
    import { infoBar }       from './Vue/infoBar';
    import { hand }       from './Vue/hand';

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
    data: (): { map: HonshuMap, player: Player, dragdrop: any } => {
        return {
            map: new HonshuMap([
                [new ForestTile(), new ManufacturingTile(ResourceType.Fish), new LakeTile() ],
                [ new FieldTile(), new ForestTile(), new ProductionTile(ResourceType.Fish)],
                [new LakeTile(),  new LakeTile(), new CityTile()] 
            ]),
            player: player,
            dragdrop: {}
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
        selectCard(card: PlayableCard, i: number, j: number){
            this.dragdrop.card = card;
            this.dragdrop.i = i;
            this.dragdrop.j = j;
        },
        addCard(x: number, y: number){
            this.dragdrop.x = x
            this.dragdrop.y = y
            this.map.addCard(this.dragdrop.card, this.dragdrop.i, this.dragdrop.j, this.dragdrop.x, this.dragdrop.y)
        }
    }
})

