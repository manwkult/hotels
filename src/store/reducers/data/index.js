import initialState from '@/store/initialStates'
import * as actionTypes from '@/store/reducers/action-types'

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_HOTELS: {
      let { hotels } = { ...state }
      hotels = action.payload.data
      return { ...state, hotels }
    }
    default:
      return state
  }
}
