import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { styles } from './CardStyle';
import CategoryItem from '../CategoryItem/CategoryItem';
import categories from '../../data/categories';

const Card = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

export default Card;
