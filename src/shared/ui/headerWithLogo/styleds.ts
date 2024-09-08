import { Header } from 'antd/es/layout/layout';
import { Typography } from 'antd';

import styled from 'styled-components';
const { Title, Text } = Typography;

type ColorType = 'light' | 'dark';

export const StyledHeader = styled(Header)`  
    display: flex;  
    align-items: center;  
    width: 100%;  
    gap: 12px;  
    position: sticky;  
    top: 0;  
    z-index: 1;  
    background-color: var(--header-bg);  

    &.sharedHeaderTitle {  
        margin: 0;  
    }
`;

export const StyledText = styled(Text) <{ textColor: ColorType }>`  
    color: ${({ textColor }) => textColor === 'light' ? 'var(--lightText)' : 'var(--darkText)'};  
`;

export const StyledTitle = styled(Title) <{ textColor: ColorType }>`  
    &&.ant-typography {
        margin: 0;  
        color: ${({ textColor }) => textColor === 'light' ? 'var(--lightText)' : 'var(--darkText)'};  
    }
`; 