import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import LottieView from "lottie-react-native";
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
            {/* <LottieView 
                style={{width: 300, height: 300}}
                autoPlay
                loop
                source={require("../assets/images/EmptyCartAnimation.json")}
            /> */}
            <CartDeliveryInfo />
            <CartItems />
            <CartTotal />
        </SafeAreaView>
    );
}
