import { Text, View } from 'react-native'
import React from 'react'
import { CategoryItem, Header } from '../../components'
import {styles} from "./CategoriesListStyle"

const CategoriesList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={"Categories"}/>
      <View style={styles.categoriesContainer}>
          <FlatList
              style={styles.flatList}
              data={DATA_CATEGORIES}
              keyExtractor={category => category}
              renderItem={({item}) => <CategoryItem navigation={navigation} categorySelected={item}/>}
              />
      </View>
    </View>
  )
}

export default CategoriesList
