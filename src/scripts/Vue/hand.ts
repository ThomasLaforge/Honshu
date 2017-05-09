import { card } from './card'

let template = `
<div class="hand">
    <card v-for="card in hand.cards" :card="card" />
</div>
`

export const hand = {
    props : ['hand'],
    template : template,
    data: function(){
        return {

        }
    },
    computed : {
    },
    components : {
        card
    },
    methods: {
    }
};
