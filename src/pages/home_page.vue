<template>
  <div>
      <header-vue />
      <forms-vue />
    <div data-anchor="investinlipetsk">
    <video-vue/>
    </div>
      <full-page ref="fullpage" :options="opts" id="fullpage">
        <div class="section" data-anchor='video'>
          <gubernator-vue/>
        </div>
        <div class="section" >
          <map-vue />
        </div>
        <div class="section" >
          <history-vue />
        </div>
        <div class="section" >
          <news-vue />
        </div>
        <div class="section">
        </div>
      </full-page>
  </div>
</template>
<script>
import vuescroll from "vue-scroll";
import fullpage from "vue-fullpage.js";
import Vue from "vue";
import industryVue from "../components/head_page/industry.vue";
import gubernatorVue from "../components/head_page/gubernator.vue";
import mapVue from "../components/head_page/map.vue";
import historyVue from "../components/head_page/history";
import videoVue from '../components/head_page/video.vue';
import newsVue from "../components/head_page/news.vue";
import formsVue from "../components/forms.vue";
import headerVue from "../components/header.vue";
import hooper from 'hooper';
Vue.use(fullpage, vuescroll);
export default {
  components: {
    fullpage,
    formsVue,
    historyVue,
    gubernatorVue,
    videoVue,
    industryVue,
    headerVue,
    newsVue,
    mapVue
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(prev, next) {},
        afterChange: function(prev, next) {},
        lazyLoading: false,
        responsiveWidth: 900,
        dots:true,
        anchors: ['video', 'about-us', 'contact', 'novosti'],
        lockAnchors:true,
        navigation:true,
        loopBottom:true,
        navigationTooltips:['Инвестируй в Липецкую область', 'Обратиться к губернатору', 'Географическое положение', 'Истории успеха', 'Новости'],
        slidesNavPosition:'color:white',
        // fixedElements: '.header'
    
        
      }
    };
  },
  methods: {
    // showInstitute(event) {
    //   let id = event.target.classList.value;
    //   let object = document.getElementById(id);
    //   setTimeout(() => {
    //     object.classList.remove("part");
    //     object.classList.add("yellow");
    //   }, 300);
    // },
    // hideInstitute(event) {
    //   let id = event.target.classList.value;
    //   let object = document.getElementById(id);
    //   setTimeout(() => {
    //     object.classList.remove("yellow");
    //     object.classList.add("part");
    //   }, 300);
    // }
  }
};
</script>
<style scoped>
.justify-center {
  display: flex;
  flex-direction: column;
}
#fp-nav ul li a span{
background-color:white!important;
}
#fp-nav ul li a span, .fp-slidesNav ul li a span{
  background-color:white!important;
}
.data_center {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
 

  @media screen and (max-width: 800px) {
     .section:nth-child(5){
       display: none;
     }
   }
</style>