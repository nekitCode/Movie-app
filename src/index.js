import React from 'react';
import ReactDOM from 'react-dom';
import {BasicComponent} from './BasicComponent';
import {Provider} from 'react-redux';
import {store} from './store/store';
// import {Auth} from './Components/Auth/Auth';
// import {Signup} from './Components/Auth/Signup/Signup';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    {/* <Auth /> */}
    {/* <Signup /> */}
    <BasicComponent/>
  </Provider>,
  document.getElementById('root')
);
