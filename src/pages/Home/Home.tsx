import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/type'
import Header from '../../components/Header/Header'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import { HomeContainer } from './Home.styles'

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <HomeContainer>
      <Header />
      <h1>Welcome, {user.name}!</h1>
      <RestaurantList />
    </HomeContainer>
  )
}

export default Home
