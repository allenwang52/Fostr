import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeCards from './modules/SwipeCards.js';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.button_rows, {paddingTop:30, backgroundColor:"#d19fe4", elevation: 0}]}>
        <TouchableOpacity style={[styles.icon, {backgroundColor:"darkgrey"}]}  onPress={() => Alert.alert("What account?")}>
          <Icon name="user" size={30} color="white"/>
        </TouchableOpacity>

        <Image source={require("./assets/FostrLogo.png")} style={{aspectRatio: 3, resizeMode: "contain", borderRadius: 25}}/>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"pink"}]} onPress={() => Alert.alert("You have no matches...")}>
          <Icon name="paw" size={30} color="purple"/>
        </TouchableOpacity>
      </View>

      {/*
      <View style={styles.swipe_area}>
        <TouchableOpacity onPress={() => Alert.alert("No no square")}>
        <Image
            source={require("./assets/DogAndCat.jpg")}
            style={styles.swipe_image}
          />
        </TouchableOpacity>
      </View>
      */}

      <SwipeCards style={{flex: 1}} />

      <View style={styles.button_rows}>
        <TouchableOpacity style={[styles.icon, {backgroundColor:"grey"}]}  onPress={() => Alert.alert("I don't like animals")}>
          <Icon name="times" size={30} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"lightblue", width:40, height:40}]}  onPress={() => Alert.alert("Tf you wanna know?")}>
          <Icon name="info" size={30} color="grey"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"pink"}]} onPress={() => Alert.alert("This one will do.")}>
          <Icon name="check" size={30} color="green"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#d19fe4",
    alignItems: "center",
    justifyContent: "center",
  },

  button_rows: {
    width: "100%",
    padding: 10,
    backgroundColor: "#9089d0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 5,
  },

  swipe_area: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  swipe_image: {
    flex: 1,
    aspectRatio: 0.65,
    resizeMode: "contain",
    borderRadius: 15,
  },

  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
