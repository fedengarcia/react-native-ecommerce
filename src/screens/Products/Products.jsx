import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header, SearchInput } from '../../components'
import products from '../../data/products'
import { styles } from './ProductsStyle'


const Products = ({navigation, route}) => {
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { categorySelected } = route.params;

  useEffect(() => {
    let productsFiltered = []
    if(categorySelected){
      const productsSelected = products.filter(prod => prod.category === categorySelected);
      productsFiltered = productsSelected.filter(prod => prod.title.includes(keyword));
    }else{
      productsFiltered = products.filter(prod => prod.title.includes(keyword));
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
          data={productsList}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate("Details", {product: item})}>
            <Text style={{fontSize: 59}}>{item.title}</Text>
          </TouchableOpacity>}
          keyExtractor={item => item.id}
        />:
          <Text>No hay productos para mostrar</Text>
        }
      </View>
    </View>
  )
}

export default Products
