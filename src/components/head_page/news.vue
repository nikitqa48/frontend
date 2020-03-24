<template>

                  <div class="news">
                     <div class="overlay"></div>
                     <div class="opacity"></div>
            <div class="news_container">
                <h3 class="news_head">Новости</h3>    
            <div class="itms">
        
                <div class = "item1">
                  <div class="image">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[0].title}}
                  </div>
                  <img :src="news[0].image">
                  </div>
                 
                </div>
           
                <div class="item_container">
                  
                <div class="item2">
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[1].title}}
                  </div>
                    <img :src="news[1].image">
                  </div>
                </div>
            <div class="item2">
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[2].title}}
                  </div>
                    <img :src="news[2].image">
                  </div>
                </div>
                <!-- <router-link :to="{name: 'detail', params: { id: news[3].id}}"> -->
                <div class="item2">
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[3].title}}
                  </div>
                    <img :src="news[3].image">
                  </div>
                </div>
           
                
                      <div class="item2">
                  <div class="image2">
                    <div class="dark"></div>
                       <div class="title">
                      {{news[4].title}}
                  </div>
                    <img :src="news[4].image">
                  </div>
                </div>
        
                </div>
             

                <!-- <div class="itm" v-for="item in news" >
                
                    <div class="itm_img"><img :src= item.image></div>
                  
                <div class="itm_but">
        
                    <p class="itm_data">{{item.created}}</p>
                    <p class="itm_header"><b>{{item.title}}</b></p>
                    
                    <p class="itm_text">
                      {{item.body}}
                {{item}}
                               <router-link :to="{name: 'detail', params: { id: item.id}}"><button class="podrobnee" @click=" splitWord(item.body)">Подробнее</button>  </router-link>
                    </p>
                </div>
                </div> -->
                <div class="all">
                   <button class="more">
              Показать все новости
            </button>
                </div>
            </div>
         
            </div>
        </div>
</template>

<style scoped>

.item_container{
  align-self: flex-end;
  width:45%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.news{
  height: 100vh;
  color:white;
}
.item2{
  border-radius: 5px;
  cursor:pointer;
  margin-left: 2%;
  width:48%;
}
.item2:nth-child(3){
  
  margin-top: 2%;
  width:48%;
}
.all{
margin-top: 3%;
width:100%;
display: flex;
justify-content: center;
}
.more{
border:none;
border-radius: 5px;
background:#52A4DF;
color:white;
cursor: pointer;
width:14vw;
font-size: 0.8vw;
height:5vh;
}
.item2:nth-child(4){

  margin-left: 2%;
  margin-top: 2%;
  width:48%;
}
.news_head{
  z-index: 1;
  margin-top: 7%;
  font-weight: 900;
  font-size: 2.3vw;
  text-align: center;
}
.image2{
  border-radius: 5px;
  height:22vh;
  position: relative;
  width:100%;
}
.image2 img{
  border-radius: 5px;
  width:100%;
  height:100%;
}
.overlay {
  background: url('/statics/image/OEZ.png');
  background-size: cover;
  position: absolute;
  height: 100vh;
  filter: blur(2px);
  z-index: 0;
  width: 100%;
}
.opacity{
 background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  position: absolute;
  height: 100vh;
  filter: blur(2px);
  z-index: 0;
  width: 100%;
}
.dark{
  border-radius: 5px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  width:100%;
  z-index: 0;
}
.item1{
  border-radius: 5px;
  cursor:pointer;
  margin-left: 6%;
  z-index: 1;
  width:46%;
}

.itms{
  margin-top: 1%;
  z-index: 1;
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

.news_container{
    z-index: 1;
    width:95%;
    height: 70%;
    border:1px solid red;
    margin:0 auto;
    display: flex;
    flex-direction: column;
}

.itm_img img{
  height:100%;
}
.image{
  border-radius: 5px;
 position: relative;
  height: 45.8vh;
  width:100%;
}
.title{
  bottom:30%;
  margin-left: 2%;
  position: absolute;
}
.image img{
 
  
  width:100%;
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
  components:{
  
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
      .then(data => (this.news = data))
  },
}

</script>