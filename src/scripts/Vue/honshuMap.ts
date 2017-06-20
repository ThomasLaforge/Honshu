import { ResourceType } from '../modules/Honshu'

let template = `
<div class="grid">
    <table class="grid-table">
        <tr v-for="(row, i) in map.map">
            <td v-for="(tile, j) in row" 
                class="grid-box" 
                :class="'tile-type-' + (tile && tile.constructor.name || 'empty') + ' ' + (!map.tileIsPlayable(i, j) ? 'tile-not-playable' : '') " 
                @dragover.prevent 
                @drop="(e) => { onDropCard(e, i,j) }" 
                @dragenter="onDragEnterCard"
            >    
                <div v-if="tile && (tile.resource || tile.resource === 0)" 
                    class="tile-resource" 
                    :class="'tile-resource-' + tileResourceName(tile)" 
                />
            </td>
        </tr>
    </table>
</div>
`

export const honshuMap = {
    props : ['map', ''],
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
            return !!tile ? ResourceType[tile.resource] : 'empty'
        },
        onDropCard(e: DragEvent, x: number, y: number){
            // console.log('on drop card', x, y)
            this.$emit('add-card', x, y)
        },
        onDragEnterCard(e: DragEvent){
            // console.log('on Drag Enter card', e)
        }
    }
};
