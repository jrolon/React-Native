import { StyleSheet } from "react-native";

import { Metrics, Colors, Fonts } from "../../Theme";

const BARHEIGHT = 56;

export default styles =  StyleSheet.create({
    navbar: {
      marginTop: Metrics.statusBarHeight,
      height: Metrics.navbarHeight,
      backgroundColor: Colors.whiteFull,
      alignItems: "center",
      justifyContent: "center"
    },
    title:{
      ...Fonts.style.recipeNameCard,
      fontWeight: "bold"
    },
});
