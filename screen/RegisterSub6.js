
import { 
    View, 
    Text,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Image, Alert
    } from 'react-native'
    
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  
  const RegisterSub6= ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 8.5}} className='w-full rounded-b-xl  bg-green-regis'>
          <ScrollView className="mb-10" >
            
            <Text style={{fontFamily: "NotoSans-Bold"}} className="text-3xl text-white text-center mt-10 ">Sub6 Photo</Text>
            <View className="mt-40 inset-x-4 w-11/12">
              <View>
                <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-5">Phone</Text>
                <View className='w-full bg-white mt-2 rounded-lg'>
                  <TextInput className="ml-2"></TextInput>
                </View>
              </View>
              <View>
                <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Email</Text>
                <View className='w-full bg-white mt-2 rounded-lg'>
                  <TextInput className="ml-2"></TextInput>
                </View>
              </View>
              
            </View>
          </ScrollView>
  
        </View>

        <View style={{flex: 1.5}}>
            <Pressable className="h-1/2 w-4/5 bg-green-button m-auto rounded-md" onPress={() => navigation.navigate('VerifyOTP')}>
                <View className="m-auto">
                    <Text style={{fontFamily: "NotoSans-Regular"}} className="text-2xl text-white m-auto">
                        Submit
                    </Text>
                </View>
            </Pressable>
        </View>
    </View>
    )
  }
  
  export default RegisterSub6
  
  