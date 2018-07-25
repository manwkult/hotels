import React, { Component } from 'react'
import ContentComponent from '@/widgets/components/content'

export default class Content extends Component {
  render () {
    return (
      <ContentComponent
        { ...this.props }
      />
    )
  }
}
