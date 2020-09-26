import React from 'react';
import Loading from "./Loading";
import {Alert} from 'react-native';
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "de392f25fb438020905393d45cc4c1dd";

export default class extends React.Component{
  state ={
    isLoading : true
  };

  getWeather = async (latitude, longitude) =>{
    const {data: {
      main : {temp},
      weather 
    } 
  } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    // console.log(data);
    this.setState({
      isLoading : false, 
      temp,
      condition : weather[0].main
    });
  };

  getLocation = async () =>{
    try {
      // 권한 응답 받기까지 기다렸다가 결과 값 리턴
      await Location.requestPermissionsAsync();
      // 현재 위치 장소 데이터 받기까지 기다렸다가 결과 값 리턴
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(longitude, latitude);
      this.getWeather(latitude, longitude);
    } 
    catch (error) {
      // 권한 거부하면 알람
      Alert.alert("Cant find you", "So Sad");
      console.log(error);
    }
    
  };

  componentDidMount(){
    this.getLocation();
  };

  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  };
}
  
