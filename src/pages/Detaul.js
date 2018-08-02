import React, { Component,Fragment} from 'react';
import Base from '../components/Base';
import { withRouter } from 'react-router-dom';
class Detail extends Component {
  render() {
    return (
      <Fragment>
       <div> {this.props.match.params.id}</div>
      </Fragment>
  )
  }
}
export default withRouter(Detail)