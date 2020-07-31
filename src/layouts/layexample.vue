<template>
<div class="invest">
   
        <!-- <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
     
       <q-page-container>
        <q-page class="q-pa-md">
          <p class="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container> -->
      <header-vue/>
      <router-view />
        <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <form-vue/>
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
.invest{
  min-height: 100vh;
}
</style>

<script>
import headerVue from "../components/example_header.vue";
import formsVue from "../components/forms";
export default {
    components:{
        headerVue,
        formsVue
    },
    data(){
        return{
            visible:false
        }
    },
      methods: {
    showTextLoading () {
      this.visible = true
      this.showSimulatedReturnData = false
      setTimeout(() => {
        this.visible = false
        this.showSimulatedReturnData = true
      }, 3000)
    }
  }
}
</script>