import React from 'react'
import {
  Link
} from 'react-router-dom';
import "./index.css";
export default (props) => {
  return (
    <ul className="leo-nav">
      {
        props.items.map(item => {
          return (
            <li key={item.url}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}