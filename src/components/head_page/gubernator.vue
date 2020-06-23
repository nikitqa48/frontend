<template>
    <div class="wrapper">
        <div class="text">
            <p style="padding:1%;font-size: 1.2vw;"> «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit»</p>
        <p style="font-size: 1vw; padding:1%;">  Глава администрации Липецкой области, Игорь Георгиевич Артамонов</p>
        </div>
        <div class="button">Обратиться к губернатору 
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    background-image: url(/statics/image/ArtomonovIgor.png);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
}
.button{
    width: 30%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    font-size: 1.2vw;
    color: #fff;
    background: #2cccd8;
    margin-left: 2%;
}
.text{
        margin-left: 2%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 10%;
    margin-bottom: 5%;
    color: #fff;
    background: #000;
    opacity: .5;
    width: 40%;
}
</style>
<script>
export default {
    
}
</script>