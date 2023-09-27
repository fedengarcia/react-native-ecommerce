import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Filters, Header, SearchInput } from '../../components'
import { styles } from './HomeStyles'
import { DATA_PRODUCTS } from '../../data/products'
import ProductItem from '../../components/HomeComponents/ProductItem/ProductItem'
import { useSelector } from 'react-redux'


const Home = ({navigation}) => {
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const categorySelected = useSelector(state => state.shop.categorySelected)
  console.log(categorySelected)
  useEffect(() => {
    let productsFiltered = []
    if(categorySelected){
      const productsSelected = DATA_PRODUCTS.filter(prod => prod.category === categorySelected);
      productsFiltered = productsSelected.filter(prod => prod.title.includes(keyword));
    }else{
      productsFiltered = DATA_PRODUCTS.filter(prod => prod.title.includes(keyword));
    }
    setProductsList(productsFiltered);

  }, [keyword, categorySelected]);

  return (
    <View style={styles.container}>
      <Header title={"Home"} navigation={navigation}/>
      <SearchInput
        onSearch={setKeyword}
      />
      <Filters navigation={navigation}/>
      <View style={styles.productsListContainer}>
        {productsList.length > 0 ?
        <FlatList
          style={styles.flatList}
          numColumns={2}
          horizontal={false}
          data={productsList}
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
