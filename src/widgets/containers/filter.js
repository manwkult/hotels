import React, { Component } from 'react'
import FilterComponent from '@/widgets/components/filter'

export default class Filter extends Component {
  state = {
    name: '',
    stars: 0
  }

  nameRef = element => {
    this.name = element
  }

  keyUp = (e) => {
    if (e.keyCode === 13) {
      this.filterHotels()
    }
  }

  changeName = () => {
    this.changeNameState(this.name.value)
  }

  filterHotels = () => {
    this.props.handleListHotels({ name: this.state.name, stars: this.state.stars })
  }

  ratingChanged = (rating) => {
    this.changeStarsState(rating)
    this.props.handleListHotels({ name: this.state.name, stars: rating })
  }

  allStars = () => {
    this.changeStarsState(0)
    this.props.handleListHotels({ name: this.state.name, stars: 0 })
  }

  changeNameState = (value) => {
    this.setState({
      name: value
    })
  }

  changeStarsState = (value) => {
    this.setState({
      stars: value
    })
  }

  render () {
    return (
      <FilterComponent
        changeName={ this.changeName }
        filterHotels={ this.filterHotels }
        ratingChanged={ this.ratingChanged }
        allStars={ this.allStars }
        nameRef={ this.nameRef }
        stars={ this.state.stars }
        keyUp={ this.keyUp }
        { ...this.props }
      />
    )
  }
}
