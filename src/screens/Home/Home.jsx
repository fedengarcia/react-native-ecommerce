import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Filters, Header, SearchInput } from '../../components'
import { styles } from './HomeStyles'
import { DATA_PRODUCTS } from '../../data/products'
import ProductItem from '../../components/HomeComponents/ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../services/shopAPI'


const Home = ({navigation}) => {
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const categorySelected = useSelector(state => state.shop.categorySelected)
  const {data, isLoading} = categorySelected === 'all' ? useGetProductsQuery() : useGetProductsByCategoryQuery(categorySelected)

  useEffect(() => {
    if(data){
      const productsSelected = data.filter(prod => prod.title.includes(keyword));
      setProductsList(productsSelected);
    }

  }, [keyword]);

  return (
    <View style={styles.container}>
      <Header title={"Home"} navigation={navigation}/>
      <SearchInput
        onSearch={setKeyword}
      />
      <Filters navigation={navigation}/>
      <View style={styles.productsListContainer}>
        {data?.length > 0 ?
        <FlatList
          style={styles.flatList}
          numColumns={2}
          horizontal={false}
          data={keyword !== "" ? productsList : data}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => 
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Details", {product: item})}>
            <ProductItem product={item}/>
          </TouchableOpacity>}
        />:
          <Text style={styles.noResultsText}>No hay productos para mostrar</Text>
        }
      </View>
    </View>
  )
}

export default Home
