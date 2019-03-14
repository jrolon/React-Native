import React from "react";

import { View, Text  } from "react-native";
import styles from "./Styles/NavBarStyles";

class Navbar extends React.Component{
    render(){
      return (
        <View style={styles.Navbar}>
            <text style = {style.title}>Title</text>
        </View>
      )
    }
}

export default Navbar; 