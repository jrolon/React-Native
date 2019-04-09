import React from "react";

import { View, Text  } from "react-native";
import styles from "./Styles/NavBarStyles";

class Navbar extends React.Component{
    render(){
      return (
        <View style={styles.navbar}>
            <Text style = {styles.title}>Title</Text>
        </View>
      )
    }
}

export default Navbar; 

