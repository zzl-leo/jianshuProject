import React from 'react'
import {Redirect} from 'react-router-dom'
import {LoginWrapper, LoginBox, Input, Button} from './styled'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
class Login extends React.Component {
    render () {
        const {login, account, password, handleLogIn, handleAccount, handlePassword} = this.props
        if(!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' value={account} onChange={(e) => handleAccount(e)} />
                        <Input placeholder='密码' value={password} onChange={(e) => handlePassword(e)} type='password' />
                        <Button onClick={() => handleLogIn(account, password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return (
                <Redirect to='/'></Redirect>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login.login,
        account: state.login.account,
        password: state.login.password
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        handleAccount(e) {
            dispatch(actionCreators.accountInput(e.target.value))
        },
        handlePassword(e) {
            dispatch(actionCreators.passwordInput(e.target.value))
        },
        handleLogIn(account, password) {
            dispatch(actionCreators.logIn(account, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)