let template = `
<div class="grid">
    <table class="grid-table">
        <tr v-for="row in map.map">
            <td v-for="tile in row">
                {{tile ? tile.constructor.name : '0'}}
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
        }
    }
};
