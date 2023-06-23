import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import { Restaurant, RestaurantListContainer } from './RestaurantList.styles'

const RestaurantList: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurants)

  return (
    <RestaurantListContainer>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
        </Restaurant>
      ))}
    </RestaurantListContainer>
  )
}

export default RestaurantList
