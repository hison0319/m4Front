import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/userCSS.css"

// import HomeView from "views/HomeView";
import BoardDetailView from "views/BoardDetailView";
import ProfileView from "views/ProfileView";
import ManagerView from "views/ManagerView";
import CheckView from "views/CheckView";
import QrcodeView from "views/QrcodeView";
import AlarmView from "views/AlarmView";
import IconSample from "components/common/icons/IconSample";
import ErrorView from "views/ErrorView";

import { ProgressProvider } from "context/Progress"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ProgressProvider>
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" 
            exact 
            render={props => <ProfileView {...props} />} 
          />
          <Route 
            path="/profile" 
            exact 
            render={props => <ProfileView {...props} />} 
          />
          <Route
            path="/manager"
            exact
            render={props => <ManagerView {...props} />}
          />
          <Route
            path="/check"
            exact
            render={props => <CheckView {...props} />}
          />
          <Route 
            path="/detail" 
            exact 
            render={props => <BoardDetailView {...props} />} 
          />
          <Route 
            path="/qrcode" 
            exact 
            render={props => <QrcodeView {...props} />} 
          />
          <Route
            path="/alarm"
            exact
            render={props => <AlarmView {...props} />}
          />
          <Route
            path="/icons"
            exact
            render={props => <IconSample {...props} />}
          />
          <Route
            path="/error/:errorCode"
            exact
            render={props => <ErrorView {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ProgressProvider>
  </Provider>,
  document.getElementById("root")
);