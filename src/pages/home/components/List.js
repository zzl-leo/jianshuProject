import React from 'react'
import {ListItem, ListInfo, LordMore} from '../styled'
import {connect} from 'react-redux'
import * as actionCreators  from '../store/actionCreators'
class List extends React.Component {
    render () {
        const {articleList, getMoreList} = this.props
        return (
            <div>
                {articleList.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <img className="listImg" src={item.imgUrl} alt="img" />
                            <ListInfo>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">{item.desc}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
                <LordMore onClick={getMoreList}>加载更多</LordMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.home.articleList
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)