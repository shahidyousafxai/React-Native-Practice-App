import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message"
import styles from './styles';

const Register = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const RegisterUserIntoApp = () =>{
        alert("User registered")
    }

    const registerUser = () =>{
        if (email === '' || password === '' || username === ''){
            Toast.show({
                type: 'error',
                text1: 'Username, Email and Password should not be empty!',
              });
        }
        if(email !== "" && password !== ""){
          RegisterUserIntoApp()
        }
    }
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
            title="Login"
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