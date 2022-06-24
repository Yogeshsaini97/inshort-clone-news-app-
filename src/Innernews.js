import React, { Component } from 'react'

export default class Innernews extends Component {
    
  render() {
      let {title,imageurl,description,url}=this.props;
    return (
      <>
        <div>
          <div className="card">
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}...
              </p>
              <a href={url} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
