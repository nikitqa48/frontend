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
    <q-form @submit="getProjectItems" class="q-gutter-md">
      <div class="q-mt-xl">
        <div style="display:flex; justify-content:space-between; ">
        <q-input dark outlined v-model="number" label="Сумма инвестиций (млн руб)" stack-label  type="number" style="width:30%;" option-value = '1'/>
       <q-select standout="bg-cyan-6 text-white"  bg-color="white" v-model="industry"  label="Отрасль"  :options= 'options'
       option-value="id" 
        style="width:30%;"/> 
        <q-select standout="bg-cyan-6 text-white" bg-color="white" v-model="year"  label="Год реализации"  :options= 'years' style="width:30%;"/> 
        </div>
      </div>

      <div>
        <q-btn label="Поиск" type="submit" color="cyan-6" />
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
              <p> {{item.body}} </p>
              <p> Текущее состояние проекта: {{item.now}}</p>
              <p> Реализация проекта:  с {{item.start}} по {{item.finish}}г.</p>
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
    width:100%!important;

}
</style>
<script>
import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
export default {
    
    data(){
        return{
            industry: '',
            year:2010,
            number:'',
      options:[{ id: 'all',label:'Все' },
      { id:'1', label:'Промышленность'},
      { id:'4',label: 'Сельское хозяйство'},
      {id:'6', label: 'Лесное хозяйство'}, {id:'7', label:'Строительство'},
      {id:'8', label:'Прочие виды деятельности сферы материального производства'}, {id:'9', label:'Обслуживание сельского хозяйства'},
      {id:'10', label:'Транспорт'}, {id:'11', label:'Связь'}, {id:'12', label:'Торговля и общественное питание'},
      {id:'13', label:'Материально-техническое снабжение и сбыт'}, {id:'14', label:'Заготовки'},
      {id:'15', label:'Информационно-вычислительное обслуживание'}, {id:'16', label:'Операции с недвижимым имуществом'},
      {id:'17', label:'Геология и разведка недр, геодезическая и гидрометеологическая службы'}, {id:'18', label:'Жилищное хозяйство'},
      {id:'19', label:'Коммунальное хозяйство'}, {id:'20', label:'Непроизводственные виды бытового обслуживания населения'},
      {id:'21', label:'Здравоохранение, физическая культура и соц.обеспечение'}, {id:'22', label:'Народное образование'},
      {id:'23', label:'Культура и искусство'}, {id:'24', label:'Наука и научное обслуживание'}, {id:'25', label:'Финансы, кредит, страхование, пенсионное обеспечение'},
      {id:'26', label:'Управление'}, {id:'27', label:'Общественные объединения'}]
      ,
      years:['2010','2011','2012','2013', '2014', 
      '2015','2016','2017','2018','2019','2020','2021',
      '2022','2023','2024','2025','2026','2027','2028','2029','2030'],
      support:{},
      project:{}
        }
    },
      components:{
    headerVue, formsVue
  },
    methods:{
      
        getProjectItems(){
        this.project = []
        const url = 'https://backendinvest.admlr.lipetsk.ru/project/'
        let resultUrl = ''

      //  if (this.number == '' && this.industry.id != ''){
        
      //   resultUrl = 'http://127.0.0.1:8000/searchyear'+'/'+this.year+'/'+this.industry.id+'?format=json'
      //   console.log(123123)
      //    fetch(resultUrl).then(response => response.json()).then(data => (this.project = data))
      //   }
       

         if (this.industry == '' && this.number == '') {
           let searchyear = 'https://backendinvest.admlr.lipetsk.ru/searchyear'
           console.log('asdas')
           resultUrl = searchyear+'/'+this.year+'?format=json'.toString()
           fetch(resultUrl).then(response => response.json()).then(data => (this.project=data))
        }
          else if(this.industry.id == 'all') {
            resultUrl = 'https://backendinvest.admlr.lipetsk.ru/summyear/' + this.number + '/' + this.year +'?format=json'
            fetch(resultUrl).then(response => response.json()).then(data => (this.project=data))
          }
        else if (this.industry == 'all' && this.number != ''){
          console.log('123123')
          let searchyear = 'https://backendinvest.admlr.lipetsk.ru/searchyear'
          resultUrl = searchyear+'/'+this.year+'?format=json'.toString()
          console.log(resultUrl)
          fetch(resultUrl).then(response => response.json()).then(data => (this.project=data))
        }
            else if (this.industry == '' && this.number != ''){
          console.log('123123')
          let searchyear = 'https://backendinvest.admlr.lipetsk.ru/searchyear'
          resultUrl = searchyear+'/'+this.year+'?format=json'.toString()
          console.log(resultUrl)
          fetch(resultUrl).then(response => response.json()).then(data => (this.project=data))
        }
         else{
           resultUrl = url + this.number +'/' + this.industry.id +'/' +this.year + '?format=json'.toString()

        fetch(resultUrl).then(response => response.json()).then(data => (this.project=data))
        // //   resultUrl = url+this.number+'/'+this.industry.id+this.year+'?format=json'.toString()
        // //   let massive = []
        // //   fetch(resultUrl).then(response => response.json()).then(data => (massive.push(data)))
        // //   console.log(massive)
        // //   this.project = massive
         }
    }
     },
    created(){
         const url = 'https://backendinvest.admlr.lipetsk.ru/project/'
        fetch(url)
      .then(response => response.json())
      .then(data => (this.project = data));  
    }
    }

</script>