import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header, SearchInput } from '../../components'
import { styles } from './ProductsStyle'
import { DATA_PRODUCTS } from '../../data/products'
import ProductItem from '../../components/ProductsComponents/ProductItem/ProductItem'


const Products = ({navigation, route}) => {
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { categorySelected } = route.params;

  useEffect(() => {
    let productsFiltered = []
    if(categorySelected){
      const productsSelected = DATA_PRODUCTS.filter(prod => prod.category === categorySelected);
      productsFiltered = productsSelected.filter(prod => prod.title.includes(keyword));
    }else{
      productsFiltered = DATA_PRODUCTS.filter(prod => prod.title.includes(keyword));
    }
    setProductsList(productsFiltered);

  }, [keyword]);

  return (
    <View style={styles.container}>
      <Header title={"Products"} navigation={navigation}/>
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

export default Products
