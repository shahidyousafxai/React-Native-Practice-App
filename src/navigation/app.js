import React, {useContext} from 'react';
import {SafeAreaView} from "react-native";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import Auth from './auth/auth';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import BottomTabs from "../navigation/BottomTabs/BottomTabs";
// import { asyncStoreContext } from "./Navigation"

const StackApp = createSharedElementStackNavigator();
const navbarOptions = () => ({
  headerShown: false,
  animationEnabled: false,
});

const App = () => {
  
  // var AsyncData = useContext(asyncStoreContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
      <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="Inspire"
        >
          <StackApp.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={navbarOptions}
          />
            <StackApp.Screen
              name="Auth"
              component={Auth}
              options={navbarOptions}
          />
            <StackApp.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={navbarOptions}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App