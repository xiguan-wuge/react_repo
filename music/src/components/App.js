import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import Recommend from './recommend/Recommend';
import logo from    '../assets/imgs/logo.png';  
// import '@/assets/stylus/reset/styl';
// import '@/assets/stylus/font.styl';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header"
        >
          <img src={logo} alt="logo" className="app-logo" />
          <h1 className="app-title">QQ Music</h1>
        </header>
        <div className="music-tab">
          <div className="tab-item selected">
            <NavLink to="/recommend" className="nav-link"><span>推荐</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/ranking" className="nav-linl">
              <span>排行榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/search" className="nav-link">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/*
                Switch组件用来选择最近的一个路由，否则最后一个没有指定path的路由也会显示
                Redirect重定向到列表页
              */}
          <Switch>
            <Route path="/recommend" component={Recommend}>
            </Route>
            <Route path="/ranking" component={Ranking}>
            </Route>
            <Route path="/search" component={Search}>
            </Route>
            <Redirect from="/" to="/recommend"/>
            <Route component={Recommend}/>
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;