import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DeliveryHeader() {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView className="flex-row justify-between items-center px-4">
            <Pressable
                className="bg-gray-200 h-12 p-1 rounded-full"
                onPress={() => navigation.navigate("Home")}
            >
                <XMarkIcon size={35} />
            </Pressable>

            <Pressable
                className=""
                onPress={null}
            >
                <Text className="text-white text-xl font-semibold">Order Help</Text>
            </Pressable>
        </SafeAreaView>
    )
}