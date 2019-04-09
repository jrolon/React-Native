/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import styles from "./Styles/GenericScreenStyles";

import NavBar from "../Components/NavBar";

export default class GenericScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  };

  render() {
    console.log("render");

    const { favorite } = this.state;
    return (
      <View style={[styles.mainScreen]}>
        <NavBar
          leftButton={true}
          title="Titulo"
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
        {/*<Text>hola</Text>*/}
        <View style={styles.container}>{/* content goes here */}</View>
      </View>
    );
  }
}
