import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function PreparingOrder() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            presentation: "fullScreenModal",
            headerShown: false,
        })
    })

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, []);

    return (
        <SafeAreaView className="bg-gray-400 flex-1 justify-center items-center">
            {/* <Animatable.Image
                source={require("../assets/gifs/PreparingFood.gif")}
                animation="slideInUp"
                iterationCount={10}
                className="h-96 w-96 z-50"
            /> */}
            <Animatable.Text 
                animation="slideInUp"
                iterationCount={1}
                className="text-xl font-semibold w-1/2 text-center pt-4"
            >
                Waiting for the Restaurant to accept your Order!
            </Animatable.Text>
        </SafeAreaView>
    )
}