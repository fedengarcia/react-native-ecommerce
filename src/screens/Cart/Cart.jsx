import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './CartStyles';
import { CartItem, Header } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../services/shopAPI';
import { removeItem } from '../../features/cart/cartSlice';


const Cart = ({navigation}) => {
    const {user, localId} = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total); 
    const [ triggerPost, result ] = usePostOrderMutation(); 
    
    const dispatch = useDispatch();
    const [itemsCart, setItemsCart] = useState([]);

    const handleDeleteItem = (item) => {
        dispatch(removeItem(item))
    }
  
    const handleConfirmCart = () => {
        triggerPost({total, cart, user: {email: user, id: localId}})
    }

    useEffect(() => {
        setItemsCart(cart)
    }, [cart]);

    return (
        <View style={styles.container}>
            <Header title={'Cart'} navigation={navigation}/>
            {cart?.length > 0 ?
            <FlatList
                style={styles.flatList}
                data={itemsCart}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem navigation={navigation} itemCart={item} handleDeleteItem={handleDeleteItem}/>}
            />: 
                <Text style={styles.noResultsText}>Add some products to your cart!</Text>
            }
            <View style={styles.finalDetailsContainer}>
                <View style={styles.finalPriceContainer}>
                    <Text style={styles.finalPrice}>{`Total: $${total}`}</Text>
                </View>
                <View style={styles.cartActionsContainer}>
                    <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={handleConfirmCart}>
                        <Text style={styles.buttonText}>Buy</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => handleDeleteItem({type:"all", itemId: undefined})}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default Cart;
