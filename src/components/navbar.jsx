import { Link } from "react-router";
import styled from "styled-components";

const Bar = styled.div`
    padding: 20px 30px 20px 30px;
    display: flex;
    align-items: baseline;
    gap: 20px;

    background-color: rgba(247, 247, 247, 1);
    
;
`

const BaseLink = styled(Link)`
    text-decoration: none;
    color: rgba(40, 40, 40, 1);
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
        <>
            <Bar>
                <HomeLink to="/">Fake Shop</HomeLink>
                <OtherLink to="/shop">Shop</OtherLink>
                <OtherLink to="/cart">Cart</OtherLink>
            </Bar>
        </>
    )


}