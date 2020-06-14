<template>
    <div class="news">
     <header-vue/>
     <div class="wrapper">
         <div class="top">
             <router-link :to="{name: 'news' }" class="rout"> 
             <div class="all_news">
                 <div class="arrow">
                 <img src="/statics/image/detail_arrow.png">
                 </div>
                 <span class = 'all_news__text'> Все новости</span>
             </div>
             </router-link>             
             <h5>{{news.title}}</h5>
             <div class="news_image">
                 <img :src="news.image">
             </div>
         </div>
         <div class='bottom'>
             {{news.body}}
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
.news_image{
    width:100%;
    height:100%;
    padding-bottom: 2vh;
}
body a{
    text-decoration: none;
}
.news_image img{
    height:100%;
    width:100%;
}
.news{
    min-height:100vh;
    background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%);
}

.wrapper{
    padding-top: 4%;
    width:100%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction: column;
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
export default {
    data(){
        return {
          news:{}  
        }
    },
    components:{
        headerVue
    },
    mounted() {
    const url = "https://backendinvest.admlr.lipetsk.ru/news/detail/"+this.$route.params.id+'?format=json';
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
    }
}
</script>