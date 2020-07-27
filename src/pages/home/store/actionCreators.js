import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const getMoreList = (result) => ({
    type: actionTypes.GET_MORE_LIST,
    value: result
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMore = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then(res => {
            const result = res.data.data.list
            dispatch(getMoreList(result))
        })
    }
}