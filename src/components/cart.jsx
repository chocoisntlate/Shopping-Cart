import styled from "styled-components";
import { useOutletContext } from "react-router";

const StyledText = styled.h1`

`

export default function Cart() {
    const { itemsList } = useOutletContext()

    return (
        <>
            <StyledText>Shopping Cart</StyledText>
            {itemsList.map((item) => {
                return <div>{item.name + ": " + item.count}</div>
            })}

        </>
    )
}