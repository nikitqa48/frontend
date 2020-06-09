<template>
     <div class="wrapper">
               <div class="header">
      <q-separator dark vertical inset />
      <q-btn class="invest" stretch flat label="Инвест Липецк" to = "/" />
      <q-space />
      <q-separator dark vertical />
      <q-btn stretch flat label="РЕГИОН"  class="header_button"/>
      <q-separator dark vertical />
      <q-btn  class="header_button" to ='/state' stretch flat label="ГОСПОДДЕРЖКА" />
       <q-separator dark vertical />
       <q-btn class="header_button"  to = '/square' stretch flat label="ПЛОЩАДКИ" />
       <q-separator dark vertical />
       <q-btn class="header_button"  to ='/news' stretch flat label="НОВОСТИ" />
        <q-separator dark vertical />
        <q-btn  class="header_button"  to ='/contacts' stretch flat label="КОНТАКТЫ" />
        <q-separator dark vertical />
        <q-btn  class="header_button"  to ='/documents' stretch flat label="Документы" />
        </div>
        <div class="document">
         
                  <h5 class="document_title"> Документы</h5>
          
            <div style="display:flex;">
        <q-tabs
          v-model="tab"
          vertical
          class='left_menu'
          indicator-color="transparent"
          
        >
          <q-tab name="a"  label="Нормативно правовая база"   > </q-tab>
          <q-tab name="b" label="Приказы по общей деятельности" />
          <q-tab name="c"  label="Региональный стандарт" />
          <q-tab name="d"  > Инвестиционный меморандум <br> Липецкой области</q-tab>
          <q-tab name="e"  label="Стандарт развития конкуренции" />
          <q-tab name="f"  label=" Целевые модели" />
          <q-tab name="g"  label=" Противодействие коррупции" />
           <q-tab name="h"  label="Защита персональных данных" />
        </q-tabs>
 

    
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="a">
            <div class="text-h4 q-mb-md">Нормативно правовая база</div>
            <p>Отношения, связанные с инвестиционной деятельностью, осуществляемой инвесторами в форме инвестиций в основной капитал, в Липецкой области регулируются международными договорами Российской Федерации, Гражданским кодексом Российской Федерации, федеральными законами и нормативными правовыми актами Липецкой области. <br><br>Основные законы и иные нормативные правовые акты, касающиеся осуществления инвестиционной деятельности в Липецкой области:</p>
            <q-expansion-item
                         dark
        expand-separator
        label="Федеральное законодательство"
        header-class="bg-blue-grey-8 text-white"
        style="border:1px solid rgba(31, 37, 55, 0.7); border-radius: 4px;"
      >
        <div class="rightside_tabpanel">
          <a href="http://127.0.0.1:8000/document/1">Федеральный закон от 25.02.1999 № 39-ФЗ «Об инвестиционной деятельности в Российской Федерации, осуществляемой в форме капитальных вложений»</a>
          <a href="http://127.0.0.1:8000/document/2">Федеральный закон от 09.07.1999 № 160-ФЗ «Об иностранных инвестициях в Российской Федерации»</a>
           <a href="http://127.0.0.1:8000/document/3">	Федеральный закон от 29.04.2008 № 57-ФЗ «О порядке осуществления иностранных инвестиций в хозяйственные общества, имеющие стратегическое значение для</a>
        
        </div>
          
      
      </q-expansion-item>
             <q-expansion-item
                         dark
        expand-separator
        label="Областное законодательство"
        header-class="bg-blue-grey-8 text-white"
        style="border:1px solid rgba(31, 37, 55, 0.7); border-radius: 4px; margin-top:2%;"
      >
        <div class="rightside_tabpanel">
          <a href="http://127.0.0.1:8000/document/1">Федеральный закон от 25.02.1999 № 39-ФЗ «Об инвестиционной деятельности в Российской Федерации, осуществляемой в форме капитальных вложений»</a>
          <a href="http://127.0.0.1:8000/document/2">Федеральный закон от 09.07.1999 № 160-ФЗ «Об иностранных инвестициях в Российской Федерации»</a>
           <a href="http://127.0.0.1:8000/document/3">	Федеральный закон от 29.04.2008 № 57-ФЗ «О порядке осуществления иностранных инвестиций в хозяйственные общества, имеющие стратегическое значение для</a>
        </div>
          
      </q-expansion-item>
                   <q-expansion-item
                         dark
        expand-separator
        label="
Стратегия социально-экономического развития Липецкой области"
        header-class="bg-blue-grey-8 text-white"
        style="border:1px solid rgba(31, 37, 55, 0.7); border-radius: 4px; margin-top:2%;"
      >
        <div class="rightside_tabpanel">
          <a href="http://127.0.0.1:8000/document/1">Федеральный закон от 25.02.1999 № 39-ФЗ «Об инвестиционной деятельности в Российской Федерации, осуществляемой в форме капитальных вложений»</a>
          <a href="http://127.0.0.1:8000/document/2">Федеральный закон от 09.07.1999 № 160-ФЗ «Об иностранных инвестициях в Российской Федерации»</a>
           <a href="http://127.0.0.1:8000/document/3">	Федеральный закон от 29.04.2008 № 57-ФЗ «О порядке осуществления иностранных инвестиций в хозяйственные общества, имеющие стратегическое значение для</a>
        </div>
          
      
      </q-expansion-item>
                    <q-expansion-item
                         dark
        expand-separator
        label="
