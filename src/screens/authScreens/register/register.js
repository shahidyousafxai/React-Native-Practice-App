import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import { registerUserApi } from '../../../services/api/methods/register';
import styles from './styles';

const Register = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let details = {
      full_name: username,
      email: email,
      password: password,
    };

    const registerUser = () =>{
      if (email === '' || password === '' || username === ''){
          Toast.show({
              type: 'error',
              text1: 'Username, Email and Password should not be empty!',
            });
      }
      if(email !== "" && password !== ""){
        RegisterUserIntoApp(details)
      }
    }

    const RegisterUserIntoApp = (payload) => {
      try {
        registerUserApi(payload)
        .then(async (res)=>{
          if(res.data.data.token && res.data.status === 200){
            setUsername("");
            setEmail("");
            setEmail("")
            await AsyncStorage.setItem("token", res.data.data.token)
            .then(()=>{
              navigation.navigate("Login")
            })
            Toast.show({
              type: "success",
              text1:"User has been registered successfully",
            })
          }
        })
        .catch((err)=>{
          console.log("RegisterApi", err)
        })
      } catch (err) {
        console.log("Register", err)
      }
      };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      contentContainerStyle={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      keyboardShouldPersistTaps="handled"
    >
        <Toast topOffset={0} visibilityTime={5000} />
    <View style={styles.register}>
        <View style={styles.Head}>
            <Text style={{fontSize: 30, marginBottom: 20}}>Registeration</Text>
            <Text style={{marginBottom: 20}}>Please register yourself!</Text>
        </View>
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Name"
            value = {username}
            onChangeText={setUsername}
            />
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
            title="Register"
            onPress={()=> registerUser()}
            />
        </View>
        <View style={styles.already}>
            <Text>Already have account?</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login");
            }}
            >
            <Text style={styles.loginText}>
              Log in
            </Text>
            </TouchableOpacity>
        </View>
    </View>
    </KeyboardAwareScrollView>
  )
}
export default Register