import React from "react";
import { Text, View } from "react-native";
import DishCard from "./DishCard";

export default function RestaurantMenu() {
    return (
        <View className="py-4">
            <View className="bg-white rounded px-4 flex gap-4">

            <Text className="text-4xl font-extrabold py-4">
                Menu
            </Text>

            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            </View>
        </View>
    );
}
