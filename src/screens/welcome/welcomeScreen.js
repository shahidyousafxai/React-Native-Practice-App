import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import styles from './styles'

const WelcomeScreen = ({navigation}) => {
  console.log("Reached.....")
  useEffect(() => {
    setTimeout(()=>{
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        })
      ) 
    }, 3000)
     
  }, []);
  return (
    <View style={styles.welcome}>
        <Text>Welcome to the React Native App</Text>
    </View>
  )
}

export default WelcomeScreen