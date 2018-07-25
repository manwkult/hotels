import React, { Component } from 'react'
import CardComponent from '@/widgets/components/card'

export default class Card extends Component {
  render () {
    return (
      <CardComponent
        { ...this.props }
      />
    )
  }
}
