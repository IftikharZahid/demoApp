import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

// Define the main component
const NavigatorPage = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
    
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" ,
            headerShown: false

          }}
        />

      <Stack.Screen
         name="Register"
         component={RegisterScreen}
         options={{title:"Register",
         headerShown:false
          }}
       />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorPage;
