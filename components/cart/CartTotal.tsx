import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, Vibration, View } from "react-native";
import { useSelector } from "react-redux";

export default function CartTotal() {
    const {deliveryCharge, totalPrice} = useSelector(state => state.cart);
    const navigation = useNavigation();
    const [subTotalPrice, setSubTotalPrice] = React.useState(0);

    React.useEffect(() => {
        setSubTotalPrice(totalPrice - deliveryCharge);
    }, [subTotalPrice, totalPrice])

    return (
        <View className="bg-white rounded-lg py-4 px-4 border-y border-gray-200 shadow">
            <View className="flex-row justify-between">
                <View className="flex gap-2">
                    <Text className="text-lg">Subtotal</Text>
                    <Text className="text-lg">Delivery Charge</Text>
                    <Text className="text-lg font-semibold">Order Total</Text>
                </View>
                <View className="flex gap-2">
                    <Text className="text-lg">₹ {subTotalPrice}</Text>
                    <Text className="text-lg">₹ {deliveryCharge}</Text>
                    <Text className="text-lg font-semibold">₹ {totalPrice}</Text>
                </View>
            </View>

            <Pressable
                onPress={() => {
                    Vibration.vibrate(500);
                    navigation.navigate("PreparingOrder")
                }}
                className="bg-gray-400 h-16 mt-4 rounded-lg">
                <Text className="m-auto text-xl font-semibold">
                    Place Order
                </Text>
            </Pressable>
        </View>
    );
}
