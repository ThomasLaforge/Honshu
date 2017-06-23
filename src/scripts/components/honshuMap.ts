import { ResourceType } from '../modules/Honshu'

let template = `
<div class="grid">
    <table class="grid-table">
        <tr v-for="(row, i) in map.map">
            <td v-for="(tile, j) in row" 
                class="grid-box" 
                :class="'tile-type-' + (tile && tile.constructor.name || 'empty') + ' ' + (!map.tileIsPlayable(i, j) ? 'tile-not-playable' : '') + (cardHover(i, j) ? ' card-hover' : '') " 
                @dragover.prevent 
                @drop="(e) => { onDropCard(e, i,j) }" 
                @dragenter="(e) => { onDragEnterCard(e, i,j) }"
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
    props : { map: Object, hovercoords : Array,  withspaces: { default : false } },
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
        onDragEnterCard(e: DragEvent, x: number, y: number){
            // console.log('on Drag Enter card', e)
            this.$emit('drag-card', x, y)
        },
        cardHover(x: number, y: number){
            return this.hovercoords && this.hovercoords.filter( (obj: {x: number, y: number}) => { return obj.x === x && obj.y === y }).length === 1
        }
    }
};
