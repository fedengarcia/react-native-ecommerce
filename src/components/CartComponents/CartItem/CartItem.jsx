import React, { useEffect } from 'react';
import {Pressable, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import { styles } from './CartItemStyles';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../../global/COLORS';

const CartItem = ({itemCart, navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{itemCart?.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.detailsText}>Cantidad: 2</Text>
                    <Text style={styles.detailsText}>Precio: {itemCart?.price}</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="trash" size={50} color={COLORS.secondary }/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartItem;
