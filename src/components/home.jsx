import { Outlet, useLocation } from "react-router";
import NavBar from "./navbar";
import styled from "styled-components";
import { useState } from "react";

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Welcome = styled.h1`
    font-weight: bold;
    position: relative;
    top: -80px;
`

export default function Home() {
    const [itemsMap, setItemsMap] = useState(new Map())
    const location = useLocation()

    const hasChildRoute = location.pathname !== "/";

    const addToCart = (itemToAdd, count) => {
        if (itemsMap.has(itemToAdd)) {
            itemsMap.set(itemToAdd, itemsMap.get(itemToAdd) + count)
        } else {
            itemsMap.set(itemToAdd, count)
        }
        console.log(itemsMap);
        setItemsMap(new Map(itemsMap))
    }

    return (
        <>
            <NavBar></NavBar>
            {hasChildRoute ? (<Outlet context={{addToCart}} />) : 
                (
                <Page>
                    <Welcome>Welcome to the fake store!</Welcome>
                </Page>
                )
            }
        </>
    )
}