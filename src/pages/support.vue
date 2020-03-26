<template>
  <div class="support_wrap">
    <div class="container">
        <h4> Навигатор по мерам государственной поддержки </h4>
     
           <q-form @submit="onSubmit" class="blue_container">
   <div class="wrap">
    Отрасль:
     <select  v-model="industry">  
        <option value="1">Промышленность </option>
        <option value="2">Сельское Хозяйство </option>
        <option value="">Все отрасли</option>
      </select>
   </div>
      <div class="wrap">
    Тип Поддержки: 
    <select v-model="type">
      <option value="direct"> Прямая финансовая поддержка </option>
      <option value="loan"> заемная финансовая поддержка </option>
      <option value=""> Все виды поддержки</option>
      </select>
      </div>
      <div class="wrap">
        Территория: 
        <select v-model="territory">
      <option value="oez"> ОЭЗ </option>
      <option value="park"> Индустриальный парк </option>
      <option value="mono"> Моногород</option>
      <option value="vne"> Территория вне</option>
      <option value=""> Любая территория </option>
      </select> 
      </div>
      <div class="wrap">
      Тип получателя поддержки:
      <select v-model="recipient">
      <option value="ip"> ИП </option>
      <option value="lawyer"> Юр. Лицо</option>
      </select> 
      </div>
      <div>
        <q-btn label="Найти" type="submit" color="primary"/>
      </div>
    </q-form>
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
.left {
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 50%;
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}

.right {
  display: flex;
  align-items: center;
  width: 50%;
}
.wrap{
  display:flex;
  flex-direction: column;
}
.wrap select {
  margin-left: 1vw;
  background: none;
  border:1px solid white;
  height:3vh;
  color:white;
}
.select-selected:after{
  color:white;
}

.blue_container{
  width:100%;
  display: flex;
  background:rgba(28, 37, 61, 0.7);
}

.title {
  font-size: 4.5vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
  margin-left: 2%;
}
.support_wrap {
  display: flex;
  background: linear-gradient(180deg, #252F40 0%, #0D0D1C 100%);
  background-size: cover;
  min-height: 100vh;
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
  border:1px solid red;
  margin:0 auto;
  color: white;
}
.container h4{
  margin-top: 7vh;
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