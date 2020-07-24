import axios from 'axios'
import * as actionTypes from './actionTypes'
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changePage = () => ({
    type: actionTypes.CHANGE_PAGE
})

export const spin = () => ({
    type: actionTypes.SPIN
})


const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    value: data,
    totalPage: Math.ceil(data.length / 10)
});

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