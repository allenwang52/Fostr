import 'react-native-gesture-handler';
import { NavigationContainer, Navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeCards from './modules/SwipeCards.js';
import { LinearGradient } from 'expo-linear-gradient';

function SwipeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#d19fe4', '#d19fe4', '#9089d0']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />
      <View style={[styles.button_rows, {paddingTop:30, backgroundColor:"transparent", elevation: 0}]}>
        <TouchableOpacity style={[styles.icon, {backgroundColor:"grey"}]}  onPress={() => navigation.navigate("Profile")}>
          <Icon name="user" size={30} color="whitesmoke"/>
        </TouchableOpacity>

        <Image source={require("./assets/FostrLogo.png")} style={styles.logo}/>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"grey"}]} onPress={() => Alert.alert("You have no matches...")}>
          <Icon name="paw" size={30} color="pink"/>
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
        <TouchableOpacity style={[styles.icon, {backgroundColor:"pink"}]}  onPress={() => Alert.alert("I don't like animals")}>
          <Icon name="times" size={30} color="darkred"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"lightblue", width:40, height:40}]}  onPress={() => Alert.alert("Tf you wanna know?")}>
          <Icon name="info" size={30} color="grey"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"pink"}]} onPress={() => Alert.alert("This one will do.")}>
          <Icon name="check" size={30} color="darkgreen"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Wow there's nothing here!</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Swipe">
        <Stack.Screen name="Swipe" component={SwipeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    elevation: 5,
  },

  logo: {
    aspectRatio: 3,
    resizeMode: "contain",
    borderRadius: 25
  },
});
