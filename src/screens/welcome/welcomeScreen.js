import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import { CommonActions } from '@react-navigation/native';
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
    }, 0.1)
     
  }, []);
  return (
    <View style={styles.welcome}>
        <Text>Welcome to the React Native App</Text>
    </View>
  )
}

export default WelcomeScreen