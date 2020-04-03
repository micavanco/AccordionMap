import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/global.scss";
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";
// styles
import "now-ui-kit/assets/css/bootstrap.min.css";
import "now-ui-kit/assets/scss/now-ui-kit.scss";
import "now-ui-kit/assets/demo/demo.css";


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
