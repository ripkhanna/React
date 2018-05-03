/*//import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router-dom';
import routes from './routes';
//import './styles/styles.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';

render(
    <Router history={browserHistory} routes={routes}  key={Math.random()} />,document.getElementById('app')
);

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './Actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
 <Provider store ={store}> 
  <App />
</Provider>, 
document.getElementById('app'));
registerServiceWorker();