import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            className="pr-4 shadow-slate-400"
            onPress={() => {
                navigation.navigate("RestaurantDetails", {props})
            }}
        >
            <View className="rounded bg-white w-60 h-64 flex">
                <Image
                    source={{
                        uri: props.imageUrl,
                    }}
                    className="w-60 h-32 mb-4"
                />

                <Text className="text-2xl font-extrabold mt-1 ml-4">
                    {props.restaurantName}
                </Text>

                <View className="flex-row gap-2 ml-4 mt-1">
                    <StarIcon className="h-3 w-3 text-yellow-400" />
                    <Text className="text-lg">{props.rating}</Text>
                </View>
                <View className="flex-row gap-2 ml-4 mt-1">
                    <MapPinIcon className="h-3 w-3 text-yellow-400" />
                    <Text className="text-lg">{props.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
