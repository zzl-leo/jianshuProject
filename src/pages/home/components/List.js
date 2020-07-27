import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListInfo, LordMore } from "../styled";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";
class List extends React.Component {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <Link to={"/detail/" + index} key={index}>
              <ListItem>
                <img className="listImg" src={item.imgUrl} alt="img" />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LordMore onClick={() => getMoreList(articlePage)}>加载更多</LordMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.home.articleList,
    articlePage: state.home.articlePage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMore(articlePage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
