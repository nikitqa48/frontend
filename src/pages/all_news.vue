<template>
    <div class="news">

    <q-scroll-area
      style="height:94.8vh; max-width: 100%;"
    :thumb-style="thumbStyle"
    >

     <div class="wrapper">
         <h4> Новости </h4>
         <div class="items">


   
       <!-- <q-virtual-scroll
    class="virtual_scroll"
    type="table"
    :items-size="size"
    :items-fn="getItems"
    

  
  >
    <template v-slot="{ item, index }"> -->
     
       <div class = "item2" v-for ='item in news'>  
  
          <router-link :to="{name: 'detail', params: { id: item.id}}" class="rout"> 
                
                      <q-card class="image2">
      <q-img
        :src="item.image"
        style="height:100%"
        spinner-color="white"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
         {{item.title}}
        </div>
      </q-img>
    </q-card>
                  </router-link>
    
     
        </div>
      </div>
    <!-- </template>
  </q-virtual-scroll> -->
  
              
         </div>
           <div class="q-pa-lg flex flex-center">
  </div>
     
    
    </q-scroll-area>
    </div>
</template>
<style scoped>
  @media screen and (max-width: 800px) {
    .items{
      flex-direction: column!important;
    }
    .item2{
      width: 100%!important;
      margin-left: 0!important;
      margin-bottom: 2%!important;
    }
    .item2 a{
      font-size: 3.5vw!important;
    }
  }
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat';
}
.items{
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    height:100%;
}
.news_image{
    width:100%;
    height:100%;
    padding-bottom: 2vh;
}
.title{
  bottom:55%;
  margin-left: 2%;
  position: absolute;
}

.news_image img{
    height:100%;
    width:100%;
}
.item2{
  border-radius: 5px;
  cursor:pointer;
  margin:1%;
  width:22.3%;

}
.item2 a {
    color:white;
    text-decoration: none;
    font-size: 1vw;
    height:100%;
    width:100%;
}
.image2{
  border-radius: 5px;
  height:100%;
  position: relative;
  width:100%;
}
.dark{
  border-radius: 5px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  width:100%;
  z-index: 0;
}
.dark:hover{
  background:rgba(255, 255, 255, 0);
}
.image2 img{
  border-radius: 5px;
  width:100%;
  height:100%;
}
.news{
    height: 100%;
    background: #3A4566;
}

.wrapper{

    width:90%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction: column;
}
.wrapper h4{
    align-self: center;
    color:white;
    font-weight: 600;
}
.bottom{
    width:70%;
    margin:0 auto;
    color:white;
    font-size: 0.8vw;
    padding-bottom: 4vh;
}
.arrow{
    margin:0;
    width: 10%;
}
.all_news{
    align-items: center;
   
    display: flex;
    width:20%;
    }
.arrow img{
    width:100%;
}
.top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width:40%;
}
.virtual_scroll{
  width:100%;
  background:none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border:1px solid red;
}
.top h5 {
    margin-top: 1.2vh;
    margin-bottom: 2vh;
    color:white;
    font-weight: 600;
    font-size: 1.1vw;
}
.all_news__text{
    font-size: 0.8vw;
    margin-left:0.5vw;
    color:#808080;
}
</style>
<script>

import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
export default {
    data(){
        return {
          news:{},
          items: 3,
          size: 0,
                thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
          

        }
    },
    components:{
        headerVue, formsVue,
        
    },
    mounted() {
    const url = "https://backendinvest.admlr.lipetsk.ru/all_news/"
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
    },
  
    methods:{
    getItems (from, size) {    
      const items = []
        for (let i = 0; i < size; i++) { 
      items.push({
        news:this.news[i]
        })
        
      }
       console.log(items)
 
      return Object.freeze(items)
        },
         clock(object){
        console.log(object)
    }
    },
   
}
</script>