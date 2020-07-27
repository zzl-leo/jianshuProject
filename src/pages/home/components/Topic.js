import React from 'react'
import { 
    TopicWrapper,
    TopicItem 
} from '../styled'
import {connect} from 'react-redux'
class Topic extends React.Component {
    render () {
        let {topicList} = this.props
        return (
            <TopicWrapper>
                {topicList.map(item => {
                    return (
                        <TopicItem key={item.id}>
                            <img className="topicPic" src={item.imgUrl} alt='img' />
                            {item.title}
                        </TopicItem>
                    )
                })}
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.home.topicList
    }
}



export default connect(mapStateToProps, null)(Topic);