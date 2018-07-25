import axios from '@/config/axios'
import endpoints from '@/config/endpoints'
import * as actionTypes from '@/store/reducers/action-types'

export const listHotels = (filters) => dispatch => {
  axios.get(`${endpoints.listHotels}${JSON.stringify(filters)}`)
    .then(response => {
      if (response) {
        const { data } = response
        if (data && data.status) {
          dispatch({
            type: actionTypes.LIST_HOTELS,
            payload: {
              data: data.data
            }
          })
        }
      }
    })
}
