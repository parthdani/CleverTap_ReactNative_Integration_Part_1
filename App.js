/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const CleverTap = require('clevertap-react-native');

export default class App extends Component<Props> {

    
    componentDidMount() {
        //CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (event) => { this._handleCleverTapDisplayUnitsLoaded(CleverTap.CleverTapDisplayUnitsLoaded,event); });
        CleverTap.setDebugLevel(3);
    }

    _getDisplayUnitForId(event){
          CleverTap.profileGetCleverTapID((err, res) => {
            console.log('CleverTapID', res, err);
          });
       }

  
  render() {
    return (
      <View style={styles.container}>
            <TouchableHighlight style={styles.button}
              onPress={this._getDisplayUnitForId}>
              <Text>Get Display Unit For Id</Text>
            </TouchableHighlight>
      </View>
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
  button: {
        marginBottom: 20
  }
});

