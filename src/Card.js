import React from 'react'

const Card = props => {
    return (
        <div className="col-md-4 mt-4">
        <div className="card card-image">
          <div className="card-body text-center cord-body-image">
              <div className="image-container">
              <img src={props.media} className="image" alt={props.title} />
              </div>
          </div>
        </div>
        </div>
    )
}

export default Card