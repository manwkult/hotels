import React from 'react'
import ReactStars from 'react-stars'

import SearchIcon from '@/widgets/components/icons/search'
import StarsIcon from '@/widgets/components/icons/stars'

export default (props) => (
  <div className="filter">
    <fieldset>
      <legend>Filtros</legend>
      <div>
        <SearchIcon />
        <p className="title-filter text-primary">Nombre del hotel</p>
      </div>
      <input type="search"
        className="form-control"
        ref={ props.nameRef }
        onChange={ props.changeName }
        onKeyUp={ props.keyUp }
        placeholder="Ingrese el nombre del hotel"
      />
      <div className="search">
        <input type="button" className="btn btn-primary" value="Aceptar" onClick={ props.filterHotels } />
      </div>
      <div>
        <StarsIcon style="icon-stars" />
        <p className="title-filter text-primary">Estrellas</p>
        <ReactStars
          half={false}
          count={5}
          value={props.stars}
          size={30}
          onChange={props.ratingChanged}
          color2={'#ffd700'}
        />
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={props.allStars}>Todas las estrellas</button>
      </div>
    </fieldset>
  </div>
)
