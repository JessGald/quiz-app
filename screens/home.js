import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/title";
import { Button, TouchableOpacity, Image } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText="PREGUNTADOR" />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/quiz-comic-pop-art-style_175838-505.jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Empieza</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },

  button: {
    width: "100%",
    backgroundColor: "#03e3fc",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
