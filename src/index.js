import React from 'react';
import ReactDOM from 'react-dom';
import {BasicComponent} from './BasicComponent';
import {Provider} from 'react-redux';
import {store} from './store/store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BasicComponent/>
  </Provider>,
  document.getElementById('root')
);