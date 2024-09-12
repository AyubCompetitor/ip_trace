import { Result } from "antd";
import styled from "styled-components";

export const StyledResult = styled(Result)`

    height: 100%;

    & .ant-result-icon .anticon {
        color: var(--danger);
    }

    & .ant-result-title {
        color: var(--lightText);
    }

    & .ant-result-subtitle {
        color: var(--lightText);
    }
`
