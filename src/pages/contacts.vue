<template>
<div>
<q-scroll-area
      style="height:100vh; max-width: 100%;"
      
      :thumb-style="thumbStyle"
    >
    <div class="wrapper">
<header-vue />
  <forms-vue/>       
    <div class="container">
        <h4> Контакты </h4>
             <div class="perekrestok" v-for="item in contact">
   <div class="wrap">
    <span class = 'text'> {{item.position}}</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="image">
        <img :src="item.image">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
           {{item.name}}
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            {{item.phone}}
        </span>
    </div>
             <!-- <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            {{item.position}}
        </span>
    </div> -->
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
          {{item.email}}
        </span>
    </div>
    </div>
   </div>
             </div>
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
    </div>

 
  </div>
    
    </q-scroll-area>
    </div>
                 

              



</template>
<style scoped>
.button {
  border: 1px solid white;
  border-radius: 15px;
}
.border{
    width:100%;
    border-bottom: 1px solid white;
}
.image{
    margin-top: 1vh;
    border-radius: 5px;
    width:13%;

}
.photo{
    margin-top: 1vh;
    border-radius: 5px;
    width:6%;
}
.photo img{
    width:100%;
    border-radius: 5px;
    height: 100%;
}
.fio{
    font-size: 1vw;
    color:#56718A;
}
.name{
    color:white;
    opacity:.8; 
    font-size: 1vw;
}

.inside_parent{
    display: flex;
    flex-direction: column;
    width:30%;
    margin-left: 1.2vw;
    margin-top: 2vh;
    padding-bottom: 3vh;
}


.image img{
    width:100%;
    border-radius: 5px;
    height: 100%;
}
body a{
  color:white;
  text-decoration: none;
  margin:0;
  padding:0;
}
.parent{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.but{
  align-self: flex-end;
  margin-right: 15%;
}
.wrapper{
  display:flex;
  margin-right: 10%;
  padding-bottom: 5%;
  flex-direction: column;
}
.item_name{
  padding-left: 1vw;
  padding-top: 2vh;
  font-size: 1vw;
}

.grey{
  color:#56718A;
  margin: 2vh;
  font-size: 0.8vw;
}
.poluch{
  color:#C9C9C9;
  font-size: 0.8vw;
  margin: 2vh;
}
.text{
    font-weight: 600;
    margin-top: 2.2vh;
  font-size: 1.1vw;
  letter-spacing: 0.02vw;
  opacity:.8;
}
.items{
  display: flex;
  flex-direction: column;
}
.border{
  margin-top: 1vh;
  opacity:.5;
  margin-bottom: 0.12vh;
  border-bottom:1px solid #3D455B;
}
.more{
  border:none;
  outline: none;
  cursor: pointer;
  background:#52A4DF;
  align-self: flex-end;
  color:white;
  font-size: 0.8vw;
  border-radius: 5px;
  margin-right: 2%;
  height:3.5vh;
  width:6vw;
}
.item{
  background:rgba(35, 46, 75, 0.7);
  display: flex;
  padding-top: 2vh;
  margin-top: 5vh;
  flex-direction: column;
  width:100%;
  margin-bottom: 2vh;
 
}
.perekrestok{
background:rgba(35, 46, 75, 0.7);
padding-bottom: 2vh;
margin-top: 1vh;
margin-bottom: 0.5vh;
  align-self: center;
  display: flex;
  flex-direction: row;
  min-width:100%;
  justify-content: space-between;

}
.left {
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 50%;
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}
.wrap{
  padding-left: 0.5vw;
  display:flex;
  font-size: 0.8vw;
  flex-direction: column;
}
.wrap select {
  margin-top: 0.3vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("/statics/image/select.png");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
  background-size: 2vh;
  color: white;
  border: 1px solid #dfdfdf;
  min-height: 3vh;
  width:100%;
  outline: none;
  border-radius: 5px;
  padding-right: 2vw;
  padding-left: 2%;
}

.wrap select option{
  color:black;
}
.select-selected{
  color:white;
}
.select-selected:after{
  color:white;
}

.blue_container{
  width:100%;
  height:10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sposob{
  display:flex;
  flex-direction: row;
}
.title {
  font-size: 4.5vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
  margin-left: 2%;
}
.wrapper {
  min-height:100vh;
  width: 100%;
    background: #3A4566;;
  display: flex;
}
.left_content {
  margin-top: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
  width: 83%;
  margin:0 auto;
  color: white;
}
.container h4{
    margin-top: 14vh;
    font-size: 2.25vw;
    letter-spacing: 0.1vw;
    margin-bottom: 4vh;
    font-weight: 600;
}

.container li {
  cursor: pointer;
  font-size: 0.8vw;
  width: 30%;
  list-style: none;
}
.container_image {
  margin-left: 5%;
  height: 10vh;
}
.container_image img {
  height: 100%;
}
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat';
}

</style>


<script>
import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
  export default {
    name: 'App',
    components: {
     headerVue, formsVue
    },
    data(){
      return{
          thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        width: '10px',
        opacity: 0.5
      }
      }
    },
      mounted(){
        this.$store.dispatch('allContactData')
       
      },
      computed:{
        contact(){
          return this.$store.getters.contact
        }
      }
  }
</script>
