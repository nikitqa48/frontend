<template>
    <div>
          <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
    Отрасль: <select  v-model="industry">  
        <option value="1">Промышленность </option>
        <option value="2">Сельское Хозяйство </option>
        <option value="">Все отрасли</option>
      </select>
    Тип Поддержки: 
    <select v-model="type">
      <option value="direct"> Прямая финансовая поддержка </option>
      <option value="loan"> заемная финансовая поддержка </option>
      <option value=""> Все виды поддержки</option>
      </select>
        Территория: 
        <select v-model="territory">
      <option value="oez"> ОЭЗ </option>
      <option value="park"> Индустриальный парк </option>
      <option value="mono"> Моногород</option>
      <option value="vne"> Территория вне</option>
      <option value=""> Любая территория </option>
      </select> 
      Тип получателя поддержки:
      <select v-model="recipient">
      <option value="ip"> ИП </option>
      <option value="lawyer"> Юр. Лицо</option>
      </select> 
      <div>
        <q-btn label="Найти" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
     <div v-for="item in support">
{{support}}
     </div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
        support:{},
        industry:'1',
        type:'',
        recipient:'',
        territory:'',
    shape: 'line',
      submitResult: []  
        }
    },
    methods:{
      onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
      const url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&territory='+this.territory+'&form='+this.recipient+'&industry='+this.industry
      console.log(url)
      // &recipient=medium&type=loan
        fetch(url).then(response => response.json()).then(data => (this.support = data))
      this.submitResult = submitResult
    },
    },
    mounted(){
        const url = 'http://127.0.0.1:8000/support/?format=json'+'&industry=1&recipient=medium&type=loan'
        fetch(url).then(response => response.json()).then(data => (this.support = data))
    }
}

</script>
<style scoped>
</style>