import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Image,
} from 'react-native';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logo from '../image/logo.png';
import {Picker} from '@react-native-picker/picker';

const RegisterSub2 = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [sureName, setSureName] = useState();
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8.5}} className="w-full rounded-b-xl  bg-green-regis">
        <ScrollView className="mb-10">
          <Image source={logo} className="w-32 h-32 m-auto" />
          <View className="mt-5 inset-x-4 w-11/12">
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Firstname
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setFirstName(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Surename
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput
                  className="p-0 ml-2 my-auto text-black"
                  onChangeText={newText => setSureName(newText)}
                  maxLength={30}></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7 ">
                Title
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <Text
                 className="p-0 ml-2 my-1.5 text-black"
                  style={{
                    position: 'absolute',
                  }}>
                  {title}
                </Text>
                <Picker
                  style={{ opacity: 0 }}
                  selectedValue={title}
                  onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}>
                  <Picker.Item label="Mr." value="Mr." />
                  <Picker.Item label="Mrs." value="Mrs." />
                  <Picker.Item label="Ms." value="Ms." />
                </Picker>
              </View>
            </View>
            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white  mt-7">
                BoD (dd/mm/yyyy)
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
                <TextInput className="p-0 ml-2 my-auto"></TextInput>
              </View>
            </View>

            <View>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="text-1xl text-white mt-7">
                Status
              </Text>
              <View className="w-full bg-white mt-2 rounded-sm h-8">
              <Text
                 className="p-0 ml-2 my-1.5 text-black"
                  style={{
                    position: 'absolute',
                  }}>
                  {status}
                </Text>
                <Picker
                  style={{ opacity: 0 }}
                  selectedValue={status}
                  onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}>
                  <Picker.Item label="Single" value="Single" />
                  <Picker.Item label="Married" value="Married" />
                  <Picker.Item label="Divorced" value="Divorced" />
                  <Picker.Item label="Widowed" value="Widowed" />
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
              <Pressable onPress={() => navigation.navigate('RegisterSub1')}>
                <View className=" my-auto ml-5 w-14 h-14 rounded-full bg-red-button">
                  <Image
                    tintColor="white"
                    style={{transform: [{rotate: '180deg'}]}}
                    className=" h-2/3 w-3/5 m-auto "
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png',
                    }}></Image>
                </View>
              </Pressable>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="my-auto ml-4 text-base">
                Back
              </Text>
            </View>
          </View>
          <View className=" justify-items-start basis-1/2">
            <View className="flex-1 flex-row-reverse">
              <Pressable onPress={() => navigation.navigate('RegisterSub3')}>
                <View className=" my-auto mr-5 w-14 h-14 rounded-full bg-green-button justify-items-end">
                  <Image
                    tintColor="white"
                    className=" h-2/3 w-3/5 m-auto "
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/2889/2889731.png',
                    }}></Image>
                </View>
              </Pressable>
              <Text
                style={{fontFamily: 'NotoSans-Bold'}}
                className="my-auto mr-4 text-base">
                Next
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterSub2;