Нормативно правовые акты в рамках оказания государственной поддержки"
        header-class="bg-blue-grey-8 text-white"
        style="border:1px solid rgba(31, 37, 55, 0.7); border-radius: 4px; margin-top:2%;"
      >
        <div class="rightside_tabpanel">
          <a href="http://127.0.0.1:8000/document/1">Федеральный закон от 25.02.1999 № 39-ФЗ «Об инвестиционной деятельности в Российской Федерации, осуществляемой в форме капитальных вложений»</a>
          <a href="http://127.0.0.1:8000/document/2">Федеральный закон от 09.07.1999 № 160-ФЗ «Об иностранных инвестициях в Российской Федерации»</a>
           <a href="http://127.0.0.1:8000/document/3">	Федеральный закон от 29.04.2008 № 57-ФЗ «О порядке осуществления иностранных инвестиций в хозяйственные общества, имеющие стратегическое значение для</a>
        </div>
          
      
      </q-expansion-item>
           <q-expansion-item
                         dark
        expand-separator
        label="Перечень государственных программ, в рамках которых оказывается государственная поддержка инвестиционной деятельности"
        header-class="bg-blue-grey-8 text-white"
        style="border:1px solid rgba(31, 37, 55, 0.7); border-radius: 4px; margin-top:2%;"
      >
        <div class="rightside_tabpanel">
          <a href="http://127.0.0.1:8000/document/1">Федеральный закон от 25.02.1999 № 39-ФЗ «Об инвестиционной деятельности в Российской Федерации, осуществляемой в форме капитальных вложений»</a>
          <a href="http://127.0.0.1:8000/document/2">Федеральный закон от 09.07.1999 № 160-ФЗ «Об иностранных инвестициях в Российской Федерации»</a>
           <a href="http://127.0.0.1:8000/document/3">	Федеральный закон от 29.04.2008 № 57-ФЗ «О порядке осуществления иностранных инвестиций в хозяйственные общества, имеющие стратегическое значение для</a>
        </div>
          
      
      </q-expansion-item>
          </q-tab-panel>

          <q-tab-panel name="b">
            <div class="text-h4 q-mb-md">Приказы по общей деятельности</div>

          <a href="http://127.0.0.1:8000/document/1">	Приказ «Об утверждении перечня получателей субсидии на возмещение части затрат по реализации программ, направленных на создание, модернизацию и сохранение рабочих мест, профессиональную реабилитацию инвалидов, обеспечение безопасных и благоприятных условий труда, на 2019 год»</a>
           

          </q-tab-panel>

          <q-tab-panel name="c">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                  <q-tab-panel name="d">
            <div class="text-h4 q-mb-md">Инвестиционный меморандум Липецкой Области</div>
            <p>Инвестиционный меморандум Липецкой области устанавливает основные приоритеты развития и поддержки инвестиционной деятельности в Липецкой области.</p>
            <p>Меморандум является стратегическим документом, в нем отражены ключевые принципы взаимодействия региональных органов власти с инвесторами – это поддержка инвестиционной активности, равные условия для российских и иностранных инвесторов, обеспечение права инвестора на свободный выбор контрагентов, снижение административных барьеров, прозрачность формирования и реализации инвестиционной политики, а также личные обязательства главы администрации Липецкой области по защите прав инвесторов.</p>
            <p>Инвестиционный меморандум Липецкой области ежегодно обновляется.</p>
            <p>Органы власти Липецкой области ориентированы на дальнейшее формирование позитивного инвестиционного имиджа региона и привлечение инвестиций в экономику области, выравнивание стартовых условий для инвестиционных процессов в муниципальных образованиях, развитие международного и межрегионального сотрудничества.</p>
          </q-tab-panel>
                         <q-tab-panel name="e">
            <div class="text-h4 q-mb-md">Нормативно правовая база</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                                   <q-tab-panel name="f">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                                             <q-tab-panel name="g">
            <div class="text-h4 q-mb-md">Нормативно правовая база</div>
 
           
                         
          
          </q-tab-panel>
                                                       <q-tab-panel name="h">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
        </div>
     </div>
      </div>
    

</template>
<script>

  export default {
    name: 'App',
    components: {
     
    },
    data(){
      return{
        tab:'a',
      }
    }
  }
</script>

<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat';
}

.wrapper{
  display:flex;
  flex-direction: column;
  width:100%;
}
.document a{
  text-decoration: none;
  color:#0A79C9;
  margin-bottom: 1.2%;
}
.document a:hover{
  color:rgb(13, 142, 235);
}
.rightside_tabpanel{
  background:#E5E5E5;
  padding:1%;
  display:flex;
  flex-direction: column;
}
.document{
  width:70%;
  margin:auto;
  display: flex;
  flex-direction: column;
}
.document_title{
  font-weight: 600;
}
.left_menu{
  background: #F0F0F0;
  text-transform: none;

}
.q-tab{
  text-transform: none;
  justify-content: flex-start;
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: left;
}
.q-tab--active {
  background:#28A5FF;
  color:white;
}

.header{
  font-size: 1vw;
  width:100%;
  height:5vh;
  color:white;
  display: flex;
  z-index: 1;
  background: #262626;
}
.invest{
  width: 10%;
  font-size: 0.8vw;
}
.header_button{
  font-size: 0.8vw;
}
.text-h4 {
  font-weight: 900;
  font-size: 1vw;
  letter-spacing: 0.02em;
}
.q-tab-panel{
  padding-left: 4%;
  padding-top: 0;
}
</style>