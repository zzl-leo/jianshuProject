import * as actionTypes from './actionTypes'
const defaultState = {
    title: '',
    content: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAIL:
            const newState = JSON.parse(JSON.stringify(state))
            newState.title = action.value.title
            newState.content = action.value.content
            return newState
        default:
            return state
    }
}