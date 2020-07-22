import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './styled'
import {IconfontStyle} from './static/iconfont/iconfont'

import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </div>,
  document.getElementById('root')
);
