import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CartDeliveryInfo() {
    return (
        <View className="flex-row gap-4 items-center space-x-4 px-4 py-3 bg-white my-5 shadow">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-16 w-16 bg-gray-300 rounded-full"
            />
            <Text className="flex-1 text-lg">Delivery in 30-45 minutes</Text>

            <TouchableOpacity>
                <Text className="text-gray-400 text-lg font-semibold">Change</Text>
            </TouchableOpacity>
        </View>
    );
}
