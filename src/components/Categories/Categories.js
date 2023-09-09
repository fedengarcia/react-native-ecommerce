import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { styles } from './CategoriesStyle';
import CategoryItem from '../CategoryItem/CategoryItem';
import categories from '../../data/categories';

const Categories = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatListContainer}
                data={categories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem title={item}/>}
            />
        </View>
    );
}

export default Categories;
