<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <header-vue />
      <forms-vue />
    <video-vue/>
      <full-page ref="fullpage" :options="opts" id="fullpage">
          
        <div class="section">
          <map-vue />
        </div>
        <div class="section">
          <history-vue />
        </div>
        <div class="section">
          <news-vue />
        </div>
        <div class="section">
        </div>
      </full-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import vuescroll from "vue-scroll";
import fullpage from "vue-fullpage.js";
import Vue from "vue";
import industryVue from "../components/head_page/industry.vue";
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
        responsiveWidth: 900
        
      }
    };
  },
  methods: {
    showInstitute(event) {
      let id = event.target.classList.value;
      let object = document.getElementById(id);
      setTimeout(() => {
        object.classList.remove("part");
        object.classList.add("yellow");
      }, 300);
    },
    hideInstitute(event) {
      let id = event.target.classList.value;
      let object = document.getElementById(id);
      setTimeout(() => {
        object.classList.remove("yellow");
        object.classList.add("part");
      }, 300);
    }
  }
};
</script>
<style scoped>
.justify-center {
  display: flex;
  flex-direction: column;
}
.data_center {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}

</style>