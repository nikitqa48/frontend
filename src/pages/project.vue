<template>
    <div class=wrapper>
        <header-vue/>
        <forms-vue/>
        <div class="container">
            <div class="text-h4 q-mb-md">
                Реализуемые проекты Липецкой области
            </div>
            <div class="filter">
            <q-expansion-item
                         dark
        expand-separator
        label="Фильтр проектов"
        dark
        :header-style="{ backgroundColor: 'rgba(42, 50, 74, 0.6)' }"
        style="border-radius: 4px; margin-top:2%; "
      >
        <div class="form_filter">
            Стоимость проекта(млн.руб)
    <q-form @submit="getProjectItems" class="q-gutter-md">
      <div class="q-mt-xl">
        <q-range
          v-model="range"
          label-always
          :max="500"
        />
        
        <!-- <q-select standout="bg-teal text-white" v-model="industry"  label="Custom standout"  :options= 'options'/> -->
      </div>

      <div>
        <q-btn label="Поиск" type="submit" color="primary"/>
      </div>
    </q-form>
        </div>
      
      </q-expansion-item>
      <div class="item" v-for="item in project">
          <div class="item_image__div">
            <img :src="item.image">
          </div>
          <div class="right_content" >
       <p class="text-h5"> {{item.name}}</p>
              <p> Отрасль: {{item.industry}} </p>
              <p> Текущее состояние проекта: {{item.now}}</p>
              <p>Сроки реализации: {{item.time}}</p>
              <p> Сумма инвестиций: {{item.sum}} млн.руб.</p>
          </div>
      </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width:80%;
        margin:auto;
    }
    .text-h4{
        color:white;
    }
    .item{
        width:100%;
        border-bottom: 1px solid grey;
        padding-bottom: 0.5vh;
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: flex;
    }
    .right_content{
        display:flex; 
        flex-direction:column; 
        margin-left:2%;
    }
    @font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{

  font-family: 'Montserrat';
}
.form_filter{
    background: rgba(42, 50, 74, 0.6);
    color:white;
    padding:1%;
}
    .wrapper{
        color:white;
        min-height: 100vh;
       background: #3A4566;
    }
.item_image__div{
    width:20%;
}
.item_image__div img{
    width:100%;
}
</style>
<script>
import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
export default {
    
    data(){
        return{
            industry:'',
            range: {
        min: 0,
        max: 100,
      },
      options:['1','2','3','4'],
      support:{},
      project:{}
        }
    },
      components:{
    headerVue, formsVue
  },
    methods:{
        getProjectItems(){
        const url = 'http://127.0.0.1:8000/project/'+this.range.min+'/'+this.range.max
        fetch(url).then(response => response.json()).then(data => (this.project = data))

    }
     },
    created(){
         const url = 'http://127.0.0.1:8000/project/'
        fetch(url)
      .then(response => response.json())
      .then(data => (this.project = data));  
    }
    }

</script>