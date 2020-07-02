const state = {
    oez:{},
    oez_ppt:{},
    industrial:{},
    any:{},
   }
   const mutations = {
       changeSquare(state, oez, oez_ppt, industrial, any){
           state.oez = oez
           state.oez_ppt = oez_ppt
           state.industrial = industrial
           state.any = any
       }
   }
   const actions = {
       getAllSqaure(context){
           const url = 'https://backendinvest.admlr.lipetsk.ru/greenfield/'
           fetch(url).then(response => response.json()).then(data => (context.commit('changeSupport', data)))
       },
   
       filterSupportData(context,url){
           fetch(url).then(response => response.json()).then(data => (context.commit('changeSupport', data)))
       }  
   }
   const getters = {
           supports: (state) => {
               return state.support
           }
   }
   export default{
       state,
       mutations,
       actions,
       getters
   }