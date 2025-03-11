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
                    <Text className="text-gray-500">
                        {props.subTitle}
                    </Text>
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
                }}>
                <DishCard
                    imageUrl="https://links.papareact.com/gn7"
                    restaurantName="Nando's"
                    rating="4.8"
                    location="Clink Street"
                    // id
                    // title
                    // genre
                    // address
                    // short_description
                    // dishes
                    // long
                    // lat
                />
                <DishCard
                    imageUrl="https://links.papareact.com/gn7"
                    restaurantName="Yo! Sushi"
                    rating="4.8"
                    location="Tottenhammer"
                />
                <DishCard
                    imageUrl="https://links.papareact.com/gn7"
                    restaurantName="KFC"
                    rating="4.2"
                    location="Waterloo"
                />
                <DishCard
                    imageUrl="https://links.papareact.com/gn7"
                    restaurantName="Nando's"
                    rating="4.8"
                    location="Clink Street"
                />
                <DishCard
                    imageUrl="https://links.papareact.com/gn7"
                    restaurantName="Wagamama"
                    rating="5"
                    location="Southbank"
                />
 
            </ScrollView>
        </View>
    );
}
