import React from "react";
import { Image, Pressable, Text, Vibration, View } from "react-native";
import { StarIcon, PlusIcon, MinusIcon } from "react-native-heroicons/solid";

export default function DishCard() {
    const [isAddButtonLongPressed, setIsAddButtonLongPresses] = React.useState(false);

    return (
        <View>
            <View className="flex-row gap-1 border-b border-gray-300 mb-2">
                <View className="w-2/3">
                    <Text className="text-2xl font-bold mb-1">PERi-PERi Nuts</Text>
                    <Text className="text-gray-400 mb-1">
                        Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3.
                    </Text>
                    <View className="text-lg font-extrabold flex-row gap-1 my-1">
                        <StarIcon className="h-3 w-3 text-yellow-400" />
                        <Text className="text-xl text-gray-400">
                            4.5
                        </Text>
                    </View>
                    <Text className="text-gray-600 text-lg font-bold mt-1 pb-4">₹ 250</Text>
                </View>

                <View className="relative">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/gn9"
                        }}
                        className="w-36 h-32 rounded-xl"
                    />

                    <Pressable 
                        onLongPress={() => {
                            Vibration.vibrate(500);
                            setIsAddButtonLongPresses(!isAddButtonLongPressed)
                        }}
                        delayLongPress={300}
                        className="bg-gray-200 absolute bottom-8 left-[12%] w-28 h-10 rounded-lg"
                    >
                        {
                            isAddButtonLongPressed
                            ? (
                                <View className="flex-row justify-between items-center py-1.5 px-2">
                                    <Pressable onPress={null} hitSlop={10}>
                                        <MinusIcon size={20} />
                                    </Pressable>

                                    <Text className="font-bold text-xl">1</Text>

                                    <Pressable onPress={null} hitSlop={10}>
                                        <PlusIcon size={20} />
                                    </Pressable>
                                </View>
                            )
                            : <Text className="text-xl font-bold py-1.5 text-center">Add +</Text>
                        }
                    </Pressable>
                </View>
            </View>
        </View>
    )
}