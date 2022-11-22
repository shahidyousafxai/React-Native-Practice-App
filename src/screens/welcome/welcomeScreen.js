import React, {useEffect} from 'react'
import { View } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './styles'

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Auth',
            },
          ],
        })
      ) 
    }, 3000)
     
  }, []);
  return (
    <View style={styles.welcome}>
      <Animatable.Text animation="zoomIn" duration={2000} style={{fontSize: 20}}>
        Welcome to the React Native App
        </Animatable.Text>
    </View>
  )
}

export default WelcomeScreen