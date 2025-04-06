import { Image, Pressable, Text, View } from "react-native";
import { PhoneIcon } from "react-native-heroicons/outline";

export default function RiderInfoBox() {
    return (
        <View className="bg-white px-4 pb-4 flex-row gap-4 items-center h-32 rounded-md shadow-lg">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-16 w-16 bg-gray-300 p-4 rounded-full ml-4"
            />

            <View className="flex-1">
                <Text className="text-lg font-semibold">Tony Stark</Text>
                <Text className="text-gray-400 font-semibold">Coming to your Doorstep</Text>
            </View>

            <Pressable 
                className="flex-row gap-2 mr-4"
                onPress={null}
            >
                <Text className="text-gray-400 text-lg font-bold">Call</Text>
                <PhoneIcon className="h-4 w-4 text-gray-500" />
            </Pressable>
        </View>
    )
}