<template>
                  <div class="news">
                     <div class="overlay"></div>
                     <div class="opacity"></div>
            <div class="news_container">
                <h3 class="news_head">Новости</h3>    
            <div class="itms">
        <div class="aside">
          <div class="wrap_aside">
                <div class = "item1">
                   <router-link :to="{name: 'detail', params: { id: news[0].id}}" class="rout"> 
                  <div class="image">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[0].title}}
                  </div>
                  <img :src="news[0].image">
                  </div>
                   </router-link>
                </div>
           
                <div class="item_container">
                  
                <div class="item2">
                  <router-link :to="{name: 'detail', params: { id: news[1].id}}" class="rout"> 
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[1].title}}
                  </div>
                    <img :src="news[1].image">
                  </div>
                  </router-link>
                </div>
            <div class="item2">
              <router-link :to="{name: 'detail', params: { id: news[2].id}}" class="rout"> 
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[2].title}}
                  </div>
                    <img :src="news[2].image">
                  </div>
              </router-link>
                </div>
               
                <div class="item2">
                  <router-link :to="{name: 'detail', params: { id: news[3].id}}" class="rout"> 
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{news[3].title}}
                  </div>
                    <img :src="news[3].image">
                  </div>
                   </router-link> 
                </div>
            
                      <div class="item2">
                        <router-link :to="{name: 'news', params: { id: news[4].id}}" class="rout"> 
                  <div class="image2">
                    <div class="dark"></div>
                       <div class="title">
                      {{news[4].title}}
                  </div>
                    <img :src="news[4].image">
                  </div>
                        </router-link>
                </div>
        
                </div>
          </div>
        </div>


                <div class="all">
                  <router-link :to="{name: 'news'}" class="more" id='more'> 
                   
              Показать все новости
            
            </router-link>
                </div>

            </div>
         
            </div>
        </div>
</template>

<style scoped>

.item_container{
  align-self: flex-end;

  height: 100%;
  width:45%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.news{
  height: 100vh;
  color:white;
}

.wrap_aside{
  display: flex;
  height:100%;
}
.aside{
  display:flex;
  height:60%;
  flex-direction: row;
}
.item2{
  border-radius: 5px;
  cursor:pointer;
  height:48%;
  margin-left: 2%;
  width:48%;
}
.rout{
  width:100%;
  height:100%;
  color:white;
}
.item2:nth-child(3){
  margin-top: 2%;
  width:48%;
}
.all{
width:100%;
text-decoration: none;
display: flex;
justify-content: center;
}

body a{
  text-decoration: none;
}
.more{
border:none;
width:14%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
background:#52A4DF;
color:white;
cursor: pointer;
margin-bottom: 7%;
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
  height:100%;
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
  height:100%;
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
  height: 100%;
  width:100%;
}
.title{
  bottom:55%;
  font-size: 1vw;
  margin-left: 2%;
  position: absolute;
}
.image img{
 
  height:100%;
  width:100%;
}

</style>
<script>

export default {

  data() {
    return {
    slide: "1",
    news: {},
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