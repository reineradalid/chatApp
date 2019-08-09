// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import Messages from './messages';
import Task from './task';

import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
     
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.ytimg.com/vi/KtCG6CCzIac/maxresdefault.jpg',
        }}
      />
      <Text>Rain</Text>
       <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Task, Messages

  },
  {
    drawerType: 'push',
    drawerPosition: 'left',
    drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
    contentComponent: CustomDrawerContentComponent
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 300,
  },
});
