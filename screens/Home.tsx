// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/Header";
import Explore from "../components/home/Explore"
import Rows from "../components/home/Rows";

export default function Home() {
    return (
        <SafeAreaView>
                <Header />
                <ScrollView 
                    className="bg-gray-100"
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                >
                    <Explore />
                    <Rows
                        title="Offers Near You!"
                    />
                    <Rows
                        title="Featured"
                    />
                    <Rows
                        title="Tasty Discounts"
                    />
                </ScrollView>
        </SafeAreaView>
    );
}
