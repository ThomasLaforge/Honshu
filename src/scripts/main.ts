// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    import { Grid } from './modules/Grid';
    import { HonshuMap } from './modules/HonshuMap';
    import { ForestTile, CityTile, LakeTile } from './modules/BasicTile'
    let newGame  = new Game();

// Game Config

// Vue
    import { grid }       from './Vue/grid';
    import { honshuMap }       from './Vue/honshuMap';

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
    data: (): { } => {
        return {
            map: new HonshuMap([
                [new ForestTile(), new LakeTile(), new LakeTile() ],
                [ new LakeTile(), new ForestTile(), new ForestTile()],
                [new LakeTile(),  new LakeTile(), new ForestTile()] 
            ]),
            grid : new Grid([
                [true, true, true],
                [true, true, false],
                [true, true, false],
            ])
        }
    },
    computed: {
        canDraw : function(){ return this.game.playerCanDraw() } 
    },
    components:{
        grid,
        honshuMap
    },
    methods: {
       extract: function(){
           this.grid = this.map.extract(ForestTile.name)
       }
    }
})

