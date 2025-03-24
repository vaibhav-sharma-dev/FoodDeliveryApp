import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import CartHeader from "../components/cart/CartHeader";
import CartItems from "../components/cart/CartItems";

export default function Cart() {
    const navigation = useNavigation();
    const {params} = useRoute();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            presentaion: "modal",
            headerShown: false,
            slide_from_bottom: true,
        })
    }, [navigation])

    return (
        <SafeAreaView>
            {/* <CartHeader restaurantName={params?.props.restaurantName} /> */}
            <View className="flex flex-row  justify-center bg-white px-4 py-6 rounded-lg">
                            <View className="mr-auto">
                                <Text className="text-3xl font-bold">Cart</Text>
                                <Text className="text-gray-400 text-lg font-bold">{params?.props.restaurantName}</Text>
                            </View>
            
                            <Pressable className="bg-gray-200 h-12 p-1 rounded-full">
                                <XMarkIcon size={35} />
                            </Pressable>
                        </View>

            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>
            <Text>Cart Screen</Text>

            <CartItems />
        </SafeAreaView>
    )
}