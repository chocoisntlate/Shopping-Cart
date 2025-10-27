import styled from "styled-components";
import { useOutletContext } from "react-router";

const StyledText = styled.h1`

`

export default function Cart() {
    const { itemsList, incrementItem, decrementItem, removeItem } = useOutletContext()

    return (
        <>
            <StyledText>Shopping Cart</StyledText>
            {itemsList.map((item) => {
                return (
                    <div>
                        <img src={item.img}></img>
                        <div>{item.name + ": " + item.count}</div>
                        <CartItemBar
                            incrementItem={incrementItem}
                            decrementItem={decrementItem}
                            removeItem={removeItem}
                            itemName={item.name}
                            productImg={item.img}
                        />
                    </div>
                )
            })}
            <button>Check Out</button>

        </>
    )
}

function CartItemBar({incrementItem, decrementItem, removeItem, itemName, productImg}) {
    return (
        <>
            <div>
                <button onClick={() => decrementItem(itemName, productImg)}>Decrement Item</button>
                <button onClick={() => incrementItem(itemName, productImg)}>Increment Item</button>
                <button onClick={() => removeItem(itemName)}>Remove Item</button>
            </div>
        </>
    )
}