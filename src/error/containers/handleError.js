import React, { Component } from 'react'
import RegularError from '@/error/components/regularError'

class HandleError extends Component {
  state = {
    handleError: false
  }

  componentDidCatch (error, info) {
    this.setState({
      handleError: true
    })
  }

  render () {
    if (this.state.handleError) {
      return (
        <RegularError/>
      )
    }
    return this.props.children
  }
}

export default HandleError
