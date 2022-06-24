

import React, { Component } from 'react';
import {Link}  from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
 <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " style={{Color:"white"}} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active ">
       <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/entertainment">entertainment</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/general">general</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/health">health</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/Science">science</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/Sports">sports</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/Technology">Technology</Link>
      </li><li className="nav-item">
       <Link className="nav-link" to="/business">business</Link>
      </li>
      
     
    </ul>
  </div>
</nav>
      </div>
      </>
    )
  }
}

