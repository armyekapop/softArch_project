import {View, Text, Image} from 'react-native';
import React from 'react';

import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

import backArrow from '../image/backArrow.png';
import Chart from 'chart.js';
import {useState, useEffect} from 'react';
import {TouchableHighlight} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import setting from '../image/settng.png';
import {Dimensions} from 'react-native';

const Summary = navigation => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 159, 43],
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  const chartConfig={
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 7.5}} className=" bg-green-regis rounded-b-xl">
        <View className="flex-row mt-7">
          <Image source={backArrow} className="w-8 h-8 ml-5" />
          <Text
            style={{fontFamily: 'NotoSans-Bold'}}
            className="text-white text-3xl text-center ">
            Account Summary
          </Text>
          
        </View>
        <View >
            <BarChart
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
              data={data}
              width={screenWidth}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
      </View>

      <View style={{flex: 2.5}} className=" bg-base items-center">
        <View className="w-11/12 items-center h-full justify-between">
          <View className="w-fit h-fit flex-row">
            <Text className="mt-5 text-2xl text-black">over view</Text>
            <View className=" h-1/2 w-1/6 rounded-lg bg-light-green">
              <View className=" flex flex-row justify-between p-1">
                <Text className=" text-[10px] text-bold ">Monthly</Text>
                <Image source={setting} className="w-[10px] h-[10px]" />
              </View>
            </View>
          </View>

          <View className="flex-row">
            <View className="basis-1/2 bg-egg">
              <Text>Transaction Type</Text>
            </View>

            <View className=" basis-1/2 bg-red-button">
              <Text>Period</Text>
            </View>
          </View>

          <View className=" bg-dark-base h-1/5 w-full mb-8"></View>
        </View>
      </View>
    </View>
  );
};

export default Summary;