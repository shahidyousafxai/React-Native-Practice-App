import React from 'react';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import UserData from "../../screens/userData/userdata";


const StackApp = createSharedElementStackNavigator();

const navbarOptions = () => ({
    headerShown: false,
    animationEnabled: false, 
})

const ProfileStack = () => {
  return (
    <StackApp.Navigator initialRouteName="UserData">

    <StackApp.Screen 
    name="UserData" 
    component={UserData} 
    options={navbarOptions} />

  </StackApp.Navigator>
  )
}

export default ProfileStack