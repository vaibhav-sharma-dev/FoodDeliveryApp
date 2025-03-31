import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";

export default function CartHeader(props) {
    const navigation = useNavigation();

    return (
        <View className="flex flex-row  justify-center bg-white px-4 py-6 rounded-lg shadow-lg">
            <View className="mr-auto">
                <Text className="text-3xl font-bold">Cart</Text>
                <Text className="text-gray-400 text-lg font-bold">
                    {props.restaurantName}
                </Text>
            </View>

            <Pressable
                className="bg-gray-200 h-12 p-1 rounded-full"
                onPress={() => navigation.goBack()}>
                <XMarkIcon size={35} />
            </Pressable>
        </View>
    );
}
