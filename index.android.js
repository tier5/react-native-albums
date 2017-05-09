/**
 * Android code
 */
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerTitle={'Albums'} />
          <AlbumList />
        </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
