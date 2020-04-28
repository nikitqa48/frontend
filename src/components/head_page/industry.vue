<template>
  <div class="slider">
    <q-carousel
      infinite
      v-model="industry"
      height="100vh"
      ref="industry"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <div @click="arrow_right" class="industry_next">
            <span class="industry_inside__textbutton" v-if="industry == '1'">Строительство</span>
            <span class="industry_inside__textbutton" v-if="industry == '2'">Промышленность</span>
            <span class="industry_inside__textbutton" v-if="industry == '3'">Туризм</span>
            <span class="industry_inside__textbutton" v-if="industry == '4'">Обработка</span>
            <div class="arrow">
              <img src="statics/image/Arrowright.svg" />
            </div>
          </div>
        </q-carousel-control>
        <q-carousel-control position="top-left" :offset="[18, 18]">
          <div @click="arrow_left" class="industry_prev">
            <span class="industry_inside__textbuttonleft" v-if="industry == '1'">Туризм</span>
            <span class="industry_inside__textbuttonleft" v-if="industry == '2'">Обработка</span>
            <span class="industry_inside__textbuttonleft" v-if="industry == '3'">Строительство</span>
            <span class="industry_inside__textbuttonleft" v-if="industry == '4'">Промышленность</span>
            <div class="arrow">
              <img src="statics/image/leftarrow.svg" />
            </div>
          </div>
        </q-carousel-control>
        <q-carousel-control position="bottom-left" class="dots_industry">
          <div class="dots_wrap">
            <ul class="buttons">
              <button @click="active" id="1" class="isactive"></button>
              <button @click="active" id="2"></button>
              <button @click="active" id="3"></button>
              <button @click="active" id="4"></button>
            </ul>
          </div>
        </q-carousel-control>
        <q-carousel-control position="center">
          <!-- <div class="s">
       <q-tabs
          v-model="tab"
          dense
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails"></q-tab>
          <q-tab name="alarms" label="Alarms"></q-tab>
          <q-tab name="movies" label="Movies"></q-tab>
        </q-tabs>
        <q-separator ></q-separator>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="tab_wrap">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-tab-panel>
          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
          </div>-->
        </q-carousel-control>
      </template>
      <q-carousel-slide
        name="1"
        class="column no-wrap flex-center"
        img-src="statics/image/obrabotka.png"
      >
        <div class="slide_container" id="slide">
          <div class="left_slide">
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >Всего размеры посевных площадей ЦФО в 2015 году составили 15 354,6 тыс. га - это 19,4% от всех посевных площадей России</p>
            </div>
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >Всего размеры посевных площадей ЦФО в 2015 году составили 15 354,6 тыс. га - это 19,4% от всех посевных площадей России</p>
            </div>
          </div>
          <div class="white"></div>
          <div class="right_slide">
            <div class="right_container">
              <h3 class="investtext">Инвестируй в</h3>
              <h2 class="invest">Обрабатыващую Отрасль</h2>
              <button class="more">Подробнее об отрасли</button>
            </div>
          </div>
          <div class="industry_wrpapper" id="industry">
            <!-- <div class ="slider_wrapper">
                            <div class="left_slidewrapper">
                                    <h2 class="nalog">Обрабатывающая отрасль</h2>
                                <div class="inform_industry">
                                        
                                    <div class="left_industry">
                                        <div class="index_number">
                                            <p class="procent_number">107%</p>
                                            <p class="procent_text">Индекс производства сельского хозяйства, 99% по РФ</p> 
                                        </div>
                                        <div class="index_number">
                                                <p class="procent_number">119 млрд руб.</p>
                                                <p class="procent_text">Объем валовой продукции</p> 
                                            </div>
                                            <div class="index_number">
                                                    <p class="procent_number">105 га</p>
                                                    <p class="procent_text">Общая площадь теплиц</p> 
                                                </div>
                                    </div>
                                    <div class="right_industry">
                                        
                                            <div class="index_number">
                                                    <p class="procent_number">2 место</p>
                                                    <p class="procent_text">по производству сахара</p> 
                                                </div>
                                                <div class="index_number">
                                                        <p class="procent_number">3 место</p>
                                                        <p class="procent_text">по выращиванию овощей в закрытом грунте</p> 
                                                    </div>
                                                <div class="index_number">
                                                        <p class="procent_number">106%</p>
                                                        <p class="procent_text">Рост в растениеводстве</p> 
                                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right_slidewrapper">
                                    <h2 class="nalog">Доля в общероссийском производстве:</h2>
                                    <div class="inform_industryright">
                                            <div class="index_number">
                                                    <p class="procent_number">74%</p>
                                                    <p class="procent_text">плодоовощные консервы и <br>детское питание</p> 
                                                </div>
                                            <div class="index_row">
                                                    <div class="index_number">
                                                            <p class="procent_number">30%</p>
                                                            <p class="procent_text">соки</p> 
                                                        </div>
                                                        <div class="index_number">
                                                                <p class="procent_number">10%</p>
                                                                <p class="procent_text">минеральная вода</p> 
                                                            </div>
                                            </div>
                                            <div class="index_number">
                                                    <p class="procent_number">108%</p>
                                                    <p class="procent_text">Рост в животноводстве</p> 
                                                </div>
                                    </div>
                            </div>
            </div>-->
            <!-- <button class="back" id='back'>Назад</button> -->
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="statics/image/stroitelstvo.png">
        <div class="slide_container1">
          <div class="left_slide">
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >Существенную роль в общероссийском сырьевом балансе играют запасы железных руд, мела, гипса, доломитов</p>
            </div>
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >В ЦФО расположено около двух третьих разведанных запасов железных руд России</p>
            </div>
          </div>
          <div class="white"></div>
          <div class="right_slide">
            <div class="right_container">
              <h3 class="investtext">Инвестируй в</h3>
              <h2 class="invest">Строительство</h2>
              <button class="more">Подробнее об отрасли</button>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="statics/image/promishlennost.png">
        <div class="slide_container" id="slide">
          <div class="left_slide">
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >Существенную роль в общероссийском сырьевом балансе играют запасы железных руд, мела, гипса, доломитов</p>
            </div>
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >В ЦФО расположено около двух третьих разведанных запасов железных руд России</p>
            </div>
          </div>
          <div class="white"></div>
          <div class="right_slide">
            <div class="right_container">
              <h3 class="investtext">Инвестируй в</h3>
              <h2 class="invest">Промышленную отрасль</h2>
              <button class="more">Подробнее об отрасли</button>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" v-model="industry" img-src="statics/image/tourism.png">
        <div class="slide_container">
          <div class="left_slide">
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >В каждом районе Липецкой области есть уникальные природные и архитектурные объекты, которые имеют научное и культурное значение</p>
            </div>
            <div class="slidertext">
              <div class="image">
                <img class="slide_image" src="statics/image/list.png" />
              </div>
              <p
                class="slide_text"
              >В ЦФО расположено около двух третьих разведанных запасов железных руд России</p>
            </div>
          </div>
          <div class="white"></div>
          <div class="right_slide">
            <div class="right_container">
              <h3 class="investtext">Инвестируй в</h3>
              <h2 class="invest">Туризм</h2>
              <button class="more">Подробнее об отрасли</button>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
    <style scoped>
