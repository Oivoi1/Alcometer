import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


export const Styles = StyleSheet.create({
    container: {
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      marginTop: Constants.statusBarHeight,
    },
    text:{
        padding: 10,
        margin: 10,
    },
    textInput :{
      borderWidth: 1,
      padding: 5,
      textAlign: 'center',
      backgroundColor: "#fff",
    },
    
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        height: 40,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#f3a724",
        margin: 20,
    },
    buttonText:{
        fontSize: 18,
    },
    result:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 10,
      borderWidth: 1,
      fontSize: 20,
      backgroundColor: "#ffffff"
    },
    radioStyle:{
      flexDirection:"row", 
      alignItems:"center",
      margin: 20,
    },
    darkmode: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: '#e5e5e5',
      marginLeft: 15,
    },
    numericButtonColor: {
      color :"#d8d5d5"
    },

  });

  export const SpecialStyles = StyleSheet.create({
    container: {
      ...Styles.container,
      backgroundColor: '#7d7d7d',
    },
    text:{
        padding: 10,
        margin: 10,
        fontWeight: "bold",
    },
    textInput :{
      borderWidth: 1,
      padding: 5,
      textAlign: 'center',
      backgroundColor: "#757575",

    },
    numeric: {
        borderRadius: 5,
        borderWidth: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        ...Styles.button
    },
    darkmode: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: '#7d7d7d',
      color: "#ffffff"
    },
    result: {
      ...Styles.result,
    }
  });


  