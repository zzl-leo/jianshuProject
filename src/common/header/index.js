import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import {logOut} from '../../pages/login/store/actionCreators'
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./styled";

class Header extends React.Component {
  getListArea = () => {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleClickChange} = this.props;
    const pageList = []
    for(let i = (page - 1) * 10; i < page * 10; i++) {
      if(list[i]) {
        pageList.push(
          <SearchInfoItem key={i}>{list[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleClickChange(this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe612;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, login, handleInputFocus, list, handleInputBlur, handleLogOut } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'><NavItem className="left active">首页</NavItem></Link>
          <NavItem className="left">下载App</NavItem>
          {
            login ?  <NavItem className="right" onClick={handleLogOut}>退出</NavItem> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }
          
          <NavItem className="right">
            <i className="iconfont">&#xe604;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={300} in={focused} classNames="slide">
              <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe662;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="write">
              <i className="iconfont">&#xe6a4;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    list: state.header.list,
    page: state.header.page,
    totalPage: state.header.totalPage,
    mouseIn: state.header.mouseIn,
    rotate: state.header.rotate,
    login: state.login.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.length === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleClickChange(spin) {
      let rotate = spin.style.transform.replace(/[^0-9]/ig, '') || 0
      rotate = parseInt(rotate, 10) + 360
      spin.style.transform = `rotate(${rotate}deg)`

      dispatch(actionCreators.changePage())
    },
    handleLogOut() {
      dispatch(logOut())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
