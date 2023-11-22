const {createApp} = Vue;

createApp({
    data(){
        return{
            mailList: [],
            isLoading: false,
        };
    },

    methods:{
        getEmails: function(){
            this.mailList = [];
            this.isLoading = true;
            for(let i = 0; i < 10; i++){
                axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp)=>{
                console.log(resp.data.response);
                this.mailList.push(resp.data.response);
                console.log(this.mailList);

                if(this.mailList.length === 10){
                        this.isLoading = false;
                    }
                })
            console.log(this.mailList[i]);
            }
            return this.mailList;
        } 
    },

    created(){
        // this.getEmails();
    },


}).mount("#app");