import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Explore() {
    return (
        <View>
            <Text className="text-2xl font-bold p-4">Explore</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingBottom: 15,
            }}
            >
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
            <CategoryCard 
                imgUrl="https://links.papareact.com/wru"
                title="Category Card" 
                />
      
        </ScrollView>
    </View>
    )
}