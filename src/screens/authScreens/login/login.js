import React, {useState} from 'react'
import {View, TextInput, Text, Button, TouchableOpacity} from "react-native"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import Toast from "react-native-toast-message"
import styles from './styles'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LogUserIntoApp = () =>{
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
          LogUserIntoApp()
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