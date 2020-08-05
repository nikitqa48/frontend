const state = {
    contacts:{},
    team:{},
    backendUrl: 'https://backendinvest.admlr.lipetsk.ru/'
   }
   const mutations = {
       changeContact(state, data){
           state.contacts = data
       },
       changeRole(state, team){
           
           state.team = team
         
       }
   }
   const actions = {
       allContactData(context){
           const url = 'https://backendinvest.admlr.lipetsk.ru/contacts/'
           fetch(url).then(response => response.json()).then(data =>
            {
                
                const leader = []
                const agent = []
                const team = {}

                for(let i = 0; i<data.length; i++){
                    if (data[i].role == 'leader'){
                        leader.push(data[i])
                    }
                    else{
                        agent.push(data[i])
                    }
                }
                team.agent = agent
                team.leader = leader
                context.commit('changeRole',  team)
            }
            ) 
             
       
        },

   }
   const getters = {
           contact: (state) => {
               return state.contacts
           },
           role:(state) => {
               return state.team
           }
   }
   export default{
       state,
       mutations,
       actions,
       getters
   }