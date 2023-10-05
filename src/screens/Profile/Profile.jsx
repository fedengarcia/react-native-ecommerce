import React, { useState } from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProfileStyles';
import { Header } from '../../components';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePicture from '../../../assets/profilePic.png';
import { setProfileImage } from '../../features/auth/authSlice';



const Profile = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const imageProfile = useSelector(state => state.auth.profileImage);
  const dispatch = useDispatch();


  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted) return false;
    return true;
  }

  const pickImage = async () => {
    const hasPermission = await verifyCameraPermissions();
    if (hasPermission){
      
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9,16],
        quality: 0.4
      });

      if (!result.canceled) dispatch(setProfileImage(`${result.assets[0].uri}`));
      
    }
  }

  const confirmImage = () => {
    dispatch(setProfileImage(imageProfile))
  }
  return (
      <View style={styles.container}>
         <Header title={"Profile"}/>
         <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
              {imageProfile ? <Image style={styles.image} source={{uri: imageProfile }}/>
              : <Image style={styles.image} source={ProfilePicture}/>}
              <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
                <Text style={styles.buttonText}>{imageProfile ? 'Modify profile picture' : 'Add profile picture'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.infoText}>{user}</Text>
            </View>
         </View>
      </View>
  );
}


export default Profile;
