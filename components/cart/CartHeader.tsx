import React from "react";
import { Pressable, Text, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";

export default function CartHeader(props) {
    return (
<View className="flex flex-row  justify-center bg-white px-4 py-6 rounded-lg">
                <View className="mr-auto">
                    <Text className="text-3xl font-bold">Cart</Text>
                    <Text className="text-gray-400 text-lg font-bold">{props.restaurantName}</Text>
                </View>

                <Pressable className="bg-gray-400 h-12 p-1 rounded-full">
                    <XMarkIcon size={35} />
                </Pressable>
            </View>
    )
}