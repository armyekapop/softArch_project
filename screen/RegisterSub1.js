
import { 
  View, 
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,} from 'react-native'
  
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RegisterSub1= ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8.5}} className='w-full rounded-b-xl  bg-green-regis'>
      <Text className="text-3xl text-white font-bold text-center mt-10 ">Register</Text>
        <View className="mt-40 inset-x-4 w-11/12">
          <View>
            <Text className="text-1xl text-white font-bold mt-5">SSN / Passsport</Text>
            <View className='w-full bg-base mt-2 rounded-lg'>
              <TextInput></TextInput>
            </View>
          </View>

          <View>
            <Text className="text-1xl text-white font-bold mt-8">Citizenship</Text>
            <View className='w-full bg-base mt-2 rounded-lg'>
              <TextInput className='focus'></TextInput>
            </View>
          </View>

          <View>
            <Text className="text-1xl text-white font-bold mt-8">Country</Text>
            <View className='w-full bg-base mt-2 rounded-lg'>
              <TextInput className='focus'></TextInput>
            </View>
          </View>

        </View>
        

      </View>
      <View style={{flex: 1.5}}>
      <View className=" flex-row flex-1">
          <View className=" justify-items-start basis-1/2">
              <View className="flex-1 flex-row">

              </View>
          </View>
          <View className=" justify-items-start basis-1/2">
              <View className="flex-1 flex-row-reverse">
                  <Pressable onPress={() => navigation.navigate('RegisterSub2')}>
                    <View className=" my-auto mr-5 w-14 h-14 rounded-full bg-green-button justify-items-end">
                        <Image tintColor='white' className=" h-2/3 w-3/5 m-auto " source={{uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png'}}>
                        </Image>
                    </View>
                  </Pressable>
                  <Text style={{fontFamily: "NotoSans-Bold"}} className="my-auto mr-4 text-base" >
                      Next
                  </Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RegisterSub1
