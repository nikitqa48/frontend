<template>
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
  font-size: 0.8vw;
}
.header_button{
  font-size: 0.8vw;
}
</style>