import React, { useState } from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './LocationStyles';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../services/shopAPI';


const Location = ({navigation}) => {
    const [location, setLocation] = useState({latitude: '', longitud: ''})

    return (
        <View style={styles.container}>
            <Header title={'Cart'} navigation={navigation}/>
        </View>
    );
}


export default Location;
