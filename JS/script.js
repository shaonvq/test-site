new Vue({
    el:"#app",
    data:{
        title:"dong",
        radius:0,
    },
    methods:{
        clicky:function(){
            if(this.title=="frog")
                this.radius+=460;
            else
                this.radius+=15;
        } ,       
        clicky2:function(){
            if(this.title=="frog")
                this.radius-=450;
            else
                this.radius-=15;
        },
        black:function(){
            if(this.title=="")
            {
                this.title = "black";
            }
            if(this.title=="frog")
                this.radius+=40;
        },
        check:function(){
            if(this.title=="frog")
                return true;
            else
                return false;
        }
    },
})