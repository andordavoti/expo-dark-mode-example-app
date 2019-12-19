import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import TabBarIcon from './components/TabBarIcon';

FirstScreen.navigationOptions = { title: 'First Screen' };
SecondScreen.navigationOptions = { title: 'Second Screen' };

let FirstScreenStack = createStackNavigator({ FirstScreen });

let SecondScreenStack = createStackNavigator({ SecondScreen });

let Tabs = createBottomTabNavigator({ FirstScreenStack, SecondScreenStack });
let Navigation = createAppContainer(Tabs);

export default App = () => {
    let theme = useColorScheme();

    FirstScreenStack.navigationOptions = {
      tabBarLabel: 'First Screen',
      tabBarOptions: {
        activeTintColor: theme === 'dark' ? 'white' : 'black',
        inactiveTintColor: theme === 'dark' ? 'gray' : '#ccc',
      },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon theme={theme} focused={focused} name='chevron-left' />
      ),
    };

    SecondScreenStack.navigationOptions = {
      tabBarLabel: 'Second Screen',
      tabBarOptions: {
        activeTintColor: theme === 'dark' ? 'white' : 'black',
        inactiveTintColor: theme === 'dark' ? 'gray' : '#ccc',
      },
      tabBarIcon: ({ focused }) => (
        <TabBarIcon theme={theme} focused={focused} name='chevron-right' />
      ),
    };
    return (
      <AppearanceProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />}
        <Navigation theme={theme} screenProps={theme} />
      </AppearanceProvider>
    );
  }
