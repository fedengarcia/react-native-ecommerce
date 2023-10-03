import React from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SingUpStyles';
import { Card, Header } from '../../components';


const SingUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Header title={'Login'} navigation={navigation}/> */}
            <View style={styles.loginContainer}>
              <Card style={styles.loginCard}>
                <Text style={styles.title}>Create an account</Text>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                  <TouchableOpacity  style={styles.button}>
                    <Text style={styles.buttonText}>Sing up</Text>
                  </TouchableOpacity>
              </Card>
            </View>
           
        </View>
    );
}


export default SingUp;
