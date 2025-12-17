import styled from "styled-components";
import { useOutletContext } from "react-router";
import { StyledImg } from "./shop";
import { StyledPrice } from "./shop";

const StyledText = styled.h1`

`

const CartDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ItemsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    gap: 10px;
`

const Item = styled.div`
    max-width: 700px;
    width: 100%;
    height: 150px;
    border: none;
    background-color: rgba(237, 237, 237, 1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const CartButtonStyle = styled.button`
  background-color: #f3f3f3;
  border: 1px solid rgba(0,0,0,0.12);
  padding: 8px 12px;
  font-weight: 700;
  min-width: 64px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #111;
  cursor: pointer;

  &:hover {
    background: #e6e6e6ff;
  }
`

const AdjustedStyledImg = styled(StyledImg)`
    width: 100px;
`

const ItemInfo = styled.div`
    width: 270px;
    text-align: left;

`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;

gap: 20px;

`


const PriceDetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const EmptyCart = styled.div`
    font-size: 1.2rem;
    padding: 100px;

`

const CheckoutSection = styled.div`
  width: 100%;
  max-width: 700px;
  border: 2px solid rgba(28, 49, 24, 1);
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 16px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 8px;
  column-gap: 12px;

`;

const SummaryLabel = styled.span`
  color: #555;
`;

const SummaryValue = styled.span`
  font-weight: 700;
`;

const CheckoutButton = styled.button`
  grid-column: 1 / -1;
  margin-top: 8px;
  padding: 12px 16px;
  font-weight: 700;
  border: 2px solid black;
  background: black;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #2a2a2aff;
  }
`;

export default function Cart() {
    const { itemsList, incrementItem, decrementItem, removeItem } = useOutletContext()

    const totalItems = itemsList.reduce((n, item) => n + item.count, 0);
    const subtotal = itemsList.reduce(
        (sum, item) => sum + Number(item.productPrice) * item.count, 0
    );

    return (
        <CartDisplay>
            <StyledText>Shopping Cart</StyledText>
            <ItemsList>
                {itemsList.length > 0 ? itemsList.map((item) => {
                    return (
                        <Item>
                            <Top>
                            <AdjustedStyledImg src={item.img}></AdjustedStyledImg>
                            <PriceDetail>
                                <StyledPrice>${Number(item.productPrice * item.count).toFixed(2)}</StyledPrice>
                                <CartButtons
                                    incrementItem={incrementItem}
                                    decrementItem={decrementItem}
                                    removeItem={removeItem}
                                    itemName={item.name}
                                    productImg={item.img}
                                    productPrice={item.productPrice}
                                    productCount={item.count}
                                />
                            </PriceDetail>
                            </Top>
                            <ItemInfo>
                                <span><strong>{item.count}</strong> of {item.name}</span>
                            </ItemInfo>
                        </Item>
                    )
                }) 
                : <EmptyCart>Cart is Empty</EmptyCart>}
            </ItemsList>
            
            <CheckoutSection>
                <SummaryLabel>Items</SummaryLabel>
                <SummaryValue>{totalItems}</SummaryValue>

                <SummaryLabel>Subtotal</SummaryLabel>
                <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>

                <CheckoutButton disabled={itemsList.length === 0}>
                    Checkout
                </CheckoutButton>
                </CheckoutSection>
        </CartDisplay>
    )
}

function CartButtons({incrementItem, decrementItem, removeItem, itemName, productImg, productPrice, productCount}) {
    return (
        <>
            <div>
                <CartButtonStyle onClick={() => incrementItem(itemName, productImg, productPrice)}>+</CartButtonStyle>
                {productCount == 1 ? <CartButtonStyle onClick={() => decrementItem(itemName, productImg, productPrice)}>Remove</CartButtonStyle> : 
                    <CartButtonStyle onClick={() => decrementItem(itemName, productImg, productPrice)}>-</CartButtonStyle>
                }
            </div>
        </>
    )
}