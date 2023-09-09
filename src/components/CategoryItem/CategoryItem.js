import React from 'react';
import {Pressable, Text, View} from 'react-native';
import { styles } from './CategoryItemStyle';
import Card from '../Card/Card';

const CategoryItem = ({categoryTitle}) => {
    return (
        <Pressable>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{categoryTitle}</Text>
            </Card>
        </Pressable>
    );
}

export default CategoryItem;
