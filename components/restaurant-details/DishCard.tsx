import React from "react";
import { Image, Pressable, Text, Vibration, View } from "react-native";
import { StarIcon, PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import AddDishButton from "../common/AddDishButton";

export default function DishCard(props) {
    interface CartItem {
        dishName: string;
        quantity: number;
        price: number;
    }

    const [isAddButtonLongPressed, setIsAddButtonLongPresses] =
        React.useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const dish = cartItems.find(
        (item: CartItem) => item.dishName === props.dishName,
    );

    const handleAddToCart = () => {
        dispatch(addToCart({ dishName: props.dishName, price: props.price, imageUrl: props.imageUrl }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ dishName: props.dishName, price: props.price }));
    };

    return (
        <View>
            <View className="flex-row gap-1 border-b border-gray-300 mb-2">
                <View className="w-2/3">
                    <Text className="text-2xl font-bold mb-1">
                        {props.dishName}
                    </Text>
                    <Text className="text-gray-400 mb-1">
                        {props.description}
                    </Text>

                    <View className="text-lg font-extrabold flex-row gap-1 my-1">
                        <StarIcon className="h-3 w-3 text-yellow-400" />
                        <Text className="text-xl text-gray-400">
                            {props.rating}
                        </Text>
                    </View>

                    <Text className="text-gray-600 text-lg font-bold mt-1 pb-4">
                        ₹ {props.price}
                    </Text>
                </View>

                <View className="relative">
                    <Image
                        source={{
                            uri: props.imageUrl,
                        }}
                        className="w-36 h-32 rounded-xl"
                    />

                    <Pressable
                        onLongPress={() => {
                            Vibration.vibrate(500);
                            setIsAddButtonLongPresses(!isAddButtonLongPressed);
                        }}
                        delayLongPress={300}
                        className="bg-gray-200 absolute bottom-8 left-[12%] w-28 h-10 rounded-lg">
                        {isAddButtonLongPressed ? (
                            <AddDishButton
                                quantity={dish?.quantity}
                                handleAddToCart={handleAddToCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                            />
                        ) : (
                            <Text className="text-xl font-bold py-1.5 text-center">
                                Add +
                            </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
