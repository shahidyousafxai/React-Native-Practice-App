import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inspire from "../../screens/inspire/inspire";
import Test from "../../screens/testScreen/testScreen";
import ProfileStack from "../profileStack/profileStack";

import {images} from "../../assets/images"


const Tab = createBottomTabNavigator();

function MyTabBar({ state, navigation }) {
    return (
      <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
        {state.routes.map((route, index) => {
          const label = route.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
          }
  
          return (
             <TouchableOpacity
             key={index}
             accessibilityRole="button"
             accessibilityState={isFocused ? { selected: true } : {}}
             onPress={onPress}
             style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               height: 40,
               backgroundColor: "lightgrey",
             }}
           >
             <Text style={{ color: "black",  fontWeight: isFocused ? 'bold' : 'normal', }}>
               {label}
             </Text>
           </TouchableOpacity>
          );

        })}
      </View>
    );
  }
  
const navbarOptions = () =>({
    headerShown: false,
    animationEnabled: false
})

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props}/>}>
        <Tab.Screen
        name="Inspire"
        component={Inspire}
        options={navbarOptions}
        />
        <Tab.Screen
        name="Test"
        component={Test}
        options={navbarOptions}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={navbarOptions}
        />
    </Tab.Navigator>
  )
}

export default BottomTabs