<template>
<div class="invest">
   
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
  },
  computed:{
    get(){
      return this.$store.state.loading.load
    }
  }
}
</script>