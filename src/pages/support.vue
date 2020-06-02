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
        <select v-model="type_project">
      <option value="3"> Модернизация </option>
      <option value="2"> Реконструкция </option>
      <option value="1"> Новое строительство</option>
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
      
      <div class="item" v-for="item in support" v-if="support.length != 0">
        <router-link :to="{name: 'support_detail', params: { id: item.id}}" class="rout"> 
          <div class="item_name"> {{item.name}} </div>
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
              <span class="grey">Объем поддержки </span>
              <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
<<<<<<< HEAD
              <span class="poluch" v-if="item.gchp == 'any'">Любой </span> -->
              <span class="poluch">{{item.money}}</span>
=======
              <span clas="poluch" v-if="item.gchp == 'any'">Любой </span> -->
              
              <span class="poluch" >{{item.money}}</span>
>>>>>>> 615ad7973d75fb5dd2422d5d61a8be0513439178
            </div>
                                  <div class="wrapper">
              <span class="grey">Вид поддержки </span>
              <span class="poluch" v-if="item.type == 'direct'">Инвестиции </span>
              <span class="poluch" v-if="item.type == 'loan'">Заемное финансирование </span>
              <span class="poluch" v-if="item.type == 'subsidies'">Субсидии </span>
              <span class="poluch" v-if="item.type == 'profit'">Налоговые льготы по налогу на прибыль </span>
              <span class="poluch" v-if="item.type == 'property'">Налоговые льготы по налогу на имущество </span>
              <span class="poluch" v-if="item.type == 'loan_funding'">Налоговые льготы по налогу на займ</span>
              <span class="poluch" v-if="item.type == 'grant'">Гранты</span>
              <span class="poluch" v-if="item.type == 'rent'">Льготы по аренде</span>
              <span class="poluch" v-if="item.type == 'garant'">Гарантии</span>
              <span class="poluch" v-if="item.type == 'transport'">Налоговые льготы по транспортному налогу</span>
              <span class="poluch" v-if="item.type == 'earth'">Налоговые льготы по земельному налогу</span>
              <span class="poluch" v-if="item.type == 'nds'">Налоговые льготы по уплате НДС</span>
              <span class="poluch" v-if="item.type == 'customs'">Таможенные льготы</span>
              <span class="poluch" v-if="item.type == 'infrastructure'">Субсидии на инфраструктуру</span>
              <span class="poluch" v-if="item.type == 'loan_profit'">Кредиты под залог создаваемого имущества</span>
            </div>
              <div class="wrapper">
              <span class="grey">Вид деятельности </span>
              <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
              <span class="poluch" v-if="item.gchp == 'any'">Любой </span> -->
               <span class="poluch">{{item.industry[0]}} </span>
            </div>
           
          </div>
        </router-link>
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
.absolute{
 
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
  font-size: 1vw;
  font-weight: 600;
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
  margin-left: 10%;
  height:3.5vh;
  width:6vw;
}
.item{
  background:rgba(35, 46, 75, 0.7);
  display: flex;
  padding-top: 2vh;
  z-index: 1;
  flex-direction: column;
  width:100%;
  margin-bottom: 4vh;
}
.item:hover{
  background: rgba(59, 70, 104, 0.7);
}
.item:first-child{
  margin-top:7vh;
}
.perekrestok{
    background:rgba(35, 46, 75, 0.7);
    padding-bottom: 2vh;
  align-self: center;
  display: flex;
  flex-direction: row;
  min-width:90%;


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
  padding-left: 0.5vw;

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
  /* background: linear-gradient(70deg, #224870 0%, #1b3b5e 100%); */
  background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/statics/image/phone.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
  
  font-weight: 600;
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
        type_project:'',
    shape: 'line',
      submitResult: []  
    }
  },
      methods:{
      onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
<<<<<<< HEAD
      const url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&type_project='+this.type_project+'&form='+this.recipient+'&industry='+this.industry
      if (this.industry.valueOf() == '') {
        this.url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&type_project='+this.type_project+'&form='+this.recipient
=======
      const url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&territory='+this.territory+'&form='+this.recipient+'&industry='+this.industry
      if (this.industry.valueOf() == '') {
        this.url = 'http://127.0.0.1:8000/support/?format=json'+'&type='+this.type+'&territory='+this.territory+'&form='+this.recipient
>>>>>>> 615ad7973d75fb5dd2422d5d61a8be0513439178
        console.log(this.url)
        fetch(this.url).then(response => response.json()).then(data => (this.support = data))
        this.submitResult = submitResult
      }
        else {
          fetch(url).then(response => response.json()).then(data => (this.support = data))
        this.submitResult = submitResult
        }
        console.log(url)
    },
    },
        mounted(){
        const url = 'http://127.0.0.1:8000/support/'
        fetch(url).then(response => response.json()).then(data => (this.support = data))
    }
}
</script>