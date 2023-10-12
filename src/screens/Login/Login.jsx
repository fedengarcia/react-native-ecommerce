import React, { useState } from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './LoginStyles';
import { Card } from '../../components';
import { useLoginMutation } from '../../services/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/auth/authSlice';
import { insertNewSession } from '../../db';


const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    triggerLogin({
      email,
      password
    }).then(result => {
      dispatch(setUser(result))
      insertNewSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      }).then(result =>  console.log(result))
      .catch(err =>  console.log(err))
    }).catch(err => console.log(err))
  }


  return (
      <View style={styles.container}>
          {/* <Header title={'Login'} navigation={navigation}/> */}
          <View style={styles.loginContainer}>
            <Card style={styles.loginCard}>
              <Text style={styles.title}>Login to start</Text>
              <TextInput style={styles.input}  value={email} onChangeText={setEmail}/>
              <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
                <Text style={styles.notAccountText}>No have an account?</Text>
                <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Signup")}>
                  <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </Card>
          </View>
          
      </View>
  );
}


export default Login;
