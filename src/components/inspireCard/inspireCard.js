import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles'

const InspireCard = ({userName, followers, title, image}) => {
  return (
    <View style={styles.inspire}>
        <View style={styles.cardHead}>
            <TouchableOpacity>
                <Text>@{userName}</Text>
            </TouchableOpacity>
            <View>
                <Text>{followers}</Text>
            </View>
        </View>
        <TouchableOpacity style={{width: "100%", height: "100%"}}>
            <Image
            style={{width: "100%", height: "100%"}}
            source={{uri: image}}
            />
        </TouchableOpacity>
        <View> 
            <Text>{title}</Text> 
        </View>
    </View>
  )
}

export default InspireCard