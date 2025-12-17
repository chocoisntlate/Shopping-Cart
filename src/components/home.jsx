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

class Item {
    constructor(name, count, img, productPrice) {
        this.name = name
        this.count = count
        this.img = img
        this.productPrice = productPrice
    }
}

export default function Home() {
    const [itemsList, setItemsList] = useState([])
    const location = useLocation()

    const hasChildRoute = location.pathname !== "/";

    const addToCart = (itemToAdd, count, productImage, productPrice) => {
        const index = itemsList.findIndex(item => item.name == itemToAdd)

        if (index == -1) {
            setItemsList(prev => [...prev, new Item(itemToAdd, count, productImage, productPrice)])
        } else {
            setItemsList(prev => prev.map((item, i) => i === index ? new Item(item.name, item.count + count, productImage, productPrice) : item))
        }
    }


    const incrementItem = (itemName, productImage, productPrice) => { // not the best way to store product images.
        const index = itemsList.findIndex(item => item.name == itemName)

        setItemsList(prev => prev.map((item, i) => i === index ? new Item(item.name, item.count + 1, productImage, productPrice) : item))
    }

    const decrementItem = (itemName, productImage, productPrice) => { // not the best way to store product images.
        const index = itemsList.findIndex(item => item.name == itemName)

        if (itemsList[index].count <= 1) {
            removeItem(itemName)
        } else {
            setItemsList(prev => prev.map((item, i) => i === index ? new Item(item.name, item.count - 1, productImage, productPrice) : item))

        }

    }

    const removeItem = (itemName) => {
        setItemsList(prev => prev.filter(item => item.name !== itemName));
    }


    return (
        <>
            <NavBar></NavBar>
            {hasChildRoute ? (<Outlet context={{addToCart, itemsList, incrementItem, decrementItem, removeItem}} />) : 
                (
                <Page>
                    <Welcome>Welcome to the fake store!</Welcome>
                </Page>
                )
            }
        </>
    )
}