import { Header } from 'antd/es/layout/layout';
import { Typography } from 'antd';

import styled from 'styled-components';
const { Title, Text } = Typography;

type ColorType = 'light' | 'dark';

export const StyledHeader = styled(Header)`
    margin-bottom: 3rem;
    display: flex;  
    align-items: center;  
    width: 100%;  
    position: sticky;  
    top: 0;  
    z-index: 1;  
    border-bottom: 1px solid var(--header-bg);
    background-color: transparent;  

    &.ant-layout-header {
        padding: 0;
    }

    &.sharedHeaderTitle {  
        margin: 0;  
    }
`;

export const StyledText = styled(Text) <{ textColor: ColorType }>`  
    color: ${({ textColor }) => textColor === 'light' ? 'var(--button-bg)' : 'var(--darkText)'};
`;

export const StyledTitle = styled(Title) <{ textColor: ColorType }>`  
    &&.ant-typography {
        padding-bottom: 0.3rem;
        margin: 0;  
        color: ${({ textColor }) => textColor === 'light' ? 'var(--button-bg)' : 'var(--darkText)'};  
    }
`; 