import { useOutlet } from "react-router";
import NavBar from "./navbar";
import styled from "styled-components";

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
    const outlet = useOutlet()

    return (
        <>
            <NavBar></NavBar>
            {outlet ? outlet : (
                <Page>
                    <Welcome>Welcome to the fake store!</Welcome>
                </Page>
            ) }
  
        </>
    )
}