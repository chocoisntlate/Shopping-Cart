import styled from "styled-components";
import NavBar from "./navbar";
import { useState } from "react";

const StyledText = styled.h1`

`

export default function Cart({itemsMap}) {

     // NOTE: Right now the issue is passing addToCart to the shop component.
    return (
        <>
            <StyledText>Shopping Cart</StyledText>

        </>
    )
}