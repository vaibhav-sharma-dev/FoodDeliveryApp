import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import CartHeader from "../components/cart/CartHeader";
import CartItems from "../components/cart/CartItems";
import CartTotal from "../components/cart/CartTotal";
import CartDeliveryInfo from "../components/cart/CartDeliveryInfo";

export default function Cart() {
    const navigation = useNavigation();
    const { params } = useRoute();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            presentaion: "modal",
            headerShown: false,
            slide_from_bottom: true,
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <CartHeader restaurantName={params?.props.restaurantName} />
            <CartDeliveryInfo />
            <CartItems />
            <CartTotal />
        </SafeAreaView>
    );
}
