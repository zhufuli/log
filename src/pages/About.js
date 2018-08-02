import React,{Component} from 'react';
import Base from '../components/Base';
//定义一个关于我组件
export default class About extends Component {
    render() {
      return(
        <Base className="about-to">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
          Dolores voluptatibus iusto adipisci assumenda, ex vel, <br/>
          obcaecati totam fugiat quae vitae quibusdam at commodi optio odio voluptates tempora quisquam praesentium. Est.
        </Base>

      )
    }
    }