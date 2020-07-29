import * as actionTypes from './actionTypes'
import axios from 'axios'
export const logIn = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            console.log(res)
            const data = res.data.data
            if(data) {
                dispatch(changeLogin())
            } else {
                alert('登录失败')
            }
        })
    }
}
export const changeLogin = () => ({
    type: actionTypes.LOGIN
})

export const logOut = () => ({
    type: actionTypes.LOGOUT
})

export const accountInput = (value) => ({
    type: actionTypes.ACCOUNT_INPUT,
    value
})

export const passwordInput = (value) => ({
    type: actionTypes.PASSWORD_INPUT,
    value
})

