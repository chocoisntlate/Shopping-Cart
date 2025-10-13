import styled from "styled-components";
import NavBar from "./navbar";
import { useState } from "react";

const StyledText = styled.h1`

`

export default function Cart() {
    const [items, setItems] = useState([])
    const [itemCounts, setItemCounts] = useState([])

    const incrementItem = (itemIndex, count) => {
        const newItemCounts = itemCounts.map((itemCount, index) => {
            if (index == itemIndex) {return itemCount + count};
            return count;
        })
        setItemCounts(newItemCounts)
    }

    const addToCart = (itemToAdd, count) => {
        const itemToAddIndex = items.indexOf(itemToAdd);
        if (itemToAddIndex === -1) {
            setItems([...items, itemToAdd])
            setItemCounts([...itemCounts, count])
        } else {
            incrementItem(itemToAddIndex, count)
        }
    }

     // NOTE: Right now the issue is passing addToCart to the shop component. Also, I should be making use of the Outlet thing.
    return (
        <>
            <StyledText>Shopping Cart</StyledText>

        </>
    )
}