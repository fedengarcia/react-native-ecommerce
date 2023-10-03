import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './CartStyles';
import { CartItem, Header } from '../../components';
import { useSelector } from 'react-redux';


const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  

    return (
        <View style={styles.container}>
            <Header title={'Cart'} navigation={navigation}/>
            <FlatList
                style={styles.flatList}
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem navigation={navigation} itemCart={item}/>}
            />
            <View style={styles.finalDetailsContainer}>
                <View style={styles.finalPriceContainer}>
                    <Text style={styles.finalPrice}>{`Total: $${total}`}</Text>
                </View>
                <View style={styles.cartActionsContainer}>
                    <TouchableOpacity style={[styles.button, styles.buttonConfirm]}>
                        <Text style={styles.buttonText}>Buy</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.button, styles.buttonDelete]}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default Cart;
