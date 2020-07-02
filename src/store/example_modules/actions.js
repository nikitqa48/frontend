export function allSupportData ( context ) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/support/'
    fetch(url).then(response => response.json()).then(data => (context.commit('changeSupport', data)))
}
export function filterSupportData (context, url) {
    fetch(url).then(response => response.json()).then(data => (context.commit('changeSupport', data)))
}