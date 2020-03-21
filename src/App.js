import React, {Component} from 'react';
import TopNaviBar from './components/layout/TopNaviBar';
import MainTemplate from './components/pages/main/MainTemplate';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CoffeeTemplate from './components/pages/coffee/CoffeeTemplate';
import history from './history';
import { MdHome } from "react-icons/md";

class App extends Component{

  state = { 
    routes : [
      {
        path: "/*",
        exact: true,
        component: MainTemplate
      }
    ],
    selectGroupId : ""
  }
  render(){

    const {routes} = this.state;

    return (
      <Router history={history}>
        <div className="App">
          <div className="navi-bar">
            <i className="home"><Link to='/'><MdHome/></Link></i>
          </div>
          <TopNaviBar/>
          <div>
            <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
    
  }
}

export default App;
