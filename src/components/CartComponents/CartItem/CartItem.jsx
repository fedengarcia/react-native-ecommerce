import React, { useEffect } from 'react';
import {Pressable, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import { styles } from './CartItemStyles';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../../global/COLORS';
import Card from '../../Card/Card';


const CartItem = ({itemCart, navigation, handleDeleteItem}) => {

    return (
        <Card style={styles.container}>
            <View>
                <Text style={styles.name}>{itemCart?.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.detailsText}>{`Cantidad: ${itemCart?.quantity}`}</Text>
                    <Text style={styles.detailsText}>{`Precio: ${itemCart?.price}`}</Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteItem({type:"single",itemId:itemCart.id})}>
                    <Feather name="trash" size={50} color={COLORS.secondary }/>
                </TouchableOpacity>
            </View>
        </Card>
    );
}

export default CartItem;
