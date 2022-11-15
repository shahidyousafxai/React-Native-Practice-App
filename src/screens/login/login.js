import React, {useState} from 'react'
import {View, TextInput, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import Toast from "react-native-toast-message"
import styles from './styles'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LogUserIntoInspire = () =>{
      alert("login")
    }


    const loginUser = () => {
        if (email === '' || password === ''){
            Toast.show({
                type: 'error',
                text1: 'Email or Password should not be empty!',
              });
        }
        if(email !== "" && password !== ""){
            LogUserIntoInspire()
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
      <Toast topOffset={0} visibilityTime={4000} />
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
                style={styles.button}
                title="Login"
                onPress={()=> loginUser()}
                />
            </View>
        </View>
        </KeyboardAwareScrollView>
  )
}

export default Login