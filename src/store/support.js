const state = {
 support:{'id':'1'},
 backendUrl: 'https://backendinvest.admlr.lipetsk.ru/'
}
const mutations = {
    changeSupport(state, data){
        state.support = data
    }
}
const actions = {
    allSupportData(context){
        const url = 'https://backendinvest.admlr.lipetsk.ru/support/'
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