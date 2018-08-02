import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
//定义一个blogs组件
import axios from 'axios';
import Base from '../components/Base';
import  Loading  from '../components/Loading'; 
 class Blog extends Component{
    state={
        posts:[],
        loading:true
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts').then( res=>{
            console.log(res)
           if(res.status === 200 && res.statusText==="OK"){
               this.setState({
                posts: res.data,
                loading:false
               })
            }
        })
    }

    handlePostClick(id) {
        this.props.history.push(`/blog/post/${id}`);
      }

    render(){
        return(
         <Base>
         {
             this.state.loading
             ?
             <Loading/>
             :
             this.state.posts.map(post=>{
              return(
                <p className="blog" onClick={this.handlePostClick.bind(this,post.title)} key={post.id}>
                  {post.id}.{post.title}
                 </p> 
              )
             })
         }
         </Base>
        )
    }
}
export default withRouter(Blog);