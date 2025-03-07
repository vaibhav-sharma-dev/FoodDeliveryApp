import { SafeAreaView, View, Text, Button } from "react-native";

export default function Profile({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>

                <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate("Home", { name: "Home" })
                    }
                />
            </View>
        </SafeAreaView>
    );
}
