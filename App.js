import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import store from './src/store'

import Home from './src/containers/Home'
import Trending from './src/containers/Trending'
import About from './src/containers/About'
import Video from './src/containers/Video'
import Search from './src/containers/Search'
import SearchBar from './src/components/SearchBar'

const BotNav = createBottomTabNavigator({
  Home: Home,
  Trending: Trending
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let icon
      if (routeName === 'Home') {
        icon = <Ionicons name='ios-home' size={25} color={tintColor} />;
      } else if (routeName === 'Trending') {
        icon = <Octicons name='flame' size={25} color={tintColor} />;
      }
      return icon
    }
  }),
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },
})

const AppStackNavigator = createStackNavigator({
  BotNav,
  Video: Video,
  Search: Search
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: () => {

      return (
        <View style={{
          flexDirection: 'row',
        }}>
          <Image style={styles.logo} source={{ uri: "https://www.seeklogo.net/wp-content/uploads/2017/08/youtube-logo.png"}}/>
        </View>
      )
    },
    headerRight: (
      <SearchBar navigation={navigation}/>
    )
  })
})

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator/>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    padding: 15,
    width: 100
  }
});
