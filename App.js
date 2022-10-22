
import { View, Text,ScrollView,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterSub1 from './screen/RegisterSub1.js'
import RegisterSub2 from './screen/RegisterSub2.js'
import RegisterSub3 from './screen/RegisterSub3.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RegisterSub1"
          component={RegisterSub1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterSub2"
          component={RegisterSub2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterSub3"
          component={RegisterSub3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App