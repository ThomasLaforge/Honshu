let template = `
<div class="grid">
    <table class="grid-table">
        <tr v-for="row in grid.grid">
            <td v-for="box in row" class="grid-box" :class="box ? 'grid-box-fill' : 'grid-box-empty'"></td>
        </tr>
    </table>

    <div class="grid-info">
        <div class="grid-info-how-many-occurence">
            Occurences : {{ howManyOccurence }}
            <br/>
            LongestChain : {{ longestChain }}
        </div>
    </div>
</div>
`

export const grid = {
    props : ['grid'],
    template : template,
    data: function(){
        return {

        }
    },
    computed : {
        howManyOccurence: function(){ return this.grid.getHowManyOccurence(); },
        longestChain: function(){ return this.grid.longestChain() }
    },
    components : {
    },
    methods: {
        drawCards : function(){
            this.$emit('draw-cards');
        }
    }
};
