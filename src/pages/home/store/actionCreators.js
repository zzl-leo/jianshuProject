import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const getMoreList = (result, page) => ({
    type: actionTypes.GET_MORE_LIST,
    value: result,
    page: page
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMore = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            const result = res.data.data.list
            dispatch(getMoreList(result, page))
        })
    }
}

export const changeScrollFlag = (flag) => ({
    type: actionTypes.CHANGE_SCROLL_FLAG,
    value: flag
})