
import { 
    View, 
    Text,
    ScrollView,
    TextInput,
    Button,
    Pressable,
    Image,
    } from 'react-native'
    
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  
  const RegisterSub5= ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 8.5}} className='w-full rounded-b-xl  bg-green-regis'>
          <ScrollView className="mb-10" >
            
            <Text style={{fontFamily: "NotoSans-Bold"}} className="text-3xl text-white text-center mt-10 ">Sub5 Photo</Text>
            <View className="mt-40 inset-x-4 w-11/12">
              <View>
                <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-5">Career</Text>
                <View className='w-full bg-white mt-2 rounded-lg'>
                  <TextInput className="ml-2"></TextInput>
                </View>
              </View>
              <View>
                <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Salary</Text>
                <View className='w-full bg-white mt-2 rounded-lg'>
                  <TextInput className="ml-2"></TextInput>
                </View>
              </View>
              
            </View>
          </ScrollView>
  
        </View>
        <View style={{flex: 1.5}}>
            <View className=" flex-row flex-1">
                    <View className=" justify-items-start basis-1/2">
                        <View className="flex-1 flex-row">
                            <Pressable onPress={() => navigation.navigate('RegisterSub4')} >
                                <View className=" my-auto ml-5 w-14 h-14 rounded-full bg-red-button">
                                    <Image tintColor='white' style={{transform: [{ rotate: '180deg' }]}} className=" h-2/3 w-3/5 m-auto " source={{uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png'}}>
                                    </Image>
                                </View>
                            </Pressable>
                            <Text style={{fontFamily: "NotoSans-Bold"}} className="my-auto ml-4 text-base">
                                Back
                            </Text>
                        </View>
                    </View>

                    <View className=" justify-items-start basis-1/2">
                        <View className="flex-1 flex-row-reverse">
                            <Pressable onPress={() => navigation.navigate('RegisterSub6')}>
                                <View className=" my-auto mr-5 w-14 h-14 rounded-full bg-green-button justify-items-end"
                                    >
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
  
  export default RegisterSub5
  
  