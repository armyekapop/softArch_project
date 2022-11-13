
import { 
  View, 
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,} from 'react-native'
  
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../image/logo.png'
import {Picker} from '@react-native-picker/picker';

const RegisterSub1= ({navigation}) => {
  const citizenship1 = [
    {
      country: 'ThaiLand',
    },
    {
      country: 'Lao',
    },
    {
      country: 'Chaina',
    },
  ];
  const country1 = [
    {
      country: 'ThaiLand',
    },
    {
      country: 'Lao',
    },
    {
      country: 'Chaina',
    },
  ];

  const [ssn, setSsn] = useState("");
  const [citizenship, setCitizenship] = useState();
  const [country, setCountry] = useState();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8.5}} className='w-full rounded-b-xl  bg-green-regis'>
      <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="mb-10 ">
          <Image source={logo} className="w-32 h-32 mx-auto" />
          <View className="inset-x-4 w-11/12">
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-5">SSN / Passsport</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
                <TextInput 
                  className="ml-2 my-auto"
                  onChangeText={newText => setSsn(newText)}
                  defaultValue={ssn}
                  keyboardType="numeric"
                  maxLength = {16}
                ></TextInput>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Citizenship</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
              <Picker
                  selectedValue={citizenship}
                  onValueChange={itemValue => setCitizenship(itemValue)}>
                  {citizenship1.map(function (citizenship1) {
                    return (
                      <Picker.Item label={citizenship1.country} value={citizenship1.country} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={{fontFamily: "NotoSans-Bold"}} className="text-1xl text-white mt-8">Country</Text>
              <View className='w-full bg-white mt-2 rounded-lg'>
              <Picker
                  selectedValue={country}
                  onValueChange={itemValue => setCountry(itemValue)}>
                  {country1.map(function (country1) {
                    return (
                      <Picker.Item label={country1.country} value={country1.country} />
                    );
                  })}
                </Picker>
              </View>
            </View>
          </View>
        </ScrollView>

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

