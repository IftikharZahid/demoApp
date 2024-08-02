import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from "expo-checkbox";

export default function RegisterScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topText}>ZahidCodes</Text>
        <Text style={styles.subtitle}>Educational App</Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.welcomeText}>Create your account</Text>
        <Text style={styles.bodyText}>
          Welcome! 🎉 Registering unlocks a world of learning and growth.
        </Text>

        <View style={styles.inputContainer}>
          <AntDesign name="user" color={"#FF6500"} size={25} />
          <TextInput placeholder="Username" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            color={"#FF6500"}
            size={25}
          />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign name="lock" color={"#FF6500"} size={25} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={[styles.input, { width: 220, marginRight: 5 }]}
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <AntDesign name="eye" color={"#FF6500"} size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttons}>REGISTER</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            By tapping "Sign Up" you accept our
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 60 }}>
          <TouchableOpacity
          // style={{flexDirection:'row'}}
          >
            <Text style={styles.forgotPassword}>terms</Text>
          </TouchableOpacity>
          <Text style={{
    fontSize: 15,}}>and</Text>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={styles.forgotPassword}>conditions.</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.createAccountText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6500",
  },
  topView: {
    flex: 0.3,
    alignSelf: "center",
  },
  topText: {
    marginTop: 60,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  bottomView: {
    flex: 0.9,
    backgroundColor: "#fff",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  bodyText: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 5,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    width: 300,
    margin: 10,
  },
  input: {
    paddingLeft: 5,
    backgroundColor: "#f5f5f5",
    width: 255,
  },
  eyeIcon: {
    justifyContent: "center",
  },
  buttons: {
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FF6500",
    width: 300,
    margin: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 30,
  },
  checkbox: {
    marginHorizontal: 5,
  },
  checkboxLabel: {
    fontSize: 15,
    // fontWeight: "bold",
  },
  forgotPassword: {
    // fontWeight: "bold",
    color: "#FF6500",
    fontSize: 15,

    marginHorizontal: 2,
  },
  footerText: {
    alignSelf: "center",
    marginTop: 60,
    fontSize: 15,
    color: "#5459",
  },
  createAccountButton: {
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    width: 300,
    
  },
  createAccountText: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
