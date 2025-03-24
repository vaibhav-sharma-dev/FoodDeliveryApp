import React from "react";
import { Image, Text, View } from "react-native";
import AddDishButton from "../common/AddDishButton";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

export default function CartDishCard(props) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ dishName: props.dishName, price: props.price, imageUrl: props.imageUrl }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ dishName: props.dishName, price: props.price }));
    };

    return (
        <View key={props.id} className="flex flex-row items-center justify-between gap-2 bg-white px-4 py-2 border-y border-gray-200">
            <View className="flex flex-row gap-4 items-center w-3/5">
                <Image 
                    source={{
                        uri: props.imageUrl,
                    }}
                    className="h-16 w-16 rounded-full"
                />

                <Text className="text-lg font-semibold flex-wrap flex-1">
                    {props.dishName}
                </Text>
            </View>

            <View className="flex flex-row gap-2 items-center">
                <Text className="text-lg text-gray-400">
                    ₹ {props.price}
                </Text>
                
                <View className="bg-gray-200 rounded-lg w-28 h-10 ">
                    <AddDishButton 
                        quantity={props?.quantity}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                </View>
            </View>
        </View>
    )
}