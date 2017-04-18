let template = `
<div class="actionbar">
    <button 
        @click="drawCards" 
        :disabled="!canDraw"
        class="actionbar-button"
    >
        {{ $t('actions.button.draw_card') }}
    </button>
    <!-- <button>{{$t('actions.socketio_message.dont_play_on_stack')}}</button> -->
    <!-- <button>{{$t('actions.socketio_message.no_big_steps')}}</button> -->
</div>
`

const actionBar = {
    props : ['canDraw'],
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
        drawCards : function(){
            this.$emit('draw-cards');
        }
    }
};

export { actionBar }