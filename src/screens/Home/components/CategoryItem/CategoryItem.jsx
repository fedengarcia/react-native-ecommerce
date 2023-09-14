import React, { useEffect } from 'react';
import {Image, Pressable, Text, View, useWindowDimensions} from 'react-native';
import { styles } from './CategoryItemStyles';
import { Card } from '../../../../components';

const CategoryItem = ({categoryTitle, setCategorySelected}) => {
    const { height, width} = useWindowDimensions();

    useEffect(() => {
        // console.log(height,width)
    }, []);

    return (
        <Pressable onPress={() => setCategorySelected(categoryTitle)}>
            <Card style={styles.cardContainer}>
                {width > 400 ?
                    <View>
                        <Image
                            style={{width: 40, height: 40}}
                            source={{url: 'https://www.imgonline.com.ua/examples/rainbow-background-1-big.jpg'}}
                            />
                        <Text style={styles.text}>{categoryTitle}</Text>
                    </View>
                :
                    <Text style={styles.text}>{categoryTitle}</Text>
                }
            </Card>
        </Pressable>
    );
}

export default CategoryItem;
