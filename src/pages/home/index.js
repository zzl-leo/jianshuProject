import React from 'react'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './styled'
import {connect} from 'react-redux'
import List from './components/List'
import Writer from './components/Writer'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import * as actionCreators from './store/actionCreators'
class Home extends React.Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="bannerImg" src="https://upload.jianshu.io/admin_banners/web_images/4993/421ec96ccef8aea708c84ba2972b5be484695f25.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
         this.props.changeHomeData()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());
        },
    }
}

export default connect(null, mapDispatchToProps)(Home)