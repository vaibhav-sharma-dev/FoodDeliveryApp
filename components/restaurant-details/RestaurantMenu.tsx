import React from "react";
import { Text, View } from "react-native";
import DishCard from "./DishCard";

export default function RestaurantMenu() {
    return (
        <View className="py-4">
            <View className="bg-white rounded px-4 pb-20 flex gap-4">
                <Text className="text-4xl font-extrabold py-4">Menu</Text>

                <DishCard
                    dishName="PERi-PERi Nuts"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="200"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Chicken Wings"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="350"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Family Platter"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="300"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Afgani Dum Biryani"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="550"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Steamed Momos"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="150"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Amritsari Naan with Kulcha"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="150"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Boroloni Pizza"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="350"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Chilli Garlic Noodles"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="250"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Red Sauce Pasta"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="300"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Kadhai Paneer"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="350"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Boondi Laddoo"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="650"
                    imageUrl="https://links.papareact.com/gn9"
                />
                <DishCard
                    dishName="Chocolate Waffle"
                    description="Crunchy almonds, cashews and macagamia nuts in feary PERi-PERi seasoning. Serves 2-3."
                    rating="4.5"
                    price="200"
                    imageUrl="https://links.papareact.com/gn9"
                />
            </View>
        </View>
    );
}
