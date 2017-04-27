import { ResourceType } from '../modules/Honshu'

let template = `
<div class="grid">
    <table class="grid-table">
        <tr v-for="row in map.map">
            <td v-for="tile in row" class="grid-box" :class="'tile-type-' + tile.constructor.name">
                <div v-if="tile.resource" class="tile-resource" :class="'tile-resource-' + tileResourceName(tile)" />
            </td>
        </tr>
    </table>

    {{map.getTotalCount()}}

    <button @click="askExtraction">Extract</button>
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
        askExtraction : function(){
            this.$emit('extract');
        },
        tileResourceName: function(tile:any){
            return ResourceType[tile.resource]
        }
    }
};
