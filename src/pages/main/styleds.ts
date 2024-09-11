import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const MainWrapper = styled(Layout)`  
    width: 100vw;
    height: 100vh;
    padding: 0 10% 2% 10%;
    box-sizing: border-box;
    overflow-y: hidden;
    background-color: var(--common-bg);
    box-shadow: 0 1px 9px rgba(0, 0, 0, .05);
`;

export const MainContent = styled(Content)`  
    width: 100%;
    height: 100%;

    & .ant-input-group-wrapper {
        margin-bottom: 2%;
    }
`;