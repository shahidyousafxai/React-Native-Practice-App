import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../../screens/authScreens/login/login"
import Register from "../../screens/authScreens/register/register"

const AuthStack = createStackNavigator()
const navOptionHandler = () =>({
    headerShown: false,
    animationEnabled: false
})

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen
        name='Login'
        component={Login}
        options={navOptionHandler}
        />
        <AuthStack.Screen
        name='Register'
        component={Register}
        options={navOptionHandler}     
        />
    </AuthStack.Navigator>
    
  )
}

export default Auth