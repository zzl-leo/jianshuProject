import * as actionTypes from './actionTypes'
const defaultState = {
    focused: false,
    list: [],
    mouseIn: false, // 与focused共同控制热门搜索标签框的显示状态
    page: 1, // 换一批显示当前的热门标签
    totalPage: 1, // 换一批标签总页数
    rotate: true
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState.focused = true
            return newState
        case actionTypes.SEARCH_BLUR:
            newState.focused = false
            return newState
        case actionTypes.CHANGE_LIST:
            newState.list = action.value
            newState.totalPage = action.totalPage
            return newState
        case actionTypes.MOUSE_ENTER:
            newState.mouseIn = true
            return newState
        case actionTypes.MOUSE_LEAVE:
            newState.mouseIn = false
            return newState
        case actionTypes.CHANGE_PAGE:
            if(newState.page < newState.totalPage) {
                newState.page++
            } else {
                newState.page = 1
            }
            return newState
        case actionTypes.SPIN:
            newState.rotate = !newState.rotate
            return newState
        default:
            return state
    }
}