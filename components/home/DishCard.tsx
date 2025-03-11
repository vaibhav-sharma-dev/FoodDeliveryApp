import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function DishCard() {
    return (
        <TouchableOpacity className="pr-4">

        <View className="rounded bg-white w-40 h-40 flex">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="w-20 h-20"
                />
        </View>
                </TouchableOpacity>
    )
}