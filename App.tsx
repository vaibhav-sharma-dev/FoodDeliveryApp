import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./app.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>

        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen
                        name="RestaurantDetails"
                        component={RestaurantDetails}
                        />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
                        </Provider>
    );
}
