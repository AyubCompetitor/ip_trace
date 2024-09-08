import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const MainWrapper = styled(Layout)`  
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: hidden;
`;

export const MainContent = styled(Content)`  
    padding: 5% 10%;
    width: 100%;
    height: 100%;
    background-color: var(--content-bg);

    & .ant-input-group-wrapper {
        margin-bottom: 2%;
    }
`;