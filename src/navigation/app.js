import React from 'react'
import {SafeAreaView} from "react-native"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './rootNavigation';
import Login from '../screens/login/login'
import WelcomeScreen from '../screens/welcome/welcomeScreen'


const StackApp = createSharedElementStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
      <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="Welcome"
        >
        <StackApp.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        />
        </StackApp.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App