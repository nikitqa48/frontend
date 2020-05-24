<template>
<div>
   <header-vue/>
        <!-- <div class="form">
      <forms-vue/>
     </div> -->
        <div class="wrapper">
         
            <div class="university">
              <h4> Интерактивная карта площадок </h4>   
            <div class="wrap">
            <button class="first"   id='first'  @click="active">  ОЭЗ "Липецк" </button>    
                  <button class="third" id='third' @click="active"> Индустриальные парки </button>
                          <button class="second"  id = 'second'  @click="active">ОЭЗ РУ </button>
            </div> 
            </div>
          <transition
              appear
              
              enter-active-class="animated fadeIn slow"
              leave-active-class="animated fadeOut">
            <div class="left_map">
              <svg viewBox="0 19 863 799" class="svg_map" id ='svg'>
                <path
                  class="part"
                  @click="index = 0, show_greenfield = false"
                  id="dankov"
                  d="M282.218 202.373H301.513L308.157 220.212L326.957 215.982L340.174 225.642L354.521 220.706L362.791 237.629L376.926 231.071L385.903 210.341L397.14 207.45L405.692 205.193L417.425 178.046L414.598 174.661L430.147 145.046L423.079 129.533L441.456 122.905V118.674L457.994 109.789L448.877 94.1355L432.197 100.482L428.31 95.1932L398.978 92.0201L394.737 98.0137L389.083 97.3086V72.9817L380.602 71.924L380.248 42.6612L369.293 43.7188L372.827 10.5778L357.631 2.82141L352.684 7.40475L348.443 1.05859H336.074L333.601 15.8663L325.119 8.10988L286.6 22.565L282.006 35.2573L292.961 43.0137L284.479 51.4753L287.66 67.6932L300.029 78.9753L298.968 94.1355L288.367 101.539L274.584 98.7188L267.87 109.648L260.802 101.539L226.17 124.809L234.298 128.334L236.418 141.732L253.381 148.783L257.268 165.353L241.012 182.982L243.133 190.033L265.396 202.725L265.255 203.007L280.309 195.321L282.218 202.373Z"
                />
                <path
                  class="part"
                  @click="index = 1, show_greenfield = false"
                  id="lev"
                  d="M441.456 118.673V122.904L423.08 129.532L430.148 145.045L414.598 174.661L417.425 178.045L405.693 205.193L418.415 210.834V221.622L429.229 216.263L432.975 229.167L446.686 233.891L469.727 219.789L478.703 222.327L482.944 247.007H499.412L511.71 241.859L524.432 225.641L511.215 215.064L501.32 205.193L506.48 198.141L522.524 205.193L538.992 198.141L544.293 187.776V176.494L533.338 172.263L538.568 166.199H544.293L547.968 146.879H535.741L533.338 135.173L544.293 123.398H565.426L553.128 96.6029L536.165 103.161L523.019 107.885H507.469L506.48 96.6029L487.68 95.1926L489.093 86.7311L483.792 80.7375L467.89 78.2695L462.942 88.8465L448.877 94.1349L457.995 109.789L441.456 118.673Z"
                />
                <path
                  class="part"
                  @click="index = 2, show_greenfield = false"
                  id="chaplygin"
                  d="M506.48 96.6018L507.469 107.884H523.018L536.164 103.159L553.127 96.6018L565.425 123.397H544.292L533.337 135.172L535.74 146.877H547.968L544.292 166.198H538.567L533.337 172.262L544.292 176.493V187.775L538.992 198.14L522.524 205.192L506.48 198.14L501.32 205.192L511.215 215.063L524.432 225.64L539.486 234.313L569.666 237.627L578.571 254.55L595.534 247.993L599.775 266.749L608.256 273.8L610.659 286.986L625.219 289.313V281.134L646.705 280.288L637.517 271.826L656.953 254.55L650.592 211.538L638.577 187.211L637.517 155.48L661.901 136.442L664.375 121.634L651.653 99.4223L638.224 101.89L612.78 94.4864L605.712 82.4992L590.516 81.4415L597.584 68.0441L595.817 44.7748L587.689 38.4287L567.899 14.4543L559.064 28.5569L543.162 11.2812L490.86 35.6082L489.093 86.73L487.679 95.1915L506.48 96.6018Z"
                />
                <path
                  class="part"
                  @click="index = 5, show_greenfield = false"
                  id="lebedyan"
                  d="M270.909 228.673L284.833 235.019L300.594 237.628L318.052 235.019V248.699L331.693 265.622L325.332 276.904L332.187 285.788H337.842L354.522 294.743L334.308 313.993L345.828 316.109L338.76 327.673L341.8 340.577H334.308V350.66L344.909 353.057L351.483 368.288L350.21 370.968L369.859 376.045H381.309V383.449L390.497 386.622L395.444 377.455L410.145 381.333L418.415 368.993L420.535 353.128H449.867L441.456 336.557L453.542 331.551V321.327L480.612 302.5L463.649 275.211L475.664 262.519L472.837 251.731L480.612 247.006H482.944L478.703 222.327L469.727 219.788L446.686 233.891L432.974 229.166L429.229 216.263L418.415 221.622V210.833L405.693 205.192L385.903 210.34L376.927 231.07L362.791 237.628L354.522 220.705L340.174 225.641L326.957 215.981L308.157 220.211L301.513 202.372H282.218L280.31 195.32L265.255 203.006L251.614 237.628L256.35 225.641L270.909 228.673Z"
                />
                <path
                  class="part"
                  @click="index = 6, show_greenfield = false"
                  id="dobroe"
                  d="M625.219 289.314L610.66 286.987L608.257 273.801L599.775 266.75L595.534 247.993L578.572 254.551L569.666 237.628L539.487 234.314L524.432 225.641L511.71 241.859L499.412 247.006H482.944H480.612L472.837 251.73L475.664 262.519L463.649 275.211L480.612 302.5L453.542 321.327V331.551L441.456 336.557L449.867 353.128L470.01 338.673L482.025 343.256L496.161 336.557L500.402 341.493L498.635 348.897L500.402 353.128L494.747 359.474L515.951 363.705V370.544L536.801 378.512L553.41 373.577L559.983 380.98L565.426 384.788L560.195 391.557L562.104 394.871L579.985 392.968L586.346 388.525L597.655 391.839L605.924 390.429L622.039 397.692L620.555 387.115L641.758 380.416L642.818 326.474L625.855 325.769L624.442 315.544L632.216 306.025L647.059 305.673L646.705 280.288L625.219 281.134V289.314Z"
                />
                <path
                @click="index = 4, show_greenfield = false"
                  class="part"
                  id="krasnoe"
                  d="M222.99 272.743L248.787 313.288L242.073 321.044L231.471 322.807L222.99 332.327L235.853 338.673L231.471 356.301L260.096 371.743L275.292 365.82L273.171 359.474L283.42 356.653L283.773 379.218L314.518 386.269L316.285 394.378H322.999L334.308 400.019L337.347 381.474H345.122L350.21 370.968L351.483 368.288L344.91 353.057L334.308 350.66V340.577H341.8L338.761 327.673L345.828 316.109L334.308 313.993L354.522 294.743L337.842 285.788H332.188L325.332 276.903L331.693 265.621L318.052 248.698V235.019L300.594 237.628L284.833 235.019L270.91 228.673L256.35 225.641L251.614 237.628L238.539 246.089L232.531 263.718L232.461 263.647L232.885 266.75L222.99 272.743Z"
                />
                <path
                @click="index = 3, show_greenfield = false"
                  class="part"
                  id="stanovoe"
                  d="M52.655 297.424L63.9635 305.039H83.0467L91.8814 323.514L109.551 329.507V334.09L92.2348 339.379L96.1221 354.539L101.423 358.77L95.4153 366.879L113.085 397.905H122.98V386.27L134.642 384.507L143.83 397.905L141.639 406.789L154.078 418.353L163.973 417.296L172.101 425.405L180.936 422.231L178.109 409.187L189.417 407.071L200.372 393.674L237.903 388.033L245.253 380.629L260.095 371.744L231.471 356.302L235.853 338.674L222.989 332.328L231.471 322.808L242.073 321.046L248.787 313.289L234.651 291.43L222.989 272.744L232.884 266.751L232.46 263.648L213.801 245.738L209.914 247.148L210.267 261.956L184.823 264.071L183.763 285.578L175.635 285.225L172.808 260.193L162.913 256.667L145.95 264.776L134.642 255.61L137.822 248.911L120.153 242.917L112.731 244.328H93.6484L87.2873 237.629L60.783 239.392L38.166 286.283L47.2128 308.494L52.655 307.648V297.424Z"
                />
                <path
                @click="index = 7, show_greenfield = false"
                  class="part"
                  id="ismalkovo"
                  d="M93.2951 519.539L118.032 528.706V500.501L123.687 493.802L132.451 492.674L134.288 470.533L154.078 464.187L149.131 456.783L154.078 450.437L149.484 441.199H137.469L133.582 443.385L123.687 445.148L115.559 434.924L117.679 432.103L115.559 426.815L131.461 418.001L139.589 420.116L140.649 410.949L143.83 397.905L134.642 384.507L122.98 386.27V397.905H113.085L95.4154 366.879L101.423 358.77L96.1222 354.539L92.2349 339.379L109.551 334.09V329.507L91.8815 323.514L83.0467 305.039H63.9636L52.6551 297.424V307.648L47.2129 308.494L50.1814 315.898L31.4517 326.475L50.8882 348.687L56.8958 361.379L52.3017 386.411L26.8576 398.751L33.572 412.148L27.211 415.321L34.2788 422.373L31.8051 435.065L1.06006 438.943L3.88719 447.052H15.9025L20.1432 457.629L36.3991 455.514L28.9779 465.738L40.9932 473.847L37.4593 480.898L25.444 485.482L30.3915 497.469L43.467 495.001L50.8882 503.815L57.2492 500.994L65.0238 506.635L61.1365 516.86L53.3619 518.975L49.828 524.616L66.4374 541.892L73.1518 536.18L77.0391 523.77L93.2951 519.539Z"
                />
                <path
                @click="index = 8, show_greenfield = false"
                  class="part"
                  id="elec"
                  d="M263.629 538.225V523.77L278.825 517.776L272.111 496.975L278.825 483.225L310.277 492.674L302.149 478.289L308.157 467.007L296.141 433.161L310.277 437.391L334.308 429.635V400.02L322.999 394.379H316.285L314.518 386.27L284.691 379.5L283.773 379.218L283.419 356.654L273.171 359.475L275.291 365.821L260.095 371.744L245.253 380.629L237.903 388.033L200.372 393.674L189.417 407.071L178.109 409.186L180.936 422.231L172.101 425.404L163.973 417.295L154.078 418.353L141.639 406.789L139.589 420.116L131.461 418L115.559 426.815L117.679 432.103L115.559 434.924L123.687 445.148L133.582 443.385L137.469 441.199H149.484L154.078 450.436L149.131 456.783L154.078 464.186L134.288 470.533L132.451 492.674L137.469 492.039L141.356 496.975L175.635 494.507L168.921 514.603L183.056 519.891L186.59 525.532L207.794 535.404L220.162 529.411L227.23 536.109L250.554 521.654L254.441 526.943L251.614 535.404L252.816 541.891L263.629 538.225Z"
                />
                <path
                @click="index = 9, show_greenfield = false"
                  class="part"
                  id="zadonsk"
                  d="M390.356 526.236L396.01 524.121L394.808 504.659L404.279 499.23V483.223H392.971L389.154 480.685L392.971 472.646L388.023 467.992L411.347 449.307L419.828 454.101L423.08 445.428L412.761 435.274L388.447 442.114L392.476 432.242L388.447 422.582L382.086 425.403L376.715 422.582L363.286 420.96L360.176 418.351L366.113 411.582L364.911 404.531L376.432 398.396L374.1 389.018L364.699 384.082L369.859 376.044L350.21 370.967L345.122 381.473H337.347L334.308 400.018V429.633L310.277 437.39L296.142 433.159L308.157 467.005L302.149 478.287L310.277 492.672L278.825 483.223L272.111 496.973L278.825 517.774L263.63 523.768V538.223L252.816 541.89L256.915 563.96L278.825 586.877L274.231 595.339L278.825 600.627L266.457 620.018L272.464 624.954L268.224 630.948L272.464 634.826L283.066 632.005L285.893 643.287V658.448L300.736 651.749L315.437 641.666L321.303 628.973L344.415 617.691L354.31 615.082L346.747 591.108L354.31 583.633L367.244 586.454L380.673 579.826L400.039 576.089L404.491 559.871L388.235 536.813L390.356 526"
                />
                <path
                @click="index = 10, show_greenfield = false"
                  class="part"
                  id="lipetsk"
                  d="M526.27 411.09L529.309 402.629L524.149 398.186L517.576 405.943C517.576 405.943 510.014 401.007 509.307 400.513C509.731 399.597 511.639 395.789 511.639 395.789V388.244L484.216 411.302L492.839 422.09L475.664 430.129V433.443L481.53 441.199L492.839 445.43L505.066 470.321L521.534 481.11L526.27 477.09L525.139 470.321L543.515 461.366L551.502 468.417L561.891 463.481L551.502 437.18L553.622 426.603L551.007 420.257L550.936 417.93L526.27 411.09Z"
                />
                      <path
                @click="index = 10, show_greenfield = false"
                  class="part"
                  id="lipetsk"
                  d="M478.492 559.379L472.837 547.674L478.845 541.892L494.465 550.706L505.067 545.982L508.6 546.475L513.124 537.097L500.614 522.007L517.082 509.103L509.59 487.738L503.229 483.366L505.067 470.321L492.839 445.43L481.531 441.2L475.664 433.443V430.129L492.839 422.161L484.216 411.302L511.71 388.315V395.789L509.307 400.514L517.577 405.943L524.15 398.187L529.38 402.629L526.27 411.091L550.937 417.93L550.583 407.071L545.353 399.103L546.343 387.61L559.983 380.982L553.41 373.578L536.801 378.514L515.951 370.546V363.706L494.748 359.475L500.402 353.129L498.635 348.898L500.402 341.494L496.161 336.559L482.025 343.257L470.01 338.674L449.867 353.129H420.535L418.415 368.994L410.146 381.334L395.445 377.456L390.497 386.623L381.309 383.45V376.046H369.859L364.7 384.084L374.1 389.02L376.432 398.398L364.912 404.533L366.113 411.584L360.176 418.353L363.286 420.962L376.715 422.584L382.086 425.405L388.448 422.584L392.476 432.244L388.448 442.116L412.761 435.277L423.08 445.43L419.829 454.103L411.347 449.309L388.023 467.995L392.971 472.648L389.154 480.687L392.971 483.225H404.279V499.232L394.809 504.661L396.01 524.123L390.356 526.238L388.235 536.815L411.771 570.238L420.959 561.988L429.936 563.398H441.951L447.393 578.911L452.341 579.828L458.702 573.975L467.89 582.225V591.603L479.552 588.289L484.853 575.597L477.078 566.007L478.492 559.379Z"
                />  
                
                <path
                @click="index = 11, show_greenfield = false"
                  class="part"
                  id="gryasi"
                  d="M605.924 390.429L597.655 391.839L586.346 388.525L579.985 392.968L562.103 394.872L560.195 391.557L565.425 384.788L559.983 380.98L546.342 387.609L545.353 399.102L550.583 407.07L550.936 417.929L551.007 420.256L553.622 426.602L551.502 437.179L561.891 463.48L551.502 468.416L543.515 461.365L525.139 470.32L526.27 477.16L521.605 481.109L505.066 470.32L503.229 483.365L509.59 487.737L517.081 509.102L500.613 522.006L513.123 537.096L508.6 546.474L505.066 545.98L494.464 550.705L478.845 541.891L472.837 547.673L478.491 559.378L477.078 566.006L484.852 575.596L500.755 562.551L516.657 566.782L524.785 559.025L545.989 560.788L556.591 556.91L588.042 554.442V563.609L599.351 575.948L615.607 567.134L633.276 577.359L647.765 571.718L661.548 579.827L667.555 575.596L664.728 570.307L682.398 550.564L677.45 541.75L685.225 535.404V524.122L695.261 512.839L691.232 504.378L699.36 483.365L664.375 461.154L643.878 468.205L639.991 464.679L648.826 450.577L641.404 441.904L629.036 443.525L621.614 425.192L633.983 407.916L622.675 401.923L622.039 397.692L605.924 390.429Z"
                />
                <path
                @click="index = 17, show_greenfield = false"
                  class="part"
                  id="dolgorukogo"
                  ref="inst1map"
                  d="M102.483 588.148L113.085 579.828L118.386 586.174L112.732 592.52L120.86 624.251L126.514 622.488L134.642 630.244V608.385L148.778 603.097L176.342 614.379L180.936 612.969L186.237 617.552L183.763 624.956L184.47 633.065L204.613 640.116L218.042 623.545L231.471 631.654L237.479 622.84L246.313 628.129L266.457 620.02L278.825 600.629L274.231 595.34L278.825 586.879L256.915 563.962L251.614 535.404L254.441 526.943L250.554 521.654L227.23 536.11L220.162 529.411L207.794 535.404L186.59 525.533L183.056 519.892L168.921 514.603L175.635 494.507L141.356 496.975L137.469 492.039L132.451 492.674L123.687 493.802L118.032 500.501V528.706L93.2951 519.539L77.0392 523.77L73.1519 536.18L73.5052 535.898L77.3925 558.462L92.5884 569.039L90.5 582L93.6485 583.706L102.483 588.148Z"
                />
                <!-- <path
                @click="index = 12, show_greenfield = false"
                  class="part"
                  id="volovo"
                  d="M210.49,566.79c-2,0-3.44-.46-4.34-1.4a5.07,5.07,0,0,1-1.15-3.94,8.63,8.63,0,0,0-1.26-5.1c-1.5-2.4-2.89-4.92-4.23-7.36-3.31-6-6.73-12.22-12-17-1.77-1.58-2.66-3.81-2.7-6.81s0-5.7,0-8.26v-.43c0-.91,0-1.93.57-2.46,3.39-3.06,3.6-6.93,3.81-11a32.84,32.84,0,0,1,.61-5.5,39,39,0,0,0,.75-6.68c.05-.85.1-1.7.17-2.55a4,4,0,0,0-.63-3.19,3,3,0,0,0-.91-.6c-.84-.45-2.13-1.12-1.34-2.86l.05-.11c.91-2,2-4.5,4.78-4.88,3.63-.51,5.16-3,6.28-5.54s2.49-5.72,6.5-6.2c1.32-.16,2.07-1.52,2.67-2.78a8.31,8.31,0,0,1,7.93-5,19.4,19.4,0,0,0,9.07-2.52c2.61-1.33,4.71-1.22,6.79.38a5.88,5.88,0,0,0,2.89,1.21l.46.06v.46a44.06,44.06,0,0,1-1.24,7.53c-.91,4.13-1.86,8.4-.55,11.26,1.53,3.35,5.31,3.3,9.31,3.24a23.68,23.68,0,0,1,5.73.38l.65.17-.35.57c-.5.84-1.08,1.68-1.7,2.56-1.7,2.45-3.46,5-3.42,7.31,0,1.42,1.2,2.19,2.44,3s2.89,1.91,2.76,3.91A5.49,5.49,0,0,1,248,499a3.34,3.34,0,0,0-.55,2.53,5.91,5.91,0,0,0,2,2.83,9.52,9.52,0,0,0,3.3,1.58,11.65,11.65,0,0,1,3.2,1.45c3,2.15,2.55,6.36,2.25,9.43l0,.35c-.16,1.66-.48,3.29-.79,4.87-1.15,5.8-2.05,10.37,5,12.92a54.65,54.65,0,0,0,17.19,2.86c.86,0,1.9,0,3-.06,4.31-.18,9.68-.4,12.09,2.81l.43.43-.54.33c-3.09,1.88-5.81,4.93-8.54,9.6a11.62,11.62,0,0,1-10.28,6.15c-.94,0-2,0-2.28.63-1.72,3.77-4.66,2.78-7,2l-.27-.09c-6.49-2.16-11.56-1.06-16,3.46-2.38,2.44-5.82,3.73-10,3.73h-9.52c-6.59,0-13.4,0-20.1,0Z"
                /> -->
                <path
                @click="index = 13, show_greenfield = false"
                  class="part"
                  id="terbuny"
                  d="M300.736 651.751L285.893 658.45V643.29L283.066 632.008L272.465 634.828L268.224 630.95L272.465 624.956L266.457 620.02L246.314 628.129L237.479 622.841L231.471 631.655L218.042 623.546L204.614 640.117L184.47 633.065L183.763 624.956L186.237 617.552L180.936 612.969L176.342 614.379L148.778 603.097L134.642 608.386V630.245L126.514 622.488L120.86 624.251L112.732 592.52L118.386 586.174L113.085 579.828L102.484 588.149L93.6488 583.706L90.5 582L86.9344 610.29L75.2725 636.591V645.405L98.2429 648.226L100.01 654.219L96.1225 659.508L103.544 678.899L123.334 681.014L108.845 690.886L112.732 713.802L128.281 722.264H138.883L152.736 729.738L153.725 726.988L163.267 728.399L168.921 722.052L190.831 720.29L195.425 713.238L207.441 713.944L236.772 689.969L241.366 694.552L246.667 689.969L255.502 699.488L263.63 687.854L267.164 671.988L277.059 675.514V694.2L296.849 704.424L301.796 696.668L293.315 692.437L308.157 675.161L317.699 675.373V663.033L300.736 651.751Z"
                />
                <path
                @click="index = 14, show_greenfield = false"
                  class="part"
                  id="hlevnoe"
                  d="M455.168 666.345L458.843 660.634L464.568 651.749L463.649 632.006L455.874 606.41L456.157 605.07L457.5 599.57L461.246 600.769L467.183 602.672L469.021 600.134L472.837 595.128L467.89 591.602V582.224L458.702 573.974L452.341 579.826L447.393 578.91L441.951 563.397H429.936L420.959 561.986L411.771 570.236L404.491 559.871L400.039 576.089L380.673 579.826L367.244 586.454L354.31 583.634L346.747 591.108L354.31 615.083L344.415 617.692L321.303 628.974L315.437 641.666L300.736 651.749L317.699 663.031V675.371L325.12 675.512L361.519 719.935L379.895 719.583L386.256 714.294L379.895 704.422L386.256 693.14L403.219 691.378L406.753 686.794L399.685 678.333L423.716 677.628L434.318 667.756L453.542 677.486L455.168 666.345Z"
                />
                   <path
                @click="index = 14, show_greenfield = false"
                  class="part"
                  id="xz"
                  d="M128.281 722.264L112.732 713.802L108.844 690.886L123.333 681.014L103.543 678.898L96.1222 659.507L100.01 654.219L98.2426 648.225L75.2722 645.405V636.591L86.9341 610.289L76.6857 604.648L56.1891 610.995L46.2941 624.039H37.106L25.7975 642.373L19.083 638.495L13.0754 648.719L23.3237 656.123L5.30078 709.007L31.0983 728.751L42.4068 763.302L55.4823 768.238L89.0544 770.001L92.5883 762.245L110.965 757.309V747.437L126.514 743.911L128.988 749.905L146.304 748.142L152.735 729.738L138.883 722.264H128.281Z"
                />
                <path
                @click="index = 15, show_greenfield = false"
                  class="part"
                  id="usman"
                  d="M680.278 687.713L676.037 682.424L680.278 675.373L676.037 664.796L668.262 658.45L672.503 654.219L668.262 629.187L656.6 622.488L647.766 617.2L654.48 596.751L661.548 579.828L647.766 571.719L633.277 577.36L615.607 567.136L599.351 575.95L588.043 563.61V554.443L556.591 556.911L545.989 560.79L524.786 559.027L516.658 566.783L500.755 562.552L484.852 575.597L479.552 588.29L467.89 591.604L472.837 595.129L469.02 600.136L467.183 602.674L461.246 600.77L457.5 599.572L456.157 605.072L455.874 606.411L463.649 632.007L464.568 651.751L458.843 660.636L455.168 666.347L453.542 677.488L455.168 678.334L486.619 681.86L501.108 704.777L494.041 721.7L573.907 744.264L579.915 738.27L594.757 744.264L609.953 732.277L611.72 724.873L627.622 718.879L632.923 727.341L649.179 731.572L661.548 726.988L664.022 714.648L676.037 705.834L680.278 700.405V687.713Z"
                />
                <path
                @click="index = 16, show_greenfield = false"
                  class="part"
                  id="dobrinka"
                  d="M805.025 590.545L796.897 582.788L801.844 569.391L792.302 559.519L781.347 562.34V551.763L722.331 539.07L718.444 525.673L729.399 512.275L725.512 503.814L699.361 502.404V483.365L691.233 504.378L695.261 512.84L685.225 524.122V535.404L677.45 541.75L682.398 550.564L664.728 570.308L667.556 575.596L661.548 579.827L654.268 597.384L647.766 617.199L668.262 629.186L672.503 654.218L668.262 658.449L676.037 664.795L680.278 675.372L676.037 682.423L680.278 687.711V700.404L676.037 705.833L676.744 717.82L688.052 725.929L708.549 719.231L733.286 740.032L736.467 725.577L780.641 732.275L794.069 729.102L799.017 700.192L815.626 691.025L816.333 671.282L808.205 664.936L814.566 643.077L827.995 634.263L820.574 619.102L832.942 606.763L848.492 630.032L859.8 616.282L819.514 580.673L805.025 590.545Z"
                />
              </svg>
              <img src="/statics/image/map_png.svg" class="svg" />
            </div>
            </transition>
            <div class="right_map">
                <div class="right_wrapper" >

                    <div  v-if="show_greenfield == false">
              
                   
              <div  v-if="show_greenfield == false">
                <div class="input">
                <h4 class="list">
                  Список площадок 
                </h4>
              <q-form @submit="onSubmit" class="form">
          
 <div class="wrap_form">
    <span class = 'text'>Тип площадки: </span>
     <!-- <q-select v-model="model" :options="options" label="Standard" outlined label-color="white" class="select" color="white"/> -->
     <select  v-model="type">  
        <option value="greenfield">Гринфилд </option>
        <option value="brownfield">Браунфилд </option>
        <option value="">Все</option>
      </select>
      </div>
       <button class="more" type="submit"> Поиск </button>
 
    </q-form>
                </div>
                   <q-scroll-area v-if="show_greenfield == false"
                   dark
      :visible="visable"
      style="height: 65vh; max-width: 99%;"
    >
                <div class="items_greenfield" v-if="show_greenfield == false">
                  <h4 v-if="show_greenfield == false && oez_ppt.length != 0 && index == '0'"> ОЭЗ Липецк</h4>
                                    <div class="green" >
                      <div class="greenfield_border" v-for="item in oez_ppt" v-if="item.region == index+1" @click="ShowGreenfield(item)" >
                        <div class="square">Участок №{{item.number_territory}}</div>
                        <div class="border"> </div>
                        <div class="square_number"> 
                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Площадь: </span>
                          </div>
                          <div class="inside_square">
                            {{item.square}} ГА
                          </div>
                          </div>
                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Тип участка: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'"> Гринфилд </span>
                            <span v-if="item.type == 'brownfield'"> Браунфилд</span>
                          </div>
                          </div>
                                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Форма собственности: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.form == 'goverment'" class="usefull_inside"> Государственная </span>
                            <span v-if="item.form == 'private'" class="usefull_inside"> Частная</span>
                          </div>
                          </div>
                           </div>                  
          
                      </div>  
                  </div>
                  <h4 v-if="show_greenfield == false && oez.length != 0"> ОЭЗ РУ</h4>
                  <div class="green" >
                      <div class="greenfield_border" v-for="item in oez" v-if="item.region == index+1" @click="ShowGreenfield(item)" >
                        <div class="square">Участок №{{item.number_territory}}</div>
                        <div class="border"> </div>
                        <div class="square_number"> 
                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Площадь: </span>
                          </div>
                          <div class="inside_square">
                            {{item.square}} ГА
                          </div>
                          </div>
                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Тип участка: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'"> Гринфилд </span>
                            <span v-if="item.type == 'brownfield'"> Браунфилд</span>
                          </div>
                          </div>
                                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Форма собственности: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.form == 'goverment'" class="usefull_inside"> Государственная </span>
                            <span v-if="item.form == 'private'" class="usefull_inside"> Частная</span>
                          </div>
                          </div>
                           </div>                  
          
                      </div>  
                  </div>
                                    <h4 v-if="show_greenfield == false && industrial.length != 0" > Индустриальные парки</h4>
                  <div class="green" >
                      <div class="greenfield_border" v-for="item in industrial" v-if="item.region == index+1" @click="ShowGreenfield(item)" >
                        <div class="square">Участок №{{item.number_territory}}</div>
                        <div class="border"> </div>
                        <div class="square_number"> 
                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Площадь: </span>
                          </div>
                          <div class="inside_square">
                            {{item.square}} ГА
                          </div>
                          </div>
                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Тип участка: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'"> Гринфилд </span>
                            <span v-if="item.type == 'brownfield'"> Браунфилд</span>
                          </div>
                          </div>
                                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Форма собственности: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.form == 'goverment'" class="usefull_inside"> Государственная </span>
                            <span v-if="item.form == 'private'" class="usefull_inside"> Частная</span>
                          </div>
                          </div>
                           </div>                  
          
                      </div>  
                  </div>
                   <h4 v-if="show_greenfield == false && any.length != 0" > Иные площадки</h4>
                  <div class="green" >
                      <div class="greenfield_border" v-for="item in any" v-if="item.region == index+1" @click="ShowGreenfield(item)" >
                        <div class="square">Участок №{{item.number_territory}}</div>
                        <div class="border"> </div>
                        <div class="square_number"> 
                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Площадь: </span>
                          </div>
                          <div class="inside_square">
                            {{item.square}} ГА
                          </div>
                          </div>
                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Тип участка: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.type == 'greenfield'"> Гринфилд </span>
                            <span v-if="item.type == 'brownfield'"> Браунфилд</span>
                          </div>
                          </div>
                                                          <div class="wrap_number">
                      <div class="number_row">
                            <img src ="/statics/image/ploshad.svg">
                             <span>Форма собственности: </span>
                          </div>
                          <div class="inside_square">
                            <span v-if="item.form == 'goverment'" class="usefull_inside"> Государственная </span>
                            <span v-if="item.form == 'private'" class="usefull_inside"> Частная</span>
                          </div>
                          </div>
                           </div>                  
          
                      </div>  
                  </div>
                </div>
                   </q-scroll-area>
              </div>
                  </div>
                  <div class="q-scroll">
                              <div class="back" v-if="show_greenfield == true" @click="show_greenfield = false">
                   &#8592; Вернуться назад </div>
  
                  <h3 class="title" v-if="show_greenfield == true" @click="show_greenfield = true">
                    ОЭЗ «Липецк»
                  </h3>
                      <q-scroll-area
      dark
      class="bg-dark text-white rounded-borders"
      style="height: 74.6vh; max-width: 90%;"
       v-if="show_greenfield == true"
    >   
                  <div class="greenfield_image" ref="grinf" @click="modalImage">
                  <img :src="greenfield.image" class="greenfield_inside" v-if="show_greenfield == true" >
                  </div>
                  <div class="contain_qscroll">
                   <div class="table" v-if="show_greenfield == true"> <p class = "gr">Площадь:</p> <p class = "cadastr">{{greenfield.number}} </p></div>
                   <div class="table" v-if="show_greenfield == true"> <p class = "gr">Тип участка:</p> <p class = "cadastr"> <span v-if="greenfield.type == 'greenfield'"> Гринфилд </span>
                            <span v-if="greenfield.type == 'brownfield'"> Браунфилд</span></p></div>
                            <div class="table" v-if="show_greenfield == true"> <p class = "gr">Кадастровый номер:</p> <p class = "cadastr">{{greenfield.number}} </p></div>
                   <p class="earth" v-if="show_greenfield == true"> {{greenfield.earth}}</p>
                   <p class="text_earth" v-if="show_greenfield == true">  {{greenfield.description}} </p>
                <div class="inside_greenfield" v-if="show_greenfield == true">
                  <div class="item_greend" >
                    <div class="greend_inside__img">
                      <div class="icon">
                    <img src="/statics/image/approval 1.svg">
                      </div>
                    <p class="usefull"> Вид разрешенного использования</p>
                    </div>
                    <span class="usefull_inside">  Для сельскохозяйственного использования </span>
                  </div>
                    <div class="item_greend">
                      <div class="greend_inside__img">
                        <div class="icon">
                    <img src="/statics/image/form.svg">
                        </div>
                    <p class="usefull"> Форма собственности</p>
                      </div>
                    <span class="usefull_inside" v-if="greenfield.form == 'goverment'">  Государственная </span> <span class="usefull_inside" v-if="greenfield.form == 'private'"> Частная </span>
                  </div>
                      <div class="item_greend" >
                        <div class="greend_inside__img">
                          <div class="icon">
                    <img src="/statics/image/square.svg">
                          </div>
                    <p class="usefull"> Площадь</p>
                        </div>
                    <span class="usefull_inside">  Земельный участок - <br> {{greenfield.square}} га </span> 
                  </div>
                               <div class="item_greend" v-if="greenfield.water != '' && greenfield.water != 0">
                                 <div class="greend_inside__img">
                                   <div class="icon">
                    <img src="/statics/image/water.svg">
                                   </div>
                    <p class="usefull"> Водоснабжение</p>
                                 </div>
                    <span class="usefull_inside"> {{greenfield.water}} </span> 
                  </div>
              
                                               <div class="item_greend" v-if="greenfield.gas != '' && greenfield.gas != 0">
                                                 <div class="greend_inside__img">
                                                   <div class="icon">
                    <img src="/statics/image/burn.svg">
                                                   </div>
                    <p class="usefull"> Газоснабжение</p>
                                                 </div>
                    <span class="usefull_inside"> {{greenfield.gas}}</span> 
                  </div>
                                                         <div class="item_greend"v-if="greenfield.power != '' && greenfield.power != 0">
                                                           <div class="greend_inside__img">
                                                             <div class="icon">
                    <img src="/statics/image/energy.svg">
                                                             </div>
                    <p class="usefull"> Электричество</p>
                                                           </div>
                    <span class="usefull_inside"> {{greenfield.power}}</span> 
                  </div>
                                          <div class="item_greend" v-if="greenfield.customs_priveleges != ''">
                                                 <div class="greend_inside__img">
                                                   <div class="icon">
                    <img src="/statics/image/burn.svg">
                                                   </div>
                    <p class="usefull"> Таможенные льготы</p>
                                                 </div>
                    <span class="usefull_inside"> {{greenfield.customs_priveleges}}</span> 
                  </div>
                      <div class="item_greend" v-if="greenfield.territory_priveleges != ''">
                                                 <div class="greend_inside__img">
                                                   <div class="icon">
                    <img src="/statics/image/burn.svg">
                                                   </div>
                    <p class="usefull"> Льготная стоимость земли/аренды</p>
                                                 </div>
                    <span class="usefull_inside"> {{greenfield.territory_priveleges}}</span> 
                  </div>
                </div>
                 
          
                <!-- <div class="lgoty_nalog" v-if="show_greenfield == true">
                <p class="lgoty">Льготы</p>
                <p class="number_lgoty"> 15.5% </p>
                <p>
                налог на прибыль</p>
                </div>  -->
                  </div>
              </q-scroll-area>
                  </div>
                </div>
                </div>
            </div>
          </div>
