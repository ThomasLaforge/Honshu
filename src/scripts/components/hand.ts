import { card } from './card'
import { PlayableCard } from '../modules/PlayableCard'
let template = `
<div class="hand">
    <card v-for="(card, key) in hand.cards" 
        :class="selectedCardIndex === key && 'selected-card'"
        :key="key"
        :card="card"
        @click="selectACard(key)"
        @select-card="selectCard"
        :selected="selectedCardIndex === key"
    />
</div>
`

export const hand = {
    props : ['hand'],
    template : template,
    data(): { selectedCardIndex: number }{
        return {
            selectedCardIndex : null
        }
    },
    computed : {
    },
    components : {
        card
    },
    methods: {
        selectCard(card: PlayableCard, i: number, j: number){
            // console.log('hand emit select card', card, i, j)
            this.$emit('select-card', card, i, j)
        },
        selectACard(key: number){
            this.selectedCardIndex = key === this.selectedCardIndex ? null : key
        }
    }
};
