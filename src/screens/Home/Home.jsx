import { FlatList, Text, View } from 'react-native'
import React from 'react';
import { styles } from './HomeStyles';
import { Header } from '../../components';
import { DATA_CATEGORIES } from '../../data/global_data';
import {CategoryItem} from './components';

const Home = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
      <Header title={"Categories"}/>
          <FlatList
              style={styles.flatList}
              data={DATA_CATEGORIES}
              keyExtractor={category => category}
              renderItem={({item}) => <CategoryItem categoryTitle={item} setCategorySelected={setCategorySelected}/>}
          />
    </View>
  )
}

export default Home
