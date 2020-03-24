<template>
  <div class="slider">
    <div class = "history">
      <div class="number"> 1/4 </div>
      <h4> История успеха Липецкой области</h4>
          <hooper :settings="hooperSettings" class="ok">
      <slide>
        <div class="images img1">
         <div class="parent">
           <div class="child">
           </div>
         </div>
        </div>
      </slide>
      <slide>          
        <div class="images img2">
          <h2>Slide 2</h2>
        </div> 
      </slide>
            <slide>          
        <div class="images img2">
          <h2>Slide 3</h2>
        </div> 
      </slide>
                <slide>          
        <div class="images img2">
          <h2>Slide 4</h2>
        </div> 
      </slide>
     </hooper>
    <!-- <q-carousel
      infinite
      v-model="slide"
      height="70vh"
      ref="carousel"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <template v-slot:control>
        <q-carousel-control position="bottom-left" :offset="[18, 18]" class="q-gutter-xs">
          <q-btn
            unelevated
            size="2vh"
            prev-icon="img:statics/image/back.svg"
            text-color="black"
            icon="img:statics/image/back.svg"
            @click="$refs.carousel.previous()"
          />
        </q-carousel-control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            unelevated
            :ripple="false"
            size="2vh"
            label="Далее"
            text-color="white"
            icon="img:statics/image/next.svg"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
      <q-carousel-slide
        name="1"
        class="column no-wrap flex-center"
        img-src="statics/image/indesit.png"
      >
        <div class="sucess_container">
          <div class="sucess">
            <h2 class="suc">Истории успеха</h2>
            <p class="lipetsk">В Липецкой области</p>
          </div>
          <div class="indesit">
            <h2 class="h2_indesit">
              АО «ИНДЕЗИТ ИНТЕРНЕШНЛ»
              <br />производство бытовой техники
            </h2>
          </div>
          <p class="indesit_text">Факт присутствия нашей корпорации в Липецке укрепился с годами.</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="statics/image/yokohama.png">
        <div class="sucess_container">
          <div class="block">
            <div class="sucess">
              <h2 class="suc">Истории успеха</h2>
              <p class="lipetsk">В Липецкой области</p>
              <span class="border_indesit"></span>
            </div>
            <div class="indesit">
              <h2 class="h2_indesit">
                ООО «ЙОКОХАМА Р.П.З.»
                <br />производство автомобильных шин
              </h2>
            </div>
            <p class="indesit_text">Факт присутствия нашей корпорации в Липецке укрепился с годами.</p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="statics/image/havle.png">
        <div class="sucess_container">
          <div class="sucess">
            <h2 class="suc">Истории успеха</h2>
            <p class="lipetsk">В Липецкой области</p>
            <span class="border_indesit"></span>
          </div>
          <div class="indesit">
            <h2 class="h2_indesit">
              ООО «Хавле Индустриверке»
              <br />производство оборудования
              <br />для систем водоснабжения
            </h2>
          </div>
          <p
            class="indesit_text"
          >С 2011 года мы находимся в Чаплыгине Липецкой области и не жалеем об этом.</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" v-model="slide" img-src="statics/image/Angel.png">
        <div class="sucess_container">
          <div class="sucess">
            <h2 class="suc">Истории успеха</h2>
            <p class="lipetsk">В Липецкой области</p>
            <span class="border_indesit"></span>
          </div>
          <div class="indesit">
            <h2 class="h2_indesit">
              ООО «Ангел Ист Рус»
              <br />производство дрожжей
            </h2>
          </div>
          <p
            class="indesit_text"
          >Каждый год нам нужно минимум 100 000 тонн сахарной свеклы, которую обеспечивает Липецкая область.</p>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-carousel-control position="top-right">
      <div class="dots">
        <ul class="buttons">
          <button @click="slide = '1', show()" ref="a"></button>
          <button @click="slide = '2', show()" ref="b"></button>
          <button @click="slide = '3', show()" ref="c"></button>
          <button @click="slide = '4', show()" ref="d"></button>
        </ul>
      </div>
    </q-carousel-control> -->

    </div>
  </div>
</template>
<style scoped>

.history{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 background: url('/statics/image/indesit.png');
  height: 100vh;
}
.parent{
    
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
}
.child { 
  height: 300px;
  width: 100%;
   background:  linear-gradient(to left, rgba(255,255,255,0) 20%, rgba(255,255,255,1),  ),url('/statics/image/OEZ.png');
   background-size: cover;
}
.ok{
  outline: none;
  border:1px solid red;
}
.dots {
  margin-top: 100%;
  display: flex;
  flex-direction: column;
}
.column{
  border:1px solid red;
  width:70%;
  overflow:visible!important;
}
.dots_industry {
  display: flex;
  margin-bottom: 50vh !important;
  flex-direction: column;
}
.slider {
  height: 100%;
  width: 100%;
}
.border_indesit {
  width: 100vw;
}
.indesit {
  font-size: 3.35vw;
  color: white;
  width: 80%;
}
.buttons {
  display: flex;
  height: 10vh;
  flex-direction: column;
}
.buttons button {
  outline: none;
  cursor: pointer;
  width: 1.5vw;
  background: none;
  margin-top: 10%;
  height: 1vh;
  align-self: center;
  border: none;
  opacity: 0.6;
  border-bottom: 1.5px solid white;
}
.h2_indesit {
  font-size: 3vw;
}
.indesit_text {
  font-size: 1.25vw;
  color: white;
}
.sucess_container {
  justify-content: center;
  height: 99%;
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 7%;
}
.sucess {
  width: 40%;
  border-bottom: 0.5px solid white;
}
.lipetsk {
  font-size: 1.875vw;
  color: #c6c6c6;
  margin: 0;
  padding: 0;
}
.suc {
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 3.75vw;
  color: white;
}
.images, .hooper {
  border:1px solid red;
  padding-top: 5%;
  margin-left: 2%;
  height: 70%;
}
</style>
<script>
import { Hooper } from 'hooper'
import {Slide } from 'hooper'
import 'hooper/dist/hooper.css';
import Vue from "vue";
Vue.use(Hooper, Slide)


export default {
  
  data() {
    return {
      slide: "1",
    hooperSettings: {
                    infiniteScroll: false,
                    centerMode: true,
                    autoPlay: false,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: { // 2400px ~
                            itemsToShow: 1.5
                        },
                        1800: { // 1800px ~ 2400px
                            itemsToShow: 1.5
                        },
                        1500: { // 1500px ~ 1800px
                            itemsToShow: 1.5
                        },
                        1100: { // 1100px ~ 1500px
                            itemsToShow: 1.5
                        },
                        600: { // 600px ~ 1100px
                            itemsToShow: 1.5
                        },
                        0: { // 0px ~ 600px
                            itemsToShow: 1
                        }
                    }
                }   
    }
  },
  components:{
   Hooper, 
   Slide
  }
};
</script>