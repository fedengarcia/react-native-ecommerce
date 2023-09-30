import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { CategoryItem, Header } from '../../components'
import {styles} from "./CategoriesListStyle"
import { useGetCategoriesQuery } from '../../services/shopAPI';

const CategoriesList = ({navigation}) => {
  const {data, isLoading} = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <Header title={"Categories"} navigation={navigation}/>
      <View style={styles.categoriesContainer}>
          {isLoading ? <Text>cargando</Text> :
          <FlatList
              style={styles.flatList}
              data={Object.values(data)}
              keyExtractor={category => category.title}
              renderItem={({item}) => <CategoryItem navigation={navigation} categoryName={item?.title}/>}
              />}
      </View>
    </View>
  )
}

export default CategoriesList
