<template>
          <div class="risk">
        <div class="overlay">
          <div class="risk_container">
            <h2 class="heading">Липецкая область</h2>
            <div class="white_heading"></div>
            <p class="risk_p">
              Минимальный риск инвестирования В РФ
              <br />за 15 лет - RAEX rating agency
            </p>
          </div>
 
        </div>
        <video loop muted autoplay class="fullscreen-bg__video">
          <source src="statics/image/video_background.mp4" type="video/mp4" />
        </video>
      </div>
</template>
<style scoped>
.risk {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -100;
  position: relative;
  height: 100vh;
  width: 100%;
}
.hmm{
  color:white;
  margin-bottom: 2%;
}
.risk_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading {
  line-height: 6.09375vw;
  font-weight: 600;
  text-align: center;
  color: white;
  font-size: 5vw;
}
.risk_p {
  line-height: 140%;
  font-size: 2.5vw;
  text-align: center;
  color: white;
}
.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
}
.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.risk_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
<script>
export default {
    
}
</script>