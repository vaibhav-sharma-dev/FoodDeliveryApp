import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import DishCard from "./DishCard";

export default function Rows(props) {
    return (
        <View className="p-4 flex gap-2">
            <View className="flex-row">
                <View className="flex gap-1 flex-1">
                    <Text className="text-2xl font-bold">{props.title}</Text>
                    <Text className="text-gray-500">Why not support your local restaurant tonight!</Text>
                </View>

                <ArrowRightIcon size={27} />
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    // paddingHorizontal: 15,
                    paddingTop: 15,
                    paddingBottom: 15,
                }}
            >

            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            </ScrollView>
        </View>
    )
}