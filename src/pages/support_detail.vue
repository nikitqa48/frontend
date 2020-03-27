<template>
    <div class="wrap">
        <div class="container">
                  <div class="back">
                    <div class = 'arrow_back'>
                  <img class="arrow" src="statics/image/arrow_back.svg">
                    </div>
                     <p>Вернуться назад </p>
                     </div>
                     <div class = 'name'>
                         {{support.name}}
                     </div>
                     <div class="category">
                         <p class="opacity">
                             Получатель:
                         </p>
                           <transition name="bounceInLeft">
                         <p class="poluch" v-if="support.recipient == 'small'">
                             Малые и средние предприниматели
                         </p>
                           </transition>
                           <p class="poluch" v-if="support.recipient == 'legally'">
                             Юридические лица
                         </p>
                             <p class="poluch" v-if="support.recipient == 'all'">
                             Все, кроме МСП
                         </p>
                             <p class="poluch" v-if="support.recipient == 'industrial'">
                             Резиденты индустриальных парков
                         </p>
                               <p class="poluch" v-if="support.recipient == 'resident_oez'">
                             Резиденты ОЭЗРУ Липецк
                         </p>
                                       <p class="poluch" v-if="support.recipient == 'developers'">
                            Разработчики ПО
                         </p>
                     </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            support:{}
        }
    },
    mounted(){
        const url = "http://127.0.0.1:8000/support/detail/"+this.$route.params.id+'?format=json';
        fetch(url)
      .then(response => response.json())
      .then(data => (this.support = data));
    
    }
}
</script>
<style scoped>
.wrap{
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%);
}

.container{
    margin-top: 2%;
    height:92%;
    display: flex;
    flex-direction: column;
    width:80%;
}

.arrow_back{
     z-index: 1;
    width:1vw;
}
.back p{
    margin:0;
    padding-left: 0.5vw;
    color:white;
}
.arrow{
     z-index: 1;
    width:100%;
}
.name{
    color:white;
    font-size: 1vw;
    margin-top: 2%;
}
.back{
     z-index: 1;
    margin-top: 1%;
    align-items: center;
    display:flex;
}
.category{
    margin-top: 1.5vh;
    display: flex;
}

</style>