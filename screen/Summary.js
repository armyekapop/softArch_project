import {View, Text, Image, Pressable,Button} from 'react-native';
import React from 'react';

import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

import backArrow from '../image/backArrow.png';
import Chart from 'chart.js';
import {useState, useEffect} from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryStack,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-neat-date-picker'
import setting from '../image/settng.png';
import {Dimensions} from 'react-native';

import logo from '../image/logo.png';

const Summary = ({navigation}) => {
  const data = {
    name: 'Watcharapol Yotadee',
    photo: logo,
    accountNo: 'xxx-x-x1924-x',
    year: 2022,
    incomeTransaction: 100,
    expensesTransaction: 221,
    sumIncome: '80,000',
    sumExpenses: '80,000',
    income: [
      {x: '1 asdasd', y: 100},
      {x: '2 asdasd', y: 123},
      {x: 'Mar', y: 124},
      {x: 'Apl', y: 98},
      {x: 'Jun', y: 56},
      {x: 'Jul', y: 57},
      {x: 'Aug', y: 78},
      {x: 'Sep', y: 125},
      {x: 'Oct', y: 220},
      {x: 'Nov', y: 912},
      {x: 'Dec', y: 780},
    ],
    outcome: [
      {x: 'Jan', y: 50},
      {x: 'Feb', y: 123},
      {x: 'Mar', y: 124},
      {x: 'Apl', y: 98},
      {x: 'Jun', y: 56},
      {x: 'Jul', y: 57},
      {x: 'Aug', y: 78},
      {x: 'Sep', y: 125},
      {x: 'Oct', y: 220},
      {x: 'Nov', y: 950},
      {x: 'Dec', y: 780},
    ],
    totalIncome: '21,000',
    time: '2:32 PM',
  };

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [monthly, setMonthly] = useState('Monthly');
  const [transactionType, setTransactionType] = useState('Total Income');
  const [showDatePicker, setShowDatePicker] = useState(false)
  const openDatePicker = () => {
    setShowDatePicker(true)
  }
  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }
  const onConfirm = ( date ) => {
    // You should close the modal in here
    setStartDate(date.startDate)
    setEndDate(date.endDate)
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(111)
  }

  const formatDate = (d) => {
    const date = new Date(d);
    const month = date.getMonth() + 1;
    return [
      date.getFullYear(), 
      month < 10 ? `0${month}` : month, 
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()].join("-")
  }

  return (
    
    <View style={{flex: 1}}>
      <DatePicker
        isVisible={showDatePicker}
        mode={'range'}
        colorOptions={{headerColor:'#9DD9D2'}}
        onCancel={onCancel}
        onConfirm={onConfirm}
        dateStringFormat={'dd-mm-yyyy'}
        // modalStyles={}
        // className = ''
      />
      <View style={{flex: 7.5}} className=" bg-green-regis rounded-b-xl">
        <View className="flex-row mt-5">
          <Pressable onPress={() => navigation.navigate('RegisterSub3')}>
            <Image source={backArrow} className="w-8 h-8 ml-5" />
          </Pressable>
          <Text
            style={{fontFamily: 'NotoSans-Bold'}}
            className="text-white text-3xl text-center ">
            Account Summary
          </Text>
        </View>

        <View style={{flex: 1}} className="">
          <View className=" mt-6 w-fit h-1/2 " style={{flex: 0.35}}>
            <View className="flex flex-row w-11/12 mx-5">
              <View className="w-20 h-20 my-auto mx-2 rounded-full ">
                <Image
                  source={data.photo}
                  className="my-auto mx-auto w-full h-full"
                />
              </View>
              <View className="my-auto">
                <Text className="text-egg text-xl">{data.name}</Text>
                <Text className=" text-white text-sm">{data.accountNo}</Text>
              </View>
            </View>
            <View className="w-11/12 h-[1] bg-base mx-auto"></View>
            <View
              style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
              className="w-10/12 h-2/5 mt-3 mx-auto rounded-md opacity-100 hover:opacity-10">
              <View className="flex-1 mx-2 my-1 ">
                <View className="flex-1 flex-row justify-between ">
                  <Text className="text-white font-bold ">
                    Statement Summary of Y{data.year}
                  </Text>
                </View>

                <View className="flex-1 flex-row justify-between ">
                  <Text className="justify-start text-white text-sm">
                    Income {data.incomeTransaction} transaction(s):
                  </Text>
                  <Text className="justify-end text-white text-sm">
                    {' '}
                    {data.sumIncome} Bath
                  </Text>
                </View>
                <View className="flex-1 flex-row justify-between">
                  <Text className="justify-start text-white text-sm">
                    Expenses {data.expensesTransaction} transaction(s):
                  </Text>
                  <Text className="justify-end text-white text-sm ">
                    {' '}
                    {data.sumExpenses} Bath
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className=" m-w-fit" style={{flex: 0.6}}>
            <VictoryChart
              domainPadding={{x: 20, y: 0}}
              width={screenWidth + 30}
              height={screenHeight * 0.4}>
              <VictoryAxis
                tickLabelComponent={<VictoryLabel dy={0} dx={0} />}
                tickFormat={data.X}
                style={{
                  axis: {
                    stroke: 'white', //CHANGE COLOR OF X-AXIS
                  },
                  tickLabels: {
                    fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                    fontSize: 10,
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickLabelComponent={<VictoryLabel dy={0} dx={-5} />}
                tickFormat={data.y}
                style={{
                  axis: {
                    stroke: 'transparent', //CHANGE COLOR OF X-AXIS
                  },
                  tickLabels: {
                    fill: '#F6D8A9', //CHANGE COLOR OF X-AXIS LABELS
                    fontSize: 13,
                  },
                  grid: {stroke: '#F6D8A9'},
                }}
              />
              <VictoryGroup offset={5} style={{data: {width: 5}}}>
                <VictoryBar
                  data={data.income}
                  style={{
                    data: {
                      fill: '#8DD0BD',
                    },
                  }}
                />

                <VictoryBar
                  data={data.outcome}
                  style={{
                    data: {
                      fill: '#FD6565',
                    },
                  }}
                />
              </VictoryGroup>
            </VictoryChart>
          </View>
          <View className=" " style={{flex: 0.1}}>
            <Text className=" text-egg m-auto">Update at {data.time}</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 2.5}} className=" bg-base items-center">
        <View className="w-11/12 items-center h-full justify-between">
          <View>
            <View className="w-full h-fit flex-row mt-3 ">
              <View className="basis-1/3"></View>
              <View className="basis-1/3 ">
                <Text className=" m-auto text-xl text-black decoration-green-total ">
                  Overview
                </Text>
                <View className="h-[3] w-8/12 mx-auto bg-red-button"></View>
              </View>

              <View className="basis-1/3  flex-row-reverse">
                <View className=" h-5 w-6/12 rounded-md bg-light-green my-auto">
                  <View className=" flex flex-row justify-between p-1">
                    <Text className=" text-[10px] text-bold mx-1">Monthly</Text>

                    <Image
                      source={setting}
                      className="w-[10px] h-[10px] my-auto"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row">
            <View className="basis-5/12">
              <Text>Transaction Type</Text>

              <Picker
                style={{width: 190, height: 20,}}
                selectedValue={transactionType}
                onValueChange={(itemValue, itemIndex) =>
                  setTransactionType(itemValue)
                }>
                <Picker.Item label="Income - Expenses" value="incomeExpenses" />
                <Picker.Item label="Total Income" value="totalIncome" />
                <Picker.Item label="Total Expenses" value="totalExpenses" />
              </Picker>

              <View className="h-[0.5] w-full mx-auto bg-black"></View>
            </View>

            <View className="basis-1/12"></View>
            <View className=" basis-5/12 bg-red-button">
              <Text>Period</Text>
              <Pressable onPress={openDatePicker}>
                <View>
                  <Text className="text-xs">{startDate && `${formatDate(startDate)} - ${formatDate(endDate)}`}</Text>
                </View>

              </Pressable>
              
              <View className="h-[0.5] w-full mx-auto bg-black"></View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'rgba(225,216,216,0.4)'}}
            className=" h-1/5 w-full mb-8 shadow-xl">
            <View className="w-full h-full flex-row flex-1">
              <View className=" basis-1/2 ">
                <Text className=" my-auto mx-3">Total Income:</Text>
              </View>

              <View className=" basis-1/2 flex-row-reverse">
                <Text className=" my-auto mx-5 text-green-total">
                  {data.totalIncome} Bath
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Summary;
