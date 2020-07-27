<template>
<div class="wrap">
        <q-toolbar class="header" >
      <q-btn align="between" flat class="btn-fixed-width" color="white" label="Главная страница"  no-wrap  no-caps icon= 'img:statics/icons/logo.png'  to="/"/>
      <q-space />
    
      <!-- <q-btn stretch flat label="РЕГИОН"  class="header_button"/> -->
 <div style="display:flex;">
   <q-item  class="header_button" clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
      <q-item  class="header_button" clickable v-ripple="{color:'blue-6'}" to ='/state'   >Господдержка </q-item>
       <!-- <q-separator dark vertical /> -->
       
   <q-item  class="header_button" clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
      <q-item  class="header_button" clickable v-ripple to ='/news' stretch flat >Новости </q-item>
       <q-item  class="header_button" clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
         <q-item  class="header_button" clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item>
        </div>
        </q-toolbar>
             
      <div class="mobile">
        <q-toolbar  class="moble_header bg-grey-10" >
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="white"/>
          <q-btn flat  dense icon="img:statics/icons/logo.png"  label="Инвест. Липецк" to="/" no-caps color="white"/> 
        </q-toolbar>
      <q-menu
      max-height="100vh"
      max-width="300px"
      square
      no-parent-event
      v-model="drawer"
      auto-close
        :content-style="{ background: 'rgba(31, 37, 55, 0.9)', color:'#FFFFFF', position:'fixed', height:'100%' }"
        transition-show="slide-right"
        transition-hide="slide-left"
      >
 <q-list style="width: 70vw; height:100%;"  >
            <q-item   clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
           
              <q-item   clickable v-ripple="{color:'blue-6'}" to ='/state'   >Господдержка </q-item>
            
           
            
             <q-item  clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
           
            <q-item  clickable v-ripple to ='/news' stretch flat >Новости </q-item>
                  <q-item   clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
        
                            <q-item   clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item>
          </q-list>
      </q-menu>
    

  </div>
</div>
</template>
<script>

export default {
    data(){
      return{
        drawerRight:false,
        drawerLeft:false,
        drawer:false
      }
    }
}
</script>
<style scoped>
  @media screen and (max-width: 900px) {
.header{
  display: none!important;
}
.mobile{
  height: 100%;
  width: 100%;
}
.wrap{
  position: fixed;
  width: 100%;
  z-index: 100;
}
.mobile{
  display: flex!important;
}
.moble_header{
  display: flex!important;
 
  justify-content: space-between;
  z-index: 10;
}
.menu{
  display: flex;
  justify-content: space-between;
}
   }
.header{
  font-size: 1em;
  position: absolute;
  width:100%;
  height:5vh;
  color:white;
  display: flex;
  z-index: 1;
  background: #262626;
}
.moble_header{
  display: none;
}

.mobile{
  display: none;
}
.invest{
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