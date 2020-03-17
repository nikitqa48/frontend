<template>
                  <div class="news">
            <div class="news_container">
                <h2 class="news_head">Новости</h2>
            <div class="itms">
                
                <div class="itm" v-for="item in news" >
                
                    <div class="itm_img"><img :src= item.image></div>
                  
                <div class="itm_but">
        
                    <p class="itm_data">{{item.created}}</p>
                    <p class="itm_header"><b>{{item.title}}</b></p>
                    
                    <p class="itm_text">
                      {{item.body}}

                               <router-link :to="{name: 'detail', params: { id: item.id}}"><button class="podrobnee" @click=" splitWord(item.body)">Подробнее</button>  </router-link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>
<style scoped>
.news{
  height: 100vh;
  background:url('/statics/image/OEZ.png');
  background-size: cover;
  color:white;
}
.itms{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.podrobnee{
    border-radius: 5px;
    border: 1px solid #5C7BA5;
    background:none;
    cursor: pointer;
}
.itm{
    overflow: hidden;
    margin-top: 3vh;
    margin-left: 2vw;
    border-radius: 5px 5px 0px 0px;
    width:20%;
    display: flex;
    flex-direction: column;
}
.news_container{
    width:95%;
    display: flex;
    flex-direction: column;
    margin:0 auto;
}
.itm_img{
  height:30vh;
}
.itm_img img{
  height:100%;
}
.image{
  height:11vh;

}
.itm_but{
    display:flex;
    flex-direction: column;
    padding-left: 1vw;
    padding-bottom: 1vh;
    background:white;
}
.itm_data{
    color: #7C7C7C;
}
.itm_header{
    color: #2B2B2B;
}
.itm_text{
    overflow: hidden;
    height:6vh;
    color: #7C7C7C;
}
</style>
<script>
export default {
  data() {
    return {
      slide: "1",
      news: null,
      news_text:null,
    };
  },
  methods: {
  //     splitWord(array){      
  //       let body = []
  //       let bodytext = []
  //       for (let i = 0; i<array.length; i++) { 
  //         if (array[i].body.split(' ').length > 10){
            
  //           body = array[i].body.split(' ')
  //           array[i].body = body
  //           console.log(body)
  //          for (let b=0 ; b<10; b++){
  //            bodytext.push(array[i].body[b].toString().replace(/,/g,' '))
  //          }
  //          array[i].body = bodytext
  //          console.log(array[i].body.toString())
  //         }       
  //       }
  //  } 
  },
  mounted() {
    const news_url = "http://127.0.0.1:8000/news/?format=json";

    fetch(news_url)
      .then(response => response.json())
      .then(data => (this.news = data)).then(data =>(this.splitWord(data)));

  },
}

</script>