// Libraries
    import * as _ from 'lodash'

// Model
    import { Game } from './modules/Game';
    let newGame  = new Game();

// Game Config

// Vue
    import { actionBar }       from './Vue/actionBar';

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
            game : newGame
        }
    },
    computed: {
        canDraw : function(){ return this.game.playerCanDraw() } 
    },
    components:{
        actionBar,
    },
    methods: {
       
    }
})

