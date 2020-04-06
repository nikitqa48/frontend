<template>
    <div>
        <div class="overlay"></div>
        <div class="wrap">
            <div class="container">
                <div class="back">
                    <div class = 'arrow_back'>
                  <img class="arrow" src="statics/image/arrow_back.svg">
                    </div>
                     <p>Вернуться назад </p>
                     </div>
            <div class="inside_wrap">
                    <div class="img">
                        <img src="statics/image/indus.png">
                    </div>
                    <h2> Поддержка проектов <br>промышленной отрасли</h2>
                </div>
                    <q-form @submit="onSubmit" class="form">
        <q-input standout="bg-grey-1" outlined v-model="text" label="Название меры поддержки" label-color="grey-6" outlined class="out" />
        <div class="search">
           <div class="search_img" @click="onSubmit">
               <img src="statics/image/search.svg">
           </div>
        </div>
    </q-form>
   
                    <div class = 'items'>

  <q-virtual-scroll
    style="max-height: 300px; overflow-x: hidden"
    :items-size="size"
    :items-fn="getItems"
    :virtual-scroll-item-size="78"
    separator
  >
    <template v-slot="{ item, index }">
      <async-component :key="index" :index="item.index" :sent="item.sent"></async-component>
    </template>
  </q-virtual-scroll>

    
           </div>
            </div>
       
        </div>
    </div>
</template>
<style scoped>
.arrow_back{
     z-index: 1;
    width:1vw;
}
.arrow{
     z-index: 1;
    width:100%;
}
.isane{
    font-size: 1vw;
     z-index: 1;
    color:white;
    margin-left:3%;
}
.item{
    margin-left:0.3vw;
    height:25vh;
    width: 15vw;
    border:1px solid white;
}
.back{
    z-index: 1;
    margin-top: 1%;
    align-items: center;
    display:flex;
}
.inside_wrap{
    margin-top: 1%;
    display: flex;
    color:white;
}
.name{
    margin-top: 3%;
    margin-left:3%;
    font-size: 0.8vw;
    opacity: .5;
    color:rgba(255, 255, 255, 2);
}
.search{
    display: flex;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top:1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    cursor: pointer;
    justify-content: center;
    width:5%;
}
.inside_wrap h2{
     z-index: 1;
    font-size: 2.3vw;
    line-height: 130%;
    font-weight: 600;
    margin:0;
    padding:0;
}
.img{
     z-index: 1;
    height:100%;
    padding-right: 1%;
}
.out{
    margin-left: 0.3vw;
    width:40%;
    border:1px solid rgba(255, 255, 255, 6);
}
.out input{
    width:100%;
    border:1px solid rgba(255, 255, 255, 6);
}
.back p{
    margin:0;
    padding-left: 0.5vw;
    color:white;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../statics/image/Lipetsk_sup.png");
  background-size: cover;
  min-height: 100vh;
 
}
.one{
    
    width:15vw;
    font-size: 5vw;
}
.overlay {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  z-index: 0;
  width: 100%;
}
.items{
    z-index: 1;
    display:flex;
    flex-wrap: nowrap;
    margin-top: 5%;
}
body{
    height: 100%;
}
.container{
 
    margin-top:2.7%;
    height:92%;
    display: flex;
    flex-direction: column;
    width:80%;
}
.wrap{
 height: 100vh;
}
.form{
    margin-top: 3%;
    display: flex;
}
</style>
<script>
export default {
    data(){
        return{
            support: {},
            text: '',
             asyncContent: null
        }
    },   
    methods:{
        onSubmit(){
        
            const url = 'http://127.0.0.1:8000/support/?type=&recipient=&industry=1&territory=&form='+'&name='+this.text
            console.log(url)
        fetch(url).then(response => response.json()).then(data => (this.support = data))
        },
            getItems (from, size) {
      const items = []

      for (let i = 0; i < size; i++) {
        items.push({
          index: this.size - from - i,
          sent: Math.random() > 0.5
        })
      }

      return Object.freeze(items)
    }
    },
    mounted(){
        const url = 'http://127.0.0.1:8000/support/?type=&recipient=&industry=1&territory=&form='
        fetch(url).then(response => response.json()).then(data => (this.support = data))
    }
}
</script>