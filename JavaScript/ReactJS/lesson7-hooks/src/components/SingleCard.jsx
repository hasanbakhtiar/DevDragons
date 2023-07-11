import React from 'react'

const SingleCard = ({title,price}) => {
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}$</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard