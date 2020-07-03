<template>
<div>        
        <button 
      class="fixed" 
       @click="show=!show"
    >
    <div class="img">
      <img src="/statics/image/call.svg">
    </div>
     Обратная связь
        </button>
     <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="fixed-center"
      v-if="show"
    >

    <div class="form_button">
    <q-btn 
    :dense=true
    flat round color="white" icon="close" @click="show=!show"/>
    </div>
    <div class="form_container">
          <h2 class="left-top">
      Связаться с нами
    </h2>
    <hr class="border_bottom">
   <div class="form_inside">
     <div class="inside">
        <q-input
        dark outlined
        v-model="surname"
        label-color = 'grey-2'
        class="input"
        
        label="Ваша фамилия *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу фамилию']"
      />
      <q-input
        dark outlined
        v-model="name"
        class="input_right"
        label-color = 'grey-2'
        label="Ваше имя *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите имя']"
      />
     </div>
     <div class="inside">
            <q-input
        dark outlined
        class="input"
        label-color = 'grey-2'
        v-model="middle_name"
        label="Ваше отчество *"
       
      />
            <q-input
            dark outlined
        class="input_right"
        label-color = 'white'
        type = 'tel'
        v-model="phone"
        label="Телефон *"
       
      />
     </div>
     <div class="inside">
      <q-input
      class="input"
        dark outlined
    
        type='email'
        v-model="email"
        label="Почта*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу почту']"
      />
  
        <q-input
      class="input_right"
        dark outlined
    
        v-model="organisation"
        label="Организация*"

      />
      
   </div>
   </div>
      <div>
        <q-btn label="Отправить" type="submit" color="primary"/>
        <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
        </div>
    </q-form>
</div>
</template>
<script>
export default {
    data(){
        return{
      show:false,
      name:null,
      phone:null,
      middle_name:null,
      organisation:null,
      leftDrawerOpen: false,
      info:null,
      surname:null,
      email:null,
        }
    },
     methods: {
      onReset () {
    this.name = null
    this.middle_name = null
    this.organisation = null
    this.phone = null
    this.surname = null
    this.email = null
     },
    onSubmit () {
      let data2 ={name:this.name,
                  surname:this.surname,
                  middle_name:this.middle_name,
                  email:this.email,
                  organisation:this.organisation,
                  phone:this.phone
                  }
      let data = JSON.stringify(data2)
    fetch('https://backendinvest.admlr.lipetsk.ru/',{
      method:'POST',
      body:data,
      headers:{'content-type':'application/json'}
    }).then(function(response){
      return response.json()
    }).then(function(data){
      alert('С вами свяжутся')
    })
    this.onReset()
    data.show=!show
    },

  }
}
</script>
<style scoped>
.fixed{
  right: 0;
  border:none;
  height: 6vh;
  width:14vw;
  border-radius: 150px;
  margin-right: 6%;
  font-size: 0.8vw;
  color:white;
  background: #2CCCD8;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5%;
  cursor: pointer;
  z-index: 10;
}
.absolute:hover{
  /* background: rgba(255, 255, 255, 0.3); */
}
.img{
  width:1.2vw;
  margin-right: 0.5vw;
}
.img img{
  width:100%;
}
.form_inside{
  margin-top: 5%;
  height: 60%;
  display: flex;
  flex-direction: column;
}

.border_bottom{
  margin-right: 150%;
  width:47%;
}
.inside{
  display: flex;
}
.left-top{
  padding-top: 3%;
  margin: 0;
  color:white;
  font-size: 2.3vw;
}

.flex{
  align-items: center;
  justify-content: space-between;
}
.input{

  margin-top: 3%;
  opacity: .8;
  width:47%;
}
.input_right{
  margin-top: 3%;
  margin-left:10%;
  opacity: .8;
  width:47%;
}
.wrapp{
  align-items: center;
  display: flex;
  flex-direction: column;
}
.form_container{
  height: 90%;
  width:90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.one{ 
  margin-bottom: 10%;

}
.fixed-center{
  z-index: 10;
  display:flex;
  flex-direction: column;
  height:75%;
  width: 50%;
  background:rgba(0, 0, 0, .9);
}


.form_button{
  position: absolute;
  top:0;
  right:2%;
  justify-content: flex-end;
  align-items: flex-end;
}

</style>