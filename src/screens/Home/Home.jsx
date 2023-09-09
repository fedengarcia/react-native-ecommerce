import { Text, View } from 'react-native'
import React from 'react';
import { styles } from './HomeStyles';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={"Home"}/>
      <Categories/>
    </View>
  )
}

export default Home
