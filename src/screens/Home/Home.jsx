import { FlatList, Text, View } from 'react-native'
import React from 'react';
import { styles } from './HomeStyles';
import { CategoryItem, Header } from '../../components';
import { DATA_CATEGORIES } from '../../data/global_data';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={"Categories"}/>
          <FlatList
              style={styles.flatList}
              data={DATA_CATEGORIES}
              keyExtractor={category => category}
              renderItem={({item}) => <CategoryItem navigation={navigation} categorySelected={item}/>}
          />
    </View>
  )
}

export default Home
