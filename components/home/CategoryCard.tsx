import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CategoryCard(props) {
    return (
        <TouchableOpacity className="pr-4">
            <View className="flex gap-2 items-center bg-gray-400 rounded p-2">
                <Image
                    source={{
                        uri: props.imgUrl
                    }}
                    className="h-20 w-20"
                />
                <Text className="text-black font-extrabold">{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}