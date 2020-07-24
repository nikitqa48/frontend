<template>
    <div class="news">
     <header-vue/>
     <forms-vue/>
     <div class="wrapper">
         <h4> Новости </h4>
         <div class="items">
         <div class = "item2" v-for="item in news">              
                  <router-link :to="{name: 'detail', params: { id: item.id}}" class="rout"> 
                  <div class="image2">
                     <div class="dark"></div>
                       <div class="title">
                      {{item.title}}
                  </div>
                    <img :src="item.image">
                  </div>
                  </router-link>
         </div>
         </div>
           <div class="q-pa-lg flex flex-center">
  </div>
     </div>
    </div>
</template>
<style scoped>
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
  height:100%;
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
    min-height:100vh;
    background: #3A4566;
}

.wrapper{
    padding-top: 4%;
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
          items: 3  
        }
    },
    components:{
        headerVue, formsVue
    },
    mounted() {
    const url = "https://backendinvest.admlr.lipetsk.ru/all_news/"
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
    }
}
</script>