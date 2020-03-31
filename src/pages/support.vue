<template>
  <div class="support_wrap">
    <div class="container">
        <h4> Государственная поддержка </h4>
     
           <q-form @submit="onSubmit" class="blue_container">
             <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'>Вид деятельности: </span>
     <!-- <q-select v-model="model" :options="options" label="Standard" outlined label-color="white" class="select" color="white"/> -->
     <select  v-model="industry">  
        <option value="1">Промышленность </option>
        <option value="2">Сельское Хозяйство </option>
        <option value="all">Все отрасли</option>
      </select>
   </div>
      <div class="wrap">
   <span class = 'text'> Вид поддержки: </span>
    <select v-model="type">
      <option value="direct"> Прямая финансовая поддержка </option>
      <option value="loan"> Заемная финансовая поддержка </option>
      <option value="profit"> Льготы по налогу на прибыль</option>
       <option value="transport"> Льготы по транспортному налогу</option>
      <option value="property"> Льготы по налогу на имущество</option>
      <option value="grant"> Гранты</option>
      <option value="rent"> Льготы по аренде</option>
      <option value="garant"> Гарантии</option>
      <option value="earth"> Льготы по земельному налогу</option>
      <option value="nds"> Льготы по уплате НДС</option>
      <option value="customs"> Льготы по уплате НДС</option>
      <option value="infrastructure"> Субсидии на инфраструктуру</option>
      <option value="loan_profit"> Кредиты под залог создаваемого имущества</option>
      <option value=""> Все виды поддержки</option>
      </select>
      </div>
      <div class="wrap">
       <span class = 'text'> Тип проекта: </span>
        <select v-model="territory">
      <option value="oez"> Модернизация </option>
      <option value="park"> Реконструкция </option>
      <option value="mono"> Новое строительство</option>
      </select> 
      </div>
      <div class="wrap">
    <span class = 'text'>  Тип получателя поддержки: </span>
      <select v-model="recipient">
      <option value="ip"> ИП </option>
      <option value="lawyer"> Юр. Лицо</option>

      </select> 
     
      </div>
       <button class="more" type="submit"> Поиск </button>
             </div>
    </q-form>
    <div class="items">
      
      <div class="item" v-for="item in support">
        <router-link :to="{name: 'support_detail', params: { id: item.id}}" class="rout"> 
          <span class="item_name"> {{item.name}} </span>
          <div class="border"> </div>
          <div class="sposob">
            <div class="wrapper">
              <span class="grey">Получатели </span>
              <span class="poluch" v-if="item.recipient == 'small'">МСП </span>
              <span class="poluch" v-if="item.recipient == 'innovation'">Инновации </span>
              <span class="poluch" v-if="item.recipient == 'all'">для всех </span>
              <span class="poluch" v-if="item.recipient == 'municipality'">Муниципалитет</span>
              <span class="poluch" v-if="item.recipient == 'industrial'">Резиденты индустриальных парков</span>
              <span class="poluch" v-if="item.recipient == 'developers'">Разработчики ПО</span>
              <span class="poluch" v-if="item.recipient == 'resident_oez'">Резиденты ОЭЗРУ Липецк</span>
              <span class="poluch" v-if="item.recipient == 'subject'">Субъект</span>
              <span class="poluch" v-if="item.recipient == 'legally'">Юридические лица</span>
              <span class="poluch" v-if="item.recipient == 'cooperatives'">Кооперативы</span>
              <span class="poluch" v-if="item.recipient == 'not_msp'">Все кроме МСП</span>
            </div>
         
                      <div class="wrapper">
              <span class="grey">Способ реализации проекта </span>
              <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
              <span class="poluch" v-if="item.gchp == 'any'">Любой </span>
            </div>
                                  <div class="wrapper">
              <span class="grey">Цели/ адресаты государственной поддержки </span>
              <span class="poluch">{{item.target}} </span>
            </div>
          </div>
        </router-link>
           </div>
      </div>
    </div>
      </div>
  </div>
</template>
<script>
</script>
<style scoped>
.button {
  border: 1px solid white;
  border-radius: 15px;
}
body a{
  color:white;
  text-decoration: none;
  margin:0;
  padding:0;
}
.but{
  align-self: flex-end;
  margin-right: 15%;
}
.wrapper{
  display:flex;
  margin-right: 10%;
  padding-bottom: 5%;
  flex-direction: column;
}
.item_name{
  padding-left: 1vw;
  padding-top: 2vh;
  font-size: 1vw;
}

.grey{
  color:#56718A;
  margin: 2vh;
  font-size: 0.8vw;
}
.poluch{
  color:#C9C9C9;
  font-size: 0.8vw;
  margin: 2vh;
}
.text{
  font-size: 0.7vw;
}
.items{
  display: flex;
  flex-direction: column;
}
.border{
  margin-left: 1%;
  margin-top: 1vh;
  opacity:.5;
  width:97%;
  margin-bottom: 2vh;
  border-bottom:1px solid white;
}
.more{
  border:none;
  outline: none;
  cursor: pointer;
  background:#52A4DF;
  align-self: flex-end;
  color:white;
  font-size: 0.8vw;
  border-radius: 5px;
  margin-right: 2%;
  height:3.5vh;
  width:6vw;
}
.item{
  background:rgba(35, 46, 75, 0.7);
  display: flex;
  padding-top: 2vh;
  margin-top: 5vh;
  flex-direction: column;
  width:100%;
  margin-bottom: 2vh;
 
}
.perekrestok{
    background:rgba(35, 46, 75, 0.7);
    padding-bottom: 2vh;
  align-self: center;
  display: flex;
  flex-direction: row;
  min-width:80%;
  justify-content: space-between;

}
.left {
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 50%;
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}
.wrap{
  padding-top: 2vh;
  padding-left: 2vw;
  display:flex;
  font-size: 0.8vw;
  flex-direction: column;
}
.wrap select {
  margin-top: 0.3vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("/statics/image/select.png");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
  background-size: 2vh;
  color: white;
  border: 1px solid #dfdfdf;
  min-height: 3vh;
  width:100%;
  outline: none;
  border-radius: 5px;
  padding-right: 2vw;
  padding-left: 2%;
}

.wrap select option{
  color:black;
}
.select-selected{
  color:white;
}
.select-selected:after{
  color:white;
}

.blue_container{
  width:100%;
  height:10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sposob{
  display:flex;
  flex-direction: row;
}
.title {
  font-size: 4.5vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
  margin-left: 2%;
}
.support_wrap {
  min-height:100vh;
    background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%);
  display: flex;
}
.left_content {
  margin-top: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin:0 auto;
  color: white;
}
.container h4{
  margin-top: 10vh;
  font-size: 1.8vw;
}
.container li {
  cursor: pointer;
  font-size: 0.8vw;
  width: 30%;
  list-style: none;
}
.container_image {
  margin-left: 5%;
  height: 10vh;
}
.container_image img {
  height: 100%;
}

</style>
<script>
export default {
  data(){
    return{
      options:['1', '2', '3'],
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
      if (this.industry.valueOf() == '') {
        this.url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&territory='+this.territory+'&form='+this.recipient
        console.log(this.url)
        fetch(this.url).then(response => response.json()).then(data => (this.support = data))
        this.submitResult = submitResult
      }
        else {
          fetch(url).then(response => response.json()).then(data => (this.support = data))
        this.submitResult = submitResult
        }
    },
    },
        mounted(){
        const url = 'http://127.0.0.1:8000/support/'
        fetch(url).then(response => response.json()).then(data => (this.support = data))
    }
}
</script>