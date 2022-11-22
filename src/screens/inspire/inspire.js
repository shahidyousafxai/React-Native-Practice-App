import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import InspireScreen from './inspireScreen';
import FollowingScreen from './followingScreen';
import {logoutUser} from "../../services/api/methods/logout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DeviceInfo from "react-native-device-info"
import Toast from "react-native-toast-message"
import styles from "./styles" 


const Inspire = ({navigation}) => {
    const [inspire, setInspire] = useState(true);

    const postLogout = async () => {
      const device_id = await DeviceInfo.getUniqueId();
      await AsyncStorage.setItem("device_id", device_id);
          await logoutUser({device_id: device_id}).then(async (res)=>{
              if(res.data.status === 200 || res.data.message === "Device token has been deleted successfully!"){
                  await AsyncStorage.removeItem("token")
                  navigation.replace("Auth")

                  Toast.show({
                      type: "success",
                      text1: "Logged Out Successfully"
                  })
              }
           }).catch((err)=>{
              console.log("Inspire", err)
           })
      }

  return (
    <View>
      <View>
      <Button title="Logout" onPress={()=>{postLogout()}}/>
      </View>
        <View style={styles.Tabs}>
            <TouchableOpacity onPress={()=>{setInspire(true)}}>
                <Text>Inspire</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setInspire(false)}}>
                <Text>Following</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: "100%", height: "100%"}}>
        {inspire ? (
          <InspireScreen
          navigation={navigation}
          />
        ) : (
          <FollowingScreen
          navigation={navigation}
          />
        )}
        </View>
    </View>
  )
}

export default Inspire