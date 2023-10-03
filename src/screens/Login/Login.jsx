import React from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './LoginStyles';
import { Card, Header } from '../../components';


const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Header title={'Login'} navigation={navigation}/> */}
            <View style={styles.loginContainer}>
              <Card style={styles.loginCard}>
                <Text style={styles.title}>Login to start</Text>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                  <Text style={styles.notAccountText}>No have an account?</Text>
                  <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Singup")}>
                    <Text style={styles.buttonText}>Sing up</Text>
                  </TouchableOpacity>
              </Card>
            </View>
           
        </View>
    );
}


export default Login;
