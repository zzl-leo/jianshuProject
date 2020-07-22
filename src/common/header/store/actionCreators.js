import axios from 'axios'
import * as actionTypes from './actionTypes'
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    value: data
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const action = changeList(res.data)
            dispatch(action)
        }).catch(() => {
            console.log('error')
        })
    }
}