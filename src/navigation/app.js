import React from 'react'
import {SafeAreaView} from "react-native"
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './rootNavigation';
import Auth from './auth/auth'
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
          name="Auth"
          component={Auth}
          options={navOptionHandler}
        />
        </StackApp.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App