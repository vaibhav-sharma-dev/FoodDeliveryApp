import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export default function Cart() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            presentaion: "modal",
            headerShown: false,
            slide_from_bottom: true,
        })
    }, [navigation])

    return (
        <View>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
        </View>
    )
}