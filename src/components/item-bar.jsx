
import styled from "styled-components";
import { useState } from "react";
import { useOutletContext } from "react-router";

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const ItemsRelatedButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;

    gap: 10px;
`

const ButtonStyle = styled.button`
    border-radius: 10px;
    border-style: none;
`

const AddToCartButton = styled(ButtonStyle)`
    padding: 10px;
    
`

const NumOfItemsControlButton = styled(ButtonStyle)`
    padding: 8px;
    border-radius: 5px;
    width: 80px;
    font-size: 1.05rem;
`

const NumOfItemsInputField = styled.input`
    text-align: center;
    flex: 1;

`

export default function ItemBar({productTitle, productImage}) {
    const [productCount, setProductCount] = useState(1)
    const {addToCart} = useOutletContext()

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value)
        setProductCount(Math.max(1, value))
    }

    const incrementProductCount = () => {
        setProductCount(count => count + 1)
    }

    const decrementProductCount = () => {
        if (productCount != 1) {
            setProductCount(count => count -1)
        }
    }

    return (
        <Bar>
            <ItemsRelatedButtons>
                <NumOfItemsControlButton onClick={decrementProductCount}>-</NumOfItemsControlButton>
                    <NumOfItemsInputField
                        type="number"
                        value={productCount}
                        onChange={handleInputChange}
                        min="1"
                    />
                <NumOfItemsControlButton onClick={incrementProductCount}>+</NumOfItemsControlButton>
            </ItemsRelatedButtons>
            <AddToCartButton onClick={() => {addToCart(productTitle, productCount, productImage)}}>Add To Cart</AddToCartButton>
        </Bar>
    )
}