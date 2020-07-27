import * as actionTypes from './actionTypes'
const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            newState.topicList = action.topicList
            newState.articleList = action.articleList
            newState.recommendList = action.recommendList
            return newState
        case actionTypes.GET_MORE_LIST:
            newState.articleList = [...newState.articleList, ...action.value]
            newState.articlePage = action.page + 1
            return newState
        case actionTypes.CHANGE_SCROLL_FLAG:
            newState.showScroll = action.value
            return newState
        default:
            return state
    }
}