import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon(props) {
    const navigation = useNavigation();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalDishes = cartItems.reduce((sum, dish) => sum + dish.quantity, 0);

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                className="w-[80%] h-16 bg-gray-200 border-black border mx-auto rounded-lg flex flex-row gap-2 px-4 items-center justify-center"
                onPress={() => navigation.navigate("Cart", { props })}>
                <View className="flex-1 flex-row gap-2 justify-center">
                    <ShoppingCartIcon className="text-gray-500" size={35} />
                    <Text className="text-2xl font-semibold align-middle">
                        View Cart
                    </Text>
                </View>

                <Text className="text-3xl align-middle bg-gray-400 px-1 rounded-md ml-2">
                    {totalDishes}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