.slider {
  height: 100%;
  width: 100%;
}
.industry_next {
  font-size: 0.8vw;
  margin-top: 20%;
  color: white;
  outline: none;
  background: none;
  min-height: 3vh;
  width: 15vw;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.dots_industry {
  margin-right: 35%;
  bottom: 50%;
}
.industry_prev {
  font-size: 0.8vw;
  margin-top: 20%;
  color: white;
  outline: none;
  background: none;
  min-height: 3vh;
  width: 15vw;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
}
.image {
  height: 11vh;
}
.industry_prev img {
  width: 30%;
  opacity: 0.8;
}
.industry_inside__textbutton {
  padding-right: 5%;
  text-align: right;
}
.industry_inside__textbuttonleft {
  text-align: right;
  padding-left: 5%;
}
.arrow {
  width: 2vw;
}
.arrow img {
  width: 100%;
}
.dots_wrap {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.dots_wrap ul button {
}
.buttons {
  padding: 0;
  overflow: hidden;
  height: 8vh;
  display: flex;
  width: 6vw;
  flex-direction: column;
}
.buttons button {
  outline: none;
  cursor: pointer;
  margin-top: 3%;
  width: 1.5vw;
  align-self: flex-start;
  background: none;
  height: 1vh;
  align-self: center;
  border: none;
  opacity: 0.6;
  border-bottom: 1.5px solid white;
}
.isactive {
  border-bottom: 1px solid yellow !important;
  width: 3vw !important;
}
.slide_image {
  height: 100%;
}
.slide_container,
.slide_container1 {
  display: flex;
  transition: 0.5s ease-in-out;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.slide_text {
  color: white;
  opacity: 0.7;
  padding-right: 10%;
  width: 60%;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.9vw;
}
.left_slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
.right_slide {
  width: 50%;
}
.right_container {
  height: 100%;
  margin-left: 4%;
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.investtext {
  margin: 0;
  padding: 0;
  opacity: 0.8;
  color: white;
  font-size: 1.25vw;
}
.invest {
  margin: 0;
  font-weight: 600;
  line-height: 12vh;
  padding: 0;
  color: white;
  display: flex;
  font-size: 5.2vw;
}
.right_slide {
  width: 50%;
}
.more {
  cursor: pointer;
  margin-top: 10%;
  background: none;
  font-size: 0.9vw;
  justify-content: center;
  color: white;
  outline: none;
  opacity: 0.8;
  border-radius: 5px;
  border: 1px solid white;
  height: 5vh;
  display: flex;
  width: 35%;
}
.slidertext {
  margin-bottom: 4%;
  margin-top: 2%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}
.white {
  align-self: center;
  height: 70%;
  margin-right: 1%;
  border-right: 1px solid white;
  opacity: 0.6;
}
</style>
<script>
export default {
  data() {
    return {
      isActive: true,
      industry: "1"
    };
  },
  methods: {
    active(event) {
      let id = event.target.id;
      this.industry = id;  
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      button1.classList.remove('isactive')  
      button2.classList.remove('isactive')
      button3.classList.remove('isactive')
      button4.classList.remove('isactive')
      event.target.classList.add("isactive");
    },
    arrow_left(){
      this.$refs.industry.previous()
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      if(this.industry == '1'){
        button1.classList.add('isactive')
        button2.classList.remove('isactive')  
        button3.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
      else if (this.industry == '2') {
        button2.classList.add('isactive')
        button1.classList.remove('isactive')  
        button3.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
      else if (this.industry == '3') {
        button3.classList.add('isactive')
        button1.classList.remove('isactive')  
        button2.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
        else if (this.industry == '4') {
        button4.classList.add('isactive')
        button1.classList.remove('isactive')  
        button2.classList.remove('isactive')
        button3.classList.remove('isactive')
      }
    },
    arrow_right(){
      this.$refs.industry.next()
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      if(this.industry == '1'){
        button1.classList.add('isactive')
        button2.classList.remove('isactive')  
        button3.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
      else if (this.industry == '2') {
        button2.classList.add('isactive')
        button1.classList.remove('isactive')  
        button3.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
      else if (this.industry == '3') {
        button3.classList.add('isactive')
        button1.classList.remove('isactive')  
        button2.classList.remove('isactive')
        button4.classList.remove('isactive')
      }
        else if (this.industry == '4') {
        button4.classList.add('isactive')
        button1.classList.remove('isactive')  
        button2.classList.remove('isactive')
        button3.classList.remove('isactive')
      }
    }
  },
  }
</script>