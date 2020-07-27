import axios from 'axios'
import * as actionTypes from './actionTypes'
export const getDetailInfo = (res) => ({
    type: actionTypes.GET_DETAIL,
    value: res
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            console.log(res.data.data)
            dispatch(getDetailInfo(res.data.data))
        })
    }
}