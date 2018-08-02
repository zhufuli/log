import React,{ Component, Fragment }from "react";
import Logo from './Logo';
import Nav from "./Nav";

export default  class Base extends Component{
    state = {
        navItems:[
            {url: '/Home',text: '首页'},
            {url: '/Blog',text: '博客'},
            {url: '/About',text: "关于我"}
           ]
        }
   render() {
    return (
      <Fragment>
        <Logo vertical={this.props.verticalLogo} />
        <Nav items={this.state.navItems}/>
        <div className="main">{this.props.children}</div>
      </Fragment>
    )
  }
}
