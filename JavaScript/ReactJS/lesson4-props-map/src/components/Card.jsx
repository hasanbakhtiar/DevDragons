import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className='col-12 col-sm-12 col-md-4'>
        <div className="card" >
          <img src={this.props.photo} height={400} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.model}</h5>
              <h3 className="card-text">{this.props.price}$</h3>
              <p className={this.props.check?"text-success":"text-danger"}>{this.props.check ? "in Stock":"Stock out"}</p>
              <a href="/" className={`btn btn-success ${ this.props.check?"":"disabled"}`}>Add to cart</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Card