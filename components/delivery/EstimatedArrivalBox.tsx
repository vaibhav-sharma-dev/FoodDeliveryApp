import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function EstimatedArrivalBox() {
    const navigation = useNavigation();
    const router = useRoute()

    return (
        <View className="bg-white px-4 py-6 my-2 mx-4 rounded-md shadow-lg z-50">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg font-semibold text-gray-400">Estimated Arrival</Text>
                    <Text className="text-3xl font-bold">30-45 Minutes</Text>
                </View>
                <Image
                    source={{
                        uri: "https://links.papareact.com/fls",
                    }}
                    className="h-20 W-20 bg-black"
                />
            </View>

            <Text className="text-gray-400 font-semibold">
                Your order at _ is being prepared...
            </Text>

            <Pressable
                className="bg-gray-400 py-4 mt-4 items-center rounded-md"
                onPress={() => {
                    console.log(navigation, "nav")
                    navigation.replace("Home")
                }}
            >
                <Text className="tex-xl font-semibold">Back to Ordering</Text>
            </Pressable>
        </View>
    )
}