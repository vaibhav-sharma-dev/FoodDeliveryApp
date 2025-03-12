import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantInfo(props) {
    const navigation = useNavigation()

    return (
        <View className="bg-white relative">
            <Image 
                source={{
                    uri: props.imageUrl
                }}
                className="w-full h-60 mb-6"
            />
            <Pressable>
                <ArrowLeftIcon 
                    size={30}
                    className="absolute top-1"
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </Pressable>

            <Text className="pl-4 text-4xl font-extrabold">
                {props.restaurantName}
            </Text>

            <View className="flex-row gap-2 items-center pl-4 py-2">
                <View className="text-lg font-extrabold flex-row gap-1 justify-center">
                    <StarIcon className="h-3 w-3 text-yellow-400" />
                    <Text className="text-xl text-gray-400">{props.rating}</Text>
                </View>

                <View className="flex-row gap-2 ml-4 mt-1">
                    <MapPinIcon className="h-3 w-3 text-yellow-400" />
                    <Text className="text-lg text-gray-400">{props.location}</Text>
                </View>
            </View>

            <Text className="px-4 py-1 text-lg text-gray-400">
                <Text className="font-extrabold">{props.restaurantName} </Text>
                is a South African multinational fast casual chain that specializes in flame-grilled peri-peri styled chicken.
            </Text>

            h
        </View>
    )
}