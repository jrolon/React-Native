/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import styles from "./Styles/GenericScreenStyles"

import Navbar from "../Components/Navbar"
 

export default class GenericScreen extends Component<Props> {

  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.title}>hola</Text>
        </View>
        {/* content goes here */}

        <View style={[styles.navbar, styles.redBar]}>
          <Text style={styles.title}>ddd</Text>
        </View>
        {/* content goes here */}
      </View> 
      );
  }
}





