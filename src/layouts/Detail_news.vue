<template>
    <div>
        <!-- <header-vue/> -->
        Детальная новость
        {{news}}
    </div>
</template>
<style scoped>

</style>
<script>
import headerVue from "../components/header.vue";
export default {
    data(){
        return{
            news:{

            }
        }
    },
    components:{
        headerVue
    },
    mounted() {
    const url = "http://127.0.0.1:8000/news/detail/"+this.$route.params.id+'?format=json';
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
        console.log(this.news)
    }

}
</script>