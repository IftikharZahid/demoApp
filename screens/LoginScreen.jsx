import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function LoginScreen({navigation}) {
  // const myButton = (
  //   <Icon.Button
  //     name="facebook"
  //     backgroundColor="#3b5998"
  //     // onPress={this.loginWithFacebook}
  //   >
  //     Login with Facebook
  //   </Icon.Button>
  //   );
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topText}>ZahidCodes</Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Educational App
        </Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.welcomeText}> Welcome back</Text>
        <Text style={styles.bodyText}>
          Hi! I am iftikharZahid, Mobile App Developer. Machine learning, and
          related technologies are also my passion.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#f5f5f5",
            width: 300,
            margin: 10,
          }}
        >
          <AntDesign name="user" color={"#FF6500"} size={25} />

          <TextInput
            placeholder="Email/Username"
            style={{
              paddingLeft: 5,
              backgroundColor: "#f5f5f5",
              width: 255,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#f5f5f5",
            width: 300,
            margin: 10,
          }}
        >
          <AntDesign name="lock" color={"#FF6500"} size={25} />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{
              paddingLeft: 5,
              backgroundColor: "#f5f5f5",
              width: 220,
              marginRight: 5,
            }}
          ></TextInput>

          <TouchableOpacity style={{ justifyContent: "center" }}>
            <AntDesign name="eyeo" color={"#FF6500"} size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.buttons}> SIGN IN</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 30,
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Keep Sign in</Text>
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#FF6500",
                fontSize: 15,
                marginHorizontal: 60,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            justifyContent: "flex-end",
            alignSelf: "center",
            marginTop: 70,
            fontSize: 15,
            color: "#5459",
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity style={{
              alignSelf: "center",
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: "#f5f5f5",
              width: 300,
              margin: 10,
            }} 
            onPress={()=> navigation.navigate('Register')}>
           <Text
              style={{ fontSize: 15, fontWeight: "bold", alignSelf: "center" }}
            >
              CREATE AN ACCOUNT
            </Text>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  topView: {
    flex: 0.3,
    alignSelf: "center",
  },

  bottomView: {
    flex: 0.8,
    backgroundColor: "#fff",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    // borderWidth: 1,
    // padding: 10,
  },
  topText: {
    marginTop: 75,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 20,
    // padding: 10,
    // justifyContent: "center",
  },
  bodyText: {
    fontSize: 15,
    // fontWeight: "bold",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 5,
    marginRight: 30,
    // padding: 20,
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
  checkbox: {
    color: "#FF6500",
    marginHorizontal: 5,
  },
});
