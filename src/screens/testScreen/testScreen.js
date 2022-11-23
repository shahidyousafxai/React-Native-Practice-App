import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import {images} from "../../assets/images"

const TestScreen = () => {
  return (
    <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                color: "red",
              }}
            >
              Test Screen One
            </Text>
          </TouchableOpacity>
  )
}

export default TestScreen