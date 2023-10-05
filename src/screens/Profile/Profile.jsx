import React, { useState } from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {styles} from './ProfileStyles';
import { Header } from '../../components';



const Profile = ({navigation}) => {
  const [image, setImage] = useState(null)


  return (
      <View style={styles.container}>
         <Header title={"Profile"}/>
          <Image style={styles.image} source={{uri:""}}/>
          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.buttonText}>Add profile picture</Text>
          </TouchableOpacity>
      </View>
  );
}


export default Profile;
