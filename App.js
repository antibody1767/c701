
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from "./screens/searchS"
import TransactionScreen from "./screens/transactionS"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tab"

export default class App extends Component {
render(){
  return(
    <AppContainer/>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {
    screen: TransactionScreen
  },
  SearchScreen:{
    screen : SearchScreen
  }
})
var AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
