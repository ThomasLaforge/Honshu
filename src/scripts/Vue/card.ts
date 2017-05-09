import { ResourceType } from '../modules/Honshu'

let template = `
<div class="card" draggable="true" @dragstart="onDragStart">
    <table class="card-table">
        <tr v-for="row in card.tiles">
            <td v-for="tile in row" class="grid-box" :class="'tile-type-' + tile.constructor.name">
                <div v-if="tile.resource || tile.resource === 0" class="tile-resource" :class="'tile-resource-' + tileResourceName(tile)" />
            </td>
        </tr>
    </table>
    <div class="card-value">{{card.value}}</div>
</div>
`

export const card = {
    props : ['card'],
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
        onDragStart(){
            console.log('on drag start')
        }
    }
};
