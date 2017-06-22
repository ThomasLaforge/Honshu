import { ResourceType } from '../modules/Honshu'
var domtoimage = require('dom-to-image');

let template = `
<div class="card" draggable="true">
    <button v-if="selected" @click="rotate(true)">rotate -></button>
    <table class="card-table" :id="'card-' + card.value" @click="clickCard">
        <tr v-for="(row, i) in card.tiles">
            <td v-for="(tile, j) in row" class="grid-box" :class="'tile-type-' + tile.constructor.name" draggable="true" @dragstart="(e) => { onDragStart(e, i, j) }">
                <div v-if="tile.resource || tile.resource === 0" class="tile-resource" :class="'tile-resource-' + tileResourceName(tile)" />
            </td>
        </tr>
    </table>
    <button v-if="selected" @click="rotate(false)">rotate -></button>    
    <div class="card-value">{{card.value}}</div>
</div>
`

export const card = {
    props : ['card', 'selected'],
    template : template,
    data: function(){
        return {
        }
    },
    computed : {
    },
    components : {
    },
    methods: {
        tileResourceName: function(tile:any){
            return ResourceType[tile.resource]
        },
        onDragStart(e: DragEvent, i: number, j: number){
            // console.log('on drag start', i, j)
            this.$emit('select-card', this.card, i, j)
            let node = document.getElementById('card-' + this.card.value);
            let tileWidth = 22;
            e.dataTransfer.setDragImage(node, tileWidth * j + j*tileWidth / 2 + tileWidth, tileWidth * i + i * tileWidth / 2 + tileWidth)
        },
        clickCard(){
            this.$emit('click')
        },
        rotate(clockwise: boolean){
            this.card.rotate(clockwise)
        }
    }
};
