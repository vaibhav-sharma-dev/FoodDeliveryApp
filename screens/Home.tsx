import { SafeAreaView, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>

                <Button
                    title="Profile"
                    onPress={() =>
                        navigation.navigate("Profile", { name: "Profile" })
                    }
                />
            </View>
        </SafeAreaView>
    );
}
