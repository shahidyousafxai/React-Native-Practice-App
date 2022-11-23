import React from 'react'
import { View } from 'react-native';
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import Inspire from "../../screens/inspire/inspire"


const StackApp = createSharedElementStackNavigator();

const navbarOptions = () => ({
    headerShown: false,
    animationEnabled: false, 
})

const Inspire = () => {
  return (
    <StackApp.Navigator initialRouteName="Inspire">
    <StackApp.Screen 
    name="Inspire" 
    component={Inspire} 
    options={navbarOptions} />
  </StackApp.Navigator>
  )
}

export default Inspire