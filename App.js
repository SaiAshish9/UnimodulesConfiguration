import React, { Component } from 'react'

import {View,Text} from 'react-native'

import {FontAwesome5} from '@expo/vector-icons'

import {Video} from 'expo-av'

export default function App() {
  return (
   <View>
     <Text>
       hiiiiii
     </Text>
<FontAwesome5 name="home" size={20} />

<Video

source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
rate={1.0}
volume={1.0}
isMuted={false}
resizeMode="cover"
shouldPlay
isLooping
style={{width:300,height:300}}
/>

   </View>
  )
}
