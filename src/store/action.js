/**
 * 商城uve-actions
 */
export default {
    saveUserName(context,username){
        context.commit('saveUserName',username)
    },
    cartCount(context,cartcount){
        context.commit('cartCount',cartcount)
    }
}
