import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeComponent from '@/pages/components/home'
import HandleError from '@/error/containers/handleError'

import ContentComponent from '@/widgets/containers/content'
import FilterComponent from '@//widgets/containers/filter'

import * as actions from '@/store/actions'

import logo from '@/assets/images/logo-almundo.svg'

class Home extends Component {
  state = {
    data: this.props.data
  }

  handleListHotels = (data) => {
    this.props.actions.listHotels(data)
  }

  componentDidMount () {
    this.handleListHotels({})
  }

  componentWillReceiveProps (newProps) {
    if (this.state.data !== newProps.data) {
      this.setState({
        data: newProps.data
      })
    }
  }

  render () {
    return (
      <HandleError>
        <HomeComponent>
          <div className="header">
            <img src={ logo } />
          </div>
          <div className="content">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <FilterComponent
                  handleListHotels={ this.handleListHotels }
                  { ...this.state.data }
                />
              </div>
              <div className="col-sm-12 col-md-9 col-lg-9">
                <ContentComponent
                  { ...this.state.data }
                />
              </div>
            </div>
          </div>
        </HomeComponent>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
