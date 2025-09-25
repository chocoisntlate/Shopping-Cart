import { Link } from "react-router";
import styled from "styled-components";

const Bar = styled.div`
    padding: 10px;
    display: flex;
    gap: 20px;
`

const BaseLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const HomeLink = styled(BaseLink)`
    margin-right: auto;
    font-size: 1.4rem;
`

const OtherLink = styled(BaseLink)`
    font-size: 1.1rem;
`

export default function NavBar() {
    return (
        <Bar>
            <HomeLink to="/">Fake Shop</HomeLink>
            <OtherLink to="shop">Shop</OtherLink>
            <OtherLink to="cart">Cart</OtherLink>
        </Bar>
    )


}