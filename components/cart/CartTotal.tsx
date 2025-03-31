import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, Vibration, View } from "react-native";
import { useSelector } from "react-redux";

export default function CartTotal() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const navigation = useNavigation();
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [orderTotal, setOrderTotal] = React.useState(70);
    let calculatePrice = 0;

    for (let item of cartItems) {
        calculatePrice += item.price;
    }
    
    React.useEffect(() => {
        setTotalPrice(calculatePrice);
        setOrderTotal((prev) => prev + totalPrice);
    }, [totalPrice])

    return (
        <View className="bg-white rounded-lg py-4 px-4 border-y border-gray-200 shadow">
            <View className="flex-row justify-between">
                <View className="flex gap-2">
                    <Text className="text-lg">Subtotal</Text>
                    <Text className="text-lg">Delivery Charge</Text>
                    <Text className="text-lg font-semibold">Order Total</Text>
                </View>
                <View className="flex gap-2">
                    <Text className="text-lg">₹ {totalPrice}</Text>
                    <Text className="text-lg">₹ 70</Text>
                    <Text className="text-lg font-semibold">₹ {orderTotal}</Text>
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
