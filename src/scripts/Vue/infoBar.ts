import { ResourceType } from '../modules/Honshu'

let template = `
<div class="infobar">
    <div class="info">
        <div class="info-title info-title-score">Scores</div>
        <div class="info-value info-value-score">Total : {{ scores.total }}</div>
        <div class="info-value info-value-score">Forest : {{ scores.forest }}</div>
        <div class="info-value info-value-score">Lake : {{ scores.lake }}</div>
        <div class="info-value info-value-score">Cities : {{ scores.cities }}</div>
        <div class="info-value info-value-score">Resources : {{ scores.resources }}</div>
        <div>Resources</div>
        <div>Pierre : {{ stoneStock }}</div>
        <div>Or : {{ goldStock }}</div>
        <div>Poisson : {{ fishStock }}</div>
        <div>Fer : {{ ironStock }}</div>
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
