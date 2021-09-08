Vue.config.devtools = true;

const root = new Vue ({
    el:"#root",
    data:{
        contatorePhoto : 0,
        photos :["./img/image1.jpg",
                "./img/image2.jpg",
                "./img/image3.jpg",
                "./img/image4.jpg",]
    },
    methods : {
        switchL: function() {
            this.contatorePhoto -=1
           if(this.contatorePhoto < 0){
            this.contatorePhoto = (this.photos.length - 1);
           } 
        },
        switchR: function() {
            this.contatorePhoto +=1;
            if(this.contatorePhoto > 0){
                this.contatorePhoto = (this.photos.length - 1);

        }
    }
})