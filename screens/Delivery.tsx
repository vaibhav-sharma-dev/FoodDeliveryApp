import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import DeliveryHeader from "../components/delivery/DeliveryHeader";
import EstimatedArrivalBox from "../components/delivery/EstimatedArrivalBox";
import RiderInfoBox from "../components/delivery/RiderInfoBox";
// import ArrivalMap from "../components/delivery/ArrivalMap";

export default function Delivery() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <View className="bg-gray-400 flex-1">
            <DeliveryHeader />
            <EstimatedArrivalBox />
            {/* <ArrivalMap /> */}
            <View className="flex-1"></View>
            <RiderInfoBox />
        </View>
    )
}