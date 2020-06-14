<template>
        <q-toolbar class="header" >
     
      <q-btn class="invest" stretch label="Инвест Липецк" to = "/" />
      <q-space />
    
      <!-- <q-btn stretch flat label="РЕГИОН"  class="header_button"/> -->
 <div style="margin-right:10%;display:flex;">
      <q-item  class="header_button" clickable v-ripple="{color:'blue-6'}" to ='/state'   >Господдержка </q-item>
       <!-- <q-separator dark vertical /> -->
       <q-item  class="header_button" clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
  
      <q-item  class="header_button" clickable v-ripple to ='/news' stretch flat >Новости </q-item>
       
         <q-item  class="header_button" clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item>
        
           <q-item  class="header_button" clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
            <q-item  class="header_button" clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
        </div>
        </q-toolbar>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header{
  font-size: 1vw;
  position: absolute;
  width:100%;
  height:5vh;
  color:white;
  display: flex;
  z-index: 1;
  background: #262626;
}
.invest{
  width: 10%;
  margin-left: 3%;
  font-size: 0.8vw;
}
.header_button{
  font-size: 0.8vw;
  padding-bottom: 1%;
  height: 100%;
  display: flex;
  align-items: center;
}
.q-router-link--active{
  color: #52A4DF;
  border-bottom: 2px solid #52A4DF;
}
</style>