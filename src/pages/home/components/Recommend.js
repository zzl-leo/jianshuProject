import React from 'react'
import {RecommendWrapper, RecommendItem} from '../styled'
import {connect} from 'react-redux'
class Recommend extends React.Component {
    render () {
        const {recommendList} = this.props
        return (
            <RecommendWrapper>
                {recommendList.map(item => {
                    return (
                        <RecommendItem key={item.id} imgUrl={item.imgUrl}></RecommendItem>
                    )
                })}
            </RecommendWrapper>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        recommendList: state.home.recommendList
    }
}

export default connect(mapStatesToProps, null)(Recommend)