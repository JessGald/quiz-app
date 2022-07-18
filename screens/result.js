import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Title from "../components/title";
const Result = ({ navigation, route }) => {
  const { score } = route.params;
  const resultBanner =
    score > 10
      ? "https://www.freeiconspng.com/uploads/victory-icon-1.png"
      : "https://www.freeiconspng.com/uploads/failure-icon-6.png";
  return (
    <View style={styles.container}>
      <Title titleText="RESULTADO" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Inicio")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

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

  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});
