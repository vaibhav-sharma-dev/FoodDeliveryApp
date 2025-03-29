import React from "react";
import { Image, Pressable, Text, Vibration, View } from "react-native";
import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";

export default function AddDishButton(props) {
    return (
        <View className="flex-row justify-between items-center py-1.5 px-2">
            <Pressable
                onPress={props.handleRemoveFromCart}
                hitSlop={10}
                disabled={!props.quantity}>
                <MinusIcon size={20} />
            </Pressable>

            <Text className="font-bold text-xl">{props.quantity || 0}</Text>

            <Pressable onPress={props.handleAddToCart} hitSlop={10}>
                <PlusIcon size={20} />
            </Pressable>
        </View>
    );
}
