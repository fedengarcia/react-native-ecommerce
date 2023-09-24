import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header, SearchInput } from '../../components'
import { styles } from './HomeStyles'
import { DATA_PRODUCTS } from '../../data/products'
import ProductItem from '../../components/ProductsComponents/ProductItem/ProductItem'


const Home = ({navigation}) => {
  const [productsList, setProductsList] = useState([]);
  const [categorySelected, setCategorySelected] = useState('all');
  const [keyword, setKeyword] = useState('');
  console.log("YOUR CATEGORY")

  useEffect(() => {
    let productsFiltered = []
    if(categorySelected !== 'all'){
      const productsSelected = DATA_PRODUCTS.filter(prod => prod.category === categorySelected);
      productsFiltered = productsSelected.filter(prod => prod.title.includes(keyword));
    }else{
      productsFiltered = DATA_PRODUCTS.filter(prod => prod.title.includes(keyword));
    }
    setProductsList(productsFiltered);

  }, [keyword]);

  return (
    <View style={styles.container}>
      <Header title={"Home"} navigation={navigation}/>
      <SearchInput
        onSearch={setKeyword}
      />
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
          <Text>No hay productos para mostrar</Text>
        }
      </View>
    </View>
  )
}

export default Home
