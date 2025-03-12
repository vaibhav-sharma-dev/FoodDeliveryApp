import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import RestaurantInfo from "../components/restaurant-details/RestaurantInfo";
import RestaurantMenu from "../components/restaurant-details/RestaurantMenu";

export default function RestaurantDetails() {
    const {params} = useRoute();
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }, [])
    })

    return (
        <ScrollView>
            <RestaurantInfo
                restaurantName={params?.props?.restaurantName}
                imageUrl={params?.props?.imageUrl}
                rating={params?.props?.rating}
                location={params?.props?.location}
            />
            <RestaurantMenu />
        </ScrollView>
    )
}