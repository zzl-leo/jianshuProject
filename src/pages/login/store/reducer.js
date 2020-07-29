import * as actionTypes from './actionTypes'
const defaultState = {
    login: false,
    account: '',
    password: ''
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.LOGIN:
            newState.login = true
            return newState
        case actionTypes.ACCOUNT_INPUT:
            newState.account = action.value
            return newState
        case actionTypes.PASSWORD_INPUT:
            newState.password = action.value
            return newState
        case actionTypes.LOGOUT:
            newState.login = false
            return newState
        default:
            return state
    }
}