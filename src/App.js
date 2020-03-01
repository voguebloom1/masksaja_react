import React, {Component} from 'react';
import TopNaviBar from './components/layout/TopNaviBar';
import MainTemplate from './components/pages/MainTemplate';


class App extends Component{

  render(){
    return (
      <div className="App">
        <TopNaviBar/>
        <MainTemplate/>
      </div>
    );
  }
}

export default App;
