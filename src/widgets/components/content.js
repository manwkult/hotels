import React from 'react'

import CardComponent from '@/widgets/containers/card'

export default (props) => (
  <div>
    {
      props.hotels.map((hotel) => {
        return <CardComponent
          key={ hotel.id }
          hotel={ hotel }
        />
      })
    }
  </div>
)
