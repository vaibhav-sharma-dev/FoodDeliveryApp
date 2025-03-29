import React from "react";
import { useSelector } from "react-redux";
import CartDishCard from "./CartDishCard";
import { ScrollView } from "react-native";

export default function CartItems() {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);
    return (
        <ScrollView>
            {cartItems.map((cartItem, index) => (
                <CartDishCard
                    id={index}
                    dishName={cartItem.dishName}
                    quantity={cartItem.quantity}
                    price={cartItem.price}
                    imageUrl={cartItem.imageUrl}
                />
            ))}
        </ScrollView>
    );
}
