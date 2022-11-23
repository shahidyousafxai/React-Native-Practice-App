import React, {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, TextInput, Text, Button, TouchableOpacity} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { logInApi } from '../../../services/api/methods/login';
// import { asyncStoreContext } from "../../../navigation/Navigation"
import styles from './styles'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // var {setToken} = useContext(asyncStoreContext);


    let loginDetails = {
      identity: email,
      password: password,
    };

    const loginUser = async () => {
      if (email === '' || password === ''){

          Toast.show({
              type: 'error',
              text1: 'Email or Password should not be empty!',
            });
      }
      if(email !== "" && password !== ""){
        LogUserIntoApp(loginDetails)
      }
  }

    const LogUserIntoApp = (payload) =>{
  
      try {
        logInApi(payload)
        .then(async (res)=>{
          if(res.data.data.token && res.data.status === 200){
            await AsyncStorage.setItem("token", res.data.data.token)
            .then(async()=>{
              await AsyncStorage.setItem("UserId", JSON.stringify(res.data.data.user.id))
              navigation.reset({
                index: 0,
                routes: [{ name: 'BottomTabs' }],
              });
            })
              
            Toast.show({
              type: "success",
              text1:"Logged In successfully",
            })
          }
      })
      .catch((err)=>{
        console.log("LoginApi", err)
      })

      } catch (err) {
        console.log("Login", err)
      }
    }
    
  return (
    <KeyboardAwareScrollView
      style={styles.fullscreen}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      contentContainerStyle={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      keyboardShouldPersistTaps="handled"
    >
      <Toast topOffset={0} visibilityTime={5000} />
        <View style={styles.login}>
            <View style={styles.loginTextView}>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                value = {email}
                onChangeText={setEmail}
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                value = {password}
                onChangeText={setPassword}
                />
                <Button
                title="Login"
                onPress={()=> loginUser()}
                />
            </View>
            <View style={styles.already}>
            <Text>Doesn't have an account?</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Register");
            }}
            >
            <Text style={styles.regText}>
              Register
            </Text>
            </TouchableOpacity>
        </View>
        </View>
        </KeyboardAwareScrollView>
  )
}

export default Login