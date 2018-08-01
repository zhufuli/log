import Reacr,{ Component, Fragment }from "react";
import Logo from './Logo';
import Nav from "./nav";

export default  class Base extends Component{
    stete = {
        items:[
            {url: '/home',text: '首页'},
            {url: '/Blog',text: '博客'},
            {url: '/defaul',text: "关于我"}
           ]
        }
    render(){
        return (
            <Fragment>
            <Logo/>
            <Nav items={this.state.Items}/>
            <div className="main">{this.props.children}</div>
            </Fragment>
           ) 
    }
}