</div>
</template>
<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat';
}
.contain_qscroll{
  width:90%;
  margin: auto;
}
.q-scroll{
  margin-top: 2%;
}
.cadastr{
  font-size: 0.93vw;
}
.icon img{
  width: 100%;
}
.icon{
  height:5vh;
  width:15%;
}
.list{

  font-size: 2vw;
  font-weight: 600;
  letter-spacing: 0.001vw;
}
.q-scrollarea__thumb{
 background: white!important;
}
.wrap_number{
  margin-right: 1vw;
}
.input{
  display: flex;
  margin-top: 4vh;
  justify-content: space-between;
  align-items: center;
}

.form{
  margin:0;
  width:40%;
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
}
.form button{
  margin-right: 15%;
  margin-left: 5%;
}
.form select{
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
.more{
  align-self: flex-end;
  height:50%;
}
.form select option{
  color:black;
}
.select-selected{
  color:white;
}
.select-selected:after{
  color:white;
}
.inside_square span{
  font-size: 1vw;
  margin-left: 1vw;
}
.inside_square{
  padding-bottom: 1vw;
}
.item_greend{
  display: flex;
  flex-direction: column;
  min-height:15vh;
  opacity:1;
  border:1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  width:48%;
}
.greend_inside__img{
  padding:1vh;
  display: flex;
  flex-direction: row;
}


  .item_greend:nth-child(3) {
  margin-top:3%;
  }
  /* .item_greend:nth-child(3) span{
  padding-top: 10%;
  } */
    .item_greend:nth-child(4) {
   margin-top: 3%;
  }
      .item_greend:nth-child(5) {
   margin-top: 3%;
   
  }
        .item_greend:nth-child(6) {
   margin-top: 3%;

        }
.item_greend img{
  top:10%;
  left:5%;
  height:50%;
}
.lgoty{
  margin-top: 2%;
}
.number_lgoty{
  margin:0;
  font-size: 2vw;
  color:#52A4DF;
}
.number_row{
  display:flex;
  margin-left:1vh;
}
.number_row span{
  margin-left: 0.5vw;
  font-size: 1vw;
  opacity:.3;
}
.usefull{
  padding:0;
  margin:0;
  margin-left: 0.5vw;
  font-size: 0.93vw;
  opacity:.5;
  color:white;
}
.usefull_inside{
  color: white;
  opacity:.9;
  padding-left: 10%;
  font-size: .93vw;
}
.wrapper {
  align-items: center;
  min-height: 100vh;
  background: url("/statics/image/space.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
}

.green{
display: flex;
width:85%;
flex-direction: column;
flex-wrap: wrap;

}
.wrap_form{
  display: flex;
  flex-direction: column;
}
.inside_greenfield{
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.greenfield_inside{
  cursor: pointer;
  width:100%;
}
.earth{
  font-size: 0.93vw;
  font-weight: 500;
  margin-top:2%;
}
.text_earth{
  width:90%;
  font-size: 1.04vw;
  opacity: .6;
}

.university{
  display: flex;
  flex-direction: column;
  position: absolute;
  top:6%;
  z-index: 5;
  left:9%;
}

.university h4{
  color:white;
  letter-spacing: 0.05vw;
  font-weight: 600;
  margin-top: 4vh;
  font-size: 2.35vw;
  margin-bottom: 4vh;
}
.greenfield_image{
  max-width:40%;
  right: 5%;
  cursor: pointer;
  top:3%;
  height:20%;
  position: absolute;
}
.greenfield_image img{
  height: 100%;
}
.back{
  margin-top: 5vh;
  margin-bottom: 1vh;
  font-size: 1vw;
  opacity: .5;
  cursor:pointer;
}
.square_number{
  width:100%;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.bg-dark{
  background:rgba(31, 37, 55, 0.7)!important;
}
.title{
  margin:0;
  font-size: 1.4vw;
  letter-spacing: 0.02vw;
  font-weight: 600;
  padding-right: 0;
}
.border{
  border-bottom: 1px solid white;
  margin-left: 1vh;
  margin-right: 1vh;
  opacity: .5;
  margin-bottom: 1vh;
}
.greenfield_border{
margin:2%;
font-size: 1vw; 
display:flex;
cursor: pointer;
background:rgba(31, 37, 55, 0.7);
flex-direction: column;
width: 96%;
}
.greenfield_border:hover {
  background: rgba(59, 70, 104, 0.7);
}
.sub_title{
  margin-top:2%;
  opacity: .5;
}
.wrap{
  display: flex;
  flex-direction: row ;
}
.inside_square{ 
  display: flex;
  justify-content: center;
}
.svg_map {
  left: 0;
  z-index: 2;
  top: 0;
  width:100%;
  margin-top: 4%;
  height:96.5%;
  opacity: 0.5;

  position: absolute;
  outline: none;
}
.svg {
  width: 100%;
}
.part {
  opacity: 0;
  cursor: pointer;
}
.part:hover {
  opacity: 1!important;
  fill: #2CCCD8!important;
}
.click{
  opacity: 1!important;
  fill: #2CCCD8!important;
}
.university button{
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-right: 1vw;
  font-weight: 600;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 5;
  letter-spacing: 0.05vw;
  font-size: 1vw;
  border-radius: 100px;
  border:none;
  cursor: pointer;
  z-index: 999;
  outline: none;
  background:#C7D7E2;
  color:#42595B;
}
.square{
  padding:1vh;
  width:100%;
  display: flex;
  align-items: center;
  color:#CECECE;
}
.right_map {
  align-self: flex-start;
  width:52%;
  height: 100%;
  color: white;
  position:relative;
}
.left_map {
  margin-top: 7%;
  margin-left: 6%;
  margin-right: 1.5%;
  position: relative;
  display: flex;
  height:100%;
  width: 50%;
}
.center {
  min-width:70vw;
  left:15%;
  position: fixed;
  top:8%;
  height:90%;
  overflow:visible!important;
  z-index: 15;
}
.table {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
}
.table p{
    margin:0;
}
.right_wrapper{
  display: flex;
  width:100%;
  flex-direction: column;
  margin-top: 10%;
}
.gr{
  font-size: 0.93vw;
  opacity: .5;
}
.active{
  opacity: 1!important;
  fill: #8FBEDF!important;
}
.button_active{
  background: #2CCCD8!important;
  color:white!important;
  box-shadow: 0px 2px 10px #8BE0E6;
}
</style>
<script>
import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
export default {
  data() {
    return {
      greenfield:{

      },
      oez_ppt:[],
      any:[],
      visable:true,
      index: 0,
      toggle:true,
      green:{},
      type:'',
      industrial:[],
      oez:[],
      show_greenfield:false,
    };
  },
  components:{
    headerVue, formsVue
  },
  methods: {
    modalImage() {
      this.$refs.grinf.classList.toggle("center");
    },
    onSubmit(){
      const greenfield_url = 'http://127.0.0.1:8000/greenfield/?format=json&type='+this.type
      let oez_ppt = []
      let oez = []
      let industrial = []
      let any = []
      fetch(greenfield_url).then(response => response.json()).then(data => {
      this.green = data
      for (let i=0; i<data.length; i++){
         
          if (data[i].territory == 'oez' ){
            oez_ppt.push(data[i])
          }
          else if (data[i].territory == 'oezru'){
            oez.push(data[i])
          }
          else if (data[i].territory == 'industrial'){
            industrial.push(data[i])
          }
          else if (data[i].territory == 'any'){
            any.push(data[i])
          }
      }
     this.any = any
     this.industrial = industrial
     this.oez_ppt = oez_ppt
     this.oez = oez
    
    })
          
    
    },
    ShowGreenfield(object){
      this.show_greenfield = true, 
      this.greenfield = object
    },
    active(event){
      if(event.target.id == 'first'){
        for (let i =0 ; i<svg.children.length; i++){
          svg.children[i].classList.remove('active')
        }
      first.classList.add('button_active')
      second.classList.remove('button_active')
      third.classList.remove('button_active')
      gryasi.classList.add('active')
      elec.classList.add('active')
      }
      else if (event.target.id == 'second'){
        first.classList.remove('button_active')
        second.classList.add('button_active')
        third.classList.remove('button_active')
        for (let i =0 ; i<svg.children.length; i++){
          svg.children[i].classList.remove('active')
        }
        dankov.classList.add('active')
        elec.classList.add('active')
        zadonsk.classList.add('active')
        hlevnoe.classList.add('active')
        terbuny.classList.add('active')
        ismalkovo.classList.add('active')
        lev.classList.add('active')
        chaplygin.classList.add('active')
      }
      else if(event.target.id == 'third') {
        first.classList.remove('button_active')
        second.classList.remove('button_active')
        third.classList.add('button_active')
          for (let i =0 ; i<svg.children.length; i++){
          svg.children[i].classList.remove('active')
        }
        krasnoe.classList.add('active')
        elec.classList.add('active')
        lipetsk.classList.add('active')
      }
    }
  },
  mounted() {
    const greenfield_url = 'http://127.0.0.1:8000/greenfield/?format=json'
    fetch(greenfield_url).then(response => response.json()).then(data => {
      this.green = data
    
      for (let i=0; i<data.length; i++){
         
          if (data[i].territory == 'oez' ){
            this.oez_ppt.push(data[i])
          }
          else if (data[i].territory == 'oezru'){
            this.oez.push(data[i])
          }
          else if (data[i].territory == 'industrial'){
            this.industrial.push(data[i])
          }
          else if (data[i].territory == 'any'){
            this.any.push(data[i])
          }
      }
    
    })
      

    
  },
 
};
</script>