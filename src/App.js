import React, { Component } from 'react';
 //引入router及router相关组件
import{
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
}from 'react-router-dom';
//引入APP文件
import './App';
import Blog from "./pages/Blog";
import About from "./pages/About";
import Detail from "./pages/Detaul";

//定义一个home组件
const Home = () => <div>Home</div>;




//定义组件
class App extends Component {
  render() {
    return (
// 把需要路由的内容包裹在Router（BrowserRouter）里
       <Router>
          <Switch>
            <Redirect  exact to="/Home" from="/"/>
           {/*用path来传第值*/}
            <Route path="/home"  component={Home}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/blog/post/:id" component={Detail}/>
          </Switch>
       </Router>
    )
  }
}

export default App;
