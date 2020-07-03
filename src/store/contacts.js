const state = {
    contacts:{},
    backendUrl: 'https://backendinvest.admlr.lipetsk.ru/'
   }
   const mutations = {
       changeContact(state, data){
           state.contacts = data
       }
   }
   const actions = {
       allContactData(context){
           const url = 'https://backendinvest.admlr.lipetsk.ru/contacts/'
           fetch(url).then(response => response.json()).then(data => (context.commit('changeContact', data)))
       
        },

   }
   const getters = {
           contact: (state) => {
               return state.contacts
           }
   }
   export default{
       state,
       mutations,
       actions,
       getters
   }