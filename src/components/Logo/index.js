
import React from 'react';
import classNames from 'classnames';
import logo from './logo.svg';
import './logo.css';

export default (props) => {
  return (
    <div className={classNames("leo-logo", {"vertical": props.vertical})}> 
      <img className="log-logo" src={logo} title="logo"  alt="Blog" />
      <h1 className="log-name">博客之家</h1>
    </div>
  )
}
