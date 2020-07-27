import * as actionTypes from './actionTypes'
const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: []
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
            return newState
        default:
            return state
    }
}