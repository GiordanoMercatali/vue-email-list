const {createApp} = Vue;

createApp({
    data(){
        return{
            mailList: [],
            
        };
    },

    methods:{
        getEmails: function(){
            for(let i = 0; i < 10; i++){
                axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp)=>{
                console.log(resp.data.response);
                this.mailList.push(resp.data.response);
                console.log(this.mailList);
            })
            console.log(this.mailList[i]);
            }
            return this.mailList;
        }
    },

    created(){
        // axios
        //     .get("https://flynn.boolean.careers/exercises/api/random/mail")
        //     .then((resp)=>{
        //         this.mailList[0] = resp.data.response;
        //         console.log(this.mailList[0]);
        //     })

        this.getEmails();
    },


}).mount("#app");