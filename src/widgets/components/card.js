import React from 'react'
import ReactStars from 'react-stars'

export default (props) => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <img className="card-image" src={ require(`@/assets/images/hotels/${props.hotel.image}`) } />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card-name">
            <span className="text-primary">{ props.hotel.name }</span>
          </div>
          <ReactStars
            half={false}
            count={props.hotel.stars}
            value={props.hotel.stars}
            size={18}
            edit={false}
            color2={'#ffd700'} />
          {
            props.hotel.amenities.map((amenitie) => {
              return <img key={amenitie} className="card-amenities" src={ require(`@/assets/images/icons/amenities/${amenitie}.svg`) } />
            })
          }
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3">
          <div className="card-info">
            <p className="card-text-price">Precio por noche por habitación</p>
            <h3 className="card-price">ARS <b>{ props.hotel.price }</b></h3>
            <input type="button" className="btn btn-primary" value="Ver hotel"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)
