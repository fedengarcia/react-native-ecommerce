import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './HeaderStyle';

const hasBack = ['Home', 'Cart']


const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            {!hasBack.includes(title) && 
                <View style={styles.actionHeaderContainer}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonBackText}>
                                back
                            </Text>
                    </TouchableOpacity>
                </View>
            }
            <Text style={{...styles.text, textAlign: title === "Home" ? 'center' : 'left'}}>{title}</Text>
        </View>
    );
}

export default Header;
