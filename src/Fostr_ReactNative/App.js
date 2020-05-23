import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators, createMaterialTopTabNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SwipeCards from "./modules/SwipeCards.js";
import { LinearGradient } from "expo-linear-gradient";

function SwipeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#d19fe4", "#d19fe4", "#9089d0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />

      <View style={[styles.button_rows, {paddingTop:20, paddingBottom:0, justifyContent:"space-between"}]}>
        <TouchableOpacity style={[styles.icon, {backgroundColor:"grey"}]}  onPress={() => navigation.navigate("Profile")}>
          <Icon name="user" size={30} color="whitesmoke"/>
        </TouchableOpacity>

        <Image source={require("./assets/FostrLogo.png")} style={styles.logo}/>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"grey"}]} onPress={() => navigation.navigate("Matches")}>
          <Icon name="paw" size={30} color="pink"/>
        </TouchableOpacity>
      </View>

      <SwipeCards style={{flex: 1}} />

      <View style={[styles.button_rows, {paddingTop:0}]}>
        <TouchableOpacity style={[styles.icon, {backgroundColor:"pink"}]}  onPress={() => Alert.alert("I don't like animals")}>
          <Icon name="times" size={30} color="darkred"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, {backgroundColor:"lightblue", width:40, height:40}]}  onPress={() => navigation.navigate("Info")}>
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
    <View style={[styles.container, {justifyContent:"flex-start"}]}>
      <LinearGradient
        colors={["#d19fe4", "#d19fe4", "#9089d0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />

      <View style={[styles.button_rows, {paddingTop: 30, justifyContent: "space-between", paddingLeft: Dimensions.get("window").width / 2 - 25}]}>
        <View style={[styles.icon, {backgroundColor: "#d19fe4", elevation: 0}]}>
          <Icon name="user" size={40} color="whitesmoke"/>
        </View>

        <TouchableOpacity style={[styles.icon, {elevation: 0}]} onPress={() => navigation.navigate("Swipe")}>
          <Image source={require("./assets/FostrLogo.png")} style={styles.logo}/>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop:25, alignItems: "center"}}>
        <Image source={require("./assets/DogAndCat.jpg")} style={styles.profile_picture}/>
        <Text style={{fontSize: 30, color: "white"}}>Fluff and Woofer</Text>
      </View>

      <View style={[styles.button_rows, {paddingTop: 10, justifyContent: "space-around"}]}>
        <TouchableOpacity style={[styles.icon, {width: 60, height: 60, borderRadius: 50, backgroundColor: "lightblue"}]} onPress={() => navigation.navigate("Settings")}>
          <Icon name="cog" size={40} color="white"/>
        </TouchableOpacity>

        <View style={{paddingTop:100}}>
          <TouchableOpacity style={[styles.icon, {width: 80, height: 80, borderRadius:70, backgroundColor:"purple"}]} onPress={() => Alert.alert("Upload your cute animal pics here")}>
            <Icon name="image" size={50} color="pink"/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.icon, {width: 60, height: 60, borderRadius:50, backgroundColor:"lightgreen"}]} onPress={() => Alert.alert("Donate plz")}>
          <Icon name="dollar" size={40} color="darkgreen"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <LinearGradient
        colors={["#d19fe4", "#d19fe4", "#9089d0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />

      <View style={[styles.button_rows, {paddingTop: 30, justifyContent: "space-between", paddingLeft: "45%"}]}>
        <View style={[styles.icon, {backgroundColor: "#d19fe4", elevation: 0}]} onPress={() => navigation.navigate("Settings")}>
          <Icon name="cog" size={40} color="white"/>
        </View>

        <TouchableOpacity style={[styles.icon, {backgroundColor: "grey"}]} onPress={() => navigation.navigate("Profile")}>
          <Icon name="user" size={30} color="whitesmoke"/>
        </TouchableOpacity>
      </View>

      <View style={{paddingLeft:20}}>
        <Text>Account</Text>
        <TextInput style={{height: 40, width: Dimensions.get("window").width / 2, borderColor: "grey", borderWidth: 1, paddingLeft: 10, color: "lightgrey"}}>Username</TextInput>

        <Text style={{paddingTop: 20}}>Range</Text>
      </View>
    </View>
  )
}

function MatchesScreen({ navigation }) {
  return (
    <View>
      <LinearGradient
        colors={["#d19fe4", "#d19fe4", "#9089d0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />

      <View style={[styles.button_rows, {paddingTop: 30, justifyContent: "space-between", paddingRight: Dimensions.get("window").width / 2 - 25}]}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Swipe")}>
          <Image source={require("./assets/FostrLogo.png")} style={styles.logo}/>
        </TouchableOpacity>

        <View style={[styles.icon, {backgroundColor: "#d19fe4", elevation: 0}]}>
          <Icon name="paw" size={40} color="pink"/>
        </View>
      </View>
    </View>
  )
}

function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#d19fe4", "#d19fe4", "#9089d0"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      />

      <View>
        <Image source={require("./assets/DogAndCat.jpg")} style={{resizeMode:"center"}} />
      </View>

      <View style={[styles.button_rows, {position: "absolute", bottom: 10}]}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Swipe")}>
          <Image source={require("./assets/FostrLogo.png")} style={styles.logo}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Swipe" screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Swipe" component={SwipeScreen} options={{headerShown: false, gestureDirection:"horizontal"}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, gestureDirection:"horizontal-inverted"}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, cardStyleInterpolator: forFade}}/>
        <Stack.Screen name="Matches" component={MatchesScreen} options={{headerShown: false, gestureDirection:"horizontal"}}/>
        <Stack.Screen name="Info" component={InfoScreen} options={{headerShown: false, cardStyleInterpolator: forFade}}/>
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
    elevation: 10,
  },

  logo: {
    paddingHorizontal: "25%",
    height: 65,
    width: 65,
    resizeMode: "contain",
    borderRadius: 25
  },

  card: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "#b089d0",
    borderWidth: 1,
  },

  thumbnail: {
    width: Dimensions.get("window").width - 10,
  },

  profile_picture: {
    width: 250,
    height: 250,
    borderRadius: 150,
  }
});
