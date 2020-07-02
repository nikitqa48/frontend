import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import * as state from './state'

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
}
