import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, SafeAreaView, Dimensions } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('./assets/FostrLogo.png')}
        />
        <Text>The to-go app for fostering pets!</Text>
      </View>

      <View style={{flexDirection: "row", alignItems: "center", padding: 25 }}>
        <TextInput
          placeholder="Name"
          style={{borderBottomColor:"black", borderBottomWidth: 1, padding: 3}}
        />
        <Button title="Submit" />
      </View>

      <View style={styles.bottom}>
        <Button title="No" color="gray" onPress={() => Alert.alert("Disliked!")} />
        <Button title="info" color="lightblue" onPress={() => Alert.alert("Here's the info on this animal!")} />
        <Button title="Yes" color="red" onPress={() => Alert.alert('Liked!')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    width: Dimensions.get('window').width,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "",
  },
});
