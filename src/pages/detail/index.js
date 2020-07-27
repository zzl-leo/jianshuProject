import React from 'react'
import {DetailWrapper, Header, Content} from './styled'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
class Detail extends React.Component {
    render () {
        const {title, content} = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.detail.title,
        content: state.detail.content
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)