import React, { Component } from 'react'

export class OtherPage extends Component {
  render() {
    return (
      <div>
        I'm some other page!
        <Link to="/">Go back home</Link>
      </div>
    )
  }
}

export default OtherPage;
