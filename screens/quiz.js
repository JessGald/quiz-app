import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import Result from "./result";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
      array[j],
      array[i],
    ]);
  }
};

const Quiz = ({ navigation }) => {
  const [ques, setQues] = useState(0);
  const [questions, setQuestions] = useState();
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      //console.log(_option === questions[ques].correct_answer);
    }

    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "700" }}>CARGANDO...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Ques.{decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {" "}
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {" "}
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {" "}
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}

              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>QUITAR</Text>
                </TouchableOpacity>
              )}

              {ques == 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonText}>RESULTADOS</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },

  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#03e3fc",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },

  question: {
    fontSize: 28,
  },

  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#038cfc",
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  parent: {
    height: "100%",
  },
});
