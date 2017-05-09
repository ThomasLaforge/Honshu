import { ResourceType } from '../modules/Honshu'

let template = `
<div class="grid" @dragover.prevent @drop="onDropCard" @dragenter="onDragEnterCard">
    <table class="grid-table">
        <tr v-for="row in map.map">
            <td v-for="tile in row" class="grid-box" :class="'tile-type-' + tile.constructor.name">
                <div v-if="tile.resource || tile.resource === 0" class="tile-resource" :class="'tile-resource-' + tileResourceName(tile)" />
            </td>
        </tr>
    </table>
</div>
`

export const honshuMap = {
    props : ['map'],
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
        onDropCard(){
            console.log('on drop card')
        },
        onDragEnterCard(){
            console.log('on Drag Enter card')
        }
    }
};
