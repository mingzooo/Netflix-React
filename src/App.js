import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import "./app.css"
import Browse from "./pages/browse/Browse";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Profile from './pages/profilepage/ProfilePage';

import { Provider } from 'react-redux';
import store from './redux/store';
import Like from './pages/browse/routes/Like';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/watch" component={Watch} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/like" component={Like} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
export default App;