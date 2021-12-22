import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/userCSS.css"
import "assets/funcs/commonJs"

// import HomeView from "views/HomeView";
import Sample from "views/Sample";
import BoardDetailView from "views/BoardDetailView";
import SigninView from "views/SigninView";
import ProfileView from "views/ProfileView";
import ManagerView from "views/ManagerView";
import ManagerBoardView from "views/ManagerBoardView";
import ManagerBookingView from "views/ManagerBookingView";
import ManagerDashboardView from "views/ManagerDashboardView";
import AboutusView from "views/AboutusView";
import AlarmView from "views/AlarmView";
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
          {/* <Route 
            path="/home" 
            exact 
            render={props => <HomeView {...props} />} 
          /> */}
          <Route 
            path="/signin" 
            exact 
            render={props => <SigninView {...props} />} 
          />
          <Route 
            path="/profile" 
            exact 
            render={props => <ProfileView {...props} />} 
          />
          <Route
            path="/manager/board"
            exact
            render={props => <ManagerBoardView {...props} />}
          />
          <Route
            path="/manager/booking"
            exact
            render={props => <ManagerBookingView {...props} />}
          />
          <Route
            path="/manager/dashboard"
            exact
            render={props => <ManagerDashboardView {...props} />}
          />
          <Route
            path="/manager"
            exact
            render={props => <ManagerView {...props} />}
          />
          <Route 
            path="/detail" 
            exact 
            render={props => <BoardDetailView {...props} />} 
          />
          <Route 
            path="/aboutus" 
            exact 
            render={props => <AboutusView {...props} />} 
          />
          <Route
            path="/alarm"
            exact
            render={props => <AlarmView {...props} />}
          />
          <Route
            path="/error/:errorId"
            exact
            render={props => <ErrorView {...props} />}
          />
          <Route
            path="/sample"
            exact
            render={props => <Sample {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ProgressProvider>
  </Provider>,
  document.getElementById("root")
);