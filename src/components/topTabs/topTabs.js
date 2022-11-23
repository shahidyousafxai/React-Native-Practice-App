import React from 'react'
import { View, Text, TouchableOpacity} from "react-native"
import styles from "./styles"

const TopTabs = (props) => {
    const {
        setTabs, 
        LeftTab,
        RightTab
    } = props
  return (
    <View style={styles.Tabs}>
        <TouchableOpacity onPress={()=>{setTabs(true)}}>
            <Text>{LeftTab}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setTabs(false)}}>
            <Text>{RightTab}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TopTabs