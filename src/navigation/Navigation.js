import React from 'react'
import {Text, StatusBar, Platform} from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from "./app"



if(Platform === "android"){
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
}
StatusBar.setBarStyle('dark-content');

const Navigation = () => {
  return (
    <SafeAreaProvider>
        <App/>
    </SafeAreaProvider>
    
  )
}

export default Navigation