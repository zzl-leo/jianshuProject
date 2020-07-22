import * as actionTypes from './actionTypes'
const defaultState = {
    focused: false,
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = true
        return newState
    } else if(action.type === actionTypes.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = false
        return newState
    } else if(action.type === actionTypes.CHANGE_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state
}