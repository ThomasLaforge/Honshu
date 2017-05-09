let template = `
<div class="infobar">
    <div class="info">
        <div class="info-title info-title-score">Score</div>
        <div class="info-value info-value-score">{{score}}</div>
    </div>
</div>
`

export const infoBar = {
    props : ['score', 'player'],
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
    }
};
