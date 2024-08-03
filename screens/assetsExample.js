import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function loginPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Login Form </Text>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.logo} source={require("../assets/login1.png")} />

        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: 300,
            borderWidth: 1,
            borderRadius: 20,
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 20,
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "navy",
              width: 150,
              height: 50,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              justifyContent: "center",
              width: 150,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center", color: "black" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Email Address"
          style={{
            height: 50,
            width: 300,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            margin: 10,
          }}
        ></TextInput>

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{
            height: 50,
            width: 300,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        ></TextInput>
      </View>

      <TouchableOpacity>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#0059B3" }}>
          {" "}
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: 300,
          backgroundColor: "navy",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
            marginHorizontal: 10,
          }}
        >
          Not a member?
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              fontWeight: "bold",
              color: "#0059B3",
            }}
          >
            Signup now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
  paragraph: {
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 100,
    width: 100,
    // margin:24
  },
});
