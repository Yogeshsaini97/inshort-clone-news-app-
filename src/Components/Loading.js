import React, { Component } from 'react'
import Rocket from "./Rocket.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={Rocket} className="img-fluid" alt="loading"></img>
      </div>
    )
  }
}
