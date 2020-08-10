const state = {
    news:{},
   }
   const mutations = {
       changeNews(state, data){
           state.news = data
       },
   }
   const actions = {
       getNews(context){
           let url = 'https://backendinvest.admlr.lipetsk.ru/all_news/'
           fetch(url).then(response => response.json()).then(data =>{
            (context.commit('changeNews', data))
           })
        },
        paginationNews(context, url){
            fetch(url).then(response => response.json()).then(data =>{
                (context.commit('changeNews', data))
               })
        }
   }
   const getters = {
           returnNews: (state) => {
               return state.news
           },
   }
   export default{
       state,
       mutations,
       actions,
       getters
   }