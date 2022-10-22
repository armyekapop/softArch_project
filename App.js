
import { View, Text,ScrollView,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterSub1 from './screen/RegisterSub1.js'
import RegisterSub2 from './screen/RegisterSub2.js'
import RegisterSub3 from './screen/RegisterSub3.js'
import RegisterSub4 from './screen/RegisterSub4.js'
import RegisterSub5 from './screen/RegisterSub5.js'
import RegisterSub6 from './screen/RegisterSub6.js'
import VerifyOTP from './screen/VerifyOTP.js'
import Summary from './screen/Summary.js'
import NewPin from './screen/NewPin.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RegisterSub1"
          component={NewPin}
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
        <Stack.Screen
          name="RegisterSub4"
          component={RegisterSub4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterSub5"
          component={RegisterSub5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterSub6"
          component={RegisterSub6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPin"
          component={NewPin}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App