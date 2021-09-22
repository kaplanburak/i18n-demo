import styled from "styled-components";
import { Layout as AntLayout, Card as AntCard } from "antd";

export const Layout = styled(AntLayout)`
    min-height: 100vh;
    background-color: #e6e6e6;
`;

export const Content = styled(AntLayout.Content)`
    display: grid;
    place-items: center;
    height: 100%;
`;

export const Card = styled(AntCard)`
    width: 320px;
    max-width: 90vw;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;

        img {
            width: 180px;
        }
    }
`;
