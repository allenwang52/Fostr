import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeCards from './modules/SwipeCards.js';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button_rows}>
        <Button title="Account" color="gray" onPress={() => Alert.alert("What account?")} />
        <Image source={require("./assets/FostrLogo.png")} style={{flex: 1, aspectRatio: 3, resizeMode: "contain"}}/>
        <Button title="Message" color="red" onPress={() => Alert.alert("No matches... animals do not like you.")} />
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
        {/*<Button title="No" color="gray" onPress={() => Alert.alert("I hate animals.")} />
        <Button title="info" color="lightblue" onPress={() => Alert.alert("Tf you wanna know?")} />
        <Button title="Yes" color="red" onPress={() => Alert.alert("This one will do.")} />
        <Button icon={<Icon name="arrow-right" size={15} color="white"/>} title="Icon Button" onPress={() => Alert.alert("This one will do.")} />*/}
        <Button
        icon={<Icon name="arrow-right" size={15} color="white"/>}
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => Alert.alert("This one will do.")}
        title="Press Me">
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#b089d0",
    alignItems: "center",
    justifyContent: "center",
  },

  button_rows: {
    width: "100%",
    padding: 20,
    backgroundColor: "#9089d0",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 50,
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
  }
});
