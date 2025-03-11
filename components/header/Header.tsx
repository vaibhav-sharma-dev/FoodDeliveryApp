import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { 
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon, 
    ChevronDownIcon, 
    UserIcon
} from "react-native-heroicons/outline"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
    const [searchInput, setSearchInput] = React.useState("")
    const navigation = useNavigation();

    // React.useEffect(() => {
    //     console.log(searchInput)
    // }, [searchInput])

        React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])

    return (
        <View className="bg-white p-4 gap-1">
            <View className="flex-row gap-3 items-center pb-2">
                <Image 
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-sm">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location <ChevronDownIcon size={20} />
                    </Text>
                </View>

                <UserIcon 
                    size={36} 
                    onPress={() =>
                        navigation.navigate("Profile", { name: "Profile" })
                    } 
                />
            </View>

            <View className="flex-row gap-2 items-center">
                <View className="flex-1 flex-row gap-5 bg-gray-200 items-center px-2">
                    <MagnifyingGlassIcon />
                    <TextInput
                        onChangeText={input => setSearchInput(input)}
                        // value="text"
                        keyboardType="default"
                        placeholder="Restaurants and cuisines"
                        className=""
                    />
                </View>

                <AdjustmentsHorizontalIcon size={36} />
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// })