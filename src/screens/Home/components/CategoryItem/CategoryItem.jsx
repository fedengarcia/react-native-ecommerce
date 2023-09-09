import React from 'react';
import {Pressable, Text} from 'react-native';
import { styles } from './CategoryItemStyles';
import { Card } from '../../../../components';

const CategoryItem = ({categoryTitle}) => {
    return (
        <Pressable onPress={() => console.log(categoryTitle)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{categoryTitle}</Text>
            </Card>
        </Pressable>
    );
}

export default CategoryItem;
