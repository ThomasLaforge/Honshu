import { ResourceType } from '../modules/Honshu'

let template = `
<div class="infobar">
    <div class="info">
        <table>
            <caption class="info-title info-title-score">Scores</caption>
            <tr>
                <th class="info-value info-value-score">Forest</th>
                <th class="info-value info-value-score">Lake</th>
                <th class="info-value info-value-score">Cities</th>
                <th class="info-value info-value-score">Resources</th>
                <th class="info-value info-value-score">Total</th>
            </tr>
            <tr>
                <td>{{ scores.forest }}</td>
                <td>{{ scores.lake }}</td>
                <td>{{ scores.cities }}</td>
                <td>{{ scores.resources }}</td>
                <td>{{ scores.total }}</td>
            </tr>
        </table>

        <table>
            <caption>Resources</caption>
            <tr>
                <th>Pierre</th>
                <th>Or</th>
                <th>Poisson</th>
                <th>Fer</th>
            </tr>
            <tr>
                <td>{{ stoneStock }}</td>
                <td>{{ goldStock }}</td>
                <td>{{ fishStock }}</td>
                <td>{{ ironStock }}</td>
            </tr>
    </div>
</div>
`

export const infoBar = {
    props : ['scores', 'resources'],
    template : template,
    data: function(){
        return { 

        }
    },
    computed : {
        fishStock : function() { return this.resources[ResourceType.Fish]},
        goldStock : function() { return this.resources[ResourceType.Gold]},
        ironStock : function() { return this.resources[ResourceType.Iron]},
        stoneStock : function() { return this.resources[ResourceType.Stone]},
    },
    components : {
    },
    methods: {
    }
};
