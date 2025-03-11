import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/Header";
import Explore from "../components/home/Explore";
import Rows from "../components/home/Rows";

export default function Home() {
    return (
        <SafeAreaView>
            <Header />
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}>
                <Explore />
                <Rows 
                    title="Offers Near You!"
                    subTitle="Why not support your local restaurant tonight!"
                />
                <Rows 
                    title="Featured" 
                    subTitle="Paid placements from our partners"
                />
                <Rows 
                    title="Tasty Discounts!" 
                    subTitle="Paid placements from our partners"
                />
            </ScrollView>
        </SafeAreaView>
    );
}
