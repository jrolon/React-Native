import React from "react";

import { View, Text  } from "react-native";
import styles from "./Styles/NavBarStyles";

class Navbar extends React.Component{
    render(){
      return (
        <View style={styles.navbar}>
            <text style = {styles.title}>Title</text>
        </View>
      )
    }
}

export default Navbar; 

