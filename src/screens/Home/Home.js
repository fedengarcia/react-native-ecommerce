import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './HomeStyles'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={"Home"}/>

    </View>
  )
}

export default Home
