import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class Writer extends React.Component {
    render () {
        const {login} = this.props
        if(login) {
            return (
                <div>写文章</div>
            )
        } else {
            return (
                <Redirect to='/login'></Redirect>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login.login
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)