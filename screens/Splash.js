import { useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("news");
    }, 3000);
  }, []);
  return (
    <>
      <BackSircle
        style={{
          top: `-10%`,
          zIndex: 1000,
          elevation: Platform.OS === "android" ? 50 : 0,
        }}
      />
      <BackSircle
        style={{
          left: `-20%`,
          zIndex: 10,
          elevation: Platform.OS === "android" ? 50 : 0,
        }}
      />

      <View style={styles.container}>
        <View style={styles.inner_container}>
          <View></View>
          <SplashImage source={require("../assets/bg_splash.png")} />

          <View style={styles.text_container}>
            <Text
              style={{ fontSize: 48, color: "#8fe1d7", fontWeight: "bold" }}
            >
              PC Withard
            </Text>
            <Text style={{ fontSize: 18, opacity: 0.4 }}>
              Design your own PC with us
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  inner_container: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "blue",
    width: `80%`,
  },
  text_container: {
    flex: 0.25,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
    width: `100%`,
  },
});

export const BackSircle = styled.View`
  position: absolute;
  border-radius: 100px;
  width: 200px;
  height: 200px;
  background-color: #8fe1d7;
  opacity: 0.44;
`;

export const SplashImage = styled.Image`
  width: 168px;
  height: 148px;
  background-color: white;
`;
